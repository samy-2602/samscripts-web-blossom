
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const start = 0;
      const step = Math.ceil(end / (duration / 16)); // approx 60fps
      let current = start;
      
      const timer = setInterval(() => {
        current += step;
        
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
          return;
        }
        
        setCount(current);
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={`font-bold ${className}`}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
