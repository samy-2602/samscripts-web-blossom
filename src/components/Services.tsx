
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
          <span className="font-bold">{index + 1}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">{description}</p>
      </CardContent>
      <CardFooter>
        <a href="#" className="text-secondary font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications that deliver exceptional user experiences and drive business results.',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.',
    },
    {
      title: 'DevOps & Cloud',
      description: 'Modern cloud infrastructure and DevOps practices to streamline development and optimize your operations.',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement and satisfaction with your digital products.',
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic guidance to help your business leverage technology for growth and competitive advantage.',
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your applications secure, up-to-date, and performing optimally.',
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            End-to-end digital solutions that help your business grow and thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
