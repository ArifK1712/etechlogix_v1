import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor-hover') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  useGSAP(() => {
    if (!dotRef.current || !ringRef.current || isTouchDevice || x === 0) return;

    gsap.to(dotRef.current, {
      x,
      y,
      duration: 0.1,
      ease: 'power2.out'
    });

    gsap.to(ringRef.current, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, [x, y, isTouchDevice]);

  useGSAP(() => {
    if (!dotRef.current || !ringRef.current || isTouchDevice) return;

    if (isHovering) {
      gsap.to(dotRef.current, { scale: 0, duration: 0.2, ease: 'power2.out' });
      gsap.to(ringRef.current, { 
        width: '40px',
        height: '40px',
        borderColor: '#06b6d4', 
        borderWidth: '1px',
        duration: 0.3, 
        ease: 'power2.out' 
      });
    } else {
      gsap.to(dotRef.current, { scale: 1, duration: 0.2, ease: 'power2.out' });
      gsap.to(ringRef.current, { 
        width: '24px',
        height: '24px',
        borderColor: 'rgba(6, 182, 212, 0.5)',
        borderWidth: '1px', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    }
  }, [isHovering, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-6 h-6 border border-accent-cyan/50 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
