"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: 5000,
    suffix: '+',
    label: 'Happy Students',
    iconBg: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary',
    bar: 'from-primary to-primary/70',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Expert Teachers',
    iconBg: 'from-secondary/20 to-secondary/10',
    iconColor: 'text-secondary-foreground',
    bar: 'from-secondary to-amber-400',
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Awards Won',
    iconBg: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary',
    bar: 'from-primary to-primary/70',
  },
  {
    icon: BookOpen,
    value: 25,
    suffix: '',
    label: 'Years of Excellence',
    iconBg: 'from-secondary/20 to-secondary/10',
    iconColor: 'text-secondary-foreground',
    bar: 'from-secondary to-amber-400',
  },
];

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const CountUp = ({ end, duration = 2200 }: { end: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const spring = useSpring(0, { stiffness: 40, damping: 18, mass: 0.8 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => spring.set(end), 120);
    return () => clearTimeout(timeout);
  }, [isInView, end, spring, duration]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
      {/* Soft white ambient layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          className="mb-12 text-center md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm"
          >
            Our Impact
          </motion.span>
          <h2 className="mt-5 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Numbers That Define{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Decades of trust, growth, and outstanding achievements across our school community.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.35, ease: easeSmooth },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:border-primary/20 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] sm:p-7"
            >
              {/* Top shine on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Subtle corner glow */}
              <motion.div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${stat.iconBg} opacity-40 blur-2xl`}
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              />

              <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <motion.div
                  whileHover={{ rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.5, ease: easeSmooth }}
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-br shadow-sm ${stat.iconBg}`}
                >
                  <stat.icon className={`h-7 w-7 ${stat.iconColor}`} strokeWidth={1.75} />
                </motion.div>

                <div className="font-serif text-4xl font-bold tabular-nums tracking-tight text-foreground sm:text-[2.75rem]">
                  <CountUp end={stat.value} />
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: easeSmooth }}
                  >
                    {stat.suffix}
                  </motion.span>
                </div>

                <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                  {stat.label}
                </p>

                {/* Animated progress line */}
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      width: { delay: 0.4 + index * 0.12, duration: 1.2, ease: easeSmooth },
                      opacity: { delay: 0.4 + index * 0.12, duration: 0.4 },
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.3 }}
          className="mx-auto mt-12 h-px max-w-sm origin-center bg-gradient-to-r from-transparent via-primary/25 to-transparent sm:mt-14"
        />
      </div>
    </section>
  );
};
