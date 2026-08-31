import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../utils/gsapConfig';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const refreshHandler = () => lenis.resize();
    ScrollTrigger.addEventListener('refresh', refreshHandler);

    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.removeEventListener('refresh', refreshHandler);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      ScrollTrigger.refresh();
    };
  }, []);
}
