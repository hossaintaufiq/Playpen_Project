import type { GalleryEvent, GalleryImage } from "@/lib/gallery-data";
import galleryIndex from "../../data/gallery-index.json";
import sectionImages from "../../data/section-images.json";

type SectionPreview = {
  title: string;
  href: string;
  images: GalleryImage[];
};

type GalleryCacheFile = {
  generatedAt: string;
  events: GalleryEvent[];
};

type SectionImagesFile = {
  generatedAt: string;
  sections: Record<string, GalleryImage[]>;
};

declare global {
  // eslint-disable-next-line no-var
  var __playpenGalleryEventsCache: GalleryEvent[] | undefined;
}

const galleryCache = galleryIndex as GalleryCacheFile;
const sectionCache = sectionImages as SectionImagesFile;

/** Read prebuilt gallery index — never scans public/ (avoids Vercel NFT size failures). */
export async function getGalleryEventsFromFolders(): Promise<GalleryEvent[]> {
  if (globalThis.__playpenGalleryEventsCache?.length) {
    return globalThis.__playpenGalleryEventsCache;
  }

  const events = Array.isArray(galleryCache.events) ? galleryCache.events : [];
  if (events.length) {
    globalThis.__playpenGalleryEventsCache = events;
  }
  return events;
}

/** Slim events for fast first paint (covers only). Full images stay available via /gallery-data.json */
export function toSlimGalleryEvents(events: GalleryEvent[]): GalleryEvent[] {
  return events.map((event) => ({
    ...event,
    imageCount: event.imageCount ?? event.images.length,
    images: event.images.slice(0, 1),
  }));
}

export async function getSectionPreview(
  sectionPath: string,
  title: string,
  galleryQuery: string,
): Promise<SectionPreview | null> {
  const images = sectionCache.sections?.[sectionPath] ?? [];
  if (!images.length) return null;

  return {
    title,
    href: `/gallery?search=${encodeURIComponent(galleryQuery)}`,
    images: images.slice(0, 6),
  };
}
