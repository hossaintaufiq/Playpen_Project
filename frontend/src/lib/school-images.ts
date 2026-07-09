import fs from "node:fs/promises";
import path from "node:path";
import type { GalleryCategory, GalleryEvent, GalleryImage } from "@/lib/gallery-data";

const SCHOOL_IMAGES_ROOT = path.join(process.cwd(), "public", "school-images");
const GALLERY_ROOT = path.join(SCHOOL_IMAGES_ROOT, "gallery");
const ALLOWED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

type GalleryEventCategory = Exclude<GalleryCategory, "All">;

type SectionPreview = {
  title: string;
  href: string;
  images: GalleryImage[];
};

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
  const images: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...(await collectImagesRecursive(full)));
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (ALLOWED_IMAGE_EXTENSIONS.has(ext)) images.push(full);
  }

  return images;
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
  return `/${relative.split(path.sep).join("/")}`;
}

export async function getGalleryEventsFromFolders(): Promise<GalleryEvent[]> {
  try {
    const entries = await fs.readdir(GALLERY_ROOT, { withFileTypes: true });
    const eventFolders = entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    const events: GalleryEvent[] = [];

    for (const folderName of eventFolders) {
      const folderPath = path.join(GALLERY_ROOT, folderName);
      const imagePaths = (await collectImagesRecursive(folderPath)).sort((a, b) => a.localeCompare(b));
      if (!imagePaths.length) continue;

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

      events.push({
        id: slugify(folderName) || `event-${events.length + 1}`,
        title,
        category: inferCategory(folderName),
        date: monthYearLabelFromFolder(folderName),
        year,
        description: `${title} at Playpen School.`,
        coverImage: images[0].src,
        images,
      });
    }

    return events;
  } catch {
    return [];
  }
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

export async function getSectionPreview(sectionPath: string, title: string, galleryQuery: string): Promise<SectionPreview | null> {
  const images = await getSectionPhotos(sectionPath);
  if (!images.length) return null;

  return {
    title,
    href: `/gallery?search=${encodeURIComponent(galleryQuery)}`,
    images: images.slice(0, 6),
  };
}
