import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const schools = [
  {
    id: 'elementary',
    name: 'Elementary School',
    subtitle: 'Playgroup – KG II',
    color: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    description: 'Playpen school follows the Cambridge Curriculum from the Elementary Level. The Curriculum aims to develop a child\'s moral, mental and physical capabilities.',
    highlights: [
      'Focus on basic learning tools and competency development',
      'Development of functional English as basic tool for learning',
      'Fine motor skills development through various activities',
      'Social skills development with teacher accompaniment',
      'Creative and playful learning environment'
    ],
    ageGroup: '3-6 years',
    classSize: '15-20 students'
  },
  {
    id: 'junior',
    name: 'Junior School',
    subtitle: 'Class I – III',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    description: 'At Playpen, the Junior Curriculum is structured in a way that students are never put under pressure. They are encouraged to learn at their own pace.',
    highlights: [
      'Strong foundation in English from Primary Level',
      'Development of interpersonal communication skills',
      'Social etiquette and good behavior nurturing',
      'Fundamental knowledge in Mathematics, Science, and Bangla',
      'Skills needed for next stages of learning'
    ],
    ageGroup: '6-9 years',
    classSize: '20-25 students'
  },
  {
    id: 'middle',
    name: 'Middle School',
    subtitle: 'Class IV – VII',
    color: 'from-purple-500 to-violet-600',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    description: 'Playpen prides itself in putting students\' educational needs on the forefront through innovative teaching techniques and strategies.',
    highlights: [
      'Dynamic learning through Core Subjects',
      'Technology integration for advanced skills',
      'Hands-on experience extending classroom learning',
      'Development of individual learning styles',
      'Encouragement to think outside the box'
    ],
    ageGroup: '9-13 years',
    classSize: '25-30 students'
  },
  {
    id: 'senior',
    name: 'Senior School',
    subtitle: 'Class VIII – XII (O/A Level)',
    color: 'from-primary to-rose-700',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
    description: 'In the Senior School, we prepare students for CAIE (Cambridge Assessment International Education) through O-Level, AS-Level and A-Level Examinations.',
    highlights: [
      'Cambridge Assessment International Education (CAIE)',
      'O-Level, AS-Level, and A-Level preparation',
      'International qualifications recognized worldwide',
      'Wide range of university and career options',
      'Balance of knowledge, understanding and skills'
    ],
    ageGroup: '13-18 years',
    classSize: '20-25 students'
  }
];

const Schools = () => {
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
              Academics
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Our Schools
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              From Elementary to Senior School - A Complete Cambridge Curriculum Journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schools Overview */}
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
              Cambridge Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Four Stages of Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Playpen follows the Cambridge Curriculum from Elementary Level right up to Advanced Levels, 
              ensuring a seamless educational journey.
            </p>
          </motion.div>

          <div className="space-y-16">
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full aspect-video object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${school.color} opacity-20`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-4">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="text-sm font-medium text-gray-800">Age: {school.ageGroup}</span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="text-sm font-medium text-gray-800">{school.classSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${school.color} text-white font-medium mb-4`}>
                    {school.subtitle}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{school.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{school.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {school.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/admission">
                    <Button variant="hero">
                      Apply Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join Playpen and give your child the best possible education. Admissions are open for the academic year 2025-2026.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admission">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/campus">
                <Button variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                  Visit Our Campus
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Schools;
