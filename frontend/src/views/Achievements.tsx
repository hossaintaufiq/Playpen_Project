"use client";

import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, GraduationCap, Globe, BookOpen, Users } from 'lucide-react';

const achievements = [
  {
    year: '2024',
    title: 'Cambridge Top Achievers',
    description: 'Multiple students recognized as Top in Bangladesh and Top in World for various subjects.',
    category: 'Academic',
    icon: Trophy
  },
  {
    year: '2024',
    title: 'Science Fair Champions',
    description: 'First place in the National Science Fair with innovative environmental project.',
    category: 'Competition',
    icon: Medal
  },
  {
    year: '2023',
    title: '100% O-Level Pass Rate',
    description: 'All O-Level candidates achieved passing grades with majority attaining A* and A grades.',
    category: 'Academic',
    icon: GraduationCap
  },
  {
    year: '2023',
    title: 'Inter-School Debate Champions',
    description: 'Won the prestigious National Debate Championship among 50+ schools.',
    category: 'Competition',
    icon: Star
  },
  {
    year: '2023',
    title: 'Sports Excellence Award',
    description: 'Multiple gold medals in district-level athletics and football tournaments.',
    category: 'Sports',
    icon: Medal
  },
  {
    year: '2022',
    title: 'Cambridge School Recognition',
    description: 'Recognized as a Center of Excellence by Cambridge Assessment International Education.',
    category: 'Recognition',
    icon: Award
  },
  {
    year: '2022',
    title: 'Community Service Award',
    description: 'Honored for outstanding community service initiatives and social impact.',
    category: 'Service',
    icon: Users
  },
  {
    year: '2021',
    title: 'Digital Learning Innovation',
    description: 'Successfully implemented comprehensive online learning during the pandemic.',
    category: 'Innovation',
    icon: Globe
  }
];

const stats = [
  { value: '500+', label: 'University Admissions', icon: GraduationCap },
  { value: '95%', label: 'A*-B Grade Rate', icon: Star },
  { value: '100+', label: 'Awards Won', icon: Trophy },
  { value: '48', label: 'Years of Excellence', icon: Award }
];

const alumniSuccess = [
  {
    name: 'Dr. Sarah Khan',
    achievement: 'Medical Doctor at Johns Hopkins',
    batch: '2010',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300'
  },
  {
    name: 'Ahmed Rahman',
    achievement: 'Software Engineer at Google',
    batch: '2012',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
  },
  {
    name: 'Fatima Begum',
    achievement: 'Rhodes Scholar at Oxford',
    batch: '2015',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300'
  },
  {
    name: 'Rafiq Islam',
    achievement: 'Investment Banker at Goldman Sachs',
    batch: '2011',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
  }
];

const Achievements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium mb-6">
              Our Pride
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Achievements & Recognition
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Celebrating excellence in academics, sports, arts, and community service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl text-center shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <Trophy className="w-5 h-5" />
              Recent Accomplishments
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Award-Winning Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {achievement.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs">
                    {achievement.category}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <GraduationCap className="w-5 h-5" />
              Alumni Success
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Where Are They Now?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our alumni are making their mark in prestigious institutions and organizations worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniSuccess.map((alumni, index) => (
              <motion.div
                key={alumni.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg text-center"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-foreground">{alumni.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{alumni.achievement}</p>
                  <p className="text-muted-foreground text-xs">Batch of {alumni.batch}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cambridge Recognition */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Cambridge Registered Centre
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Playpen is a registered Cambridge Assessment International Education centre, 
              providing internationally recognized qualifications that open doors to the world's best universities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-primary-foreground">O-Level</div>
                <div className="text-primary-foreground/80 text-sm">IGCSE Examinations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-primary-foreground">AS-Level</div>
                <div className="text-primary-foreground/80 text-sm">Advanced Subsidiary</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-primary-foreground">A-Level</div>
                <div className="text-primary-foreground/80 text-sm">Advanced Level</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
