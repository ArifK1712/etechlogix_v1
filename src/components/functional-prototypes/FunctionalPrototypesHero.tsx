import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FunctionalPrototypesHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [...(contentRef.current?.children ?? [])] as HTMLElement[];
    const timers: number[] = [];

    elements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';
      element.style.transition = 'none';
    });

    elements.forEach((element, index) => {
      timers.push(window.setTimeout(() => {
        element.style.transition =
          'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100 + index * 80));
    });

    if (visualRef.current) {
      const visual = visualRef.current;
      visual.style.opacity = '0';
      visual.style.transform = 'translateY(20px)';
      visual.style.transition = 'none';
      timers.push(window.setTimeout(() => {
        visual.style.transition =
          'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        visual.style.opacity = '1';
        visual.style.transform = 'translateY(0)';
      }, 320));
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white" aria-label="Functional Product Prototypes Hero">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute -left-24 -top-16 w-[440px] opacity-[0.04]" viewBox="0 0 440 360" fill="none">
          <line x1="0" y1="80" x2="440" y2="80" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="180" x2="440" y2="180" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="280" x2="440" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="360" stroke="#df012a" strokeWidth="1" />
          <line x1="220" y1="0" x2="220" y2="360" stroke="#df012a" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="360" stroke="#df012a" strokeWidth="1" />
        </svg>
        <div className="absolute left-0 top-0 h-[2px] w-[100px] bg-[#df012a] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-18 pt-32 md:pb-20">
        <div className="flex flex-col items-center lg:flex-row">
          <div ref={contentRef} className="flex w-full shrink-0 flex-col items-start lg:w-[50%]">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">FUNCTIONAL PRODUCT PROTOTYPES</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h1 className="type-hero-heading mb-6 leading-[1.08] text-[#0a0a0a]">
              Don&apos;t just explain<br />
              the idea.<br />
              <span className="text-[#df012a]">Make it usable.</span>
            </h1>

            <p className="type-hero-lead mb-10 max-w-[420px] text-neutral-500">
              We turn early product concepts into functional experiences you can demonstrate,
              validate and use to make the next business decision.
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a href="/contact" className="btn-etech btn-etech--primary-dark btn-etech--hero group">
                <span className="whitespace-nowrap">Discuss Your Product Idea</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
              <a
                href="#how-we-build"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('how-we-build')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-etech btn-etech--secondary btn-etech--hero"
              >
                See How We Build
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div ref={visualRef} className="mt-12 w-full shrink-0 lg:mt-0 lg:w-[50%]">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#fafaf8]">
              <img
                src="/images/product-prototyping-hero.webp"
                alt="Notebook with hand-drawn product wireframes beside a smartphone"
                width={1600}
                height={1067}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
