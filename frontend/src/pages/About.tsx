import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CheckCircle, Users, Target, Eye, Award, GraduationCap, Heart, Star } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Nurturing Care', description: 'Every child is treated with love, respect, and individual attention.' },
  { icon: Star, title: 'Excellence', description: 'We strive for the highest standards in education and character building.' },
  { icon: Users, title: 'Community', description: 'Building strong bonds between students, parents, and educators.' },
  { icon: Award, title: 'Innovation', description: 'Embracing modern teaching methods while honoring traditional values.' },
];

const leadership = [
  { name: 'Dr. Fatima Rahman', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
  { name: 'Mohammad Karim', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Sarah Ahmed', role: 'Academic Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  { name: 'Abdul Hasan', role: 'Administrative Head', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
];

const milestones = [
  { year: '1995', title: 'Foundation', description: 'Playpen School was established with just 50 students.' },
  { year: '2000', title: 'First Expansion', description: 'New campus building inaugurated with modern facilities.' },
  { year: '2010', title: 'Excellence Award', description: 'Received National Education Excellence Award.' },
  { year: '2020', title: 'Digital Era', description: 'Full digital integration with smart classrooms.' },
  { year: '2024', title: 'Today', description: '5000+ students with state-of-the-art facilities.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-60 h-60 rounded-full border-2 border-primary-foreground animate-spin-slow" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Story of Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For over 25 years, Playpen School has been shaping the future of Bangladesh 
              through quality education and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a nurturing and stimulating environment where every child can 
                discover their potential, develop critical thinking skills, and grow into 
                responsible, compassionate global citizens. We are committed to excellence 
                in education while fostering creativity, character, and a love for lifelong learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading educational institution in Bangladesh, recognized for 
                producing well-rounded individuals who excel academically, think creatively, 
                and lead with integrity. We envision a community where education transforms 
                lives and empowers future generations to make a positive impact on the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              The principles that guide everything we do at Playpen School.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Our Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Dedicated educators committed to your child's success.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift border border-border group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground">{person.name}</h3>
                  <p className="text-muted-foreground">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
            >
              Our Journey
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 -translate-x-1/2 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                      <span className="text-secondary font-bold text-2xl">{milestone.year}</span>
                      <h3 className="font-serif text-xl font-bold text-primary-foreground mt-2">{milestone.title}</h3>
                      <p className="text-primary-foreground/80 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-secondary relative z-10" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Our Campus
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              State-of-the-art facilities designed for optimal learning.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
              'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
              'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80',
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
              'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
              'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
              'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
              'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-xl overflow-hidden ${index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={img}
                  alt="Campus"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
