
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  return (
    <Card className="border-border bg-card h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            </svg>
          </div>
          <p className="text-card-foreground italic mb-4 flex-grow">{quote}</p>
          <div className="flex items-center">
            {image ? (
              <img 
                src={image} 
                alt={name} 
                className="h-10 w-10 rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground mr-3">
                {name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
