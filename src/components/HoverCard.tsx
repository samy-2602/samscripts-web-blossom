
import React, { useState } from 'react';

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'float' | 'glow' | 'scale' | 'rotate' | 'tilt';
  glowColor?: string;
};

const HoverCard = ({ 
  children, 
  className = '', 
  hoverEffect = 'float',
  glowColor = 'accent'
}: HoverCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === 'tilt') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 15;
      const tiltY = -(x - centerX) / 15;
      
      setPosition({ x: tiltX, y: tiltY });
    }
  };

  const getEffectClasses = () => {
    switch (hoverEffect) {
      case 'float': return 'transition-transform duration-300 hover:-translate-y-2';
      case 'glow': return `transition-all duration-300 hover:shadow-lg hover:shadow-${glowColor}/20`;
      case 'scale': return 'transition-transform duration-300 hover:scale-105';
      case 'rotate': return 'transition-transform duration-300 hover:rotate-1';
      case 'tilt': return '';
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
      className={`${getEffectClasses()} ${className}`}
      style={getTransformStyle()}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
      }}
    >
      {children}
    </div>
  );
};

export default HoverCard;
