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
    <div className="mt-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
            Overview
          </p>
          <h2 className="mt-1 font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Highlights from Playpen
          </h2>
        </div>
        <p className="hidden text-sm text-muted-foreground sm:block">
          Select a category below to browse the full photo list
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-4">
        <button
          type="button"
          onClick={() => onPhotoClick(0)}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[320px] md:rounded-3xl"
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/80 via-[#800000]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/75">
              {featured.category}
            </p>
            <p className="mt-1 font-serif text-lg font-semibold text-white sm:text-xl">
              {featured.caption ?? featured.eventTitle}
            </p>
          </div>
        </button>

        {rest.slice(0, 6).map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onPhotoClick(index + 1)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted sm:rounded-2xl md:aspect-auto md:min-h-[150px]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-2.5 opacity-0 transition group-hover:opacity-100 sm:p-3">
              <p className="truncate text-[10px] font-semibold text-white sm:text-xs">
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
    <div className="mt-8">
      <div className="mb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
          {categoryLabel}
        </p>
        <h2 className="mt-1 font-serif text-xl font-semibold text-foreground sm:text-2xl">
          Photo list
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {photos.length} photo{photos.length === 1 ? "" : "s"} in this category
        </p>
      </div>

      <ul className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm sm:rounded-3xl">
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => onPhotoClick(index)}
              className="group flex w-full items-center gap-4 p-3 text-left transition hover:bg-muted/40 sm:gap-5 sm:p-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted sm:h-20 sm:w-20 sm:rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="80px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/70 sm:text-xs">
                  {photo.category}
                </p>
                <p className="mt-0.5 truncate font-medium text-foreground sm:text-base">
                  {photo.caption ?? photo.alt}
                </p>
                <p className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">
                  {photo.eventTitle}
                </p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
                  <Calendar className="h-3 w-3 shrink-0" />
                  {photo.date}
                </p>
              </div>

              <ChevronRight className="h-5 w-5 shrink-0 text-primary/40 transition group-hover:translate-x-0.5 group-hover:text-primary" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
