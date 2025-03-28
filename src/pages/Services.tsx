
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Code, Calculator, Clock, GraduationCap, Check } from 'lucide-react';

const servicesData = [
  {
    id: 'assignment',
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Assignment Help',
    description: 'Get expert assistance with essays, research papers, case studies, and more across all academic disciplines.',
    features: [
      'Subject matter experts with advanced degrees',
      'Original, plagiarism-free content',
      'Detailed research and analysis',
      'APA, MLA, Chicago, and other formatting styles',
      'Free revisions',
    ],
  },
  {
    id: 'exam',
    icon: <PenTool className="h-10 w-10" />,
    title: 'Exam Assistance',
    description: 'Comprehensive support for exam preparation, practice tests, and online exam-taking services.',
    features: [
      'Practice questions and mock exams',
      'Study guides and exam strategies',
      'One-on-one tutoring sessions',
      'Proctored online exam support',
      'Subject-specific review materials',
    ],
  },
  {
    id: 'project',
    icon: <GraduationCap className="h-10 w-10" />,
    title: 'Project Work',
    description: 'Professional support for academic and professional projects, including research, design, and implementation.',
    features: [
      'End-to-end project management',
      'Research and data analysis',
      'Presentations and reports',
      'Technical and non-technical projects',
      'Collaborative development',
    ],
  },
  {
    id: 'website',
    icon: <Code className="h-10 w-10" />,
    title: 'Website Development',
    description: 'Custom websites for students, businesses, and individuals, tailored to specific needs and requirements.',
    features: [
      'Responsive design for all devices',
      'Modern frameworks and technologies',
      'E-commerce functionality',
      'Content management systems',
      'SEO optimization',
    ],
  },
  {
    id: 'math',
    icon: <Calculator className="h-10 w-10" />,
    title: 'Math & Subject Solutions',
    description: 'Detailed, step-by-step solutions for math problems and other technical subjects.',
    features: [
      'Algebra, calculus, statistics, and more',
      'Physics, chemistry, and engineering',
      'Detailed explanations and steps',
      'Visual aids and diagrams',
      'Practice problems with solutions',
    ],
  },
  {
    id: 'homework',
    icon: <Clock className="h-10 w-10" />,
    title: 'Homework Help',
    description: 'Daily support for homework assignments and coursework across all subjects and grade levels.',
    features: [
      'Quick turnaround times',
      'Elementary to college level',
      'STEM and humanities subjects',
      'Clear explanations',
      '24/7 availability',
    ],
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h1 className="font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive academic and professional services to help you succeed.
            </p>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-16">
              {servicesData.map((service, index) => (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <div className={`h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 ${index % 2 !== 0 ? 'lg:ml-auto' : ''}`}>
                      {service.icon}
                    </div>
                    <h2 className={`text-3xl font-bold mb-4 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>{service.title}</h2>
                    <p className={`text-muted-foreground mb-6 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>{service.description}</p>
                    <div className={`${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
                      <Button asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-3 bg-card rounded-lg border p-6 shadow-sm ${index % 2 !== 0 ? 'lg:order-first' : ''}`}>
                    <h3 className="text-xl font-semibold mb-4">What we offer:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Academic Work?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Contact us today for a free quote and consultation with our experts.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
