
import { useEffect, useRef } from 'react';

type ExpertiseItemProps = {
  title: string;
  percentage: number;
  color: string;
};

const ExpertiseItem = ({ title, percentage, color }: ExpertiseItemProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const expertiseRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (expertiseRef.current) {
      observer.observe(expertiseRef.current);
    }
    
    return () => {
      if (expertiseRef.current) {
        observer.unobserve(expertiseRef.current);
      }
    };
  }, []);

  const expertiseData = [
    { title: 'Frontend Development', percentage: 95, color: '#06B6D4' },
    { title: 'Backend Development', percentage: 90, color: '#8B5CF6' },
    { title: 'DevOps & Cloud', percentage: 85, color: '#06B6D4' },
    { title: 'Mobile Development', percentage: 80, color: '#8B5CF6' },
    { title: 'UI/UX Design', percentage: 85, color: '#06B6D4' },
    { title: 'Quality Assurance', percentage: 90, color: '#8B5CF6' },
  ];

  return (
    <section id="expertise" ref={expertiseRef} className="section-padding bg-foreground/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-6">Our Technical Expertise</h2>
            <p className="text-lg mb-8 text-foreground/70">
              With years of experience delivering high-quality software solutions, 
              our team brings deep expertise across a range of technologies and domains.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Modern Technology Stack</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Agile Methodology</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Continuous Integration/Delivery</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Cloud-First Approach</span>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            {expertiseData.map((item, index) => (
              <ExpertiseItem 
                key={index} 
                title={item.title} 
                percentage={item.percentage} 
                color={item.color} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default Expertise;
