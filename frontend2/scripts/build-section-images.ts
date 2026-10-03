import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "public", "school-images");
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const SECTION_PATHS = [
  "about/our-campus",
  "about/school-administration",
  "academics/overview",
  "academics/school-structure",
  "academics/library",
  "academics/laboratories",
  "academics/student-support",
  "academics/examinations",
  "academics/disciplinary-committee",
  "academics/identity-card",
  "academics/counsellor",
  "academics/student-achievements",
  "admissions/overview",
  "student-life/overview",
  "student-life/annual-sports",
  "student-life/extra-curricular-activities",
  "student-life/community-service",
  "student-life/cultural-programme",
  "student-life/health-center",
  "student-life/workshop-for-students",
];

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

function collectImages(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop()!;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (ALLOWED.has(path.extname(entry.name).toLowerCase())) out.push(full);
    }
  }
  return out.sort((a, b) => a.localeCompare(b));
}

const sections: Record<
  string,
  { id: string; src: string; alt: string; caption?: string }[]
> = {};

for (const sectionPath of SECTION_PATHS) {
  const absolute = path.join(ROOT, sectionPath);
  const imagePaths = collectImages(absolute);
  if (!imagePaths.length) continue;
  sections[sectionPath] = imagePaths.map((imagePath, index) => {
    const readable = titleFromName(path.basename(imagePath));
    return {
      id: `${slugify(sectionPath)}-${index + 1}`,
      src: toPublicPath(imagePath),
      alt: readable || `Photo ${index + 1}`,
      caption: readable || undefined,
    };
  });
}

const outPath = path.join(process.cwd(), "data", "section-images.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(
  outPath,
  JSON.stringify({ generatedAt: new Date().toISOString(), sections }, null, 0),
);

console.log(
  `Cached ${Object.keys(sections).length} sections / ${Object.values(sections).reduce((n, a) => n + a.length, 0)} images`,
);
