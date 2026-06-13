"use client";

import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { MapPin, Building2, Trees, Wifi, Shield, Car, Coffee, BookOpen, Microscope, Music, Palette, Dumbbell } from 'lucide-react';

const facilities = [
  {
    icon: Building2,
    title: 'Modern Classrooms',
    description: 'Air-conditioned classrooms equipped with smart boards and multimedia facilities for interactive learning.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600'
  },
  {
    icon: Microscope,
    title: 'Science Laboratories',
    description: 'State-of-the-art Physics, Chemistry, and Biology labs with modern equipment for practical experiments.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600'
  },
  {
    icon: BookOpen,
    title: 'Library & Resource Center',
    description: 'Extensive collection of books, journals, and digital resources to support academic excellence.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600'
  },
  {
    icon: Wifi,
    title: 'Computer Lab',
    description: 'High-speed internet connectivity and modern computers for ICT education and research.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600'
  },
  {
    icon: Dumbbell,
    title: 'Sports Complex',
    description: 'Indoor and outdoor sports facilities including basketball court, football field, and gymnasium.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600'
  },
  {
    icon: Music,
    title: 'Music Room',
    description: 'Dedicated space for music education with various instruments and sound equipment.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600'
  },
  {
    icon: Palette,
    title: 'Art Studio',
    description: 'Creative space for visual arts, crafts, and creative expression.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600'
  },
  {
    icon: Coffee,
    title: 'Cafeteria',
    description: 'Hygienic cafeteria serving nutritious meals and snacks for students and staff.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: '24/7 CCTV surveillance, trained security personnel, and comprehensive safety protocols.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'
  },
  {
    icon: Car,
    title: 'Transport Facility',
    description: 'Safe and comfortable school buses covering major routes across Dhaka.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600'
  },
  {
    icon: Trees,
    title: 'Green Campus',
    description: 'Eco-friendly environment with gardens and open spaces for outdoor activities.',
    image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?w=600'
  }
];

const Campus = () => {
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
              Our Campus
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Experience a modern learning environment designed to nurture creativity, innovation, and academic excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
                <MapPin className="w-5 h-5" />
                Our Location
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Located in the Heart of Dhaka
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Playpen is strategically located in a prime area of Dhaka, easily accessible from major neighborhoods. 
                Our campus spans a spacious area providing ample room for academic buildings, sports facilities, 
                and recreational spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">House 16, Road 4, Dhanmondi, Dhaka-1205, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Accessibility</h3>
                    <p className="text-muted-foreground">Near Dhanmondi Lake, with ample parking facilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2476!2d90.3738!3d23.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Playpen School Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              Campus Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Everything Your Child Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus is equipped with modern facilities to provide a comprehensive and enriching educational experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Experience Our Campus
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Schedule a visit to explore our world-class facilities and see why Playpen is the perfect choice for your child's education.
            </p>
            <a
              href="/admission"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              Schedule a Campus Tour
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Campus;
