import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Icons ─── */

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCost = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <path d="M12 3v2M12 19v2M7 7.5C7 6.12 8.34 5 10 5h4c1.66 0 3 1.12 3 2.5S17.66 10 16 10h-4c-1.66 0-3 1.12-3 2.5S10.34 15 12 15h2c1.66 0 3 1.12 3 2.5S15.66 20 14 20h-4c-1.66 0-3-1.12-3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconNodes = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.8 7L6.2 16M13.2 7l4.6 9M7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconSliders = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="6" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="12" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="18" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-[#df012a]">
    <path d="M12 3L4 7v5c0 4.42 3.37 8.56 8 9.56C16.63 20.56 20 16.42 20 12V7l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 20 12" fill="none" className="w-4 h-3 text-[#df012a] shrink-0">
    <path d="M0 6H17M11 1L17 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Right panel icons
const IconGrowth = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#df012a]">
    <rect x="3" y="12" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="8" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="17" y="4" width="4" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 9L8 5L13 7L20 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 2l3 0 0 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFast = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#df012a]">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconSmart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#df012a]">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconRisk = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#df012a]">
    <path d="M12 3L4 7v5c0 4.42 3.37 8.56 8 9.56C16.63 20.56 20 16.42 20 12V7l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Row Data ─── */
const transformationRows = [
  { icon: <IconClock />, constraint: 'Slow to change', outcome: 'Faster response to business needs' },
  { icon: <IconCost />, constraint: 'High cost to maintain', outcome: 'Lower cost and simpler operations' },
  { icon: <IconNodes />, constraint: 'Hard to integrate', outcome: 'Easier integration and extensibility' },
  { icon: <IconSliders />, constraint: 'Technology limits agility', outcome: 'More flexibility as the business evolves' },
  { icon: <IconDatabase />, constraint: 'Data is siloed', outcome: 'Data becomes accessible and useful' },
  { icon: <IconShield />, constraint: 'Higher risk & fragility', outcome: 'More resilient and future-ready systems' },
];

const benefits = [
  { icon: <IconFast />, label: 'Move faster' },
  { icon: <IconSmart />, label: 'Operate smarter' },
  { icon: <IconRisk />, label: 'Reduce risk' },
];

/* ─── Section ─── */
export default function LMBusinessImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          headRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 87%', once: true },
          },
        );
        gsap.fromTo(
          matrixRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: matrixRef.current, start: 'top 84%', once: true },
          },
        );
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: panelRef.current, start: 'top 84%', once: true },
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
      id="business-impact"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden py-15 md:py-20 border-t border-neutral-200/80"
      aria-label="Business Impact — Why Modernize"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">

        {/* ── Section Intro ── */}
        <div ref={headRef} className="mb-10 md:mb-12">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">BUSINESS IMPACT</p>
          <div className="mb-5 h-px w-10 bg-[#df012a]" aria-hidden="true" />
          <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.12] mb-5 max-w-2xl">
            Modernization should change<br />
            how <span className="text-[#df012a]">your business performs.</span>
          </h2>
          <p className="type-body text-[#555555] leading-relaxed max-w-xl">
            The real value of modernization shows up across the business—faster delivery,
            lower costs, better data, and the ability to adapt.
          </p>
        </div>

        {/* ── Two-Column Body ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ── LEFT: Transformation Matrix (~70%) ── */}
          <div ref={matrixRef} className="w-full lg:w-[65%] shrink-0">
            {/* Column Headers */}
            <div className="flex items-center gap-0 mb-0 px-3">
              {/* Spacer for icon column */}
              <div className="w-9 shrink-0" />
              {/* Left label */}
              <div className="flex-1 min-w-0 pr-3">
                <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug">
                  What Holds you Back
                </h3>
              </div>
              {/* Middle connector */}
              <div className="hidden sm:flex items-center gap-2 shrink-0 px-4">
                <div className="w-16 md:w-24 border-t border-dashed border-neutral-300" />
                <div className="w-5 h-5 rounded-full bg-[#df012a] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 12 10" fill="none" className="w-2.5 h-2 text-white">
                    <path d="M0 5H10M6 1L10 5L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-16 md:w-24 border-t border-dashed border-neutral-300" />
              </div>
              {/* Right label */}
              <div className="flex-1 min-w-0 pl-3 text-right sm:text-left">
                <span className="font-display font-semibold text-lg md:text-xl text-[#df012a] tracking-[-0.02em] leading-snug">
                  What Modernization Enables
                </span>
              </div>
            </div>

            {/* Matrix border container */}
            <div className="mt-3 border border-neutral-200/90 rounded-xl overflow-hidden">
              {transformationRows.map((row, idx) => (
                <div
                  key={row.constraint}
                  className={`
                    flex flex-col sm:flex-row items-start sm:items-center
                    px-3 py-4 md:py-4.5
                    gap-3 sm:gap-0
                    group transition-colors duration-150 hover:bg-[#fafaf8]
                    ${idx < transformationRows.length - 1 ? 'border-b border-neutral-200/80' : ''}
                  `}
                >
                  {/* Icon badge */}
                  <div className="shrink-0 w-9 flex items-center">
                    <div className="w-7 h-7 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center shadow-2xs group-hover:border-[#df012a]/25 transition-colors duration-150">
                      {row.icon}
                    </div>
                  </div>

                  {/* Constraint */}
                  <div className="flex-1 min-w-0 sm:pr-4">
                    <p className="type-body font-normal text-[#0a0a0a] leading-snug">
                      {row.constraint}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex shrink-0 px-4 justify-center">
                    <IconArrowRight />
                  </div>
                  <div className="flex sm:hidden items-center gap-1.5 text-[#df012a]">
                    <svg viewBox="0 0 12 16" fill="none" className="w-2.5 h-3 text-[#df012a]">
                      <path d="M6 0v12M1 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Outcome */}
                  <div className="flex-1 min-w-0 sm:pl-4">
                    <p className="type-body font-normal text-[#555555] leading-snug">
                      {row.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Business Shift Panel (~30%) ── */}
          <div
            ref={panelRef}
            className="w-full lg:w-[35%] shrink-0 bg-[#fafaf8] border border-neutral-200/90 rounded-2xl p-5 lg:p-6 flex flex-col relative overflow-hidden"
          >
            {/* Subtle red dot grid decoration */}
            <div className="absolute top-4 right-4 grid grid-cols-4 gap-[5px] opacity-20 pointer-events-none" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#df012a]" />
              ))}
            </div>

            {/* Growth Icon */}
            <div className="mb-4 w-12 h-12 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center shadow-2xs">
              <IconGrowth />
            </div>

            {/* Red divider */}
            <div className="mb-4 h-px w-8 bg-[#df012a]" aria-hidden="true" />

            {/* Label */}
            <p className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a] uppercase mb-3">
              THE BUSINESS SHIFT
            </p>

            {/* Main statement */}
            <p className="font-display font-bold text-xl md:text-2xl text-[#df012a] leading-[1.18] tracking-[-0.02em] mb-5">
              Technology stops dictating what the business can do.
            </p>

            {/* Red divider */}
            <div className="mb-5 h-px w-8 bg-neutral-200" aria-hidden="true" />

            {/* Supporting copy */}
            <p className="type-body text-[#555555] leading-relaxed font-normal mb-7">
              Modernization unlocks speed, flexibility and visibility—so your teams can
              focus on what moves the business forward.
            </p>

            {/* Three micro benefits */}
            <div className="mt-auto border-t border-neutral-200/80 pt-5 flex items-start divide-x divide-neutral-200/70">
              {benefits.map((b) => (
                <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5 px-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center shadow-2xs">
                    {b.icon}
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a] mb-3">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
