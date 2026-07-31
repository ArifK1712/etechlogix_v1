import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

export default function TestimonialSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      }
    });

    tl.from('.quote-part', {
      y: 30,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out',
    })
    .from('.attribution', {
      opacity: 0,
      duration: 0.8,
    }, '-=0.2');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-20 min-h-[70vh] relative flex items-center justify-center bg-bg-primary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[25vw] md:text-[35vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="quote-part block font-display text-xl md:text-2xl lg:text-3xl font-medium text-text-primary leading-relaxed mb-4">
          Our product was complex and required multiple skills.
        </span>
        <span className="quote-part block font-display text-xl md:text-2xl lg:text-3xl font-medium text-text-primary leading-relaxed mb-4">
          We chose eTechLogix for their track record, commitment to quality, and business sensitivity.
        </span>
        <span className="quote-part block font-display text-xl md:text-2xl lg:text-3xl font-medium text-text-primary leading-relaxed mb-4">
          And we were very pleased with the results.
        </span>

        <div className="attribution mt-10">
          <div className="w-12 h-px bg-accent-cyan mx-auto mb-4"></div>
          <div className="text-accent-cyan text-base md:text-lg font-medium">
            Team DecorShore
          </div>
        </div>
      </div>
    </section>
  );
}
