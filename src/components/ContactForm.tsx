
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { sendQuoteRequest } from '@/lib/emailService';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    deadline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.serviceType || !formData.deadline || !formData.message) {
        toast({
          title: "Missing information",
          description: "Please fill out all required fields.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Send the quote request
      await sendQuoteRequest(formData);
      
      toast({
        title: "Request submitted!",
        description: "We'll get back to you shortly with a quote.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        deadline: '',
        message: '',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (optional)</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => handleSelectChange('serviceType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="assignment">Assignment Help</SelectItem>
              <SelectItem value="exam">Exam Assistance</SelectItem>
              <SelectItem value="project">Project Work</SelectItem>
              <SelectItem value="website">Website Development</SelectItem>
              <SelectItem value="math">Math & Subject Solutions</SelectItem>
              <SelectItem value="homework">Homework Help</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <Select
            value={formData.deadline}
            onValueChange={(value) => handleSelectChange('deadline', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select deadline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">Urgent (24 hours)</SelectItem>
              <SelectItem value="3days">3 days</SelectItem>
              <SelectItem value="1week">1 week</SelectItem>
              <SelectItem value="2weeks">2 weeks</SelectItem>
              <SelectItem value="1month">1 month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your assignment, project requirements, or questions..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get a Free Quote"}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default ContactForm;
