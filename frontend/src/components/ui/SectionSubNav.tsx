"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SectionSubNavItem = {
  label: string;
  href: string;
};

type SectionSubNavProps = {
  items: readonly SectionSubNavItem[];
  ariaLabel: string;
  rootHref: string;
};

function isItemActive(pathname: string, itemHref: string, rootHref: string) {
  return itemHref === rootHref
    ? pathname === rootHref
    : pathname === itemHref || pathname.startsWith(`${itemHref}/`);
}

export function SectionSubNav({ items, ariaLabel, rootHref }: SectionSubNavProps) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const overflow = el.scrollWidth > el.clientWidth + 2;
    setIsCompact(overflow);
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scrollActiveToCenter = useCallback(() => {
    const activeItem = items.find((item) => isItemActive(pathname, item.href, rootHref));
    if (!activeItem) return;

    const li = itemRefs.current.get(activeItem.href);
    const container = scrollRef.current;
    if (!li || !container) return;

    const target =
      li.offsetLeft - container.clientWidth / 2 + li.offsetWidth / 2;

    container.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [items, pathname, rootHref]);

  useEffect(() => {
    updateScrollState();
    scrollActiveToCenter();

    const container = scrollRef.current;
    if (!container) return;

    const handleResize = () => {
      updateScrollState();
      scrollActiveToCenter();
    };

    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleResize);

    const timeout = window.setTimeout(() => {
      updateScrollState();
      scrollActiveToCenter();
    }, 150);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeout);
    };
  }, [pathname, scrollActiveToCenter, updateScrollState]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -el.clientWidth * 0.55 : el.clientWidth * 0.55,
      behavior: "smooth",
    });
  };

  return (
    <nav
      aria-label={ariaLabel}
      className="border-b border-border/70 bg-white/95 backdrop-blur-sm"
    >
      <div className="relative mx-auto max-w-7xl">
        {isCompact && (
          <>
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent transition-opacity sm:w-12 ${
                canScrollLeft ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-r from-transparent to-white transition-opacity sm:w-12 ${
                canScrollRight ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />

            <button
              type="button"
              onClick={() => scrollBy("left")}
              aria-label="Scroll to previous sections"
              disabled={!canScrollLeft}
              className={`absolute left-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-white text-primary shadow-sm transition sm:left-2 sm:h-9 sm:w-9 ${
                canScrollLeft
                  ? "hover:border-primary/25 hover:bg-primary hover:text-white"
                  : "cursor-default opacity-35"
              }`}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollBy("right")}
              aria-label="Scroll to more sections"
              disabled={!canScrollRight}
              className={`absolute right-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-white text-primary shadow-sm transition sm:right-2 sm:h-9 sm:w-9 ${
                canScrollRight
                  ? "hover:border-primary/25 hover:bg-primary hover:text-white"
                  : "cursor-default opacity-35"
              }`}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </>
        )}

        <div className={isCompact ? "px-10 sm:px-12 lg:px-6" : "px-4 sm:px-6"}>
          <ul
            ref={scrollRef}
            className="-mb-px flex gap-1 overflow-x-auto py-3 scrollbar-none sm:gap-2 sm:py-4"
          >
            {items.map((item) => {
              const active = isItemActive(pathname, item.href, rootHref);

              return (
                <li
                  key={item.href}
                  ref={(node) => {
                    if (node) itemRefs.current.set(item.href, node);
                    else itemRefs.current.delete(item.href);
                  }}
                  className="shrink-0"
                >
                  <Link
                    href={item.href}
                    className={`inline-flex whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
