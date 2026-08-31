import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button, buttonClassName } from '../ui/Button';

export default function CaseStudiesHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [...(contentRef.current?.children ?? [])] as HTMLElement[];
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers: ReturnType<typeof setTimeout>[] = [];

    const reset = () => {
      timers.forEach(clearTimeout);
      elements.forEach((element) => {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
        element.style.removeProperty('transition');
      });
    };

    if (!motionPreference.matches) {
      elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(16px)';
        element.style.transition = 'none';
        timers.push(
          setTimeout(() => {
            element.style.transition =
              'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, 100 + index * 80)
        );
      });
    }

    motionPreference.addEventListener('change', reset);
    return () => {
      motionPreference.removeEventListener('change', reset);
      reset();
    };
  }, []);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-labelledby="case-studies-hero-heading"
    >
      {/* Match the Enterprise Custom Software hero's existing background treatment. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-20 -left-32 w-[520px] opacity-[0.04]"
          viewBox="0 0 520 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="80" x2="520" y2="80" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="160" x2="520" y2="160" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="240" x2="520" y2="240" stroke="#df012a" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="420" stroke="#df012a" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="420" stroke="#df012a" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="420" stroke="#df012a" strokeWidth="1" />
        </svg>
        <svg
          className="absolute top-0 right-0 w-[340px] opacity-[0.035]"
          viewBox="0 0 340 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="340" y1="0" x2="0" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="380" y1="0" x2="40" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="420" y1="0" x2="80" y2="280" stroke="#df012a" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] opacity-[0.04]"
          viewBox="0 0 640 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 9 }).map((_, row) =>
            Array.from({ length: 17 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 40} cy={row * 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[2px] bg-[#df012a] opacity-60" />
        <div
          style={{
            position: 'absolute',
            top: '-8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140%',
            maxWidth: '1440px',
            height: '72%',
            background:
              'radial-gradient(ellipse 68% 58% at 50% 36%, rgba(223,1,42,0.07) 0%, rgba(223,1,42,0.028) 40%, rgba(223,1,42,0.008) 65%, transparent 80%)',
            filter: 'blur(56px)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 md:pb-20 md:pt-36">
        <div ref={contentRef} className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em]">Case Studies</span>
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
          </div>

          <h1
            id="case-studies-hero-heading"
            className="service-hero-heading type-hero-heading text-[#0a0a0a] max-w-6xl text-balance mb-7"
          >
            Complex problems<span className="service-hero-dot">.</span>
            <br />
            Measurable outcomes<span className="service-hero-dot">.</span>
          </h1>

          <p className="type-hero-lead max-w-[520px] text-neutral-500 mb-11 text-center">
            See how we turn complex business challenges into scalable digital products, intelligent
            workflows, and enterprise platforms that deliver measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-0">
            <a
              href="#case-studies"
              className={buttonClassName('primaryDark', 'hero', 'group')}
              onClick={(event) => {
                event.preventDefault();
                const target = document.getElementById('case-studies');
                if (!target) return;

                const lenis = (
                  window as unknown as {
                    __lenis?: {
                      scrollTo: (
                        target: HTMLElement | string,
                        options?: { offset?: number; duration?: number; easing?: (t: number) => number }
                      ) => void;
                    };
                  }
                ).__lenis;

                if (lenis) {
                  lenis.scrollTo(target, { offset: -32, duration: 1.1 });
                } else {
                  target.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                      ? 'instant'
                      : 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              <span className="relative z-10 whitespace-nowrap">Explore Our Work</span>
              <ArrowRight
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
            <Button href="/contact" variant="secondary" size="hero">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
