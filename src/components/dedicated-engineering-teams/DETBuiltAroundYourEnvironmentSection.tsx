import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Red Outline Icons matching THE TEAM YOU NEED sizing ─── */

const IconLayers = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 text-[#df012a]"
    aria-hidden="true"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCycle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 text-[#df012a]"
    aria-hidden="true"
  >
    <path
      d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 3v5h5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 16h5v5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 text-[#df012a]"
    aria-hidden="true"
  >
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const supportingPoints = [
  {
    title: 'Your technology stack',
    description:
      'Work within the architecture and platforms your organization already uses.',
    icon: <IconLayers />,
  },
  {
    title: 'Your delivery rhythm',
    description:
      'Integrate with existing sprints, releases, reviews, and decision-making.',
    icon: <IconCycle />,
  },
  {
    title: 'Your standards',
    description:
      'Follow established engineering, security, quality, and governance practices.',
    icon: <IconShield />,
  },
];

export default function DETBuiltAroundYourEnvironmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          }
        );

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          }
        );

        const rows = contentRef.current?.querySelectorAll('.env-point-row');
        if (rows && rows.length > 0) {
          gsap.fromTo(
            rows,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              delay: 0.15,
              ease: 'power3.out',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="built-around-your-environment"
      className="relative w-full bg-[#fafaf8] py-16 lg:py-20 border-t border-neutral-200/80"
      aria-label="Built Around Your Environment"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,41%)_minmax(0,59%)] gap-10 lg:gap-14 xl:gap-16 items-stretch">
          
          {/* ── LEFT COLUMN: Enterprise Collaboration Image ── */}
          <div ref={imageRef} className="w-full flex">
            <div className="relative w-full h-full min-h-[28rem] sm:min-h-[32rem] lg:min-h-full rounded-2xl overflow-hidden border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-neutral-100">
              <img
                src="/images/dedicated-engineering-collaboration.jpg"
                alt="Embedded engineering team collaborating around a laptop discussing architecture and product delivery"
                width={1600}
                height={1200}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: Content & Structured Points ── */}
          <div ref={contentRef} className="w-full flex flex-col justify-between">
            
            {/* Eyebrow & Line */}
            <p className="type-eyebrow-accent mb-3 tracking-[0.2em] text-[#df012a]">
              BUILT AROUND YOUR ENVIRONMENT
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            {/* Main Heading */}
            <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.12] mb-8 text-balance">
              Your processes stay intact.<br />
              Your capacity gets stronger<span className="text-[#df012a]">.</span>
            </h2>

            {/* 3 Structured Supporting Points */}
            <div className="border-t border-neutral-200/80 divide-y divide-neutral-200/80">
              {supportingPoints.map((point) => (
                <div
                  key={point.title}
                  className="env-point-row py-5 sm:py-6 flex items-start gap-4 sm:gap-5 group transition-colors duration-150"
                >
                  {/* Icon circle matching THE TEAM YOU NEED section */}
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#df012a] shrink-0 transition-colors duration-300 group-hover:border-[#df012a]/45 shadow-2xs mt-0.5">
                    {point.icon}
                  </span>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-1">
                      {point.title}
                    </h3>
                    <p className="type-body-sm text-[#555555] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
