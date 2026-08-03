import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(scopeRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const targets = scope.querySelectorAll<HTMLElement>('[data-reveal]');

      if (reducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });
    },
    { scope: scopeRef, dependencies: [] },
  );
}
