"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
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
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 hero-overlay" />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div className="max-w-3xl">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground text-sm font-semibold rounded-full mb-6"
                  >
                    Welcome to Playpen School
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
                  >
                    {slide.title}
                    <span className="block text-secondary">{slide.subtitle}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-primary-foreground/90 mb-8 max-w-xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link href={slide.link}>
                      <Button variant="hero" size="xl">
                        {slide.cta}
                      </Button>
                    </Link>
                    <Button variant="glass" size="xl">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Video
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/30 transition-all group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/30 transition-all group z-10"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-10 bg-secondary' 
                : 'w-3 bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
