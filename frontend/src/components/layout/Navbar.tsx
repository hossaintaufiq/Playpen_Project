"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteLogo } from "@/lib/brand";
import { aboutNavItems } from "@/lib/about-nav";
import { academicsNavItems } from "@/lib/academics-nav";
import { admissionsNavItems } from "@/lib/admissions-nav";
import { studentLifeNavItems } from "@/lib/student-life-nav";

const navItems = [
  { label: "About", href: "/about", dropdownItems: aboutNavItems },
  { label: "Academics", href: "/academics", dropdownItems: academicsNavItems },
  { label: "Campus", href: "/about/our-campus" },
  { label: "Student Life", href: "/student-life", dropdownItems: studentLifeNavItems },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/academics/student-achievements" },
  { label: "Notices", href: "/notices" },
  { label: "Admissions", href: "/admissions", dropdownItems: admissionsNavItems },
] as const;

function isNavActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

function NavbarDropdown({
  label,
  rootHref,
  items,
  pathname,
  onNavigate,
  variant,
}: {
  label: string;
  rootHref: string;
  items: readonly { label: string; href: string; description: string }[];
  pathname: string;
  onNavigate?: () => void;
  variant: "desktop" | "mobile";
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isNavActive(pathname, rootHref);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (variant !== "desktop") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [variant]);

  if (variant === "mobile") {
    return (
      <div className="rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
            active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/60"
          }`}
          aria-expanded={open}
        >
          <span>{label}</span>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="my-1 space-y-1 border-l-2 border-primary/20 pl-3 ml-3">
            {items.map((item) => {
              const itemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={`flex flex-col rounded-lg px-3 py-2 text-sm transition ${
                    itemActive
                      ? "bg-primary text-white font-semibold shadow-sm"
                      : "text-foreground/80 hover:bg-muted/60 hover:text-primary font-medium"
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className={`text-xs line-clamp-1 ${itemActive ? "text-white/80" : "text-muted-foreground"}`}>
                    {item.description}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  const isLarge = items.length > 5;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[13.5px] 2xl:px-3.5 2xl:py-2 2xl:text-[14.5px] font-bold tracking-tight transition-all duration-200 ${
          active || open
            ? "bg-primary/10 text-primary"
            : "text-foreground/85 hover:text-primary hover:bg-muted/50"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground/80 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5 transition-all duration-200 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className={`overflow-hidden rounded-2xl border border-border bg-white/95 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-black/5 ${
          isLarge ? "w-[34rem]" : "w-[21rem]"
        }`}>
          <div className="border-b border-border/60 bg-muted/40 px-4 py-2.5 rounded-xl mb-1 flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {label}
            </p>
            <span className="text-[11px] text-muted-foreground font-medium">Explore Overview</span>
          </div>

          <div className={`${isLarge ? "grid grid-cols-2 gap-1.5" : "space-y-1"}`}>
            {items.map((item) => {
              const itemActive = pathname === item.href || (item.href !== rootHref && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-start gap-2.5 rounded-xl p-2.5 transition-all duration-200 ${
                    itemActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground hover:bg-primary-soft hover:text-primary"
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block text-[13.5px] font-bold leading-tight group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className={`mt-0.5 block text-xs leading-snug line-clamp-1 ${
                      itemActive ? "text-white/80" : "text-muted-foreground"
                    }`}>
                      {item.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-b border-border/70 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] sm:h-[84px] items-center justify-between gap-3 sm:gap-6">
          {/* BIG SCHOOL BRANDING */}
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-3 sm:gap-3.5"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-13 w-13 shrink-0 sm:h-15 sm:w-15 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteLogo.src}
                alt={siteLogo.alt}
                fill
                className="object-contain drop-shadow-sm"
                sizes="(min-width: 640px) 60px, 52px"
                priority
              />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl sm:text-[1.7rem] leading-none tracking-tight text-primary transition-colors">
                  Playpen
                </span>
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:text-[12px] mt-0.5">
                School of Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center justify-center gap-1 xl:flex">
            {navItems.map((item) => {
              if ("dropdownItems" in item) {
                return (
                  <NavbarDropdown
                    key={item.href}
                    label={item.label}
                    rootHref={item.href}
                    items={item.dropdownItems}
                    pathname={pathname}
                    variant="desktop"
                  />
                );
              }
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13.5px] 2xl:px-3.5 2xl:py-2 2xl:text-[14.5px] font-bold tracking-tight transition-all duration-200 ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/85 hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center rounded-full bg-primary px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="inline-flex rounded-xl p-2 sm:p-2.5 text-foreground hover:bg-muted transition xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="border-t border-border/70 py-4 px-2 bg-surface rounded-b-2xl shadow-xl my-2">
              <div className="flex max-h-[70vh] flex-col gap-1.5 overflow-y-auto pr-1">
                {navItems.map((item) => {
                  if ("dropdownItems" in item) {
                    return (
                      <NavbarDropdown
                        key={item.href}
                        label={item.label}
                        rootHref={item.href}
                        items={item.dropdownItems}
                        pathname={pathname}
                        variant="mobile"
                        onNavigate={() => setOpen(false)}
                      />
                    );
                  }
                  const active = isNavActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                        active
                          ? "bg-primary text-white shadow-sm"
                          : "text-foreground hover:bg-muted/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="mt-3 pt-3 border-t border-border/80 flex flex-col gap-2">
                  <a
                    href="https://portal.playpen.edu.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/8 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Student Portal Login
                  </a>
                  <Link
                    href="/portal/admin"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-white py-3 text-sm font-bold text-foreground/85 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    Admin Portal
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
