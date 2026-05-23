import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Trophy, Music, Users, Palette, FlaskConical, CreditCard, 
  GraduationCap, Monitor, Heart, BookOpen, Bus, Calendar
} from 'lucide-react';

const studentLifeCategories = [
  {
    id: 'sports',
    title: 'Annual Sports',
    icon: Trophy,
    color: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1461896836934- voices?w=600',
    description: 'Our annual sports events bring together students from all levels to compete in athletics, football, basketball, cricket, and more. We believe in nurturing both physical and mental strength.',
    features: ['Inter-house competitions', 'District level participation', 'Professional coaching', 'Indoor and outdoor games']
  },
  {
    id: 'eca',
    title: 'Extra Curricular Activities',
    icon: Music,
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600',
    description: 'Beyond academics, students engage in diverse activities including music, dance, drama, debate, and public speaking to develop well-rounded personalities.',
    features: ['Music & choir', 'Drama club', 'Debate society', 'Art workshops']
  },
  {
    id: 'community',
    title: 'Community Service',
    icon: Users,
    color: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    description: 'Our Community Service Club organizes various humanitarian activities including blanket distribution, eye surgery camps, and educational outreach programs.',
    features: ['Winter clothing drives', 'Phaco eye surgery support', 'Rural education programs', 'Environmental initiatives']
  },
  {
    id: 'cultural',
    title: 'Cultural Programme',
    icon: Palette,
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600',
    description: 'Celebrating Bengali culture and heritage through events like Pitha Utshob, Pohela Boishakh, and various cultural festivals throughout the year.',
    features: ['Pitha Utshob', 'Pohela Boishakh celebration', 'Independence Day programs', 'Victory Day events']
  },
  {
    id: 'science',
    title: 'Science Fair',
    icon: FlaskConical,
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
    description: 'Annual science exhibitions showcase student innovations and scientific discoveries. Students present projects on environmental science, technology, and research.',
    features: ['Innovation projects', 'Environmental science', 'Technology displays', 'Research presentations']
  },
  {
    id: 'online',
    title: 'Online Facility & Payment',
    icon: CreditCard,
    color: 'from-emerald-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
    description: 'Convenient online payment systems for tuition fees, exam fees, and other school charges. Easy access to academic resources and learning materials.',
    features: ['Online fee payment', 'Digital report cards', 'E-learning platform', 'Parent portal access']
  },
  {
    id: 'workshop',
    title: 'Workshop for Students',
    icon: GraduationCap,
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
    description: 'Regular workshops on career guidance, life skills, leadership development, and academic excellence to prepare students for their future.',
    features: ['Career counseling', 'Leadership training', 'Study skills', 'Time management']
  },
  {
    id: 'multimedia',
    title: 'Multimedia Projector',
    icon: Monitor,
    color: 'from-violet-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600',
    description: 'State-of-the-art multimedia facilities in every classroom with smart boards, projectors, and audio-visual equipment for interactive learning.',
    features: ['Smart boards', 'Interactive displays', 'Audio-visual learning', 'Digital presentations']
  },
  {
    id: 'health',
    title: 'Health Center',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600',
    description: 'On-campus health center with trained medical staff for first aid, regular health checkups, and emergency care. Annual health camps by professional doctors.',
    features: ['First aid service', 'Regular checkups', 'Emergency care', 'Health awareness programs']
  },
  {
    id: 'bookshop',
    title: 'The School Bookshop',
    icon: BookOpen,
    color: 'from-yellow-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    description: 'Well-stocked bookshop providing all required textbooks, stationery, uniforms, and school supplies at reasonable prices.',
    features: ['Cambridge textbooks', 'School stationery', 'Uniform items', 'Reference books']
  },
  {
    id: 'transport',
    title: 'School Transportation',
    icon: Bus,
    color: 'from-slate-500 to-gray-700',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
    description: 'Safe and comfortable school bus service covering major routes across Dhaka. GPS-tracked buses with trained drivers and attendants.',
    features: ['GPS tracking', 'Multiple routes', 'Trained staff', 'Air-conditioned buses']
  }
];

const upcomingEvents = [
  { date: 'Sep 20', event: 'Parents-Teachers Meeting', type: 'Meeting' },
  { date: 'Oct 15', event: 'Annual Sports Day', type: 'Sports' },
  { date: 'Nov 10', event: 'Science Fair 2026', type: 'Academic' },
  { date: 'Dec 16', event: 'Victory Day Celebration', type: 'Cultural' }
];

const StudentLife = () => {
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
              Beyond Academics
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Student Life at Playpen
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover a vibrant campus life filled with sports, culture, community service, and endless opportunities for growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <Calendar className="w-5 h-5" />
              Life at Playpen
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Explore Student Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From sports to arts, community service to technology - there's something for everyone at Playpen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentLifeCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl text-center shadow-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">{event.date}</div>
                <h3 className="font-semibold text-foreground mb-2">{event.event}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary">
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Be Part of Our Vibrant Community
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              At Playpen, we believe in holistic development. Join us and discover your true potential beyond the classroom.
            </p>
            <a
              href="/admission"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              Apply for Admission
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLife;
