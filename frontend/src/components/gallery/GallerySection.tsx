"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Images,
  LayoutGrid,
  Search,
  X,
} from "lucide-react";
import { galleryEvents as staticGalleryEvents } from "@/lib/gallery-data";
import type { GalleryEvent } from "@/lib/gallery-data";
import { GalleryOverview, GalleryPhotoList } from "@/components/gallery/GalleryViews";

function getAllGalleryImages(events: GalleryEvent[]) {
  return events.flatMap((event) =>
    event.images.map((image) => ({
      ...image,
      eventId: event.id,
      eventTitle: event.title,
      category: event.category,
      date: event.date,
      year: event.year,
    }))
  );
}

function getOverviewPhotos(events: GalleryEvent[], limit = 12) {
  return events.slice(0, limit).map((event) => ({
    id: `overview-${event.id}`,
    src: event.coverImage,
    alt: event.title,
    caption: event.title,
    eventTitle: event.title,
    category: event.category,
    date: event.date,
    year: event.year,
    eventId: event.id,
  }));
}

type GalleryCategory =
  | "All"
  | "Events"
  | "Sports"
  | "Academics"
  | "Arts"
  | "Celebrations"
  | "Campus";

const galleryCategories: GalleryCategory[] = [
  "All",
  "Events",
  "Sports",
  "Academics",
  "Arts",
  "Celebrations",
  "Campus",
];

type GalleryImage = GalleryEvent["images"][number];

type ViewMode = "events" | "photos";

type LightboxState = {
  images: GalleryImage[];
  index: number;
  eventTitle?: string;
};

function matchesSearch(event: GalleryEvent, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    event.title.toLowerCase().includes(q) ||
    event.category.toLowerCase().includes(q) ||
    event.date.toLowerCase().includes(q) ||
    event.description.toLowerCase().includes(q) ||
    String(event.year).includes(q)
  );
}

function GallerySectionInner({
  initialEvents,
}: {
  initialEvents?: GalleryEvent[];
}) {
  const searchParams = useSearchParams();
  const paramSearch = searchParams.get("search") ?? "";
  const paramCategory = searchParams.get("category") ?? "All";
  const initialCategory: GalleryCategory = galleryCategories.includes(paramCategory as GalleryCategory)
    ? (paramCategory as GalleryCategory)
    : "All";

  const [galleryEvents, setGalleryEvents] = useState<GalleryEvent[]>(
    initialEvents?.length ? initialEvents : staticGalleryEvents,
  );
  const [fullEventsLoaded, setFullEventsLoaded] = useState(false);
  const fullEventsRef = useRef<GalleryEvent[] | null>(null);
  const [search, setSearch] = useState(paramSearch);
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);
  const [view, setView] = useState<ViewMode>("events");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    setSearch(paramSearch);
    setCategory(initialCategory);
  }, [paramSearch, initialCategory]);

  const ensureFullEvents = useCallback(async () => {
    if (fullEventsRef.current) return fullEventsRef.current;

    try {
      const response = await fetch("/gallery-data.json", { cache: "force-cache" });
      if (response.ok) {
        const data = (await response.json()) as GalleryEvent[];
        if (Array.isArray(data) && data.length) {
          fullEventsRef.current = data;
          setGalleryEvents(data);
          setFullEventsLoaded(true);
          return data;
        }
      }
    } catch {
      // Fall through to initial/slim events.
    }

    fullEventsRef.current = galleryEvents;
    setFullEventsLoaded(true);
    return galleryEvents;
  }, [galleryEvents]);

  useEffect(() => {
    void ensureFullEvents();
  }, [ensureFullEvents]);

  const filteredEvents = useMemo(() => {
    return galleryEvents.filter((event) => {
      const categoryMatch = category === "All" || event.category === category;
      return categoryMatch && matchesSearch(event, search);
    });
  }, [category, search, galleryEvents]);

  const filteredPhotos = useMemo(() => {
    const all = getAllGalleryImages(galleryEvents);
    return all.filter((photo) => {
      const categoryMatch = category === "All" || photo.category === category;
      const q = search.trim().toLowerCase();
      const searchMatch =
        !q ||
        photo.eventTitle.toLowerCase().includes(q) ||
        photo.category.toLowerCase().includes(q) ||
        photo.alt.toLowerCase().includes(q) ||
        (photo.caption?.toLowerCase().includes(q) ?? false) ||
        photo.date.toLowerCase().includes(q);
      return categoryMatch && searchMatch;
    });
  }, [category, search, galleryEvents]);

  const overviewPhotos = useMemo(() => {
    const q = search.trim().toLowerCase();
    return getOverviewPhotos(galleryEvents).filter((photo) => {
      if (!q) return true;
      return (
        photo.eventTitle.toLowerCase().includes(q) ||
        photo.category.toLowerCase().includes(q) ||
        photo.alt.toLowerCase().includes(q) ||
        (photo.caption?.toLowerCase().includes(q) ?? false) ||
        photo.date.toLowerCase().includes(q)
      );
    });
  }, [search, galleryEvents]);

  const isAllCategory = category === "All";

  const openLightbox = useCallback(
    (images: GalleryImage[], index: number, eventTitle?: string) => {
      setLightbox({ images, index, eventTitle });
    },
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goLightbox = useCallback((direction: "prev" | "next") => {
    setLightbox((current) => {
      if (!current) return current;
      const total = current.images.length;
      const nextIndex =
        direction === "next"
          ? (current.index + 1) % total
          : (current.index - 1 + total) % total;
      return { ...current, index: nextIndex };
    });
  }, []);

  useEffect(() => {
    if (!lightbox && !selectedEvent) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightbox) closeLightbox();
        else setSelectedEvent(null);
      }
      if (lightbox && event.key === "ArrowRight") goLightbox("next");
      if (lightbox && event.key === "ArrowLeft") goLightbox("prev");
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox, selectedEvent, closeLightbox, goLightbox]);

  const openEventPhotos = useCallback(
    async (event: GalleryEvent) => {
      const full = await ensureFullEvents();
      const matched = full.find((item) => item.id === event.id) ?? event;
      setSelectedEvent(matched);
    },
    [ensureFullEvents],
  );

  const openEventFromOverview = useCallback(
    async (eventId: string) => {
      const full = await ensureFullEvents();
      const event = full.find((item) => item.id === eventId);
      if (event) setSelectedEvent(event);
    },
    [ensureFullEvents],
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16">
        <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events, years, or categories..."
                className="w-full rounded-full border border-border/70 bg-muted/30 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/10 sm:py-3"
              />
            </div>

            <div className="flex rounded-full border border-border/70 bg-muted/30 p-1">
              <button
                type="button"
                onClick={() => setView("events")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  view === "events"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
                Events
              </button>
              <button
                type="button"
                onClick={() => {
                  setView("photos");
                  void ensureFullEvents();
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  view === "photos"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Images className="h-4 w-4" />
                Photos
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {galleryCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                  category === item
                    ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {isAllCategory && (
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              <span className="font-medium text-foreground">All</span> shows a highlight
              overview — choose a category to open the full photo list.
            </p>
          )}

          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            {isAllCategory
              ? view === "events"
                ? `${filteredEvents.length} event${filteredEvents.length === 1 ? "" : "s"} · overview gallery`
                : `${overviewPhotos.length} highlight${overviewPhotos.length === 1 ? "" : "s"} · pick a category for the full list`
              : view === "events"
                ? `${filteredEvents.length} event${filteredEvents.length === 1 ? "" : "s"} found`
                : `${filteredPhotos.length} photo${filteredPhotos.length === 1 ? "" : "s"} in list`}
            {!fullEventsLoaded ? " · loading photos…" : ""}
          </p>
        </div>

        {isAllCategory && overviewPhotos.length > 0 && (
          <GalleryOverview
            photos={overviewPhotos}
            onPhotoClick={(index) => {
              const photo = overviewPhotos[index];
              if (photo.eventId) void openEventFromOverview(photo.eventId);
            }}
          />
        )}

        {!isAllCategory && view === "photos" && !fullEventsLoaded && (
          <p className="mt-8 text-sm text-muted-foreground">Loading photo list…</p>
        )}

        {!isAllCategory && view === "photos" && fullEventsLoaded && filteredPhotos.length > 0 && (
          <GalleryPhotoList
            photos={filteredPhotos}
            categoryLabel={category}
            onPhotoClick={(index) => {
              const photo = filteredPhotos[index];
              void openEventPhotos({
                id: photo.eventId,
                title: photo.eventTitle,
                category: photo.category as GalleryEvent["category"],
                date: photo.date,
                year: photo.year,
                description: "",
                coverImage: photo.src,
                images: [],
              });
            }}
          />
        )}

        {view === "events" && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition duration-300 hover:border-primary/20 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.15)] sm:rounded-3xl"
              >
                <button
                  type="button"
                  onClick={() => void openEventPhotos(event)}
                  className="relative block aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/85 via-[#800000]/25 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                    {event.category}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
                    <p className="flex items-center gap-1.5 text-[11px] text-white/75">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-white sm:text-xl">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/75 sm:text-sm">
                      {event.imageCount ?? event.images.length} photos
                    </p>
                  </div>
                </button>
                <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      void openEventPhotos(event);
                    }}
                    className="shrink-0 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark sm:px-4 sm:text-sm"
                  >
                    View All
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {(isAllCategory
          ? view === "events"
            ? filteredEvents.length === 0 && overviewPhotos.length === 0
            : overviewPhotos.length === 0
          : view === "events"
            ? filteredEvents.length === 0
            : fullEventsLoaded && filteredPhotos.length === 0) && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center sm:rounded-3xl">
            <Grid3X3 className="mx-auto h-10 w-10 text-primary/40" />
            <p className="mt-4 font-serif text-lg font-semibold text-foreground">
              No results found
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category filter.
            </p>
          </div>
        )}
      </section>

      {selectedEvent && !lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[21/9] min-h-[180px] w-full overflow-hidden sm:min-h-[220px]">
              <Image
                src={selectedEvent.coverImage}
                alt={selectedEvent.title}
                fill
                unoptimized
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground transition hover:bg-white"
                aria-label="Close event"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                  {selectedEvent.category} · {selectedEvent.date}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {selectedEvent.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {selectedEvent.description}
              </p>

              <div className="mt-6 border-t border-border/60 pt-5 sm:pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
                  All Photos
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selectedEvent.images.length} image
                  {selectedEvent.images.length === 1 ? "" : "s"} — tap any photo to view
                  full size
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {selectedEvent.images.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() =>
                        openLightbox(selectedEvent.images, index, selectedEvent.title)
                      }
                      className="group overflow-hidden rounded-xl border border-border/50 bg-muted text-left transition hover:border-primary/25 hover:shadow-md sm:rounded-2xl"
                    >
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover transition duration-300 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      </div>
                      {(image.caption || image.alt) && (
                        <p className="truncate px-2.5 py-2 text-xs font-medium text-foreground sm:px-3 sm:text-sm">
                          {image.caption ?? image.alt}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => goLightbox("prev")}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => goLightbox("next")}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative h-[min(72vh,720px)] w-full max-w-5xl">
            <Image
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              fill
              unoptimized
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-6 pt-16 text-center sm:px-6">
            {lightbox.eventTitle && (
              <p className="text-xs font-medium uppercase tracking-wider text-white/65">
                {lightbox.eventTitle}
              </p>
            )}
            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
              {lightbox.images[lightbox.index].caption ?? lightbox.images[lightbox.index].alt}
            </p>
            <p className="mt-1 text-xs text-white/60">
              {lightbox.index + 1} of {lightbox.images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function GallerySection({
  initialEvents,
}: {
  initialEvents?: GalleryEvent[];
}) {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-16 text-sm text-muted-foreground">Loading gallery…</div>}>
      <GallerySectionInner initialEvents={initialEvents} />
    </Suspense>
  );
}
