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
      className="border-b-2 border-[#121212] bg-[#f4efe6] relative z-20"
    >
      <div className="relative mx-auto max-w-7xl">
        {isCompact && (
          <>
            <button
              type="button"
              onClick={() => scrollBy("left")}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
              className={`absolute left-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 border-[#121212] bg-[#ffffff] text-[#121212] shadow-[2px_2px_0px_#121212] ${
                canScrollLeft ? "hover:bg-[#6b0c26] hover:text-white" : "opacity-30 cursor-default"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollBy("right")}
              aria-label="Scroll right"
              disabled={!canScrollRight}
              className={`absolute right-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 border-[#121212] bg-[#ffffff] text-[#121212] shadow-[2px_2px_0px_#121212] ${
                canScrollRight ? "hover:bg-[#6b0c26] hover:text-white" : "opacity-30 cursor-default"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        <div className={isCompact ? "px-10 sm:px-12 lg:px-6" : "px-4 sm:px-6 lg:px-8"}>
          <ul
            ref={scrollRef}
            className="-mb-px flex gap-2 overflow-x-auto py-3 scrollbar-none sm:py-3.5"
          >
            {items.map((item, idx) => {
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
                    className={`inline-flex items-center gap-2 whitespace-nowrap border-2 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                      active
                        ? "border-[#121212] bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212]"
                        : "border-[#121212] bg-[#ffffff] text-[#121212] hover:bg-[#faf7f2] shadow-[2px_2px_0px_#121212] hover:shadow-[3px_3px_0px_#121212]"
                    }`}
                  >
                    <span className={active ? "text-[#d97706]" : "text-[#6b0c26]"}>
                      0{idx + 1}.
                    </span>
                    <span>{item.label}</span>
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
