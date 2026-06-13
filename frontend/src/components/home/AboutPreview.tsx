"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
  'Child-centered learning approach',
  'Experienced and caring educators',
  'Modern facilities and resources',
  'Holistic development focus',
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80"
                alt="Students learning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 z-20">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                alt="Classroom"
                className="rounded-2xl shadow-2xl border-4 border-background"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
            <div className="absolute bottom-1/3 -left-16 w-24 h-24 bg-accent/20 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              About Playpen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Learning Meets{' '}
              <span className="text-gradient">Joy & Discovery</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 25 years, Playpen School has been a beacon of educational excellence 
              in Bangladesh. We believe every child is unique, and our mission is to nurture 
              their individual talents while building a strong foundation for lifelong learning.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="hero" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
