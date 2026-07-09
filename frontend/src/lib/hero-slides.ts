import fs from "node:fs/promises";
import path from "node:path";
import type { HeroSlide } from "@/lib/cms/types";

export type HomeHeroSlide = Pick<HeroSlide, "src" | "alt"> & {
  description?: string;
};

const HERO_DIR = path.join(process.cwd(), "public", "school-images", "site-wide", "hero-sliders");
const PUBLIC_HERO_BASE = "/school-images/site-wide/hero-sliders";
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function toReadableTitle(fileName: string) {
  const withoutExt = fileName.replace(/\.[^.]+$/, "");
  return withoutExt
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildDescriptionFromTitle(title: string) {
  const lower = title.toLowerCase();

  if (lower.includes("sports")) return `Moments from ${title}, where students build confidence, teamwork, and healthy competition.`;
  if (lower.includes("graduation")) return `${title} celebrates achievement, growth, and proud milestones for our learners and families.`;
  if (lower.includes("fair")) return `${title} highlights discovery, creativity, and real-world learning opportunities for students.`;
  if (lower.includes("essay")) return `${title} reflects strong communication skills, critical thinking, and student voice.`;
  if (lower.includes("art")) return `${title} showcases imagination, expression, and artistic talent across our school community.`;
  if (lower.includes("dance")) return `${title} brings culture, rhythm, and joyful performance to school life.`;
  if (lower.includes("drama")) return `${title} develops confidence, storytelling, and stage presence through performance.`;
  if (lower.includes("new year") || lower.includes("bangla")) {
    return `${title} reflects our cultural roots, shared values, and festive community spirit.`;
  }
  if (lower.includes("mental awareness")) {
    return `${title} supports student wellbeing, empathy, and a caring school environment.`;
  }
  if (lower.includes("teacher")) return `${title} demonstrates our commitment to teacher growth and classroom excellence.`;
  if (lower.includes("tour")) return `${title} gives students meaningful exposure beyond the classroom.`;

  return `${title} captures active learning, participation, and vibrant campus life at Playpen.`;
}

export async function getHeroSlidesFromFolder(): Promise<HomeHeroSlide[]> {
  try {
    const entries = await fs.readdir(HERO_DIR, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    return files.map((fileName) => {
      const title = toReadableTitle(fileName);
      return {
        src: `${PUBLIC_HERO_BASE}/${fileName}`,
        alt: title,
        description: buildDescriptionFromTitle(title),
      };
    });
  } catch {
    return [];
  }
}
