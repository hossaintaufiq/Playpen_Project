"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Nurturing Young Minds',
    subtitle: 'For a Brighter Future',
    description: 'Where every child discovers their potential through innovative learning, creativity, and care.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
    cta: 'Start Your Journey',
    link: '/admission',
  },
  {
    id: 2,
    title: 'Excellence in Education',
    subtitle: 'Since 1995',
    description: 'Building tomorrow\'s leaders with world-class curriculum and dedicated educators.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80',
    cta: 'Explore Programs',
    link: '/academics',
  },
  {
    id: 3,
    title: 'A Campus Full of',
    subtitle: 'Possibilities',
    description: 'State-of-the-art facilities designed to inspire learning, creativity, and growth.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80',
    cta: 'Virtual Tour',
    link: '/about#campus',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[92vh] min-h-[640px] max-h-[920px] overflow-hidden bg-primary">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-16 bottom-32 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {/* Background Image with Ken Burns */}
              <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: 'easeOut' }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
                <div className="absolute inset-0 hero-overlay opacity-80" />
              </motion.div>

              {/* Content */}
              <div className="relative z-[2] flex h-full items-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-md"
                    >
                      <Sparkles className="h-4 w-4 text-secondary" />
                      Welcome to Playpen School
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.7 }}
                      className="mb-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                      {slide.title}
                      <span className="mt-1 block bg-gradient-to-r from-secondary via-amber-300 to-secondary bg-clip-text text-transparent">
                        {slide.subtitle}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      className="mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg md:text-xl"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.7 }}
                      className="flex flex-wrap items-center gap-3 sm:gap-4"
                    >
                      <Link href={slide.link}>
                        <Button
                          variant="hero"
                          size="xl"
                          className="shadow-gold transition-transform duration-300 hover:scale-[1.03]"
                        >
                          {slide.cta}
                        </Button>
                      </Link>
                      <Button
                        variant="glass"
                        size="xl"
                        className="border border-primary-foreground/25 backdrop-blur-md transition-all duration-300 hover:border-primary-foreground/40 hover:bg-white/20"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Video
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slide counter */}
      <div className="absolute bottom-28 left-4 z-10 hidden font-mono text-sm text-primary-foreground/70 sm:left-8 md:block">
        <span className="text-2xl font-semibold text-primary-foreground">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="mx-2 text-primary-foreground/40">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary-foreground/35 hover:bg-primary-foreground/20 sm:left-6 md:left-8 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary-foreground/35 hover:bg-primary-foreground/20 sm:right-6 md:right-8 md:h-12 md:w-12"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-12 bg-primary-foreground/25'
                : 'w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
          >
            {index === currentSlide && isAutoPlaying && (
              <motion.span
                key={currentSlide}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute inset-y-0 left-0 rounded-full bg-secondary"
              />
            )}
            {index === currentSlide && !isAutoPlaying && (
              <span className="absolute inset-0 rounded-full bg-secondary" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-36 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Decorative ring */}
      <div className="pointer-events-none absolute -right-24 top-1/4 z-[1] hidden h-80 w-80 rounded-full border border-primary-foreground/10 lg:block" />
      <div className="pointer-events-none absolute -right-12 top-[30%] z-[1] hidden h-56 w-56 rounded-full border border-secondary/20 lg:block" />
    </section>
  );
};
