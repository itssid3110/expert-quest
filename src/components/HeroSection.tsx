
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="relative container pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-extrabold tracking-tight text-balance">
              Struggling with assignments?{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                We've got you covered!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Get expert help with all your academic needs. From complex assignments to exam prep, 
              we connect you with qualified experts who deliver high-quality, original solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Hire an Expert</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="pt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs text-white">TJ</div>
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs text-white">KM</div>
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs text-accent-foreground">SL</div>
              </div>
              <p>Trusted by 10,000+ students worldwide</p>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Student getting help with assignment" 
                className="w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-medium text-lg">
                  "ExpertQuest helped me score an A+ on my final project!"
                </p>
                <p className="text-white/80 text-sm mt-2">
                  — Sarah, Computer Science Major
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-lg flex items-center justify-center shadow-lg animate-pulse-subtle">
              <div className="text-center">
                <p className="font-bold text-lg text-accent-foreground">24/7</p>
                <p className="text-xs text-accent-foreground/80">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
