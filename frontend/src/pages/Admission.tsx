import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Upload, Calendar, FileText, CreditCard, GraduationCap, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const steps = [
  { id: 1, title: 'Personal Info', icon: Users },
  { id: 2, title: 'Academic Info', icon: GraduationCap },
  { id: 3, title: 'Documents', icon: FileText },
  { id: 4, title: 'Review', icon: CheckCircle },
];

const programs = [
  { value: 'playgroup', label: 'Play Group (Age 2-3)' },
  { value: 'nursery', label: 'Nursery (Age 3-4)' },
  { value: 'kg', label: 'Kindergarten (Age 4-5)' },
  { value: 'grade1', label: 'Grade 1' },
  { value: 'grade2', label: 'Grade 2' },
  { value: 'grade3', label: 'Grade 3' },
  { value: 'grade4', label: 'Grade 4' },
  { value: 'grade5', label: 'Grade 5' },
  { value: 'grade6', label: 'Grade 6' },
  { value: 'grade7', label: 'Grade 7' },
  { value: 'grade8', label: 'Grade 8' },
];

const admissionTimeline = [
  { step: 1, title: 'Submit Application', description: 'Fill out the online application form with required details.' },
  { step: 2, title: 'Document Verification', description: 'Our team reviews submitted documents within 3-5 business days.' },
  { step: 3, title: 'Assessment/Interview', description: 'Schedule an assessment test and parent interview.' },
  { step: 4, title: 'Admission Decision', description: 'Receive admission decision within 7 days of interview.' },
  { step: 5, title: 'Fee Payment', description: 'Complete fee payment to confirm enrollment.' },
  { step: 6, title: 'Welcome to Playpen!', description: 'Receive welcome kit and orientation details.' },
];

const Admission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Info
    studentName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    // Academic Info
    program: '',
    previousSchool: '',
    previousGrade: '',
    // Documents
    birthCertificate: null as File | null,
    photo: null as File | null,
    previousReport: null as File | null,
  });

  const handleSubmit = () => {
    toast({
      title: 'Application Submitted!',
      description: 'We will contact you within 3-5 business days.',
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground">Student & Parent Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student's Full Name *</Label>
                <Input
                  id="studentName"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gender *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's Name *</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  placeholder="Enter father's name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherName">Mother's Name *</Label>
                <Input
                  id="motherName"
                  value={formData.motherName}
                  onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                  placeholder="Enter mother's name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Home Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter complete address"
                rows={3}
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground">Academic Information</h3>

            <div className="space-y-2">
              <Label>Program Applying For *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, program: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="previousSchool">Previous School Name (if any)</Label>
              <Input
                id="previousSchool"
                value={formData.previousSchool}
                onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                placeholder="Enter previous school name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="previousGrade">Previous Grade/Class</Label>
              <Input
                id="previousGrade"
                value={formData.previousGrade}
                onChange={(e) => setFormData({ ...formData, previousGrade: e.target.value })}
                placeholder="e.g., Grade 2"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground">Required Documents</h3>

            <div className="space-y-4">
              {[
                { key: 'birthCertificate', label: 'Birth Certificate', required: true },
                { key: 'photo', label: 'Recent Passport Photo', required: true },
                { key: 'previousReport', label: 'Previous School Report Card', required: false },
              ].map((doc) => (
                <div key={doc.key} className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="font-medium text-foreground">
                    {doc.label} {doc.required && <span className="text-destructive">*</span>}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Drag & drop or click to upload (PDF, JPG, PNG - Max 5MB)
                  </p>
                  <input type="file" className="hidden" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Choose File
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground">Review Your Application</h3>

            <div className="bg-muted rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Student Name</p>
                  <p className="font-medium">{formData.studentName || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{formData.dateOfBirth || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="font-medium">{programs.find(p => p.value === formData.program)?.label || 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium">{formData.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Ready to Submit</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    By submitting this application, you agree to our terms and conditions. 
                    Our admissions team will contact you within 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
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
              Admissions Open 2024-25
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Join the Playpen Family
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Begin your child's journey to excellence. Apply now for the upcoming academic year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionTimeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
              Online Application Form
            </h2>

            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        currentStep >= step.id
                          ? 'hero-gradient text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-sm mt-2 hidden md:block ${
                      currentStep >= step.id ? 'text-foreground font-medium' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 lg:w-24 h-0.5 mx-2 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {renderStep()}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                {currentStep < 4 ? (
                  <Button
                    variant="hero"
                    onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button variant="hero" onClick={handleSubmit}>
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
