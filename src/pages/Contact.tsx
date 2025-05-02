import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, Home, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  useEffect(() => {
    document.title = "Contact Us | SamScripts - IT Services & Software Solutions";
    
    // Add interactive animation for input fields
    const inputFields = document.querySelectorAll('.form-input');
    
    inputFields.forEach(field => {
      field.addEventListener('focus', () => {
        (field as HTMLElement).parentElement?.classList.add('input-focused');
      });
      
      field.addEventListener('blur', () => {
        if (!(field as HTMLInputElement).value) {
          (field as HTMLElement).parentElement?.classList.remove('input-focused');
        }
      });
    });
    
    return () => {
      inputFields.forEach(field => {
        field.removeEventListener('focus', () => {});
        field.removeEventListener('blur', () => {});
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleService = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        services: []
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const services = [
    "Web Development",
    "Mobile Development",
    "DevOps & Cloud",
    "UI/UX Design",
    "Digital Transformation",
    "Support & Maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blur-gradient opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="heading-xl text-center mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-12">
              Have a project in mind? Contact us today to discuss how we can help bring your ideas to life.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <Card className="border-0 shadow-xl overflow-hidden bg-white">
                  <div className="h-2 bg-gradient-to-r from-secondary to-accent w-full"></div>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-field relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input border-2 h-14 px-4 rounded-lg bg-foreground/5 focus:border-secondary transition-all"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        
                        <div className="form-field relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input border-2 h-14 px-4 rounded-lg bg-foreground/5 focus:border-secondary transition-all"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-field relative">
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input border-2 h-14 px-4 rounded-lg bg-foreground/5 focus:border-secondary transition-all"
                            placeholder="Phone Number (Optional)"
                          />
                        </div>
                        
                        <div className="form-field relative">
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input border-2 h-14 px-4 rounded-lg bg-foreground/5 focus:border-secondary transition-all"
                            placeholder="Company Name (Optional)"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="block text-sm font-medium text-foreground/70">
                          Services You're Interested In
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {services.map(service => (
                            <div key={service} className="flex items-center">
                              <Button
                                type="button"
                                variant={formData.services.includes(service) ? "secondary" : "outline"}
                                onClick={() => toggleService(service)}
                                className={`text-sm py-2 px-3 w-full justify-start transition-all ${
                                  formData.services.includes(service) 
                                    ? "hover:bg-secondary/90" 
                                    : "hover:bg-foreground/5"
                                }`}
                              >
                                <div className={`w-4 h-4 rounded border mr-2 flex items-center justify-center ${
                                  formData.services.includes(service) 
                                    ? "bg-white border-white" 
                                    : "border-foreground/30"
                                }`}>
                                  {formData.services.includes(service) && (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                      <path d="M8.5 2.5L3.5 7.5L1.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                </div>
                                {service}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="form-field relative">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-input border-2 min-h-32 p-4 rounded-lg bg-foreground/5 focus:border-secondary transition-all"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>
                      
                      <div className="flex items-center justify-end">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          className={`px-8 py-6 bg-gradient-to-r from-secondary to-accent rounded-lg text-white hover:shadow-lg hover:translate-y-[-2px] transition-all ${isSubmitting ? 'opacity-80' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <Card className="border-0 shadow-md overflow-hidden bg-white hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4 text-secondary">
                          <Mail size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Email</h3>
                          <p className="text-foreground/70 mb-2">For general inquiries:</p>
                          <a href="mailto:info@samscripts.com" className="text-secondary hover:underline">
                            info@samscripts.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden bg-white hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 text-accent">
                          <Phone size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Phone</h3>
                          <p className="text-foreground/70 mb-2">Mon-Fri, 9am-5pm (EST)</p>
                          <p className="font-medium">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden bg-white hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4 text-secondary">
                          <Home size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Office</h3>
                          <p className="text-foreground/70 mb-2">Visit our headquarters:</p>
                          <address className="not-italic">
                            123 Tech Park Way<br />
                            Suite 500<br />
                            Boston, MA 02110
                          </address>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.486 2 2 6.486 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12c0-5.514-4.486-10-10-10z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16">Find Us</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              {/* In a real app, you would use Google Maps or similar */}
              <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl mb-4">Interactive Map Would Be Here</p>
                  <p className="text-foreground/70">(This is a placeholder for an actual map integration)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
