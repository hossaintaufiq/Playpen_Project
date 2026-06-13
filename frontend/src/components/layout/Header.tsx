"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'About Us', 
    path: '/about',
    children: [
      { label: 'Campus', path: '/campus' },
      { label: 'School Administration', path: '/administration' },
      { label: 'Career & Contact', path: '/career' },
    ]
  },
  { 
    label: 'Academics', 
    path: '/academics',
    children: [
      { label: 'Schools', path: '/schools' },
      { label: 'Achievements', path: '/achievements' },
    ]
  },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Admission', path: '/admission' },
  { label: 'Gallery', path: '/gallery' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+8801234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              +880 1234-567890
            </a>
            <a href="mailto:info@playpen.edu.bd" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              info@playpen.edu.bd
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Dhaka, Bangladesh
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-card/95 backdrop-blur-md shadow-lg' 
            : 'bg-card'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-serif">P</span>
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl text-primary">Playpen</h1>
                <p className="text-xs text-muted-foreground">School of Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                      pathname === item.path 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.path}
                            className="block px-4 py-3 text-sm hover:bg-primary/5 hover:text-primary transition-colors border-b border-border last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/admission">
                <Button variant="hero" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="lg">
                  Portal
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link 
                        href={item.path}
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 border-l-2 border-border pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.path}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                  <Link href="/admission">
                    <Button variant="hero" className="w-full">Apply Now</Button>
                  </Link>
                  <Link href="/admin">
                    <Button variant="outline" className="w-full">Portal</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
