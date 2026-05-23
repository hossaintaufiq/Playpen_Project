import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const CTASection = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-60 h-60 rounded-full border-2 border-primary-foreground animate-spin-slow" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full border-2 border-primary-foreground animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Schedule a campus visit or get in touch with our admissions team. 
              We're here to answer all your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Visit Us</h4>
                  <p className="text-primary-foreground/80">123 Education Road, Gulshan, Dhaka 1212</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Call Us</h4>
                  <p className="text-primary-foreground/80">+880 1234-567890, +880 9876-543210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Email Us</h4>
                  <p className="text-primary-foreground/80">info@playpen.edu.bd, admissions@playpen.edu.bd</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Office Hours</h4>
                  <p className="text-primary-foreground/80">Saturday - Thursday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Quick Inquiry
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Child's Grade/Class" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button variant="hero" size="lg" className="w-full">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
