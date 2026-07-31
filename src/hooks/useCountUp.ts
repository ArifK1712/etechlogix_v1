import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapConfig';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export function useCountUp({ end, duration = 2, suffix = '', decimals = 0 }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setValue(parseFloat(obj.val.toFixed(decimals)));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration, decimals]);

  const display = `${value}${suffix}`;

  return { ref: elementRef, display, value };
}
