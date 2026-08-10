import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Process Flow Line Icons in eTechLogix Red #df012a ─── */
const IconReceive = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <path d="M16 6v14M10 14l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 24h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconValidate = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <path d="M16 4l11 5v7c0 6.5-4.8 11.5-11 13C9.8 27.5 5 22.5 5 16V9l11-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M11 16l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTransform = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <path d="M7 11h18M21 7l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 21H7M11 25l-4-4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconApplyRules = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <path d="M5 10h22M5 22h22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="12" cy="10" r="3" fill="white" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="20" cy="22" r="3" fill="white" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

const IconRoute = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <circle cx="7" cy="16" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="25" cy="9" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="25" cy="23" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M10 16h5c2 0 4-1 5-3l1.5-2M15 16c1 2 3 3 5 3h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconComplete = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-[#df012a]">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.75" />
    <path d="M11 16l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ProcessStep {
  id: string;
  label: string;
  Icon: React.ComponentType;
}

const processSteps: ProcessStep[] = [
  { id: 'receive', label: 'RECEIVE', Icon: IconReceive },
  { id: 'validate', label: 'VALIDATE', Icon: IconValidate },
  { id: 'transform', label: 'TRANSFORM', Icon: IconTransform },
  { id: 'rules', label: 'APPLY RULES', Icon: IconApplyRules },
  { id: 'route', label: 'ROUTE', Icon: IconRoute },
  { id: 'complete', label: 'COMPLETE', Icon: IconComplete },
];

interface CapabilityLogic {
  id: string;
  title: string;
  desc: string;
}

const capabilityLogics: CapabilityLogic[] = [
  {
    id: 'transform',
    title: 'Data Transformation',
    desc: 'Convert and normalize data between different systems and formats.',
  },
  {
    id: 'rules',
    title: 'Business Rules',
    desc: 'Apply operational logic before data moves forward to ensure accuracy and compliance.',
  },
  {
    id: 'validation',
    title: 'Validation',
    desc: 'Verify required fields, formats and conditions before data is processed.',
  },
  {
    id: 'orchestration',
    title: 'Workflow Orchestration',
    desc: 'Coordinate multiple systems in the right sequence to complete end-to-end processes.',
  },
  {
    id: 'errors',
    title: 'Error Handling & Retries',
    desc: 'Manage failed transactions intelligently and retry safely without losing data.',
  },
  {
    id: 'human',
    title: 'Human Exceptions',
    desc: 'Route unusual cases to the right person when automation should stop.',
  },
];

export default function EIIntegrationLogicSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        /* Left Column reveal */
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );

        /* Right Area reveal */
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightRef.current,
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
      id="more-than-moving-data"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] overflow-hidden py-16 md:py-20 border-t border-b border-neutral-200/80"
      aria-label="More Than Moving Data — Integration Logic & Capabilities"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-16 items-start">

          {/* ── LEFT CONTENT AREA (~34%) ── */}
          <div ref={leftRef} className="w-full lg:w-[34%] xl:w-[33%] shrink-0">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              MORE THAN MOVING DATA
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2 className="type-section-heading-lg text-[#0a0a0a] mb-6 max-w-[420px]">
              Integration should understand how your business actually works.
            </h2>

            <p className="type-body text-[#555555] max-w-[440px] leading-relaxed">
              We design integrations around the rules, validations, transformations and exceptions that keep real business processes running reliably across systems.
            </p>
          </div>

          {/* ── RIGHT AREA (~66%) — Process Flow + 3x2 Capability Grid ── */}
          <div ref={rightRef} className="w-full lg:w-[66%] xl:w-[67%] space-y-12">

            {/* ── PART 1: PROCESS FLOW (Icon-led horizontal architecture) ── */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 lg:p-8">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-6">
                ENTERPRISE DATA EXECUTION FLOW
              </div>

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
                {/* Subtle connecting line behind steps */}
                <div className="hidden sm:block absolute top-[14px] left-[5%] right-[5%] h-[1px] bg-neutral-200 z-0" />

                {processSteps.map((step, index) => {
                  const isLast = index === processSteps.length - 1;

                  return (
                    <div
                      key={step.id}
                      className="relative z-10 flex flex-col items-center text-center group bg-white px-2"
                    >
                      {/* Icon Container */}
                      <div className="flex items-center justify-center mb-3">
                        <step.Icon />
                      </div>

                      {/* Step Label */}
                      <span className="font-display font-semibold text-[11px] sm:text-xs tracking-[0.1em] uppercase text-[#0a0a0a]">
                        {step.label}
                      </span>

                      {/* Mobile connector arrow */}
                      {!isLast && (
                        <div className="block sm:hidden my-2 text-neutral-300">↓</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── PART 2: CAPABILITY GRID (Text-only 3x2 Merged Matrix) ── */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {capabilityLogics.map((item, index) => {
                  const isTopRow = index < 3;
                  const isNotRightmost = (index + 1) % 3 !== 0;

                  return (
                    <div
                      key={item.id}
                      data-capability-cell
                      className={`p-6 lg:p-8 flex flex-col justify-start group ${
                        isTopRow ? 'border-b md:border-b border-neutral-200/80' : 'border-b last:border-b-0 md:border-b-0 border-neutral-200/80'
                      } ${isNotRightmost ? 'md:border-r border-neutral-200/80' : ''}`}
                    >
                      {/* 1. Capability Title (Matched to HOW WE ENGINEER card titles) */}
                      <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-2">
                        {item.title}
                      </h3>

                      {/* 2. Short Red Underline */}
                      <div className="h-[2px] w-5 bg-[#df012a] mb-4 group-hover:w-8 transition-all duration-300" />

                      {/* 3. Description */}
                      <p className="type-body-sm text-[#555555] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
