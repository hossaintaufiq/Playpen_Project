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
  const [visiblePhotoCount, setVisiblePhotoCount] = useState(24);

  useEffect(() => {
    setTimeout(() => {
      setSearch(paramSearch);
      setCategory(initialCategory);
    }, 0);
  }, [paramSearch, initialCategory]);

  useEffect(() => {
    setTimeout(() => {
      setVisiblePhotoCount(24);
    }, 0);
  }, [category, search]);

  const ensureFullEvents = useCallback(async () => {
    if (fullEventsRef.current) return fullEventsRef.current;

    try {
      const response = await fetch("/gallery-data.json", { cache: "force-cache" });
      if (response.ok) {
        const data = (await response.json()) as GalleryEvent[];
        if (Array.isArray(data) && data.length) {
          fullEventsRef.current = data;
          setTimeout(() => {
            setGalleryEvents(data);
            setFullEventsLoaded(true);
          }, 0);
          return data;
        }
      }
    } catch {
      // Fall through to initial/slim events.
    }

    fullEventsRef.current = galleryEvents;
    setTimeout(() => {
      setFullEventsLoaded(true);
    }, 0);
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
        <div className="brutal-border bg-white p-5 brutal-shadow sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b-2 border-[#121212] pb-5">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#121212]/50" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search archive, events, years, or categories..."
                className="w-full brutal-border bg-[#faf7f2] py-2.5 pl-10 pr-4 font-mono text-xs sm:text-sm outline-none transition focus:bg-white focus:border-[#6b0c26]"
              />
            </div>

            <div className="flex brutal-border bg-[#faf7f2] p-1 gap-1">
              <button
                type="button"
                onClick={() => setView("events")}
                className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase transition ${
                  view === "events"
                    ? "bg-[#121212] text-white"
                    : "text-[#121212]/70 hover:text-[#121212]"
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
                className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase transition ${
                  view === "photos"
                    ? "bg-[#121212] text-white"
                    : "text-[#121212]/70 hover:text-[#121212]"
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
                className={`shrink-0 brutal-btn px-4 py-2 font-mono text-xs font-bold uppercase transition ${
                  category === item
                    ? "bg-[#6b0c26] text-white"
                    : "bg-[#faf7f2] text-[#121212] hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {isAllCategory && (
            <p className="mt-4 font-mono text-xs text-[#121212]/70">
              <span className="font-bold text-[#121212]">All Categories:</span> shows a curated
              highlight overview — click any category for full itemized photo registers.
            </p>
          )}

          <p className="mt-2 font-mono text-[11px] text-[#121212]/60">
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
          <p className="mt-8 font-mono text-sm text-[#121212]/70">Loading photo list…</p>
        )}

        {!isAllCategory && view === "photos" && fullEventsLoaded && filteredPhotos.length > 0 && (
          <div className="space-y-6">
            <GalleryPhotoList
              photos={filteredPhotos.slice(0, visiblePhotoCount)}
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
            {filteredPhotos.length > visiblePhotoCount && (
              <div className="flex justify-center pt-6">
                <button
                  type="button"
                  onClick={() => setVisiblePhotoCount((prev) => prev + 24)}
                  className="brutal-btn bg-[#6b0c26] text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#121212]"
                >
                  Load More Archive Photos
                </button>
              </div>
            )}
          </div>
        )}

        {view === "events" && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden brutal-border bg-white brutal-shadow transition-transform hover:-translate-y-1"
              >
                <button
                  type="button"
                  onClick={() => void openEventPhotos(event)}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-[#121212] border-b-2 border-[#121212]"
                >
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute left-3 top-3 bg-[#d97706] px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest text-[#121212]">
                    {event.category}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
                    <p className="flex items-center gap-1.5 font-mono text-[10px] text-white/80">
                      <Calendar className="h-3.5 w-3.5 text-[#d97706]" />
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-serif text-lg sm:text-xl font-black text-white">
                      {event.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-white/80">
                      {event.imageCount ?? event.images.length} photos
                    </p>
                  </div>
                </button>
                <div className="flex items-center justify-between gap-3 p-4 sm:p-5 bg-white">
                  <p className="line-clamp-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">
                    {event.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      void openEventPhotos(event);
                    }}
                    className="shrink-0 brutal-btn bg-[#6b0c26] text-white px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-[#121212]"
                  >
                    View
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
          <div className="mt-12 brutal-border bg-[#faf7f2] p-10 text-center brutal-shadow-sm">
            <Grid3X3 className="mx-auto h-10 w-10 text-[#6b0c26]" />
            <p className="mt-4 font-serif text-xl font-bold text-[#121212]">
              No results found
            </p>
            <p className="mt-2 font-mono text-xs text-[#121212]/70">
              Try a different search term or category filter.
            </p>
          </div>
        )}
      </section>

      {selectedEvent && !lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto brutal-border bg-white brutal-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[21/9] min-h-[180px] w-full overflow-hidden bg-[#121212] border-b-2 border-[#121212]">
              <Image
                src={selectedEvent.coverImage}
                alt={selectedEvent.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white text-[#121212] border-2 border-[#121212] font-mono font-bold hover:bg-[#faf7f2]"
                aria-label="Close event"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#d97706]">
                  {selectedEvent.category} · {selectedEvent.date}
                </p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-white">
                  {selectedEvent.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
                {selectedEvent.description}
              </p>

              <div className="mt-8 border-t-2 border-[#121212] pt-6">
                <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
                  Archived Photos ({selectedEvent.images.length})
                </p>
                <p className="mt-1 font-mono text-xs text-[#121212]/70">
                  Tap any image to launch full-screen high resolution lightbox
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {selectedEvent.images.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() =>
                        openLightbox(selectedEvent.images, index, selectedEvent.title)
                      }
                      className="group overflow-hidden brutal-border bg-[#121212] text-left transition hover:border-[#6b0c26]"
                    >
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                      {(image.caption || image.alt) && (
                        <p className="truncate p-2.5 font-mono text-xs font-bold text-white bg-[#121212]">
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-white text-[#121212] border-2 border-[#121212] font-mono font-bold sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => goLightbox("prev")}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-[#121212] border-2 border-[#121212] sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => goLightbox("next")}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-[#121212] border-2 border-[#121212] sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative h-[min(72vh,720px)] w-full max-w-5xl">
            <Image
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-[#121212] border-t-2 border-white/20 px-4 py-4 text-center sm:px-6">
            {lightbox.eventTitle && (
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#d97706]">
                {lightbox.eventTitle}
              </p>
            )}
            <p className="mt-1 font-serif text-sm sm:text-base font-bold text-white">
              {lightbox.images[lightbox.index].caption ?? lightbox.images[lightbox.index].alt}
            </p>
            <p className="mt-1 font-mono text-xs text-white/60">
              RECORD {lightbox.index + 1} OF {lightbox.images.length}
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
