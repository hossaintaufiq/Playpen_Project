import Link from "next/link";
import {
  Bell,
  Briefcase,
  Calendar,
  ExternalLink,
  GraduationCap,
  ImageIcon,
  Images,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Trophy,
  Users,
} from "lucide-react";
import { adminNavGroups, adminNavItems } from "@/lib/admin-nav";
import type { AdminNavIcon } from "@/lib/admin-nav";

const icons: Record<AdminNavIcon, typeof LayoutDashboard> = {
  layout: LayoutDashboard,
  image: ImageIcon,
  megaphone: Megaphone,
  bell: Bell,
  calendar: Calendar,
  gallery: Images,
  users: Users,
  briefcase: Briefcase,
  trophy: Trophy,
  graduation: GraduationCap,
};

function NavLink({
  item,
  active,
}: {
  item: (typeof adminNavItems)[number];
  active: boolean;
}) {
  const Icon = icons[item.icon];

  return (
    <Link
      href={item.href}
      className={`block rounded-xl px-3 py-3 transition ${
        active
          ? "bg-white text-primary shadow-sm"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
            active ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold">{item.label}</span>
          {item.group && (
            <span className={`mt-0.5 block truncate text-[11px] ${active ? "text-primary/70" : "text-white/55"}`}>
              {item.whereOnSite}
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}

export function AdminSidebar({ currentPath }: { currentPath: string }) {
  const dashboardItem = adminNavItems[0];
  const groupedItems = adminNavGroups.map((group) => ({
    ...group,
    items: adminNavItems.filter((item) => item.group === group.id),
  }));

  return (
    <aside className="flex w-full flex-col bg-[#5a0000] lg:sticky lg:top-16 lg:h-full lg:w-72 lg:shrink-0">
      <div className="px-5 py-5">
        <p className="font-serif text-xl font-semibold text-white">Playpen Admin</p>
        <p className="mt-1 text-xs leading-relaxed text-white/65">
          Update the school website — simple steps, no coding needed.
        </p>
      </div>

      <nav className="scrollbar-none flex-1 space-y-5 overflow-y-auto p-3">
        <div>
          <NavLink item={dashboardItem} active={currentPath === dashboardItem.href} />
        </div>

        {groupedItems.map((group) => (
          <div key={group.id}>
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink key={item.href} item={item} active={currentPath === item.href} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-3">
        <Link
          href="/"
          target="_blank"
          className="mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
          View live website
        </Link>
        <button
          type="button"
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            window.location.href = "/portal/admin";
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
