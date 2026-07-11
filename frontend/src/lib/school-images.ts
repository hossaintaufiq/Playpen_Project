import fs from "node:fs/promises";
import path from "node:path";
import type { GalleryCategory, GalleryEvent, GalleryImage } from "@/lib/gallery-data";

const SCHOOL_IMAGES_ROOT = path.join(process.cwd(), "public", "school-images");
const GALLERY_ROOT = path.join(SCHOOL_IMAGES_ROOT, "gallery");
const GALLERY_INDEX_PATH = path.join(process.cwd(), "data", "gallery-index.json");
const PUBLIC_GALLERY_DATA_PATH = path.join(process.cwd(), "public", "gallery-data.json");
const ALLOWED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

type GalleryEventCategory = Exclude<GalleryCategory, "All">;

type SectionPreview = {
  title: string;
  href: string;
  images: GalleryImage[];
};

type GalleryCacheFile = {
  generatedAt: string;
  events: GalleryEvent[];
};

declare global {
  // eslint-disable-next-line no-var
  var __playpenGalleryEventsCache: GalleryEvent[] | undefined;
}

function titleFromName(name: string) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function collectImagesRecursive(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      if (entry.name.startsWith(".")) return [] as string[];
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectImagesRecursive(full);
      const ext = path.extname(entry.name).toLowerCase();
      return ALLOWED_IMAGE_EXTENSIONS.has(ext) ? [full] : [];
    }),
  );
  return nested.flat();
}

function inferCategory(folderName: string): GalleryEventCategory {
  const key = folderName.toLowerCase();
  if (key.includes("sport") || key.includes("football") || key.includes("basketball")) return "Sports";
  if (key.includes("science") || key.includes("essay") || key.includes("result") || key.includes("exam")) return "Academics";
  if (key.includes("dance") || key.includes("drama") || key.includes("art") || key.includes("cultural") || key.includes("music")) return "Arts";
  if (key.includes("campus") || key.includes("inside") || key.includes("outside") || key.includes("collaborative")) return "Campus";
  if (
    key.includes("day") ||
    key.includes("boishakh") ||
    key.includes("new year") ||
    key.includes("graduation") ||
    key.includes("celebration")
  ) {
    return "Celebrations";
  }
  return "Events";
}

function monthYearLabelFromFolder(folderName: string) {
  const yearMatch = folderName.match(/(20\d{2})/);
  if (yearMatch) return `Session ${yearMatch[1]}`;
  return "School Event";
}

function toPublicPath(absolutePath: string) {
  const relative = path.relative(path.join(process.cwd(), "public"), absolutePath);
  return `/${relative.split(path.sep).map(encodeURIComponent).join("/")}`;
}

async function scanGalleryEventsFromFolders(): Promise<GalleryEvent[]> {
  const entries = await fs.readdir(GALLERY_ROOT, { withFileTypes: true });
  const eventFolders = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const scanned = await Promise.all(
    eventFolders.map(async (folderName) => {
      const folderPath = path.join(GALLERY_ROOT, folderName);
      const imagePaths = (await collectImagesRecursive(folderPath)).sort((a, b) => a.localeCompare(b));
      if (!imagePaths.length) return null;

      const images: GalleryImage[] = imagePaths.map((imagePath, index) => {
        const fileName = path.basename(imagePath);
        const readable = titleFromName(fileName);
        return {
          id: `${slugify(folderName)}-img-${index + 1}`,
          src: toPublicPath(imagePath),
          alt: readable || `Photo ${index + 1}`,
          caption: readable || undefined,
        };
      });

      const title = titleFromName(folderName) || folderName;
      const year = Number((folderName.match(/(20\d{2})/) ?? [new Date().getFullYear()])[0]);

      return {
        id: slugify(folderName) || `event-${folderName}`,
        title,
        category: inferCategory(folderName),
        date: monthYearLabelFromFolder(folderName),
        year,
        description: `${title} at Playpen School.`,
        coverImage: images[0].src,
        images,
      } satisfies GalleryEvent;
    }),
  );

  return scanned.filter((event): event is GalleryEvent => event !== null);
}

async function readGalleryCacheFile(): Promise<GalleryEvent[] | null> {
  try {
    const raw = await fs.readFile(GALLERY_INDEX_PATH, "utf8");
    const parsed = JSON.parse(raw) as GalleryCacheFile;
    return Array.isArray(parsed.events) ? parsed.events : null;
  } catch {
    return null;
  }
}

async function writeGalleryCacheFile(events: GalleryEvent[]) {
  const payload: GalleryCacheFile = {
    generatedAt: new Date().toISOString(),
    events,
  };
  await fs.mkdir(path.dirname(GALLERY_INDEX_PATH), { recursive: true });
  await fs.writeFile(GALLERY_INDEX_PATH, JSON.stringify(payload), "utf8");
  await fs.writeFile(PUBLIC_GALLERY_DATA_PATH, JSON.stringify(events), "utf8");
}

export async function getGalleryEventsFromFolders(): Promise<GalleryEvent[]> {
  if (globalThis.__playpenGalleryEventsCache?.length) {
    return globalThis.__playpenGalleryEventsCache;
  }

  try {
    const cached = await readGalleryCacheFile();
    if (cached?.length) {
      globalThis.__playpenGalleryEventsCache = cached;
      return cached;
    }

    const events = await scanGalleryEventsFromFolders();
    if (events.length) {
      globalThis.__playpenGalleryEventsCache = events;
      await writeGalleryCacheFile(events).catch(() => undefined);
    }
    return events;
  } catch {
    return [];
  }
}

/** Slim events for fast first paint (covers only). Full images stay available via /gallery-data.json */
export function toSlimGalleryEvents(events: GalleryEvent[]): GalleryEvent[] {
  return events.map((event) => ({
    ...event,
    imageCount: event.imageCount ?? event.images.length,
    images: event.images.slice(0, 1),
  }));
}

export async function writePublicGalleryData(events: GalleryEvent[]) {
  await fs.writeFile(PUBLIC_GALLERY_DATA_PATH, JSON.stringify(events), "utf8");
}

async function getSectionPhotos(sectionPath: string) {
  const absolute = path.join(SCHOOL_IMAGES_ROOT, sectionPath);
  try {
    const imagePaths = (await collectImagesRecursive(absolute)).sort((a, b) => a.localeCompare(b));
    return imagePaths.map((imagePath, index) => {
      const fileName = path.basename(imagePath);
      const readable = titleFromName(fileName);
      return {
        id: `${slugify(sectionPath)}-${index + 1}`,
        src: toPublicPath(imagePath),
        alt: readable || `Photo ${index + 1}`,
        caption: readable || undefined,
      } as GalleryImage;
    });
  } catch {
    return [];
  }
}

export async function getSectionPreview(
  sectionPath: string,
  title: string,
  galleryQuery: string,
): Promise<SectionPreview | null> {
  const images = await getSectionPhotos(sectionPath);
  if (!images.length) return null;

  return {
    title,
    href: `/gallery?search=${encodeURIComponent(galleryQuery)}`,
    images: images.slice(0, 6),
  };
}
