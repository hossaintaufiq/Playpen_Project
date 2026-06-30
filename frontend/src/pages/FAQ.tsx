import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Search, ChevronDown, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const faqCategories = [
  { id: 'admission', label: 'Admission' },
  { id: 'fees', label: 'Fees & Payment' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'policies', label: 'Policies' },
];

const faqs = [
  {
    category: 'admission',
    question: 'What is the admission process at Playpen School?',
    answer: 'Our admission process involves: 1) Filling out the online application form, 2) Submitting required documents, 3) Scheduling an assessment/interview, 4) Receiving the admission decision, and 5) Completing fee payment to confirm enrollment.'
  },
  {
    category: 'admission',
    question: 'What age groups do you accept for enrollment?',
    answer: 'We accept students from Play Group (2-3 years) through Grade 8 (13-14 years). Each program is designed specifically for the developmental needs of that age group.'
  },
  {
    category: 'admission',
    question: 'What documents are required for admission?',
    answer: 'Required documents include: Birth certificate, recent passport-sized photographs, previous school report card (if applicable), immunization records, and proof of residence.'
  },
  {
    category: 'fees',
    question: 'What is the fee structure?',
    answer: 'Our fee structure varies by program. Play Group: 50,000 BDT/year, Nursery-KG: 60,000 BDT/year, Primary: 75,000 BDT/year, Junior School: 90,000 BDT/year. This includes tuition, books, and standard activities.'
  },
  {
    category: 'fees',
    question: 'Are there any additional fees?',
    answer: 'Additional fees may include: Annual registration fee, transportation (optional), uniform, extra-curricular activities, and special events. A complete breakdown is provided during the admission process.'
  },
  {
    category: 'fees',
    question: 'Do you offer scholarships or financial aid?',
    answer: 'Yes, we offer merit-based scholarships and need-based financial aid. Applications are evaluated on a case-by-case basis. Please contact our admissions office for more information.'
  },
  {
    category: 'curriculum',
    question: 'What curriculum does Playpen School follow?',
    answer: 'We follow a comprehensive curriculum that combines the Bangladesh National Curriculum with international best practices. Our approach emphasizes critical thinking, creativity, and holistic development.'
  },
  {
    category: 'curriculum',
    question: 'What languages are taught at the school?',
    answer: 'Primary instruction is in English with Bengali as a core subject. We also offer optional language classes in Arabic and French for upper grades.'
  },
  {
    category: 'facilities',
    question: 'What facilities does the school offer?',
    answer: 'Our facilities include: Smart classrooms, science and computer labs, library, sports fields, swimming pool, art and music rooms, auditorium, cafeteria, and medical room with nurse on duty.'
  },
  {
    category: 'facilities',
    question: 'Is transportation available?',
    answer: 'Yes, we offer school bus services covering major areas of Dhaka. Our buses are GPS-tracked and supervised by trained attendants. Routes and fees are available from the admin office.'
  },
  {
    category: 'policies',
    question: 'What are the school timings?',
    answer: 'Regular school hours are 8:00 AM to 2:30 PM, Saturday through Thursday. Extended care is available until 5:00 PM for an additional fee.'
  },
  {
    category: 'policies',
    question: 'What is your policy on homework?',
    answer: 'We believe in balanced homework that reinforces classroom learning. Younger students receive minimal homework focusing on reading, while older students may have 1-2 hours of assignments daily.'
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFeedback = (helpful: boolean) => {
    toast({
      title: helpful ? 'Thank you!' : 'We appreciate your feedback',
      description: helpful 
        ? 'We\'re glad this was helpful.' 
        : 'We\'ll work on improving our answers.',
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              Help Center
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Find quick answers to common questions about Playpen School.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                All Topics
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      <p className="mb-4">{faq.answer}</p>
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <span className="text-sm">Was this helpful?</span>
                        <button
                          onClick={() => handleFeedback(true)}
                          className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleFeedback(false)}
                          className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
