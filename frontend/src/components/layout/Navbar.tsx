"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portal", href: "/portal" },
];

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
    <div className="playpen-bg">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 sm:h-10 sm:w-10">
              <span className="font-serif text-base font-bold text-white sm:text-lg">P</span>
            </div>
            <div className="min-w-0">
              <p className="truncate font-serif text-base font-bold leading-tight text-white sm:text-lg">
                Playpen
              </p>
              <p className="hidden truncate text-[10px] uppercase tracking-widest text-white/70 sm:block">
                School of Excellence
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors lg:px-3 ${
                    active
                      ? "bg-white/15 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/admissions"
              className="playpen-text hidden rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-white/90 sm:inline-flex sm:px-4 sm:py-2 sm:text-sm"
            >
              Apply Now
            </Link>

            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-white transition hover:bg-white/10 xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="playpen-bg-dark border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium ${
                        active ? "bg-white/15 text-white" : "text-white/85 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/admissions"
                  onClick={() => setOpen(false)}
                  className="playpen-text mt-1 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-primary sm:hidden"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
