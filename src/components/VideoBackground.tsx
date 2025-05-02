
import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  posterImage,
  children,
  overlayOpacity = 0.5,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsLoaded(true);
        video.play().catch((err) => {
          console.error("Video autoplay was prevented:", err);
        });
      };
      
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        poster={posterImage}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/50"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
