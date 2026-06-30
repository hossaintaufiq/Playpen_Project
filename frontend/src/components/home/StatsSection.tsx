import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

const stats = [
  { icon: GraduationCap, value: 5000, suffix: '+', label: 'Happy Students', color: 'text-secondary' },
  { icon: Users, value: 200, suffix: '+', label: 'Expert Teachers', color: 'text-accent' },
  { icon: Award, value: 50, suffix: '+', label: 'Awards Won', color: 'text-secondary' },
  { icon: BookOpen, value: 25, suffix: '', label: 'Years of Excellence', color: 'text-accent' },
];

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-primary-foreground animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-primary-foreground animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/10 mb-4 ${stat.color}`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 font-serif">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
