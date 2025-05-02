
import React, { useState, useRef, useEffect } from 'react';

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'float' | 'glow' | 'scale' | 'rotate' | 'tilt' | 'magnetic';
  glowColor?: string;
  intensity?: number;
};

const HoverCard = ({ 
  children, 
  className = '', 
  hoverEffect = 'float',
  glowColor = 'accent',
  intensity = 1
}: HoverCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (hoverEffect === 'tilt') {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 15 * intensity;
      const tiltY = -(x - centerX) / 15 * intensity;
      
      setPosition({ x: tiltX, y: tiltY });
    } else if (hoverEffect === 'magnetic') {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / 8 * intensity;
      const deltaY = (y - centerY) / 8 * intensity;
      
      cardRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
    
    if (hoverEffect === 'magnetic' && cardRef.current) {
      cardRef.current.style.transform = 'translate(0, 0)';
    }
  };

  const getEffectClasses = () => {
    switch (hoverEffect) {
      case 'float': return 'transition-transform duration-300 hover:-translate-y-2';
      case 'glow': return `transition-all duration-300 hover:shadow-lg hover:shadow-${glowColor}/20`;
      case 'scale': return 'transition-transform duration-300 hover:scale-105';
      case 'rotate': return 'transition-transform duration-300 hover:rotate-1';
      case 'tilt': 
      case 'magnetic': return 'transition-all duration-200';
      default: return '';
    }
  };

  const getTransformStyle = () => {
    if (hoverEffect === 'tilt' && isHovering) {
      return {
        transform: `perspective(1000px) rotateX(${position.x}deg) rotateY(${position.y}deg)`
      };
    }
    return {};
  };
  
  return (
    <div 
      ref={cardRef}
      className={`${getEffectClasses()} ${className}`}
      style={getTransformStyle()}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverCard;
