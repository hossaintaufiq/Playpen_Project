import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Mail, Phone, Linkedin, Award, BookOpen, GraduationCap } from 'lucide-react';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Ayesha Rahman',
    position: 'Principal & Head of Administration',
    department: 'Administration',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    experience: '25 years',
    education: 'Ph.D. in Education, University of Dhaka',
    specialization: 'Educational Leadership & Curriculum Development',
    bio: 'Dr. Ayesha Rahman has dedicated over two decades to transforming education in Bangladesh. Her visionary leadership has guided Playpen to become one of the most prestigious schools in the country.',
    achievements: ['National Education Excellence Award 2020', 'Published 15+ research papers', 'UNESCO Education Fellow'],
    email: 'principal@playpen.edu.bd',
    phone: '+880 1711-000001'
  },
  {
    id: 2,
    name: 'Mohammad Karim Uddin',
    position: 'Vice Principal & Senior Mathematics Teacher',
    department: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    experience: '20 years',
    education: 'M.Sc. in Mathematics, BUET',
    specialization: 'Advanced Calculus & Statistics',
    bio: 'Mr. Karim is renowned for making complex mathematical concepts accessible to students of all levels. His innovative teaching methods have produced numerous national math olympiad winners.',
    achievements: ['Best Teacher Award 2019', 'Math Olympiad Coach - 50+ medalists', 'Textbook Author'],
    email: 'karim@playpen.edu.bd',
    phone: '+880 1711-000002'
  },
  {
    id: 3,
    name: 'Dr. Fatima Begum',
    position: 'Head of Science Department',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    experience: '18 years',
    education: 'Ph.D. in Physics, Jahangirnagar University',
    specialization: 'Quantum Physics & Laboratory Sciences',
    bio: 'Dr. Fatima has revolutionized science education at Playpen with her hands-on experimental approach. Her students consistently excel in national science fairs and competitions.',
    achievements: ['Science Innovation Award 2021', 'Research Grant Recipient', 'STEM Education Pioneer'],
    email: 'fatima@playpen.edu.bd',
    phone: '+880 1711-000003'
  },
  {
    id: 4,
    name: 'Ahmed Hossain',
    position: 'Senior English Teacher',
    department: 'English',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    experience: '15 years',
    education: 'M.A. in English Literature, University of Dhaka',
    specialization: 'Creative Writing & British Literature',
    bio: 'Mr. Ahmed has a passion for nurturing young writers and helping students develop strong communication skills. His creative writing workshops are highly popular among students.',
    achievements: ['Published Novelist', 'Debate Team Coach - National Champions', 'Cambridge Certified Trainer'],
    email: 'ahmed@playpen.edu.bd',
    phone: '+880 1711-000004'
  },
  {
    id: 5,
    name: 'Sultana Razia',
    position: 'Head of Bengali Department',
    department: 'Bengali',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    experience: '22 years',
    education: 'M.A. in Bangla, Rajshahi University',
    specialization: 'Bengali Literature & Cultural Studies',
    bio: 'Sultana Razia is dedicated to preserving and promoting Bengali language and culture among the younger generation. Her classes bring classical literature to life.',
    achievements: ['Bangla Academy Award Nominee', 'Cultural Ambassador', 'Poetry Collection Author'],
    email: 'sultana@playpen.edu.bd',
    phone: '+880 1711-000005'
  },
  {
    id: 6,
    name: 'Dr. Rafiqul Islam',
    position: 'Senior Biology Teacher',
    department: 'Science',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    experience: '16 years',
    education: 'Ph.D. in Molecular Biology, University of Cambridge',
    specialization: 'Genetics & Biotechnology',
    bio: 'Dr. Rafiqul brings international research experience to the classroom. His innovative biology labs and field trips make learning an adventure for students.',
    achievements: ['International Research Publications', 'Biology Olympiad Mentor', 'Environmental Education Award'],
    email: 'rafiqul@playpen.edu.bd',
    phone: '+880 1711-000006'
  },
  {
    id: 7,
    name: 'Nusrat Jahan',
    position: 'Computer Science Teacher',
    department: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
    experience: '10 years',
    education: 'M.Sc. in Computer Science, BRAC University',
    specialization: 'Programming & Artificial Intelligence',
    bio: 'Nusrat is passionate about preparing students for the digital future. Her coding bootcamps and robotics club have inspired many young tech enthusiasts.',
    achievements: ['Google Certified Educator', 'Robotics Team Coach', 'App Development Workshop Leader'],
    email: 'nusrat@playpen.edu.bd',
    phone: '+880 1711-000007'
  },
  {
    id: 8,
    name: 'Mizanur Rahman',
    position: 'Physical Education Director',
    department: 'Physical Education',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    experience: '14 years',
    education: 'M.P.Ed., BKSP',
    specialization: 'Sports Science & Athletic Training',
    bio: 'Coach Mizan has trained numerous national-level athletes. His comprehensive sports program ensures students develop physical fitness alongside academic excellence.',
    achievements: ['National Cricket Coach', 'Sports Excellence Award', 'Youth Athletic Development Expert'],
    email: 'mizan@playpen.edu.bd',
    phone: '+880 1711-000008'
  },
  {
    id: 9,
    name: 'Sharmin Akter',
    position: 'Art & Music Teacher',
    department: 'Arts',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    experience: '12 years',
    education: 'M.F.A., Charukala Institute, University of Dhaka',
    specialization: 'Visual Arts & Classical Music',
    bio: 'Sharmin believes in nurturing creativity in every child. Her art exhibitions and music recitals showcase the incredible talents of Playpen students.',
    achievements: ['National Art Exhibition Winner', 'Music Program Director', 'Cultural Event Organizer'],
    email: 'sharmin@playpen.edu.bd',
    phone: '+880 1711-000009'
  }
];

const departments = ['All', 'Administration', 'Mathematics', 'Science', 'English', 'Bengali', 'Computer Science', 'Physical Education', 'Arts'];

export default function Faculty() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-secondary animate-float" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/50 animate-float delay-300" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Distinguished Faculty
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Meet the dedicated educators who inspire excellence and nurture the leaders of tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, value: '50+', label: 'Expert Teachers' },
              { icon: Award, value: '100+', label: 'Awards Won' },
              { icon: BookOpen, value: '15+', label: 'Avg. Experience' },
              { icon: GraduationCap, value: '95%', label: 'Masters/PhD' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-xl shadow-md"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our faculty members bring a wealth of knowledge, experience, and passion to create an enriching learning environment
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground first:bg-primary first:text-primary-foreground"
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Faculty Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl shadow-lg overflow-hidden hover-lift border border-border"
              >
                {/* Image & Basic Info */}
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      {faculty.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {faculty.position}
                  </p>

                  {/* Experience & Education */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-secondary" />
                      <span><strong>Experience:</strong> {faculty.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-secondary" />
                      <span><strong>Education:</strong> {faculty.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      <span><strong>Specialization:</strong> {faculty.specialization}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {faculty.bio}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Key Achievements</h4>
                    <div className="flex flex-wrap gap-1">
                      {faculty.achievements.slice(0, 2).map((achievement, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${faculty.phone}`}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <span className="text-xs text-muted-foreground">{faculty.experience} exp.</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Our Teaching Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Are you passionate about education? We're always looking for talented educators to join our family.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 gold-gradient text-secondary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
