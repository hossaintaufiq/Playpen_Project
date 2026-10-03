import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve("public/images/Converted_images");
const outputRoot = path.resolve("public/images/Converted_images_webp");

const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tiff", ".bmp", ".jfif"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return [fullPath];
    }),
  );
  return files.flat();
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function convertOne(filePath) {
  const rel = path.relative(sourceRoot, filePath);
  const ext = path.extname(filePath).toLowerCase();
  if (!allowedExt.has(ext)) return { status: "skipped", file: rel };

  const targetRel = `${rel.slice(0, -ext.length)}.webp`;
  const outputPath = path.join(outputRoot, targetRel);
  await ensureDir(path.dirname(outputPath));

  await sharp(filePath)
    .rotate()
    .webp({
      quality: 88,
      effort: 2,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return { status: "converted", file: rel, out: targetRel };
}

async function main() {
  try {
    await fs.access(sourceRoot);
  } catch {
    throw new Error(`Source folder not found: ${sourceRoot}`);
  }

  const allFiles = await walk(sourceRoot);
  console.log(`Found ${allFiles.length} files under ${sourceRoot}`);
  let converted = 0;
  let skipped = 0;
  let processed = 0;
  let cursor = 0;
  const workerCount = Math.min(8, allFiles.length);

  async function worker() {
    while (cursor < allFiles.length) {
      const currentIndex = cursor;
      cursor += 1;
      const file = allFiles[currentIndex];

      try {
        const result = await convertOne(file);
        if (result.status === "converted") {
          converted += 1;
        } else {
          skipped += 1;
        }
      } catch (error) {
        skipped += 1;
        const rel = path.relative(sourceRoot, file);
        console.warn(`Skipping ${rel}: ${error.message}`);
      }

      processed += 1;
      if (processed % 25 === 0 || processed === allFiles.length) {
        console.log(`Progress: ${processed}/${allFiles.length} (converted ${converted}, skipped ${skipped})`);
      }
    }
  }

  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  console.log(`Done. Converted: ${converted}, skipped: ${skipped}`);
  console.log(`Output: ${outputRoot}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
