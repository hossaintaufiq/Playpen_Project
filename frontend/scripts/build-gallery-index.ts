/**
 * Rebuild gallery indexes when school-images folders change.
 * Run: npx tsx scripts/build-gallery-index.ts
 *
 * This script walks the filesystem locally and is intentionally NOT imported by the app.
 */
import fs from "node:fs/promises";
import path from "node:path";

const GALLERY_ROOT = path.join(process.cwd(), "public", "school-images", "gallery");
const GALLERY_INDEX_PATH = path.join(process.cwd(), "data", "gallery-index.json");
const PUBLIC_GALLERY_DATA_PATH = path.join(process.cwd(), "public", "gallery-data.json");
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

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

function toPublicPath(absolutePath: string) {
  const relative = path.relative(path.join(process.cwd(), "public"), absolutePath);
  return `/${relative.split(path.sep).map(encodeURIComponent).join("/")}`;
}

function inferCategory(folderName: string) {
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

async function collectImagesRecursive(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      if (entry.name.startsWith(".")) return [] as string[];
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectImagesRecursive(full);
      const ext = path.extname(entry.name).toLowerCase();
      return ALLOWED.has(ext) ? [full] : [];
    }),
  );
  return nested.flat();
}

async function main() {
  const entries = await fs.readdir(GALLERY_ROOT, { withFileTypes: true });
  const folders = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const events = (
    await Promise.all(
      folders.map(async (folderName) => {
        const imagePaths = (await collectImagesRecursive(path.join(GALLERY_ROOT, folderName))).sort((a, b) =>
          a.localeCompare(b),
        );
        if (!imagePaths.length) return null;

        const images = imagePaths.map((imagePath, index) => {
          const readable = titleFromName(path.basename(imagePath));
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
          date: year ? `Session ${year}` : "School Event",
          year,
          description: `${title} at Playpen School.`,
          coverImage: images[0].src,
          images,
        };
      }),
    )
  ).filter(Boolean);

  await fs.mkdir(path.dirname(GALLERY_INDEX_PATH), { recursive: true });
  await fs.writeFile(
    GALLERY_INDEX_PATH,
    JSON.stringify({ generatedAt: new Date().toISOString(), events }),
    "utf8",
  );
  await fs.writeFile(PUBLIC_GALLERY_DATA_PATH, JSON.stringify(events), "utf8");
  console.log(`Cached ${events.length} events`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
