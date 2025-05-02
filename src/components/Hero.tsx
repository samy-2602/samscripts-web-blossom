
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import HoverCard from './HoverCard';
import ScrollReveal from './ScrollReveal';
import TechAnimation from './TechAnimation';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Hide scroll indicator when user scrolls down
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
            <div className="relative h-[500px]">
              {/* Animated Tech Visualization */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-secondary/30 via-accent/20 to-secondary/30 pulse-gradient blur-md"></div>
              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                <TechAnimation />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 
        ${scrollIndicatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className="relative group cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
          {/* Animated rings */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-secondary to-accent opacity-75 
                          group-hover:opacity-100 blur-sm group-hover:blur-md animate-pulse transition-all"></div>
          
          {/* Main scroll indicator */}
          <div className="relative bg-white dark:bg-background rounded-full p-4 flex flex-col items-center justify-center
                          shadow-lg transform group-hover:scale-110 transition-transform">
            <p className="text-xs font-medium mb-1 text-foreground/80 group-hover:text-accent transition-colors">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-foreground/30 group-hover:border-accent rounded-full flex justify-center mb-1 transition-colors">
              <div className="w-1.5 h-2 bg-foreground/60 group-hover:bg-accent rounded-full mt-2 animate-[bounce_2s_infinite] transition-colors"></div>
            </div>
            <svg className="w-4 h-4 text-foreground/60 group-hover:text-accent animate-bounce transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
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
