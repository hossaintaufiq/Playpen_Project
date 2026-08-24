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
  Shield,
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
      className={`group relative block rounded-xl px-3.5 py-3 transition-all duration-300 ${
        active
          ? "bg-white/[0.06] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
          : "text-white/70 hover:bg-white/[0.03] hover:text-white"
      }`}
    >
      {/* Active Left Indicator Bar */}
      {active && (
        <span className="absolute top-2 bottom-2 left-0 w-1 rounded-r-md bg-accent shadow-[0_0_8px_#c9a227]" />
      )}
      
      <span className="flex items-center gap-3">
        <span
          className={`flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
            active 
              ? "bg-primary/25 text-accent shadow-[0_0_12px_rgba(128,0,0,0.2)]" 
              : "bg-white/[0.04] text-white/60 group-hover:bg-white/[0.08] group-hover:text-white group-hover:scale-105"
          }`}
        >
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium tracking-wide transition-colors group-hover:text-white">
            {item.label}
          </span>
          {item.group && (
            <span className={`mt-0.5 block truncate text-[10px] tracking-wide transition-colors ${
              active ? "text-accent/80 font-medium" : "text-white/40 group-hover:text-white/65"
            }`}>
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
    <aside className="flex w-full flex-col bg-[#120505] border-b border-white/[0.06] lg:sticky lg:top-16 lg:h-full lg:w-72 lg:shrink-0 lg:border-b-0 lg:border-r lg:border-white/[0.06]">
      {/* Brand Section */}
      <div className="px-6 py-6 border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_2px_10px_rgba(128,0,0,0.4)]">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="font-serif text-lg font-semibold tracking-wide text-white">Playpen Admin</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Connected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="scrollbar-none flex-1 space-y-6 overflow-y-auto p-4">
        <div>
          <NavLink item={dashboardItem} active={currentPath === dashboardItem.href} />
        </div>

        {groupedItems.map((group) => (
          <div key={group.id} className="space-y-1.5">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
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

      {/* Footer / Actions Section */}
      <div className="p-4 border-t border-white/[0.04] bg-white/[0.01] space-y-1">
        <Link
          href="/"
          target="_blank"
          className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 transition-all hover:bg-white/[0.04] hover:text-white"
        >
          <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-accent transition-colors" />
          <span>View live website</span>
        </Link>
        <button
          type="button"
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            window.location.href = "/portal/admin";
          }}
          className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 transition-all hover:bg-red-950/20 hover:text-red-300"
        >
          <LogOut className="h-4 w-4 text-white/40 group-hover:text-red-400 transition-colors" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
