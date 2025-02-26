// app/lib/animations.ts
import React, { useEffect, useRef, useState } from 'react';

// Hook to detect when an element is in viewport
export const useInView = (options = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return { ref, isInView };
};

// Animation classes that can be applied
export const fadeIn = "opacity-0 transition-opacity duration-1000 ease-in-out";
export const fadeInUp = "opacity-0 translate-y-10 transition-all duration-1000 ease-in-out";
export const fadeInDown = "opacity-0 -translate-y-10 transition-all duration-1000 ease-in-out";
export const fadeInLeft = "opacity-0 -translate-x-10 transition-all duration-1000 ease-in-out";
export const fadeInRight = "opacity-0 translate-x-10 transition-all duration-1000 ease-in-out";
export const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-in-out";

// Utility class to add to element when in view
export const inView = "opacity-100 translate-x-0 translate-y-0 scale-100";

// Custom animation component
export const AnimateOnScroll = ({ 
  children, 
  animation = fadeIn, 
  threshold = 0.1, 
  delay = 0 
}: { 
  children: React.ReactElement; 
  animation?: string; 
  threshold?: number; 
  delay?: number;
}) => {
  const { ref, isInView } = useInView({ threshold });
  
  const childWithRef = React.cloneElement((children as any), { 
    ref,
    className: `${(children as any).props.className || ''} ${animation} ${isInView ? inView : ''}`,
    style: {
      ...(children as any).props.style,
      transitionDelay: `${delay}ms`
    }
  });
  
  return childWithRef;
};