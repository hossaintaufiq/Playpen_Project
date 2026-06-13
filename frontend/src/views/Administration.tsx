"use client";

import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, BookOpen, Users, Lightbulb, Shield, Clock, GraduationCap } from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Mr. A. Mannan Khan',
    position: 'Chairman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description: 'A visionary leader committed to educational excellence and community development.'
  },
  {
    name: 'Mrs. Sorabon Tohura',
    position: 'Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    description: 'Dedicated to nurturing young minds and fostering a culture of academic excellence.'
  },
  {
    name: 'Mrs. Zeba Khan',
    position: 'Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    description: 'The visionary founder who established Playpen in 1977 with a commitment to quality education.'
  },
  {
    name: 'Mr. Rafiq Ahmed',
    position: 'Vice Principal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    description: 'Overseeing academic programs and ensuring educational standards are maintained.'
  }
];

const coreValues = [
  { icon: BookOpen, title: 'Excellence', description: 'Striving for the highest standards in education' },
  { icon: Heart, title: 'Integrity', description: 'Upholding honesty and ethical behavior' },
  { icon: Users, title: 'Community', description: 'Building strong bonds and social responsibility' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing creative and forward-thinking approaches' },
  { icon: Shield, title: 'Respect', description: 'Valuing diversity and treating all with dignity' },
  { icon: GraduationCap, title: 'Growth', description: 'Fostering continuous learning and development' }
];

const milestones = [
  { year: '1977', title: 'Foundation', description: 'Playpen was founded by Mrs. Zeba Khan as a Kindergarten' },
  { year: '1998', title: 'Expansion', description: 'Expanded to Primary Level education' },
  { year: '2003', title: 'O-Level', description: 'First O-Level candidates with outstanding results' },
  { year: '2013', title: 'A-Level', description: 'Introduction of A-Level classes' },
  { year: '2020', title: 'Digital Era', description: 'Complete digital transformation of learning' },
  { year: '2024', title: 'Excellence', description: 'Celebrating 47 years of educational excellence' }
];

const Administration = () => {
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
              About Playpen
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              School Administration
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              48 Years of Excellence in Education - Shaping Future Leaders Since 1977
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                We Assure You of the Best Possible Care and Education for Your Child
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since its inception in 1977, Playpen has come a long way to be transformed into one of the leading 
                English Medium Schools in Bangladesh. Playpen was founded by the prominent Educationalist Mrs. Zeba Khan.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Although it saw a humble beginning as a Kindergarten in 1977, by 1998, it had expanded to Primary Level 
                and went on to transform into a Senior School. In 2003, Playpen sent its first candidate to sit for 
                the O'Level Examination. Commendably, the candidate attained "A" Grades in all seven subjects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A'Level Classes were introduced in 2013, and today Playpen follows the Cambridge Curriculum from 
                Elementary Level through Advanced Levels, preparing students to become Global Citizens of the 21st Century.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
                alt="Playpen School"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">48+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Developing skills and preparing our pupils to meet the challenges to become Global Citizens of the 21st Century.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Nursing our pupils to be acquainted with Human Rights and having sound knowledge of Democracy.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Enabling our pupils to advance towards the future and indulge in Economical Activities successfully.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Educating our pupils to establish and be part of a Logical and Analytical Society.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To realize the full potential, children need to be given a well-balanced programme in a creative 
                learning environment. Playpen was born with this in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision creating versatile talents with perfect mindsets, successfully integrating modern and 
                traditional curriculum to develop inner creativity and leadership. Our goal is to nurture wholesome 
                body and mind through comprehensive education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders guiding Playpen towards continued excellence in education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold text-foreground">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <Clock className="w-5 h-5" />
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              History & Milestones
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-lg inline-block">
                      <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Administration;
