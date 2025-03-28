
import React from 'react';
import { FileText, Users, Clock, Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Submit Your Request',
    description: 'Share your assignment details, requirements, and deadline.',
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: 'Get a Quote',
    description: 'Receive a custom price based on complexity and timeline.',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    title: 'Expert Assigned',
    description: 'We match you with the perfect subject expert.',
    icon: <Clock className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Receive high-quality work before your deadline.',
    icon: <Check className="h-8 w-8 text-primary" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process makes getting expert help quick and easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="bg-card rounded-lg p-6 h-full flex flex-col items-center text-center shadow-sm border">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg 
                    width="40" 
                    height="12" 
                    viewBox="0 0 40 12" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path 
                      d="M0 6H38M38 6L33 1M38 6L33 11" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
