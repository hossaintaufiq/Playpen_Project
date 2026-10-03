"use client";

import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

type OverviewPhoto = GalleryImage & {
  eventTitle: string;
  category: string;
  date: string;
};

export function GalleryOverview({
  photos,
  onPhotoClick,
}: {
  photos: OverviewPhoto[];
  onPhotoClick: (index: number) => void;
}) {
  if (!photos.length) return null;

  const [featured, ...rest] = photos;

  return (
    <div className="mt-10">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b-2 border-[#121212] pb-4">
        <div>
          <span className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
            Curated Archival Moments
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-[#121212]">
            Highlights from Campus Life
          </h2>
        </div>
        <p className="font-mono text-xs text-[#121212]/70">
          Select a category above to browse specific event albums
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <button
          type="button"
          onClick={() => onPhotoClick(0)}
          className="group relative aspect-[4/3] overflow-hidden brutal-border bg-[#121212] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[380px] brutal-shadow text-left"
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <span className="inline-block bg-[#d97706] px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest text-[#121212] mb-2">
              {featured.category}
            </span>
            <p className="font-serif text-xl sm:text-2xl font-black leading-tight text-white">
              {featured.caption ?? featured.eventTitle}
            </p>
          </div>
        </button>

        {rest.slice(0, 6).map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onPhotoClick(index + 1)}
            className="group relative aspect-[4/3] overflow-hidden brutal-border bg-[#121212] md:aspect-auto md:min-h-[180px] brutal-shadow-sm text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
              <p className="truncate font-serif text-xs font-bold">
                {photo.caption ?? photo.eventTitle}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

type ListPhoto = GalleryImage & {
  eventTitle: string;
  category: string;
  date: string;
};

export function GalleryPhotoList({
  photos,
  categoryLabel,
  onPhotoClick,
}: {
  photos: ListPhoto[];
  categoryLabel: string;
  onPhotoClick: (index: number) => void;
}) {
  return (
    <div className="mt-10">
      <div className="mb-6 border-b-2 border-[#121212] pb-4">
        <span className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
          {categoryLabel} Archive
        </span>
        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-[#121212]">
          Photo Records
        </h2>
        <p className="mt-1 font-mono text-xs text-[#121212]/70">
          {photos.length} photograph{photos.length === 1 ? "" : "s"} catalogued in this collection
        </p>
      </div>

      <ul className="divide-y-2 divide-[#121212] brutal-border bg-white brutal-shadow overflow-hidden">
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => onPhotoClick(index)}
              className="group flex w-full items-center gap-4 p-4 text-left transition hover:bg-[#faf7f2] sm:gap-6 sm:p-5"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden brutal-border bg-[#121212] sm:h-24 sm:w-24">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="96px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#6b0c26]">
                  {photo.category}
                </span>
                <p className="mt-0.5 truncate font-serif text-base sm:text-lg font-bold text-[#121212] group-hover:text-[#6b0c26] transition-colors">
                  {photo.caption ?? photo.alt}
                </p>
                <p className="mt-0.5 truncate text-xs text-[#121212]/70">
                  {photo.eventTitle}
                </p>
                {photo.date && (
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-[#121212]/60">
                    <Calendar className="h-3 w-3" />
                    <span>{photo.date}</span>
                  </p>
                )}
              </div>

              <ChevronRight className="h-5 w-5 shrink-0 text-[#121212]/40 transition group-hover:translate-x-1 group-hover:text-[#6b0c26]" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

