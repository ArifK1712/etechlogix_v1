import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Product Journey Icons (outline red, enterprise-focused) ─── */

const IconIdea = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#df012a]">
    <circle cx="24" cy="22" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 32v2a4 4 0 008 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="8" x2="24" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34.9" y1="11.1" x2="37.1" y2="8.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13.1" y1="11.1" x2="10.9" y2="8.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="38" y1="22" x2="41" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="22" x2="7" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Filament lines inside bulb */}
    <path d="M20 22c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconWorkflow = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    {/* Central node */}
    <rect x="19" y="19" width="10" height="10" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
    {/* Top node */}
    <rect x="19" y="5" width="10" height="8" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
    {/* Bottom-left node */}
    <rect x="5" y="35" width="10" height="8" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
    {/* Bottom-right node */}
    <rect x="33" y="35" width="10" height="8" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
    {/* Lines: top → center */}
    <line x1="24" y1="13" x2="24" y2="19" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
    {/* Line: center → bottom-left */}
    <path d="M22 29l-7 6" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
    {/* Line: center → bottom-right */}
    <path d="M26 29l7 6" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconPrototype = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#0a0a0a]">
    {/* Browser frame */}
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
    {/* Browser bar */}
    <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="1.5" />
    {/* Three dots */}
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    {/* Content lines */}
    <rect x="10" y="21" width="18" height="2.5" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="10" y="26" width="12" height="2" rx="1" fill="currentColor" opacity="0.15" />
    {/* Red cursor/interaction indicator */}
    <path d="M32 28l5 8-2.5-1-1 2.5L29 29.5l2.5 1z" stroke="#df012a" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconArrowStage = () => (
  <svg viewBox="0 0 44 18" fill="none" className="w-9 h-5 text-[#df012a] shrink-0">
    <path d="M0 9H39M31 2L39 9L31 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Stages data ─── */
const stages = [
  {
    label: 'IDEA',
    icon: <IconIdea />,
    text: 'Your concept,\ngoals and target\nusers',
  },
  {
    label: 'CRITICAL WORKFLOW',
    icon: <IconWorkflow />,
    text: 'Define the essential\njourney and core\ninteractions',
  },
  {
    label: 'FUNCTIONAL PROTOTYPE',
    icon: <IconPrototype />,
    text: 'A working product\nexperience you can\ntest and demonstrate',
  },
];

/* ─── Component ─── */
export default function FunctionalPrototypesHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allEls = [
      ...(contentRef.current?.children ?? []),
    ] as HTMLElement[];

    allEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'none';
    });

    allEls.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition =
          'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 80);
    });

    if (visualRef.current) {
      const v = visualRef.current;
      v.style.opacity = '0';
      v.style.transform = 'translateY(20px)';
      v.style.transition = 'none';
      setTimeout(() => {
        v.style.transition =
          'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        v.style.opacity = '1';
        v.style.transform = 'translateY(0)';
      }, 320);
    }
  }, []);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-label="Functional Product Prototypes — Hero"
    >
      {/* ── Subtle background accents ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Faint grid lines — top left */}
        <svg className="absolute -top-16 -left-24 w-[440px] opacity-[0.04]" viewBox="0 0 440 360" fill="none">
          <line x1="0" y1="80" x2="440" y2="80" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="180" x2="440" y2="180" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="280" x2="440" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="360" stroke="#df012a" strokeWidth="1" />
          <line x1="220" y1="0" x2="220" y2="360" stroke="#df012a" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="360" stroke="#df012a" strokeWidth="1" />
        </svg>
        {/* Thin red top-center accent */}
        <div className="absolute top-0 left-0 w-[100px] h-[2px] bg-[#df012a] opacity-50" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-32 pb-18 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center">

          {/* ── LEFT COLUMN (~46%) ── */}
          <div ref={contentRef} className="w-full lg:w-[50%] shrink-0 flex flex-col items-start">
            {/* Eyebrow */}
            <p className="type-eyebrow-accent tracking-[0.22em] mb-3">
              FUNCTIONAL PRODUCT PROTOTYPES
            </p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            {/* H1 */}
            <h1 className="type-hero-heading text-[#0a0a0a] mb-6 leading-[1.08]">
              Don't just explain<br />
              the idea.<br />
              <span className="text-[#df012a]">Make it usable.</span>
            </h1>

            {/* Supporting copy */}
            <p className="type-hero-lead text-neutral-500 max-w-[420px] mb-10">
              We turn early product concepts into functional experiences you can
              demonstrate, validate and use to make the next business decision.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-etech btn-etech--primary-dark btn-etech--hero group"
              >
                <span className="whitespace-nowrap">Discuss Your Product Idea</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
              <a
                href="#how-we-build"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-we-build')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-etech btn-etech--secondary btn-etech--hero"
              >
                See How We Build
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Product Journey Visual (~54%) ── */}
          <div ref={visualRef} className="w-full lg:w-[50%] shrink-0">
            {/* Main canvas panel */}
            <div className="relative bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm">

              {/* Browser-style header bar — slightly taller, more polished */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-neutral-200/70 bg-[#fafaf8]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#df012a] opacity-85" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300" />
                  <div className="w-3 h-3 rounded-full bg-neutral-200" />
                </div>
                <div className="flex-1 h-px bg-neutral-200/60 mx-6" />
              </div>

              {/* Journey content area — generous padding */}
              <div className="px-8 pt-10 pb-0">

                {/* Stage columns */}
                <div className="flex items-start">
                  {stages.map((stage, idx) => (
                    <div key={stage.label} className="flex items-start flex-1 min-w-0">
                      {/* Stage column */}
                      <div className="flex-1 flex flex-col items-center text-center min-w-0">
                        {/* Stage label */}
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#0a0a0a] uppercase mb-7 leading-tight block">
                          {stage.label}
                        </span>

                        {/* Icon in generous circle — enlarged */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center mb-7 shadow-xs">
                          <div className="scale-[1.5] sm:scale-[1.7]">
                            {stage.icon}
                          </div>
                        </div>

                        {/* Supporting text */}
                        <p className="text-[0.8125rem] sm:text-[0.875rem] text-[#555555] font-normal leading-[1.6] whitespace-pre-line">
                          {stage.text}
                        </p>
                      </div>

                      {/* Arrow between stages */}
                      {idx < stages.length - 1 && (
                        <div className="flex items-center justify-center shrink-0 w-10 sm:w-14 mt-[4.8rem]">
                          <IconArrowStage />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom business message strip — cleaner, more premium */}
                <div className="mt-10 -mx-8">
                  <div className="flex items-center gap-4 bg-[#fafaf8] border-t border-neutral-200/70 px-8 py-5">
                    <div className="w-[3px] h-6 bg-[#df012a] rounded-full shrink-0" aria-hidden="true" />
                    <p className="text-[0.875rem] text-[#444444] font-normal leading-snug tracking-[-0.01em]">
                      Built to validate the product, not simulate the whole company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
