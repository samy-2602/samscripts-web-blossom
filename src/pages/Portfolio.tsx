
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  const [animatedItems, setAnimatedItems] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with integrated payment processing and inventory management.",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts, nutrition, and fitness goals with social features.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "GraphQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Cloud Migration Platform",
      description: "DevOps solution for automating cloud migration processes with monitoring and reporting.",
      category: "devops",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["AWS", "Docker", "Terraform", "Python"],
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "Comprehensive platform for patient management, appointment scheduling, and medical records.",
      category: "web",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "Express", "PostgreSQL", "Socket.io"],
      link: "#"
    },
    {
      id: 5,
      title: "Real Estate Marketplace",
      description: "Platform connecting property buyers, sellers, and agents with virtual tour features.",
      category: "web",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Laravel", "MySQL", "Three.js"],
      link: "#"
    },
    {
      id: 6,
      title: "Fleet Management App",
      description: "Mobile solution for tracking and managing vehicle fleets with real-time GPS integration.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
      link: "#"
    },
    {
      id: 7,
      title: "CI/CD Pipeline Automation",
      description: "Custom DevOps solution for automating testing and deployment processes.",
      category: "devops",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Jenkins", "GitHub Actions", "Kubernetes", "Bash"],
      link: "#"
    },
    {
      id: 8,
      title: "Learning Management System",
      description: "Educational platform with course creation, student tracking, and assessment tools.",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      link: "#"
    },
    {
      id: 9,
      title: "Restaurant Ordering App",
      description: "Mobile app for browsing menus, placing orders, and managing reservations.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Stripe"],
      link: "#"
    }
  ];

  useEffect(() => {
    document.title = "Portfolio | SamScripts - IT Services & Software Solutions";
    
    // Initial load with animation sequence
    const timer = setTimeout(() => {
      setAnimatedItems(projects);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blur-gradient opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="heading-xl text-center mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-12">
              Explore our showcase of successful projects delivered across various industries and technologies.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["all", "web", "mobile", "devops"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === category 
                      ? "bg-secondary text-white" 
                      : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {category === "all" ? "All Projects" : 
                   category === "web" ? "Web Development" :
                   category === "mobile" ? "Mobile Apps" : "DevOps"}
                </button>
              ))}
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                delay={index * 100}
                direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="card-interactive h-full bg-white rounded-lg overflow-hidden">
                      <div className="h-56 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-foreground/70 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-foreground/5 text-foreground/70 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          className="text-secondary font-medium hover:text-secondary/80 transition-colors flex items-center gap-2"
                        >
                          View Project
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="pt-2">
                        <span className="text-xs text-muted-foreground">Click to view details</span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16">Client Success Stories</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechNova Inc.",
                testimonial: "The team at SamScripts transformed our outdated system into a modern, efficient platform. Their attention to detail and commitment to quality was impressive."
              },
              {
                name: "Michael Chen",
                company: "GrowthX Ventures",
                testimonial: "Working with SamScripts was a game-changer for our startup. They delivered a robust mobile app that exceeded our expectations and helped us secure additional funding."
              },
              {
                name: "Olivia Martinez",
                company: "HealthPlus Systems",
                testimonial: "The healthcare management system developed by SamScripts has significantly improved our operational efficiency and patient care. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="h-full card-hover bg-white border-0 shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 mr-1">★</span>
                      ))}
                    </div>
                    <p className="italic text-foreground/70 mb-6">"{testimonial.testimonial}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8 text-white/80">
                Let's discuss your requirements and create a tailored solution that meets your business needs.
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

export default Portfolio;
