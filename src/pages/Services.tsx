import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Services | SamScripts - IT Services & Software Solutions";
    
    // Card tilt effect
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 10;
        const tiltY = -(x - centerX) / 10;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  const services = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications that drive business growth.",
      features: [
        "Responsive Design", 
        "E-commerce Solutions", 
        "Progressive Web Apps", 
        "CMS Integration"
      ],
      technologies: ["React", "Vue", "Angular", "Node.js", "Laravel", "WordPress"]
    },
    {
      title: "Mobile Development",
      description: "Building native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android Apps", 
        "Cross-Platform Solutions", 
        "App Store Optimization", 
        "Maintenance & Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      title: "DevOps Solutions",
      description: "Streamlining development workflows and optimizing your cloud infrastructure.",
      features: [
        "CI/CD Implementation", 
        "Cloud Migration", 
        "Infrastructure as Code", 
        "Monitoring & Logging"
      ],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces and engaging digital experiences.",
      features: [
        "User Research", 
        "Wireframing & Prototyping", 
        "Visual Design", 
        "Usability Testing"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"]
    },
    {
      title: "Software Consulting",
      description: "Strategic technology guidance to help you make informed decisions.",
      features: [
        "Technology Assessment", 
        "Digital Strategy", 
        "Software Architecture", 
        "Technical Due Diligence"
      ],
      technologies: ["Agile", "SCRUM", "Enterprise Architecture", "Digital Transformation"]
    },
    {
      title: "QA & Testing",
      description: "Comprehensive quality assurance to ensure your software performs flawlessly.",
      features: [
        "Automated Testing", 
        "Manual Testing", 
        "Performance Testing", 
        "Security Testing"
      ],
      technologies: ["Selenium", "Jest", "Cypress", "JUnit", "TestNG", "Postman"]
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-12">
              End-to-end digital solutions tailored to your business needs with industry-leading expertise and cutting-edge technologies.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="tilt-card rounded-lg overflow-hidden bg-white shadow-md h-full">
                  <div className="p-1 bg-gradient-to-r from-secondary to-accent"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium uppercase text-foreground/50 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-2 mt-1 text-secondary">
                              <Check size={16} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium uppercase text-foreground/50 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-foreground/5 text-foreground/70 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16">Our Development Process</h2>
          </ScrollReveal>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-secondary/30 transform md:translate-x-[-50%] hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-24">
              {[
                {
                  title: "Discovery & Planning",
                  description: "We start by understanding your business goals, target audience, and requirements to create a comprehensive project roadmap."
                },
                {
                  title: "Design & Prototyping",
                  description: "Our designers create intuitive and engaging user interfaces, focusing on user experience and your brand identity."
                },
                {
                  title: "Development",
                  description: "Our experienced developers bring the designs to life, writing clean, efficient, and scalable code."
                },
                {
                  title: "Testing & QA",
                  description: "We rigorously test your application to ensure it's bug-free, secure, and performs optimally across all devices."
                },
                {
                  title: "Deployment",
                  description: "Once approved, we deploy your application to your chosen environment with minimal downtime."
                },
                {
                  title: "Support & Maintenance",
                  description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your application continues to perform."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                    <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                          <p className="text-foreground/70">{step.description}</p>
                        </>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold">
                          {index + 1}
                        </div>
                      )}
                    </ScrollReveal>
                  </div>
                  
                  {/* Timeline dot - visible only on desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-secondary"></div>
                  
                  <div className="w-full md:w-1/2 md:pl-16">
                    <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'}>
                      {index % 2 === 0 ? (
                        <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold">
                          {index + 1}
                        </div>
                      ) : (
                        <>
                          <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                          <p className="text-foreground/70">{step.description}</p>
                        </>
                      )}
                    </ScrollReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
              <p className="text-lg mb-8 text-white/80">
                Let's discuss how our services can help you achieve your business goals. Schedule a consultation with our experts today.
              </p>
              <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors hover-float">
                Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
