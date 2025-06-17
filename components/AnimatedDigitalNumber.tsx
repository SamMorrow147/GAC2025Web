import { useState, useEffect, useRef } from 'react';
import { DigitalNumber } from './DigitalNumber';

interface AnimatedDigitalNumberProps {
  value: string;
  duration?: number;
  delay?: number;
}

export function AnimatedDigitalNumber({ 
  value, 
  duration = 2000, 
  delay = 0 
}: AnimatedDigitalNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract numeric value and check if it has a plus sign
  const hasPlus = value.includes('+');
  const targetNumber = parseInt(value.replace('+', '').replace(',', ''));

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Start animation when 10% of the element is visible
        rootMargin: '50px', // Start slightly before the element comes into view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Animation effect
  useEffect(() => {
    if (!isVisible) return; // Don't start animation until visible

    const startTime = Date.now() + delay;
    let animationFrame: number;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) {
        // Still in delay period
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (elapsed < duration) {
        // Animation in progress
        const progress = elapsed / duration;
        // Use easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        const newValue = Math.floor(easedProgress * targetNumber);
        setCurrentValue(newValue);
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setCurrentValue(targetNumber);
        setAnimationComplete(true);
        if (hasPlus) {
          // Show plus sign after a brief delay
          setTimeout(() => setShowPlus(true), 200);
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetNumber, duration, delay, hasPlus, isVisible]);

  // Format the display value
  const formatValue = (num: number) => {
    return num.toString();
  };

  const displayValue = formatValue(currentValue) + (showPlus ? '+' : '');

  return (
    <div ref={elementRef}>
      <DigitalNumber value={displayValue} />
    </div>
  );
} 