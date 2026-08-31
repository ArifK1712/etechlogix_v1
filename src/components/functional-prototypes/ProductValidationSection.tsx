import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Minimal Red Outline Icons ─── */

const IconTarget = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 text-[#df012a] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.35" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.35" />
    <line x1="12" y1="1.5" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    <line x1="12" y1="18.5" x2="12" y2="22.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    <line x1="1.5" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    <line x1="18.5" y1="12" x2="22.5" y2="12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
  </svg>
);

const IconCube = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 text-[#df012a] shrink-0"
    aria-hidden="true"
  >
    <path
      d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinejoin="round"
    />
    <path d="M12 12V21.5" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    <path d="M12 12L20.5 7.5" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    <path d="M12 12L3.5 7.5" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
  </svg>
);

const IconCheckCircle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 text-[#df012a] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.35" />
    <path
      d="M8.5 12.25L10.75 14.5L15.5 9.75"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ValidationStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const validationSteps: ValidationStep[] = [
  {
    number: '01',
    title: 'Define',
    description: 'Clarify the business need and the decision that must be proven.',
    icon: <IconTarget />,
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'Make the critical workflow tangible enough to test.',
    icon: <IconCube />,
  },
  {
    number: '03',
    title: 'Validate',
    description: 'Use stakeholder feedback and technical evidence to decide what should be built next.',
    icon: <IconCheckCircle />,
  },
];

export default function ProductValidationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: leftRef.current, start: 'top 85%', once: true },
          }
        );

        gsap.fromTo(
          frameworkRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: frameworkRef.current, start: 'top 85%', once: true },
          }
        );

        const rows = frameworkRef.current?.querySelectorAll('.validation-row');
        if (rows && rows.length > 0) {
          gsap.fromTo(
            rows,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              delay: 0.12,
              ease: 'power3.out',
              scrollTrigger: { trigger: frameworkRef.current, start: 'top 85%', once: true },
            }
          );
        }

        gsap.fromTo(
          outcomeRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: { trigger: frameworkRef.current, start: 'top 80%', once: true },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="product-validation"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] overflow-hidden py-16 md:py-20 lg:py-24 border-t border-neutral-200/80"
      aria-label="Product Validation Framework"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* ── LEFT COLUMN (~44%) ── */}
          <div ref={leftRef} className="w-full">
            <p className="type-eyebrow-accent mb-3 tracking-[0.2em] text-[#df012a]">
              PRODUCT VALIDATION
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            
            <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.12] mb-6 max-w-lg">
              Reduce uncertainty<br className="hidden sm:inline" /> before you scale<br className="hidden sm:inline" /> the investment<span className="text-[#df012a]">.</span>
            </h2>
            
            <p className="type-body text-[#555555] leading-relaxed max-w-md text-pretty">
              Validate the critical workflow, gather evidence and define the right product scope before committing to full-scale development.
            </p>
          </div>

          {/* ── RIGHT COLUMN (~56%) ── */}
          <div className="w-full flex flex-col">
            
            {/* Structured Framework Container */}
            <div
              ref={frameworkRef}
              className="w-full bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="divide-y divide-neutral-200/70">
                {validationSteps.map((step) => (
                  <div
                    key={step.number}
                    className="validation-row py-6 sm:py-7 first:pt-0 last:pb-0 flex items-start sm:items-center gap-4 sm:gap-6 group transition-colors duration-150"
                  >
                    {/* Number */}
                    <span className="font-display font-medium text-2xl sm:text-3xl text-[#df012a] tracking-tight shrink-0 w-10 sm:w-12">
                      {step.number}
                    </span>

                    {/* Subtle vertical separator */}
                    <div className="h-10 sm:h-12 w-px bg-neutral-200 shrink-0 mx-1 sm:mx-2" aria-hidden="true" />

                    {/* Icon */}
                    <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-1">
                        {step.title}
                      </h3>
                      <p className="type-body text-[#555555] text-sm sm:text-[0.9375rem] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prototype Outcome Row */}
            <div
              ref={outcomeRef}
              className="mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-neutral-200/80"
            >
              <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#df012a] uppercase mb-4 block">
                PROTOTYPE OUTCOME
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-8 font-medium text-sm sm:text-[0.9375rem] text-[#0a0a0a]">
                <span>Validated Direction</span>
                <ArrowRight
                  className="w-4 h-4 text-[#df012a] shrink-0 rotate-90 sm:rotate-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>Defined Scope</span>
                <ArrowRight
                  className="w-4 h-4 text-[#df012a] shrink-0 rotate-90 sm:rotate-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>Development Readiness</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
