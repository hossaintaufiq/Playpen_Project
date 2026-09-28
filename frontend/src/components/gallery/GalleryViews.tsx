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
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Curated Moments
          </span>
          <h2 className="mt-1 font-extrabold text-2xl sm:text-3xl text-foreground">
            Highlights from Campus Life
          </h2>
        </div>
        <p className="hidden text-xs sm:text-sm text-muted-foreground sm:block">
          Select a category above to browse specific event albums
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <button
          type="button"
          onClick={() => onPhotoClick(0)}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[360px] shadow-sm transition hover:shadow-xl text-left"
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
              {featured.category}
            </span>
            <p className="font-extrabold text-xl sm:text-2xl leading-tight">
              {featured.caption ?? featured.eventTitle}
            </p>
          </div>
        </button>

        {rest.slice(0, 6).map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onPhotoClick(index + 1)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:aspect-auto md:min-h-[160px] shadow-sm transition hover:shadow-lg text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition duration-300 group-hover:opacity-100 text-white">
              <p className="truncate text-xs font-bold">
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
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          {categoryLabel} Collection
        </span>
        <h2 className="mt-1 font-extrabold text-2xl sm:text-3xl text-foreground">
          Photo Gallery
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
          {photos.length} photograph{photos.length === 1 ? "" : "s"} in this album
        </p>
      </div>

      <ul className="divide-y divide-border/60 overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm">
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => onPhotoClick(index)}
              className="group flex w-full items-center gap-4 p-4 text-left transition hover:bg-surface sm:gap-6 sm:p-5"
            >
              <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-muted sm:h-22 sm:w-22 shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="90px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  {photo.category}
                </span>
                <p className="mt-0.5 truncate font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
                  {photo.caption ?? photo.alt}
                </p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {photo.eventTitle}
                </p>
                {photo.date && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                    <Calendar className="h-3 w-3" />
                    <span>{photo.date}</span>
                  </p>
                )}
              </div>

              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
