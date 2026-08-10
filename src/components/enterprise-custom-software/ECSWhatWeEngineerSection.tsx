import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EngineeringCapability {
  id: string;
  title: string;
  shortTitle: string;
  desc: string;
  image: string;
  imageAlt: string;
}

const capabilities: EngineeringCapability[] = [
  {
    id: 'operational-platforms',
    title: 'Operational Platforms',
    shortTitle: 'Operational Platforms',
    desc: 'Workflow systems built around day-to-day business operations.',
    image: '/images/custom-software.webp',
    imageAlt: 'Enterprise operational platform workflow interface',
  },
  {
    id: 'erp-distribution',
    title: 'ERP & Distribution Systems',
    shortTitle: 'ERP & Distribution Systems',
    desc: 'Software for inventory, orders, fulfillment, pricing, and operational control.',
    image: '/images/legacy-systems.webp',
    imageAlt: 'ERP distribution and inventory control system',
  },
  {
    id: 'event-conference',
    title: 'Event & Conference Platforms',
    shortTitle: 'Event & Conference Platforms',
    desc: 'Platforms for registration, payments, attendees, meetings, and onsite operations.',
    image: '/images/product-prototypes.webp',
    imageAlt: 'Enterprise event registration and management platform',
  },
  {
    id: 'connected-applications',
    title: 'Connected Enterprise Applications',
    shortTitle: 'Connected Applications',
    desc: 'Applications integrated with CRM, ERP, finance, logistics, and internal systems.',
    image: '/images/enterprise-integrations.webp',
    imageAlt: 'Enterprise integration architecture and connected systems',
  },
];

export default function ECSWhatWeEngineerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

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
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );

        /* Showcase reveal */
        gsap.fromTo(
          showcaseRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: 'top 80%',
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
      id="what-we-engineer"
      className="relative w-full text-[#0a0a0a] overflow-hidden py-16 lg:py-20 border-t border-neutral-200/80"
      aria-label="What We Engineer — Enterprise Capabilities"
    >
      {/* ── Background subtle technical detail ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -right-16 top-1/3 w-[320px] opacity-[0.035]"
          viewBox="0 0 320 500"
          fill="none"
        >
          <line x1="0" y1="80" x2="320" y2="440" stroke="#df012a" strokeWidth="1" />
          <line x1="40" y1="80" x2="360" y2="440" stroke="#df012a" strokeWidth="1" />
          <circle cx="180" cy="280" r="3" fill="#df012a" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        {/* ── Section Intro ── */}
        <div ref={introRef} className="max-w-3xl mb-12 md:mb-16 text-left">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
            WHAT WE ENGINEER
          </p>
          <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

          <h2 className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] mb-5">
            Custom platforms for the systems your business depends on.
          </h2>

          <p className="type-body text-[#555555] max-w-xl">
            From operational platforms to connected enterprise applications, we build software around real business processes and existing technology.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════ */}
        {/* DESKTOP & TABLET: Horizontal Expandable Accordion Showcase    */}
        {/* ═════════════════════════════════════════════════════════════ */}
        <div ref={showcaseRef} className="hidden md:block">
          <div className="flex h-[540px] lg:h-[580px] w-full gap-3 lg:gap-4 items-stretch">
            {capabilities.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'flex-[6] lg:flex-[6.5] shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/5'
                      : 'flex-[1] bg-[#fafaf8] border border-neutral-200/80 hover:border-neutral-300 hover:bg-white'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {/* ── Background Image & Gradient Readability Overlay ── */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  </div>

                  {/* ── Active Panel Overlay Content ── */}
                  <div
                    id={`panel-${item.id}`}
                    className={`absolute inset-0 p-8 lg:p-10 flex flex-col justify-between z-10 transition-all duration-500 ease-out ${
                      isActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto delay-100'
                        : 'opacity-0 translate-y-3 pointer-events-none'
                    }`}
                  >
                    {/* Top tag / indicator */}
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-6 rounded-full bg-[#df012a]" />
                      <span className="type-eyebrow text-white/70 tracking-[0.18em]">
                        Active Capability
                      </span>
                    </div>

                    {/* Bottom Text Block */}
                    <div className="max-w-xl text-left">
                      <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-[-0.02em] mb-3">
                        {item.title}
                      </h3>

                      <p className="type-body text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      <a
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link inline-flex items-center gap-2.5 type-nav text-white border-b border-white/40 pb-0.5 hover:text-[#df012a] hover:border-[#df012a] transition-colors duration-200"
                      >
                        Explore capability
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 text-[#df012a]"
                          strokeWidth={2}
                        />
                      </a>
                    </div>
                  </div>

                  {/* ── Inactive Vertical Rotated Tab Content ── */}
                  <div
                    className={`relative w-full h-full flex flex-col justify-between items-center py-8 px-2 transition-opacity duration-300 ease-out ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                    }`}
                  >
                    {/* Top Red Dot Indicator on Hover */}
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 group-hover:bg-[#df012a] transition-colors" />

                    {/* Vertical Rotated Title */}
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-display font-bold text-2xl lg:text-3xl tracking-[-0.02em] text-[#0a0a0a] whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                        {item.shortTitle}
                      </span>
                    </div>

                    {/* Bottom Subtle Accent Mark */}
                    <span className="w-4 h-px bg-neutral-200" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════ */}
        {/* MOBILE: Clean Stacked Accordion                                */}
        {/* ═════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden space-y-3">
          {capabilities.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-display font-semibold text-base text-[#0a0a0a]">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                      isActive ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {isActive && (
                  <div className="px-5 pb-6 pt-0 space-y-4">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="type-body text-[#555555] text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <div>
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 type-nav text-[#0a0a0a] border-b border-[#0a0a0a] pb-0.5 hover:text-[#df012a] hover:border-[#df012a] transition-colors duration-200"
                      >
                        Explore capability
                        <ArrowRight
                          className="w-3.5 h-3.5 text-[#df012a]"
                          strokeWidth={2}
                        />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
