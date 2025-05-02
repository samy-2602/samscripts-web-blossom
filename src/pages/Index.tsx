
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveFeature from "@/components/InteractiveFeature";
import AnimatedCounter from "@/components/AnimatedCounter";
import HoverCard from "@/components/HoverCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ChevronDown, Code, Circle, Monitor, Play, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const { toast } = useToast();
  
  useEffect(() => {
    // Update document title
    document.title = "SamScripts - IT Services & Software Solutions";
    
    // Scroll position tracker for animations
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ["hero", "features", "work", "testimonials"];
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

    // Show welcome toast after a delay
    const timeoutId = setTimeout(() => {
      toast({
        title: "👋 Welcome to SamScripts!",
        description: "Explore our interactive website to see what we can do for you.",
      });
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleHashLinkClick);
      clearTimeout(timeoutId);
    };
  }, [toast]);

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
    },
    {
      name: "David Wilson",
      role: "CEO, FutureScale",
      quote: "SamScripts delivered a complete digital transformation for our business. Their strategic approach and technical prowess helped us achieve results we didn't think were possible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  // Features data
  const features = [
    {
      icon: <Code size={24} />,
      title: "Custom Web Development",
      description: "Tailored solutions that fit your unique business needs",
      details: "We build responsive, scalable, and secure web applications using the latest technologies and best practices. Our development process ensures your website not only looks great but performs exceptionally."
    },
    {
      icon: <Monitor size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      details: "From iOS to Android, we develop intuitive and powerful mobile applications that provide seamless user experiences. Our apps are built to perform, scale, and delight your users."
    },
    {
      icon: <Settings size={24} />,
      title: "DevOps Solutions",
      description: "Streamline your development and operations",
      details: "Our DevOps services help you automate workflows, improve collaboration, and accelerate your delivery pipeline. We implement CI/CD practices that enhance efficiency and reduce time-to-market."
    }
  ];

  // Stats for animated counter section
  const stats = [
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Team Members", value: 25, suffix: "" },
    { label: "Years Experience", value: 8, suffix: "+" }
  ];

  // Recent works data
  const recentWorks = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Cloud Migration",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Banking Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Interactive Features Section */}
      <section id="features" className="py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full mb-4">
                What We Offer
              </div>
              <h2 className="heading-lg mb-4">Cutting-Edge Digital Solutions</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We combine technical expertise with creative innovation to deliver solutions that drive your business forward.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <InteractiveFeature
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Interactive Process Section with Animated Steps */}
      <section className="py-24 bg-gradient-to-b from-background to-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-4">Our Process</h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
              We follow a structured approach to deliver exceptional results for every project
            </p>
          </ScrollReveal>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process connection line */}
            <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-accent/20 -translate-x-1/2 z-0 hidden md:block"></div>
            
            {[
              { 
                step: 1, 
                title: "Discovery & Planning", 
                description: "We start by understanding your business goals and requirements",
                details: "Our team conducts thorough research to understand your industry, competitors, and target audience. We define project scope, goals, and technical specifications.",
                icon: Circle,
              },
              { 
                step: 2, 
                title: "Design & Prototype", 
                description: "We craft the perfect user experience and visual design",
                details: "Our designers create wireframes and interactive prototypes to validate ideas early. We iterate based on your feedback until we achieve the perfect design.",
                icon: Play,
              },
              { 
                step: 3, 
                title: "Development & Testing", 
                description: "Our experts build and thoroughly test your solution",
                details: "We implement your solution using the latest technologies and best practices. Our QA team ensures everything works flawlessly across all devices and environments.",
                icon: Code,
              },
              { 
                step: 4, 
                title: "Launch & Support", 
                description: "We deploy your project and provide ongoing maintenance",
                details: "We handle the deployment process and ensure a smooth launch. Our team provides ongoing support and maintenance to keep your solution running optimally.",
                icon: ArrowRight,
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex items-start mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:flex md:w-1/2 md:justify-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center border-4 border-background">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <HoverCard hoverEffect="scale" className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="md:hidden w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                        <item.icon size={20} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <span className="text-4xl text-accent/50 mr-2">{item.step}.</span>
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">{item.description}</p>
                      <p className="text-foreground/60 text-sm">{item.details}</p>
                    </HoverCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Work Section */}
      <section id="work" className="py-24 bg-gradient-to-r from-foreground/5 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div>
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full mb-4">
                  Portfolio Showcase
                </div>
                <h2 className="heading-lg mb-4">Our Recent Work</h2>
                <p className="text-foreground/70 max-w-xl">
                  Take a look at some of our recent projects that showcase our expertise and innovation.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button variant="outline" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentWorks.map((work, i) => (
              <ScrollReveal key={i} delay={i * 100} cascade={false}>
                <HoverCard hoverEffect="tilt" className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-xs text-white/80 mb-1">{work.category}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                    <Button variant="outline" size="sm" className="w-max text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 mt-2">
                      View Details
                    </Button>
                  </div>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Animated Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 relative">
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} className="text-white" />
                  </div>
                  <p className="text-white/80">{stat.label}</p>
                  <div className="absolute -inset-px bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Interactive Testimonial Carousel */}
      <section id="testimonials" className="py-24 bg-foreground/5">
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
                  <HoverCard hoverEffect="glow">
                    <div className="p-8 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 mr-1">★</span>
                          ))}
                        </div>
                        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-foreground/70">{testimonial.role}</div>
                      </div>
                    </div>
                  </HoverCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Interactive CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/90 to-accent/90 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg mb-8 text-white/80">
                Let's discuss how we can help you achieve your business goals with our expertise in web, mobile, and DevOps solutions.
              </p>
              <div className="group relative inline-block">
                <HoverCard hoverEffect="magnetic">
                  <Button 
                    className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto transition-all duration-300"
                    size="lg"
                  >
                    <span className="flex items-center">
                      Get Started 
                      <ArrowRight className="ml-2 group-hover:ml-3 transition-all" />
                    </span>
                  </Button>
                </HoverCard>
                <div className="absolute -inset-1 rounded-lg border border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Floating Interactive Element */}
      <HoverCard hoverEffect="float">
        <div 
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            toast({
              title: "Back to top!",
              description: "Returning to the start of our journey.",
              duration: 2000,
            });
          }}
        >
          <ChevronDown className="rotate-180" size={20} />
        </div>
      </HoverCard>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
