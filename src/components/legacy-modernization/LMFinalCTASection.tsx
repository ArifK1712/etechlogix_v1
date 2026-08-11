import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    label: 'Identify',
    description: 'Where legacy creates the most friction.',
  },
  {
    label: 'Prioritize',
    description: 'Focus on changes that drive real value.',
  },
  {
    label: 'Modernize',
    description: 'Move forward in controlled stages.',
  },
];

export default function LMFinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          },
        );
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.75, delay: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
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
      id="ready-to-begin"
      className="relative w-full bg-[#fafaf8] py-12 md:py-16"
      aria-label="Ready to Begin — Start Your Modernization"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── LEFT COLUMN (~60%) ── */}
          <div ref={leftRef} className="w-full lg:w-[58%] lg:pr-14 xl:pr-20">
            {/* Eyebrow */}
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              READY TO BEGIN?
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            {/* Heading */}
            <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.12] mb-6 max-w-lg">
              Modernization starts<br />
              with a <span className="text-[#df012a]">focused first step.</span>
            </h2>

            {/* Supporting copy */}
            <p className="type-body text-[#555555] leading-relaxed max-w-md mb-8 md:mb-10">
              Let's identify what's creating the most friction in your business and define
              a practical path forward—without disrupting what's working.
            </p>

            {/* Primary CTA */}
            <Link
              to="/contact"
              className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex"
            >
              <span>Discuss Your Modernization</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* ── Vertical Divider (desktop only) ── */}
          <div className="hidden lg:block shrink-0 self-stretch">
            <div className="h-full w-px bg-neutral-200/80 my-2" />
          </div>

          {/* ── Horizontal separator (mobile only) ── */}
          <div className="block lg:hidden w-full h-px bg-neutral-200/80" />

          {/* ── RIGHT COLUMN (~40%) ── */}
          <div ref={rightRef} className="w-full lg:w-[42%] lg:pl-14 xl:pl-20">
            {/* Red accent line */}
            <div className="mb-5 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            {/* Right heading */}
            <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-8">
              A practical path forward.
            </h3>

            {/* Vertical timeline */}
            <div className="flex flex-col">
              {timelineSteps.map((step, idx) => {
                const isLast = idx === timelineSteps.length - 1;
                return (
                  <div key={step.label} className="flex gap-4">
                    {/* Dot + line column */}
                    <div className="flex flex-col items-center shrink-0 w-4">
                      {/* Red dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 mt-1" />
                      {/* Connecting line — hidden on last step */}
                      {!isLast && (
                        <div className="flex-1 w-px bg-[#df012a]/40 mt-1.5 mb-0" style={{ minHeight: '2.25rem' }} />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-7 ${isLast ? '' : ''}`}>
                      <p className="font-display font-semibold text-[0.9rem] md:text-[0.9375rem] text-[#0a0a0a] tracking-[-0.01em] leading-snug mb-1">
                        {step.label}
                      </p>
                      <p className="text-[0.875rem] text-[#666666] font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
