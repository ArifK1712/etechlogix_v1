import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline minimal line icons in eTechLogix Red #df012a ─── */
const IconCRM = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="22" cy="13" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M5 25c0-3.5 3.5-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M19 25c.5-2 2.2-4 5-4s4.5 2 5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconERP = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <path d="M16 5L5 11v10l11 6 11-6V11L16 5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M5 11l11 6 11-6M16 17v10" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>
);

const IconLogistics = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <rect x="4" y="9" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M20 14h5.5l3.5 4v3h-9v-7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <circle cx="9" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="23" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

const IconTax = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <path d="M8 5h16v22H8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M12 10h8M12 15h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M12 21l3 3 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAPIs = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="6" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="26" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M8.5 10.2l4.7 3.6M23.5 10.2l-4.7 3.6M8.5 21.8l4.7-3.6M23.5 21.8l-4.7-3.6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconLegacy = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a] transition-transform duration-300 group-hover:-translate-y-0.5">
    <ellipse cx="16" cy="8" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M7 8v7c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V8" stroke="currentColor" strokeWidth="1.75" />
    <path d="M7 15v7c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-7" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

interface CapabilityCategory {
  id: string;
  category: string;
  Icon: React.ComponentType;
  platforms: string[];
}

interface ArchitecturalLane {
  id: string;
  label: string;
  categories: CapabilityCategory[];
  zIndex: number;
}

const lanes: ArchitecturalLane[] = [
  {
    id: 'lane-01',
    label: '01 BUSINESS SYSTEMS',
    zIndex: 10,
    categories: [
      {
        id: 'crm',
        category: 'CRM & Customer Systems',
        Icon: IconCRM,
        platforms: ['Salesforce', 'HubSpot', 'Custom CRM platforms'],
      },
      {
        id: 'erp',
        category: 'ERP & Distribution',
        Icon: IconERP,
        platforms: ['Enterprise ERP', 'Internal operational systems'],
      },
    ],
  },
  {
    id: 'lane-02',
    label: '02 OPERATIONAL SYSTEMS',
    zIndex: 20,
    categories: [
      {
        id: 'logistics',
        category: 'Logistics & Shipping',
        Icon: IconLogistics,
        platforms: ['Descartes', 'Carrier platforms', 'Shipping APIs'],
      },
      {
        id: 'tax',
        category: 'Tax & Compliance',
        Icon: IconTax,
        platforms: ['Avalara', 'Tax engines', 'Compliance services'],
      },
    ],
  },
  {
    id: 'lane-03',
    label: '03 INTEGRATION FOUNDATION',
    zIndex: 30,
    categories: [
      {
        id: 'apis',
        category: 'APIs & Middleware',
        Icon: IconAPIs,
        platforms: ['MuleSoft', 'REST APIs', 'Webhooks', 'Custom middleware'],
      },
      {
        id: 'legacy',
        category: 'Legacy & Internal Systems',
        Icon: IconLegacy,
        platforms: ['Older enterprise applications', 'Databases', 'Custom internal tools'],
      },
    ],
  },
];

export default function EIBuiltToConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const lanesContainerRef = useRef<HTMLDivElement>(null);
  const lanesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 1024;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = gsap.context(() => {
        /* Full width intro reveal */
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

        if (isDesktop && !reduced) {
          /* Desktop Pinning & Exact Complete Overlap Scroll Animation */
          const rows = lanesRef.current?.querySelectorAll('[data-lane-row]') ?? [];
          if (rows.length === 3) {
            const r2 = rows[1] as HTMLElement;
            const r3 = rows[2] as HTMLElement;

            /* Initially position Row 2 and Row 3 completely below the shared card area */
            gsap.set(r2, { yPercent: 110 });
            gsap.set(r3, { yPercent: 110 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: lanesContainerRef.current,
                start: 'top 140px',
                end: '+=450',
                pin: true,
                scrub: 0.6,
                anticipatePin: 1,
              },
            });

            /* Row 2 moves up to completely cover Row 1 at exact same top position */
            tl.to(r2, {
              yPercent: 0,
              ease: 'none',
              duration: 1,
            });

            /* Row 3 moves up to completely cover Row 2 at exact same top position */
            tl.to(r3, {
              yPercent: 0,
              ease: 'none',
              duration: 1,
            });
          }
        } else {
          /* Mobile/Tablet: Standard Staggered Fade Reveal without Pinning */
          const laneElements = lanesRef.current?.querySelectorAll('[data-lane-row]') ?? [];
          gsap.fromTo(
            laneElements,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              stagger: 0.12,
              scrollTrigger: {
                trigger: lanesRef.current,
                start: 'top 82%',
                once: true,
              },
            },
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="built-to-connect-integrations"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden pb-16 md:pb-20"
      aria-label="Built to Connect — Systems Integration Landscape"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        {/* ── Inner Light Off-White Background Panel ── */}
        <div
          ref={lanesContainerRef}
          className="rounded-2xl border border-neutral-200/80 bg-[#fafaf8] p-8 md:p-12 lg:p-14"
        >

          {/* ── TOP FULL-WIDTH SECTION INTRO ── */}
          <div ref={introRef} className="max-w-3xl mb-12 lg:mb-14">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              BUILT TO CONNECT
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2 className="type-section-heading-lg text-[#0a0a0a] mb-5">
              Your systems should work together, not around each other.
            </h2>

            <p className="type-body text-[#555555] max-w-2xl leading-relaxed">
              Enterprise operations rarely live inside one platform. We connect applications, data, APIs and legacy systems so information can move reliably between the tools your teams already use.
            </p>
          </div>

          {/* ── 3 HORIZONTAL ARCHITECTURAL LANES (SHARED COMPACT CARD AREA WITH COMPLETE OVERLAP) ── */}
          <div
            ref={lanesRef}
            className="relative w-full h-auto lg:h-[280px] lg:overflow-hidden space-y-6 lg:space-y-0"
          >
            {lanes.map((lane, index) => (
              <div
                key={lane.id}
                data-lane-row
                style={{ zIndex: lane.zIndex }}
                className={`w-full flex flex-col md:flex-row items-stretch gap-3 md:gap-6 transform-gpu lg:absolute lg:top-0 lg:left-0 lg:right-0 bg-[#fafaf8] ${
                  index > 0 ? 'mt-6 md:mt-8 lg:mt-0' : ''
                }`}
              >
                {/* Left Architectural Lane Label */}
                <div className="w-full md:w-44 lg:w-52 shrink-0 flex items-center pt-1 md:pt-0">
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-neutral-400">
                    {lane.label}
                  </span>
                </div>

                {/* Connected 1px Bordered Row (2 Categories) */}
                <div className="flex-1 bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-2xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    {lane.categories.map((cat, catIdx) => (
                      <div
                        key={cat.id}
                        data-capability-cell
                        className={`p-6 lg:p-8 flex flex-col justify-start group ${
                          catIdx === 0 ? 'border-b sm:border-b-0 sm:border-r border-neutral-200/80' : ''
                        }`}
                      >
                        {/* 1. Red Line Icon */}
                        <div className="mb-4">
                          <cat.Icon />
                        </div>

                        {/* 2. Category Title (Exact HOW WE ENGINEER card-title typography) */}
                        <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-2">
                          {cat.category}
                        </h3>

                        {/* 3. Short Red Underline */}
                        <div className="h-[2px] w-5 bg-[#df012a] mb-5 group-hover:w-8 transition-all duration-300" />

                        {/* 4. Bullet-Point Content */}
                        <ul className="space-y-2">
                          {cat.platforms.map((platform) => (
                            <li key={platform} className="type-body-sm text-[#555555] font-normal leading-snug flex items-start gap-2.5">
                              <span className="text-neutral-400 select-none text-xs font-bold leading-none mt-1" aria-hidden="true">•</span>
                              <span>{platform}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
