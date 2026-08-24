"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { getAdminNavItem } from "@/lib/admin-nav";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, LogOut, ChevronDown, Shield } from "lucide-react";
import Link from "next/link";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = getAdminNavItem(pathname);
  const isDashboard = pathname === "/portal/admin/dashboard";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSignOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/portal/admin";
  }

  return (
    <div className="relative min-h-screen bg-[#faf8f8] bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.05),transparent_60%)] lg:h-[calc(100dvh-64px)] lg:overflow-hidden">
      <div className="flex w-full flex-col lg:h-full lg:flex-row">
        <AdminSidebar currentPath={pathname} />
        
        <div className="min-w-0 flex-1 lg:flex lg:h-full lg:flex-col">
          {/* Header Action Bar */}
          <div className="h-14 border-b border-slate-100 bg-white/70 backdrop-blur-md px-6 flex items-center justify-between z-30 shrink-0">
            {/* Left Page Path */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <span className="hover:text-primary transition-colors cursor-pointer">Admin</span>
              <span>/</span>
              <span className="text-slate-700">
                {isDashboard ? "Dashboard" : section?.label ?? "Editor"}
              </span>
            </div>

            {/* Right Profile & Live site Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 shadow-sm transition-all"
              >
                <ExternalLink className="h-3 w-3 text-slate-400" />
                <span>View Live Site</span>
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1.5 rounded-lg p-1 hover:bg-slate-50 transition-all focus:outline-none"
                >
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[11px] border border-primary/5 shadow-sm">
                    AD
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-40 rounded-xl border border-slate-150 bg-white p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-2.5 py-1 border-b border-slate-50">
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Role</p>
                      <p className="text-[11px] font-bold text-slate-700 mt-0.5">Admin</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="mt-1 flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-[11px] font-bold text-red-650 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <main className="p-5 sm:p-6 lg:flex-1 lg:overflow-y-auto lg:p-8">
            <div className="mx-auto max-w-6xl w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
