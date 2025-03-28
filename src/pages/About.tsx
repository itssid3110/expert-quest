
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { Check, Target, Users, Award } from 'lucide-react';

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Academic Director",
    bio: "PhD in Education with 15+ years of experience in academic consulting and research methodology.",
  },
  {
    name: "Prof. Michael Chen",
    role: "STEM Lead",
    bio: "Mathematics professor with expertise in physics, engineering, and computer science education.",
  },
  {
    name: "Dr. David Williams",
    role: "Humanities Expert",
    bio: "Literature PhD with background in history, philosophy, and social sciences research.",
  },
  {
    name: "Emily Rodriguez",
    role: "Client Success Manager",
    bio: "Dedicated to ensuring client satisfaction through personalized support and communication.",
  },
];

const testimonials = [
  {
    quote: "ExpertQuest helped me through the most challenging semester of my college career. The quality of work and level of support was outstanding.",
    name: "Taylor J.",
    role: "Psychology Major",
  },
  {
    quote: "As a working student, I needed help managing my coursework. ExpertQuest provided expert guidance that helped me maintain my GPA while working full-time.",
    name: "Sam L.",
    role: "Business Student",
  },
  {
    quote: "The math tutoring I received was exceptional. My tutor broke down complex concepts and made them understandable.",
    name: "Kai M.",
    role: "Engineering Student",
  },
];

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h1 className="font-bold mb-4">About ExpertQuest</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dedicated to providing high-quality academic assistance since 2015.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At ExpertQuest, we're committed to helping students achieve academic excellence through personalized, expert assistance. We understand the challenges of balancing education with other responsibilities, and we're here to provide the support you need to succeed.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of qualified experts covers a wide range of subjects and academic levels, ensuring that every student receives high-quality, tailored assistance for their specific needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Dedicated to academic integrity and excellence</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Committed to student success and growth</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Focused on high-quality, original work</span>
                  </div>
                </div>
              </div>
              
              <div className="relative lg:block hidden">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Students working on a computer" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Trusted by</p>
                  <p className="text-2xl font-bold">10,000+</p>
                  <p>Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at ExpertQuest.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every assignment, project, and interaction, ensuring the highest quality in all our work.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of academic integrity, providing original, ethical assistance to our clients.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  We deliver on our promises, meeting deadlines and exceeding expectations with consistent, dependable service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the professionals who make ExpertQuest exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-card rounded-lg border p-6">
                  <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-white text-xl font-bold mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read testimonials from students who have used our services.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Contact us today to learn how we can help you achieve your academic goals.
            </p>
            <div className="inline-block rounded-lg bg-white p-px">
              <div className="rounded-[calc(0.5rem-1px)] bg-white p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Get a Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  No obligation, just a conversation about how we can help.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
