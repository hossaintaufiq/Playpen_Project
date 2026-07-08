import Link from "next/link";
import {
  Bell,
  Briefcase,
  Calendar,
  GraduationCap,
  ImageIcon,
  Images,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Users,
} from "lucide-react";
import { adminNavItems } from "@/lib/admin-nav";

const icons = {
  layout: LayoutDashboard,
  image: ImageIcon,
  megaphone: Megaphone,
  bell: Bell,
  calendar: Calendar,
  gallery: Images,
  users: Users,
  briefcase: Briefcase,
  graduation: GraduationCap,
} as const;

export function AdminSidebar({ currentPath }: { currentPath: string }) {
  return (
    <aside className="flex w-full flex-col border-r border-border/60 bg-white lg:min-h-[calc(100dvh-64px)] lg:w-64">
      <div className="border-b border-border/60 px-5 py-5">
        <p className="font-serif text-lg font-semibold text-primary">Playpen Admin</p>
        <p className="mt-1 text-xs text-muted-foreground">Content management portal</p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {adminNavItems.map((item) => {
          const Icon = icons[item.icon];
          const active = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-3">
        <form action="/api/admin/logout" method="post">
          <button
            type="button"
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" });
              window.location.href = "/portal/admin";
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </form>
        <Link
          href="/"
          className="mt-1 block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          View website
        </Link>
      </div>
    </aside>
  );
}
