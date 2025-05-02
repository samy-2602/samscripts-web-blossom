
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  cascade?: boolean;
  distance?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 800,
  threshold = 0.1,
  direction = 'up',
  cascade = true,
  distance = 50,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  
  const childrenArray = React.Children.toArray(children);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  // Calculate transform values based on direction
  const getTransform = (visible: boolean) => {
    if (visible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up': return `translate3d(0, ${distance}px, 0)`;
      case 'down': return `translate3d(0, -${distance}px, 0)`;
      case 'left': return `translate3d(${distance}px, 0, 0)`;
      case 'right': return `translate3d(-${distance}px, 0, 0)`;
      default: return 'translate3d(0, 0, 0)';
    }
  };
  
  // If not cascading, reveal all children at once
  if (!cascade) {
    return (
      <div 
        ref={ref}
        className={`scroll-reveal-container ${className}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: getTransform(isVisible),
          transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
  
  // If cascading, reveal each child with increasing delay
  return (
    <div ref={ref} className={`scroll-reveal-container ${className}`}>
      {childrenArray.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: getTransform(isVisible),
            transition: `opacity ${duration}ms ease-out ${delay + i * 100}ms, transform ${duration}ms ease-out ${delay + i * 100}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollReveal;
