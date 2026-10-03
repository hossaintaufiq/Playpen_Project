"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { siteLogo } from "@/lib/brand";
import { aboutNavItems } from "@/lib/about-nav";
import { academicsNavItems } from "@/lib/academics-nav";
import { admissionsNavItems } from "@/lib/admissions-nav";
import { studentLifeNavItems } from "@/lib/student-life-nav";

const navItems = [
  { label: "About", href: "/about", dropdownItems: aboutNavItems },
  { label: "Academics", href: "/academics", dropdownItems: academicsNavItems },
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
    closeTimerRef.current = setTimeout(() => setOpen(false), 220);
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
      <div className="border-2 border-[#121212] bg-[#ffffff] shadow-[3px_3px_0px_#121212] overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex w-full items-center justify-between px-4 py-3.5 text-left font-mono text-sm uppercase tracking-wider font-bold transition-colors ${
            active ? "bg-[#6b0c26] text-white" : "bg-[#ffffff] text-[#121212] hover:bg-[#f4efe6]"
          }`}
          aria-expanded={open}
        >
          <span className="font-serif text-base tracking-normal font-bold capitalize">{label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="border-t-2 border-[#121212] bg-[#faf7f2] p-2 space-y-1">
            {items.map((item) => {
              const itemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={`flex flex-col p-2.5 border transition-all ${
                    itemActive
                      ? "border-[#121212] bg-[#6b0c26] text-white shadow-[2px_2px_0px_#121212]"
                      : "border-transparent text-[#121212] hover:border-[#121212] hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_#121212]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm font-sans">{item.label}</span>
                  </div>
                  <span className={`text-xs line-clamp-1 mt-0.5 ${itemActive ? "text-white/80" : "text-[#524d46]"}`}>
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
        className={`group inline-flex items-center gap-1.5 px-3 py-2 text-[13px] 2xl:px-4 2xl:py-2.5 2xl:text-[14px] font-bold uppercase tracking-wider font-mono transition-all duration-150 ${
          active || open
            ? "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212] border-2 border-[#121212]"
            : "text-[#121212] hover:bg-[#ffffff] hover:text-[#6b0c26] hover:border-2 hover:border-[#121212] hover:shadow-[3px_3px_0px_#121212] border-2 border-transparent"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="font-sans font-bold capitalize text-[14.5px]">{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-[#d97706]" : "opacity-60 group-hover:opacity-100"}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className={`overflow-hidden border-3 border-[#121212] bg-[#ffffff] p-3 shadow-[8px_8px_0px_#121212] ${
          isLarge ? "w-[36rem]" : "w-[24rem]"
        }`}>
          {/* Header Banner in Dropdown */}
          <div className="border-2 border-[#121212] bg-[#f4efe6] px-4 py-2.5 mb-2.5 flex items-center justify-between">
            <span className="font-serif font-bold text-sm text-[#121212] uppercase tracking-wide">
              {label} DIRECTORY
            </span>
            <Link
              href={rootHref}
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] font-bold text-[#6b0c26] hover:underline uppercase flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className={`${isLarge ? "grid grid-cols-2 gap-2" : "space-y-1.5"}`}>
            {items.map((item) => {
              const itemActive = pathname === item.href || (item.href !== rootHref && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-start gap-2.5 border-2 p-2.5 transition-all duration-150 ${
                    itemActive
                      ? "border-[#121212] bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212]"
                      : "border-transparent bg-[#faf7f2] hover:border-[#121212] hover:bg-[#ffffff] hover:shadow-[3px_3px_0px_#121212] text-[#121212]"
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-sans text-[13.5px] font-bold leading-tight group-hover:text-[#6b0c26] transition-colors">
                      {item.label}
                    </span>
                    <span className={`mt-1 block font-sans text-xs leading-snug line-clamp-1 ${
                      itemActive ? "text-white/80" : "text-[#524d46]"
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
    <div className="w-full bg-[#faf7f2] border-b-3 border-[#121212] relative z-40 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[82px] sm:h-[92px] items-center justify-between gap-4">
          {/* EDITORIAL SCHOOL LOGO & TYPOGRAPHIC BRAND */}
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-3.5 sm:gap-4"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 border-2 border-[#121212] bg-[#ffffff] p-1 shadow-[3px_3px_0px_#121212] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0px_#121212]">
              <Image
                src={siteLogo.src}
                alt={siteLogo.alt}
                fill
                className="object-contain p-1"
                sizes="(min-width: 640px) 64px, 56px"
                priority
              />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-2xl sm:text-[1.95rem] leading-none tracking-tight text-[#6b0c26] group-hover:text-[#121212] transition-colors uppercase">
                  Playpen
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] font-bold bg-[#d97706] text-[#121212] px-1.5 py-0.5 border border-[#121212] shadow-[1px_1px_0px_#000]">
                  EST. 1977
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#524d46] sm:text-[11px] mt-1">
                School of Excellence // Dhaka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center justify-center gap-0.5 xl:flex">
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
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[13px] 2xl:px-4 2xl:py-2.5 2xl:text-[14px] font-bold uppercase tracking-wider font-mono transition-all duration-150 ${
                    active
                      ? "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212] border-2 border-[#121212]"
                      : "text-[#121212] hover:bg-[#ffffff] hover:text-[#6b0c26] hover:border-2 hover:border-[#121212] hover:shadow-[3px_3px_0px_#121212] border-2 border-transparent"
                  }`}
                >
                  <span className="font-sans font-bold capitalize text-[14.5px]">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Brutalist Apply Button */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/admissions/apply"
              className="group inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-[#121212] hover:text-white px-4 sm:px-5 py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all"
            >
              <Sparkles className="h-4 w-4 text-[#121212] group-hover:text-white group-hover:rotate-12 transition-transform" />
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="inline-flex border-2 border-[#121212] bg-[#ffffff] p-2.5 text-[#121212] shadow-[3px_3px_0px_#121212] hover:bg-[#f4efe6] transition xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6 text-[#6b0c26]" /> : <Menu className="h-6 w-6" />}
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
            <nav className="border-t-3 border-[#121212] py-5 bg-[#faf7f2] my-2">
              <div className="flex max-h-[75vh] flex-col gap-2.5 overflow-y-auto pr-1">
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
                      className={`flex items-center justify-between border-2 border-[#121212] px-4 py-3.5 font-bold transition ${
                        active
                          ? "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212]"
                          : "bg-[#ffffff] text-[#121212] hover:bg-[#f4efe6] shadow-[3px_3px_0px_#121212]"
                      }`}
                    >
                      <span className="font-serif text-base">{item.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-70" />
                    </Link>
                  );
                })}

                <div className="mt-3 pt-3 border-t-2 border-[#121212] flex flex-col gap-2.5">
                  <a
                    href="https://portal.playpen.edu.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 border-2 border-[#121212] bg-[#ffffff] py-3 font-mono text-xs font-bold text-[#121212] uppercase tracking-wider shadow-[3px_3px_0px_#121212] hover:bg-[#f4efe6]"
                  >
                    <span>Student Portal Login</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href="/portal/admin"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 border-2 border-[#121212] bg-[#6b0c26] py-3 font-mono text-xs font-bold text-white uppercase tracking-wider shadow-[3px_3px_0px_#121212] hover:bg-[#400414]"
                  >
                    <span>Admin Portal</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
