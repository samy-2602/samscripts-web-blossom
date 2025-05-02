
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HoverCard from './HoverCard';
import ScrollReveal from './ScrollReveal';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string;
  index?: number;
}

const InteractiveFeature: React.FC<FeatureProps> = ({ 
  icon, 
  title, 
  description,
  details,
  index = 0
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <ScrollReveal 
      delay={index * 100} 
      direction={index % 2 === 0 ? 'left' : 'right'}
    >
      <HoverCard 
        hoverEffect="tilt" 
        className="h-full"
      >
        <Card 
          className={`h-full transition-all duration-300 overflow-hidden border border-foreground/10 hover:border-accent/30 ${
            expanded ? 'max-h-[500px]' : 'max-h-[280px]'
          }`}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              {icon}
            </div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {details && (
              <div className={`transition-all duration-300 ${
                expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-foreground/70 mb-4">{details}</p>
              </div>
            )}
            {details && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-accent flex items-center text-sm font-medium mt-2"
              >
                {expanded ? 'Read less' : 'Read more'} 
                <ArrowRight size={14} className="ml-1" />
              </button>
            )}
          </CardContent>
        </Card>
      </HoverCard>
    </ScrollReveal>
  );
};

export default InteractiveFeature;
