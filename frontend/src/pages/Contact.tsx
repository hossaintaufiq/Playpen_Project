import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Education Road', 'Gulshan, Dhaka 1212', 'Bangladesh'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+880 1234-567890', '+880 9876-543210', 'Fax: +880 2-1234567'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@playpen.edu.bd', 'admissions@playpen.edu.bd', 'support@playpen.edu.bd'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Saturday - Thursday', '8:00 AM - 4:00 PM', 'Friday: Closed'],
  },
];

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for inquiries, campus visits, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0191255088727!2d90.4171941!3d23.7806859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23c!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name *" required />
                    <Input type="email" placeholder="Email Address *" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Subject *" required />
                  </div>
                  <Textarea placeholder="Your Message *" rows={6} required />
                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Quick Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg">Schedule Campus Tour</Button>
            <Button variant="outline" size="lg">Download Brochure</Button>
            <Button variant="outline" size="lg">View Fee Structure</Button>
            <Button variant="outline" size="lg">Apply Online</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
