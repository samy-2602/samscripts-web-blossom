
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-blur-gradient opacity-50"></div>
      <div 
        className="absolute blur-dot top-1/4 left-1/4"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute blur-dot top-3/4 right-1/4 bg-secondary/50"
        style={{ 
          transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute blur-dot bottom-1/3 right-1/3 scale-150 bg-accent/40"
        style={{ 
          transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
          transition: 'transform 0.25s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="heading-xl mb-6">
            Transforming Ideas Into <span className="gradient-text">Digital Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
            SamScripts delivers premium IT services for businesses across the US and UK markets, 
            helping you create seamless digital experiences that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">
              Get Started
            </Button>
            <Button variant="outline" className="btn-outline">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <p className="text-sm text-foreground/60 mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-2xl font-bold text-foreground/40">COMPANY</div>
              <div className="text-2xl font-bold text-foreground/40">BRAND</div>
              <div className="text-2xl font-bold text-foreground/40">CLIENT</div>
              <div className="text-2xl font-bold text-foreground/40">PARTNER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
