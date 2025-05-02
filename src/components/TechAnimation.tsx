
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import HoverCard from './HoverCard';

interface TechItem {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const TechAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // List of technologies with icons and colors
  const techItems: TechItem[] = [
    { 
      name: "React", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 841.9 595.3'%3E%3Cg fill='%2361DAFB'%3E%3Cpath d='M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.6 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16.1-13 24.1-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z'/%3E%3Ccircle cx='420.9' cy='296.5' r='45.7'/%3E%3Cpath d='M520.5 78.1z'/%3E%3C/g%3E%3C/svg%3E", 
      color: "#61DAFB",
      description: "A JavaScript library for building user interfaces"
    },
    { 
      name: "Angular", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448'%3E%3Cpath fill='%23DD0031' d='M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7L223.8 32zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5 354 373.8z'/%3E%3C/svg%3E", 
      color: "#DD0031",
      description: "Platform for building mobile and desktop web applications"
    },
    { 
      name: "Vue", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 196.32 170.02'%3E%3Cpath fill='%2341B883' d='M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z'/%3E%3Cpath fill='%2334495E' d='M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z'/%3E%3C/svg%3E", 
      color: "#42B883",
      description: "Progressive JavaScript framework for building UIs"
    },
    { 
      name: "Node.js", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448'%3E%3Cpath fill='%23539E43' d='M224 50.7c-2.1 0-4.2.5-6.1 1.5L155 88.1c-3.8 2.1-6.1 6.2-6.1 10.5v74.3c0 4.3 2.3 8.4 6.1 10.5l63 35.9c3.8 2.1 8.4 2.1 12.2 0l63-35.9c3.8-2.1 6.1-6.2 6.1-10.5V98.5c0-4.3-2.3-8.4-6.1-10.5l-63-35.9c-1.9-1-4-1.5-6.1-1.5zm-.1 110.8c-15.9 0-28.7-12.9-28.7-28.7 0-15.9 12.9-28.7 28.7-28.7 15.9 0 28.7 12.9 28.7 28.7 0 15.9-12.9 28.7-28.7 28.7z'/%3E%3C/svg%3E", 
      color: "#539E43",
      description: "JavaScript runtime built on Chrome's V8 engine"
    },
    { 
      name: "Python", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448'%3E%3Cpath fill='%23366B9A' d='M223.8 82c-75.6 0-70.9 32.8-70.9 32.8l.1 34h71.9v10.1H121.7s-48-5.4-48 70.5c0 75.9 41.9 73.3 41.9 73.3h25v-35.2s-1.4-41.9 41.2-41.9h71s39.9 1 39.9-38.6v-65s7-38-69.9-40.1zM187 115.9c7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8z'/%3E%3Cpath fill='%23FFD43B' d='M224.9 366c75.6 0 70.9-32.8 70.9-32.8l-.1-34H223.8v-10.1h103.2s48 5.4 48-70.5c0-75.9-41.9-73.3-41.9-73.3h-25v35.2s1.4 41.9-41.2 41.9h-71s-39.9-1-39.9 38.6v65s-7 38.1 69.9 40zm37-32.3c-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.8 5.7 12.8 12.8 0 7 -5.7 12.8-12.8 12.8z'/%3E%3C/svg%3E", 
      color: "#366B9A",
      description: "Programming language that lets you work quickly"
    },
    { 
      name: "Docker", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%232496ED' d='M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z'/%3E%3C/svg%3E", 
      color: "#2496ED",
      description: "Platform for developing, shipping, and running applications"
    },
    { 
      name: "AWS", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%23252F3E' d='M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96c-10.88 7.62-22.08 11.77-33.28 11.77-15.57 0-30.54-8.63-38.14-22.72-22.5-40.7 18.2-101.33 40.13-119.41 6.55 0 15.43 3.94 15.43 10.3 0 4.52-2.7 6.75-5.02 9.46l-10.35 12.84c-2.55 3.44-4.71 6.55-4.71 9.83.47 3.07 3.24 5.72 6.73 7.83 1.75 1.07 3.27 2.03 5.26 2.67 8.35 2.7 15.62 4.35 24.37 8.22 7.58 3.4 12.47 10.55 12.95 17.41l-4.35-1.98zm223.48-25.92c-3.94 0-7.4 1.0...', 
      color: "#252F3E",
      description: "On-demand cloud computing platforms and APIs"
    },
    { 
      name: "TensorFlow", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23FF6F00' d='M1,1v30h30V1H1z M24.482,24.482l-4.039,0v-4.039h-4.039v-4.039h-4.039v-4.039H8.325V8.325h4.039V4.286h4.039 v4.039h4.039v4.039h4.039V24.482z'/%3E%3C/svg%3E", 
      color: "#FF6F00",
      description: "End-to-end open source platform for machine learning"
    },
    { 
      name: "Blockchain", 
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%23F7931A' d='M504.2 279.8l-33.4-33.4 33.4-33.4c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-33.4 33.4-33.4-33.4c-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17l33.4 33.4-33.4 33.4c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l33.4-33.4 33.4 33.4c4.7 4.7 12.3 4.7 17 0l17-17c4.7-4.7 4.7-12.3 0-17zm-211.4 17c-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17l33.4 33.4-33.4 33.4c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l33.4-33.4 33.4 33.4c4.7 4.7 12.3 4.7 17 0l17-17c4.7-4.7 4.7-12.3 0-17l-33.4-33.4 33.4-33.4c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-33.4 33.4-33.4-33.4z'/%3E%3C/svg%3E", 
      color: "#F7931A",
      description: "Growing list of records, linked using cryptography"
    }
  ];

  useEffect(() => {
    const setRandomPosition = () => {
      if (!containerRef.current) return;
      
      const icons = containerRef.current.querySelectorAll('.tech-icon');
      const container = containerRef.current.getBoundingClientRect();
      
      icons.forEach((icon) => {
        const element = icon as HTMLElement;
        const maxX = container.width - 60; // icon width
        const maxY = container.height - 60; // icon height
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
        
        // Set random animation duration
        const duration = 30 + Math.random() * 20;
        element.style.animationDuration = `${duration}s`;
        
        // Set random delay
        const delay = Math.random() * 10;
        element.style.animationDelay = `-${delay}s`;
      });
    };
    
    setRandomPosition();
    // Reposition on window resize
    window.addEventListener('resize', setRandomPosition);
    
    return () => {
      window.removeEventListener('resize', setRandomPosition);
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={inViewRef}>
      <div 
        ref={containerRef}
        className={`relative w-full h-full overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm 
          ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      >
        {techItems.map((tech, index) => (
          <HoverCard key={index} hoverEffect="float">
            <div 
              className={`tech-icon absolute w-16 h-16 flex items-center justify-center rounded-xl 
                bg-white shadow-lg cursor-pointer transition-transform hover:scale-110
                animate-float`}
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 2px ${tech.color}20`
              }}
            >
              <div className="relative group">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-foreground p-2 rounded shadow-lg
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 text-center pointer-events-none z-10">
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-foreground/70">{tech.description}</p>
                </div>
              </div>
            </div>
          </HoverCard>
        ))}

        {/* Center element with glowing effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary blur-md animate-pulse-slow"></div>
            <div className="relative bg-white dark:bg-primary rounded-full p-6 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-1">IT Innovations</h3>
                <p className="text-xs text-foreground/70 max-w-[120px]">Cutting-edge technology solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection lines (optional) - Add visual connections between technologies */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.4 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--secondary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
          {/* Lines will be dynamically generated in a real implementation */}
          <path d="M100,100 C150,150 200,50 250,200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M200,150 C250,100 300,250 350,100" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M300,200 C350,150 400,300 450,150" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default TechAnimation;
