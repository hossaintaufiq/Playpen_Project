"use client";

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, GraduationCap, Calendar, FileText,
  Image, Settings, Bell, LogOut, Menu, BookOpen
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Students', path: '/admin/students' },
  { icon: GraduationCap, label: 'Teachers', path: '/admin/teachers' },
  { icon: Calendar, label: 'Schedule', path: '/admin/schedule' },
  { icon: FileText, label: 'Admissions', path: '/admin/admissions' },
  { icon: Image, label: 'Gallery', path: '/admin/gallery' },
  { icon: BookOpen, label: 'Academics', path: '/admin/academics' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [pathname, isMobile]);

  const handleLogout = async () => {
    await signOut();
    // navigate('/admin/login'); // login disabled for now
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-muted/40 via-background to-muted/20">
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-primary-foreground/10 bg-primary text-primary-foreground shadow-xl transition-all duration-300 lg:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:w-20 lg:translate-x-0'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-primary-foreground/10 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary shadow-md">
            <span className="font-serif font-bold text-secondary-foreground">P</span>
          </div>
          {sidebarOpen && (
            <div>
              <span className="font-serif text-xl font-bold">Playpen</span>
              <p className="text-xs text-primary-foreground/60">Admin Panel</p>
            </div>
          )}
        </div>

        <nav className="mt-4 px-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative mb-1 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-foreground/15 text-primary-foreground shadow-sm'
                    : 'text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-secondary" />
                )}
                <item.icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-0 right-0 px-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/60 bg-card/80 px-6 py-4 backdrop-blur-md">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-xl p-2.5 transition-colors hover:bg-muted"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2.5 transition-colors hover:bg-muted">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
            </button>
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 py-1.5 pl-1.5 pr-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient shadow-sm">
                <span className="text-sm font-semibold text-primary-foreground">A</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium leading-tight">{user?.email}</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};
