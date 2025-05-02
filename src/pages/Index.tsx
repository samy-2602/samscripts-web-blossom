
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ChevronDown, Circle, MousePointer, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    // Update document title
    document.title = "SamScripts - IT Services & Software Solutions";
    
    // Scroll position tracker for animations
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ["hero", "expertise", "work", "about"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Smooth scroll function
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" && 
        target.href && 
        target.href.includes("#") && 
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for navbar height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleHashLinkClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleHashLinkClick);
    };
  }, []);

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechVision Inc",
      quote: "SamScripts transformed our digital presence with their exceptional web development skills. The team's attention to detail and commitment to our vision exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateTech",
      quote: "Working with SamScripts on our mobile application was a game-changer. Their technical expertise and creative solutions helped us launch ahead of schedule with outstanding results.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthFirm",
      quote: "The DevOps solutions provided by SamScripts dramatically improved our deployment cycles. Their team was responsive, knowledgeable, and a pleasure to work with throughout the project.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  // Stats for animated counter section
  const stats = [
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Team Members", value: 15, suffix: "" },
    { label: "Years Experience", value: 5, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Animated Scroll Indicator */}
      <div className="flex justify-center">
        <a 
          href="#expertise" 
          className="absolute bottom-10 animate-bounce flex flex-col items-center text-primary/60 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Explore</span>
          <ChevronDown size={24} />
        </a>
      </div>
      
      {/* Interactive Process Section with Animated Steps */}
      <section className="py-24 bg-gradient-to-b from-background to-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-8">Our Process</h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
              We follow a structured approach to deliver exceptional results for every project
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { 
                step: 1, 
                title: "Discovery", 
                description: "We start by understanding your business goals and requirements",
                icon: Circle 
              },
              { 
                step: 2, 
                title: "Design & Develop", 
                description: "Our experts craft solutions tailored to your unique needs",
                icon: Play
              },
              { 
                step: 3, 
                title: "Deliver & Support", 
                description: "We launch your project and provide ongoing maintenance",
                icon: ArrowRight 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="p-8 rounded-lg bg-white shadow-lg hover-card relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <span className="text-4xl text-accent/50 mr-2">{item.step}.</span>
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">{item.description}</p>
                    <div className="mt-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a href="#" className="text-accent flex items-center font-medium">
                        Learn more <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Animated Stats Section */}
      <section className="py-16 bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 hover-scale">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <Expertise />
      
      {/* Interactive Testimonial Carousel */}
      <section className="py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-6">What Our Clients Say</h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
              Don't just take our word for it — hear what our clients have to say about working with us
            </p>
          </ScrollReveal>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-foreground/70">{testimonial.role}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Interactive CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg mb-8 text-white/80">
                Let's discuss how we can help you achieve your business goals with our expertise in web, mobile, and DevOps solutions.
              </p>
              <div className="group relative inline-block">
                <Button 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto group-hover:translate-y-[-2px] transition-all duration-300"
                  size="lg"
                >
                  <span className="flex items-center">
                    Get Started 
                    <ArrowRight className="ml-2 group-hover:ml-3 transition-all" />
                  </span>
                </Button>
                <div className="absolute -inset-1 rounded-lg border border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Floating Interactive Element */}
      <div 
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover-float cursor-pointer shadow-lg z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <MousePointer size={20} />
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
