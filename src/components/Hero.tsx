
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import HoverCard from './HoverCard';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
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
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-background to-foreground/5"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-blur-gradient opacity-50"></div>
      <div 
        className="absolute blur-dot top-1/4 left-1/4"
        style={{ 
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      <div 
        className="absolute blur-dot top-3/4 right-1/4 bg-secondary/50"
        style={{ 
          transform: `translate(${-mousePosition.x * 60}px, ${-mousePosition.y * 60}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      ></div>
      <div 
        className="absolute blur-dot bottom-1/3 right-1/3 scale-150 bg-accent/40"
        style={{ 
          transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
          transition: 'transform 0.6s ease-out'
        }}
      ></div>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 p-1 rounded-3xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 pulse-gradient opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full mb-4 backdrop-blur-sm">
                Award Winning Digital Solutions
              </div>
              <h1 className="heading-xl mb-6">
                Transforming Ideas Into <span className="gradient-text">Digital Excellence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
                SamScripts delivers premium IT services for businesses across the US and UK markets, 
                helping you create seamless digital experiences that drive growth and innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <HoverCard hoverEffect="magnetic">
                  <Button className="btn-primary group">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </HoverCard>
                
                <HoverCard hoverEffect="float">
                  <Button variant="outline" className="btn-outline group" onClick={() => setIsVideoOpen(true)}>
                    <Play className="mr-2 h-4 w-4" /> Watch Our Story
                  </Button>
                </HoverCard>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-white" alt="Team member" />
                </div>
                <div>
                  <p className="text-sm font-medium">Trusted by <span className="text-accent">500+</span> companies</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-secondary/30 via-accent/20 to-secondary/30 pulse-gradient blur-md"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Digital Solutions" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-medium text-xl">Digital Transformation</p>
                    <p className="text-white/80">Elevate your business with our solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-xs font-medium">Live Projects: 24</p>
              </div>
              
              <div className="absolute -right-5 bottom-1/4 bg-white p-3 rounded-lg shadow-lg animate-pulse">
                <p className="text-xs font-medium">⭐ 4.9/5 Rating</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-xs text-foreground/60 mb-1">Scroll to explore</p>
        <div className="w-5 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/60 rounded-full mt-2 animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
      
      {/* Video modal (simplified) */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden relative">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
            >
              ✕
            </button>
            <div className="aspect-video bg-black">
              {/* Replace with actual video */}
              <div className="flex items-center justify-center h-full text-white/70">
                Video placeholder - Your company story
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
