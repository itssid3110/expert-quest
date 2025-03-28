
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import HowItWorks from '@/components/HowItWorks';
import { BookOpen, PenTool, Code, Calculator, Clock, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Assignment Help',
    description: 'Expert assistance with college and school assignments across various subjects.',
    icon: <BookOpen className="h-6 w-6" />,
    link: '/services',
  },
  {
    title: 'Exam Assistance',
    description: 'Get help with exam preparation, practice tests, and online test-taking.',
    icon: <PenTool className="h-6 w-6" />,
    link: '/services',
  },
  {
    title: 'Project Work',
    description: 'Professional support for academic and professional projects.',
    icon: <GraduationCap className="h-6 w-6" />,
    link: '/services',
  },
  {
    title: 'Website Development',
    description: 'Custom websites for students, businesses, and individuals.',
    icon: <Code className="h-6 w-6" />,
    link: '/services',
  },
  {
    title: 'Math Solutions',
    description: 'Step-by-step problem-solving for math and other technical subjects.',
    icon: <Calculator className="h-6 w-6" />,
    link: '/services',
  },
  {
    title: 'Homework Help',
    description: 'Daily support for homework assignments and coursework.',
    icon: <Clock className="h-6 w-6" />,
    link: '/services',
  },
];

const testimonials = [
  {
    quote: "ExpertQuest helped me with my computer science project. The solution was well-documented and delivered ahead of schedule!",
    name: "James Wilson",
    role: "Computer Science Student",
  },
  {
    quote: "The math help I received was incredible. Clear explanations and step-by-step solutions that helped me understand the concepts.",
    name: "Emily Chen",
    role: "Engineering Major",
  },
  {
    quote: "I needed help with my business strategy assignment and got an A+. The expert was knowledgeable and responsive.",
    name: "Michael Rodriguez",
    role: "MBA Student",
  },
];

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get expert help with all your academic and project needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. See what students have to say about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Assignments?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Get started today and receive expert help with your academic challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
