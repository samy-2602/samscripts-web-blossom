
import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div className="overflow-hidden relative">
      <div 
        ref={parallaxRef}
        className={`absolute inset-0 will-change-transform ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
