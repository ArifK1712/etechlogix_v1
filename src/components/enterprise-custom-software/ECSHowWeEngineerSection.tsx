import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline minimal line icons with red accent ─── */
const IconUnderstand = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-[#df012a]">
    <rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M10 12h12M10 16h8M10 20h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="21" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const IconArchitect = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-[#df012a]">
    <rect x="4" y="6" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <rect x="18" y="6" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <rect x="11" y="18" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M9 14v2h14v-2M16 16v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEngineer = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-[#df012a]">
    <path d="M10 9L4 16l6 7M22 9l6 7-6 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 7l-4 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconEvolve = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-[#df012a]">
    <path d="M6 24l7-7 5 5 9-9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="27" cy="13" r="1.5" fill="currentColor" />
  </svg>
);

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  Icon: React.ComponentType;
}

const steps: ProcessStep[] = [
  {
    num: '01',
    title: 'Understand the Operation',
    desc: 'We study workflows, approvals, business rules, users, exceptions, and existing systems.',
    Icon: IconUnderstand,
  },
  {
    num: '02',
    title: 'Architect the System',
    desc: 'We define application structure, data models, APIs, integrations, permissions, and security.',
    Icon: IconArchitect,
  },
  {
    num: '03',
    title: 'Engineer & Integrate',
    desc: 'We build production software and connect it with the enterprise systems already in use.',
    Icon: IconEngineer,
  },
  {
    num: '04',
    title: 'Evolve With the Business',
    desc: 'We extend, automate, modernize, and scale the platform as business requirements change.',
    Icon: IconEvolve,
  },
];

export default function ECSHowWeEngineerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        /* Section intro reveal */
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );

        /* 4 Cards staggered reveal */
        const cards = gridRef.current?.querySelectorAll('[data-process-card]') ?? [];
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          },
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="how-we-engineer"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] overflow-hidden py-16 lg:py-20 border-t border-neutral-200/80"
      aria-label="How We Engineer — Process Grid"
    >
      {/* ── Background subtle technical detail ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -left-12 top-1/4 w-[280px] opacity-[0.035]"
          viewBox="0 0 280 400"
          fill="none"
        >
          <line x1="0" y1="60" x2="280" y2="340" stroke="#df012a" strokeWidth="1" />
          <line x1="30" y1="60" x2="310" y2="340" stroke="#df012a" strokeWidth="1" />
          <circle cx="140" cy="200" r="3" fill="#df012a" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        {/* ── Section Intro ── */}
        <div ref={introRef} className="max-w-3xl mb-12 md:mb-16">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
            HOW WE ENGINEER
          </p>
          <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

          <h2 className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] mb-5">
            From business operations to production software.
          </h2>

          <p className="type-body text-[#555555] max-w-xl">
            We turn complex workflows, business rules, systems, and integrations into software engineered for real enterprise operations.
          </p>
        </div>

        {/* ── 4-Card Clean Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              data-process-card
              className="relative flex flex-col justify-between bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-7 md:p-8 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] group"
            >
              {/* Top Accent line & Icon Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#fafaf8] border border-neutral-200/60 group-hover:border-[#df012a]/30 group-hover:bg-[#df012a]/[0.03] transition-colors duration-300">
                    <step.Icon />
                  </div>
                </div>

                {/* Subtle red top bar */}
                <div className="h-0.5 w-6 bg-[#df012a] mb-5 opacity-80 group-hover:w-10 transition-all duration-300" />

                {/* Title */}
                <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="type-body-sm text-[#555555] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
