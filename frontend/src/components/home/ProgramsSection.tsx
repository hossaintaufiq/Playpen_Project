"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Palette, BookOpen, Rocket, Brain, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const programs = [
  {
    icon: Sparkles,
    title: 'Play Group',
    age: 'Age 2-3 Years',
    description: 'A gentle introduction to learning through play, songs, and sensory activities.',
    features: ['Sensory Play', 'Music & Movement', 'Social Skills'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Palette,
    title: 'Nursery',
    age: 'Age 3-4 Years',
    description: 'Developing foundational skills through creative exploration and guided activities.',
    features: ['Art & Craft', 'Early Literacy', 'Number Concepts'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: BookOpen,
    title: 'Kindergarten',
    age: 'Age 4-5 Years',
    description: 'Building confidence and preparing for primary school with structured learning.',
    features: ['Reading Readiness', 'Writing Skills', 'Critical Thinking'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Primary',
    age: 'Grade 1-5',
    description: 'Comprehensive curriculum fostering academic excellence and character development.',
    features: ['Core Subjects', 'STEM Education', 'Sports & Arts'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'Junior School',
    age: 'Grade 6-8',
    description: 'Challenging academics with emphasis on research, projects, and leadership.',
    features: ['Advanced Learning', 'Leadership', 'Research Projects'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Special Programs',
    age: 'All Ages',
    description: 'Extra-curricular activities including music, art, sports, and language classes.',
    features: ['Music Academy', 'Sports Club', 'Language Lab'],
    color: 'from-red-500 to-pink-500',
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Tailored Learning for Every Age
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From playful beginnings to academic excellence, we offer comprehensive programs 
            designed to nurture every child's unique potential.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-lg hover-lift border border-border overflow-hidden relative"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color}`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${program.color} mb-4`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <span className="text-sm text-muted-foreground">{program.age}</span>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3 mt-1">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link 
                href="/academics" 
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/admission">
            <Button variant="hero" size="xl">
              Enroll Your Child Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
