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
  BookOpen,
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
  book: BookOpen,
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
      className={`group relative block rounded-lg px-3 py-2 transition-all duration-200 ${
        active
          ? "bg-white/[0.08] text-white shadow-sm"
          : "text-slate-200 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      {/* Active Left Indicator Bar */}
      {active && (
        <span className="absolute top-1.5 bottom-1.5 left-0 w-0.5 rounded-r bg-[#c9a227]" />
      )}
      
      <span className="flex items-center gap-2.5">
        <span
          className={`flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-md transition-all duration-200 ${
            active 
              ? "bg-[#800000] text-white" 
              : "bg-white/[0.04] text-white/50 group-hover:bg-white/[0.08] group-hover:text-white"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-bold tracking-wide transition-colors group-hover:text-white">
            {item.label}
          </span>
          {item.group && (
            <span className={`mt-0.5 block truncate text-[9px] tracking-wide transition-colors ${
              active ? "text-[#c9a227] font-semibold" : "text-white/40 group-hover:text-white/60"
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
    <aside className="flex w-full flex-col bg-[#240606] border-b border-white/[0.06] lg:sticky lg:top-16 lg:h-full lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:border-white/[0.06]">
      {/* Brand Section with Playpen Logo */}
      <div className="px-4.5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
            <img
              src="/logo/playpen-logo.png"
              alt="Playpen Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="font-serif text-sm font-semibold tracking-wide text-white">Playpen Admin</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="relative flex h-1 w-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
              </span>
              <p className="text-[8px] font-bold uppercase tracking-wider text-emerald-400">Connected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="scrollbar-none flex-1 space-y-4 overflow-y-auto p-3">
        <div>
          <NavLink item={dashboardItem} active={currentPath === dashboardItem.href} />
        </div>

        {groupedItems.map((group) => (
          <div key={group.id} className="space-y-0.5">
            <p className="px-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <NavLink key={item.href} item={item} active={currentPath === item.href} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer Tagline */}
      <div className="p-3 border-t border-white/[0.06] bg-white/[0.01] text-center">
        <p className="text-[8px] font-bold uppercase tracking-wider text-white/20">
          Playpen CMS v1.0
        </p>
      </div>
    </aside>
  );
}
