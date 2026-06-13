"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const news = [
  {
    id: 1,
    category: 'Events',
    title: 'Annual Sports Day 2024',
    excerpt: 'Join us for an exciting day of athletics, team sports, and fun activities for all students and families.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    id: 2,
    category: 'Achievement',
    title: 'Students Win National Science Competition',
    excerpt: 'Our Grade 7 students brought home gold medals from the National Young Scientists Competition.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  },
  {
    id: 3,
    category: 'Announcement',
    title: 'New STEM Lab Opening Soon',
    excerpt: 'We are excited to announce the opening of our state-of-the-art STEM laboratory next month.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  },
];

export const NewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full mb-4"
            >
              News & Updates
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            >
              Latest From Playpen
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/news">
              <Button variant="outline" size="lg">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover-lift border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-muted-foreground">{item.date}</span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
