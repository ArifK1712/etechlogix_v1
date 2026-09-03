import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sharedPrinciples = ['SHARED FOCUS', 'SHARED PLANNING', 'SHARED OWNERSHIP', 'SHARED SUCCESS'];

export default function DedicatedEngineeringTeamsHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [...(contentRef.current?.children ?? [])] as HTMLElement[];
    const timers: number[] = [];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    elements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';
      element.style.transition = 'none';
    });

    elements.forEach((element, index) => {
      timers.push(window.setTimeout(() => {
        element.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100 + index * 80));
    });

    if (visualRef.current) {
      const visual = visualRef.current;
      visual.style.opacity = '0';
      visual.style.transform = 'translateY(18px)';
      visual.style.transition = 'none';
      timers.push(window.setTimeout(() => {
        visual.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        visual.style.opacity = '1';
        visual.style.transform = 'translateY(0)';
      }, 280));
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-neutral-200/80" aria-label="Dedicated Engineering Teams Hero">
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-18 pt-32 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16 xl:gap-20">
          <div ref={contentRef} className="flex flex-col items-start">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">DEDICATED ENGINEERING TEAMS</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h1 className="service-hero-heading type-hero-heading mb-6 leading-[1.08] text-[#0a0a0a]">
              Scale engineering<br />
              without the overhead<span className="service-hero-dot">.</span>
            </h1>

            <p className="type-hero-lead mb-10 max-w-[500px] text-neutral-500">
              Dedicated engineers who work within your product, processes, and technology stack — giving you the capacity to move faster without compromising ownership or quality.
            </p>

            <Link to="/contact" className="btn-etech btn-etech--primary btn-etech--hero group">
              <span className="whitespace-nowrap">Build Your Team</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>

          <div ref={visualRef} className="w-full">
            <div className="relative min-h-[31rem] overflow-hidden border border-neutral-200 bg-[#fafaf8] sm:min-h-[35rem] lg:min-h-[39rem]">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6" aria-hidden="true">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span key={index} className="border-b border-r border-neutral-200/80" />
                ))}
              </div>

              <div className="absolute inset-y-0 left-0 w-[26%] overflow-hidden border-r border-neutral-300 bg-neutral-100">
                <img
                  src="/images/dedicated-engineering-architecture.jpg"
                  alt="Minimal concrete architectural passage with structured light and shadow"
                  width={1600}
                  height={2400}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center saturate-[0.72]"
                />
                <div className="pointer-events-none absolute inset-0 bg-white/10" aria-hidden="true" />
              </div>

              <div className="absolute left-[26%] top-[8%] w-[45%] pl-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]">YOUR ORGANIZATION</p>
                <div className="mt-5 space-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-neutral-500">
                  <p>YOUR PRODUCT</p>
                  <p>YOUR PROCESSES</p>
                  <p>YOUR TECHNOLOGY</p>
                </div>
              </div>

              <div className="absolute left-[26%] top-[30%] flex h-[42%] w-[36%] flex-col justify-center bg-[#df012a] px-7 text-white sm:px-9">
                <p className="mb-7 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/75">DEDICATED ENGINEERING TEAM</p>
                <div className="space-y-5">
                  {sharedPrinciples.map((principle) => (
                    <div key={principle} className="flex items-center gap-3">
                      <span className="h-px w-3 bg-white/60" aria-hidden="true" />
                      <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-[5%] top-[33%] w-[27%] border-t border-neutral-400/60 pt-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]">ETECHLOGIX</p>
                <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[#df012a]">ENGINEERING CAPACITY</p>
                <div className="mt-5 h-px w-8 bg-neutral-400" />
              </div>

              <div className="absolute bottom-[9%] left-[26%] right-[5%] border-t border-neutral-300 pl-6 pt-5">
                <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.17em] text-[#111111] sm:text-xs">
                  ONE TEAM. <span className="text-[#df012a]">SHARED GOALS.</span> CLEAR OWNERSHIP.
                </p>
              </div>

              <span className="absolute left-[26%] top-[30%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#df012a]" aria-hidden="true" />
              <span className="absolute left-[62%] top-[72%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#df012a]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
