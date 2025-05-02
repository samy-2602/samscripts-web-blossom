
import { useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  scale?: boolean;
  rotate?: boolean;
};

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 600, 
  distance = 20,
  once = true,
  className = '',
  scale = false,
  rotate = false
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, once]);

  // Define transform based on direction
  const getTransformValue = () => {
    let transform = '';
    
    // Direction based transform
    switch (direction) {
      case 'up': transform += `translateY(${distance}px) `; break;
      case 'down': transform += `translateY(-${distance}px) `; break;
      case 'left': transform += `translateX(${distance}px) `; break;
      case 'right': transform += `translateX(-${distance}px) `; break;
      default: transform += `translateY(${distance}px) `;
    }
    
    // Add scale if enabled
    if (scale) {
      transform += 'scale(0.95) ';
    }
    
    // Add rotation if enabled
    if (rotate) {
      transform += 'rotate(5deg) ';
    }
    
    return transform;
  };

  return (
    <div 
      ref={elementRef} 
      className={`animate-on-scroll ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0) scale(1) rotate(0)' : getTransformValue(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
