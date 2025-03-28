
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h1 className="font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a question or ready to get started? Contact us for a free consultation.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div>
                <div className="bg-card rounded-lg border p-8 shadow-sm h-full">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-muted-foreground mt-1">support@expertquest.com</p>
                        <p className="text-muted-foreground">info@expertquest.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Live Chat</h3>
                        <p className="text-muted-foreground mt-1">
                          Chat with our support team in real-time. Available 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-medium mb-2">Our Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      We typically respond to all inquiries within 2-4 hours during business hours.
                      For urgent requests, please mark your inquiry as "Urgent" in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-2">How quickly can you complete my assignment?</h3>
                <p className="text-muted-foreground">
                  Turnaround time depends on complexity and length. We offer urgent delivery for time-sensitive projects, sometimes as quick as 24 hours.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-2">Do you guarantee original work?</h3>
                <p className="text-muted-foreground">
                  Yes, all work is 100% original and plagiarism-free. We provide a plagiarism report upon request.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-2">How are your experts qualified?</h3>
                <p className="text-muted-foreground">
                  Our experts have advanced degrees in their fields and undergo a rigorous vetting process before joining our team.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer revisions?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer free revisions to ensure your complete satisfaction with the final deliverable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
