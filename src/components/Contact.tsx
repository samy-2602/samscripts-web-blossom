
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Code, Laptop, Send } from "lucide-react";
import HoverCard from "./HoverCard";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
    }, 1500);
  };

  const services = [
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Web Development",
      description: "Custom websites and web applications"
    },
    {
      icon: <Laptop className="h-6 w-6 text-secondary" />,
      title: "Mobile Apps",
      description: "iOS and Android mobile development"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-foreground/5 to-background">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-accent/30 bg-accent/5 text-accent mb-4">
              Start Your Project
            </Badge>
            <h2 className="heading-lg mb-4">Get In Touch</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's collaborate to create something extraordinary together.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left" delay={100}>
              <div className="relative">
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-xl blur opacity-30 animate-pulse-slow"></div>
                
                <div className="relative bg-white dark:bg-background rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-semibold mb-6">Tell us about your project</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          required 
                          className="bg-foreground/5 border-2 focus:border-accent transition-colors h-12"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com" 
                          required 
                          className="bg-foreground/5 border-2 focus:border-accent transition-colors h-12"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry" 
                        required 
                        className="bg-foreground/5 border-2 focus:border-accent transition-colors h-12"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-foreground/5 border-2 focus:border-accent rounded-md px-4 py-2 h-12"
                        >
                          <option value="">Select budget range</option>
                          <option value="< $5,000">Less than $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="> $50,000">More than $50,000</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-foreground/5 border-2 focus:border-accent rounded-md px-4 py-2 h-12"
                        >
                          <option value="">Select timeline</option>
                          <option value="< 1 month">Less than 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="> 6 months">More than 6 months</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your project, goals, and any specific requirements..." 
                        required 
                        className="bg-foreground/5 border-2 focus:border-accent transition-colors min-h-32"
                      />
                    </div>
                    
                    <HoverCard hoverEffect="magnetic">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 transition-all py-6 h-auto text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </HoverCard>
                    
                    <p className="text-xs text-center text-foreground/60 mt-4">
                      By submitting this form, you agree to our <a href="#" className="text-accent hover:underline">Privacy Policy</a> and <a href="#" className="text-accent hover:underline">Terms of Service</a>.
                    </p>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Contact info and benefits - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 border-l-4 border-accent">
                <h3 className="text-xl font-semibold mb-4">How We Work</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent mr-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium">Initial Consultation</h4>
                      <p className="text-sm text-foreground/70">We'll discuss your project requirements and objectives</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent mr-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium">Proposal & Planning</h4>
                      <p className="text-sm text-foreground/70">We'll provide a detailed proposal with timeline and milestones</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent mr-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium">Design & Development</h4>
                      <p className="text-sm text-foreground/70">Our team will bring your vision to life with regular updates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent mr-3 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium">Launch & Support</h4>
                      <p className="text-sm text-foreground/70">We'll ensure smooth deployment and provide ongoing support</p>
                    </div>
                  </li>
                </ol>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={300}>
              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground/70">Email Us</h4>
                      <a href="mailto:info@samscripts.com" className="text-accent hover:underline">info@samscripts.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground/70">Call Us</h4>
                      <p className="text-primary">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground/70">Office Location</h4>
                      <p className="text-foreground">123 Tech Park Way, Suite 500<br />Boston, MA 02110</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-foreground/70 mb-3">Connect With Us</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.486 2 2 6.486 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12c0-5.514-4.486-10-10-10z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={400}>
              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Guarantee</h3>
                </div>
                <p className="mb-4">
                  At SamScripts, we guarantee exceptional service, timely delivery, and complete satisfaction. We're not happy until you're thrilled with the results.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-secondary-foreground" />
                    <span className="text-sm">Timely Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-secondary-foreground" />
                    <span className="text-sm">Regular Updates</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-secondary-foreground" />
                    <span className="text-sm">Quality Assurance</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-secondary-foreground" />
                    <span className="text-sm">Post-Launch Support</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100 + 400}>
              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
