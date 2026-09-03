import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Icons (outline red, 24×24 viewBox) ─── */

const IconAppWindow = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#df012a]">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6.5" r="1" fill="currentColor" />
    <circle cx="9" cy="6.5" r="1" fill="currentColor" />
    <rect x="7" y="12" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconNodes = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#df012a]">
    <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.8 8.2L7.2 14.8M13.2 8.2l3.6 6.6M8.5 17h7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#df012a]">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#df012a]">
    <path
      d="M6.5 17.5A4.5 4.5 0 016 8.53a6 6 0 0111.45-1.92A4.5 4.5 0 0118.5 17.5H6.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Capability Data ─── */

interface CapabilityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  outcome: string;
}

const capabilities: CapabilityItem[] = [
  {
    icon: <IconAppWindow />,
    title: 'Application Modernization',
    description: 'Modernize critical applications without disrupting operations.',
    outcome: 'Modular & Maintainable',
  },
  {
    icon: <IconNodes />,
    title: 'API & Integration Modernization',
    description: 'Replace tightly coupled systems with cleaner integrations.',
    outcome: 'Connected & Decoupled',
  },
  {
    icon: <IconDatabase />,
    title: 'Data Modernization',
    description: 'Make legacy data easier to access, govern and use.',
    outcome: 'Accessible Data',
  },
  {
    icon: <IconCloud />,
    title: 'Cloud & Infrastructure Modernization',
    description: 'Modernize infrastructure for performance, scale and deployment.',
    outcome: 'Cloud-Ready Platforms',
  },
];

/* ─── Capability Row Component ─── */
function CapabilityRow({ icon, title, description, outcome }: CapabilityItem) {
  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-7 sm:py-8 lg:py-9 border-b border-neutral-200/80 gap-5 sm:gap-6 transition-colors duration-200">
      
      {/* Left Part: Icon + Title + Description */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        {/* Icon Badge */}
        <div className="shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-200/90 shadow-xs flex items-center justify-center group-hover:border-[#df012a]/30 transition-colors duration-200">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-1.5">
            {title}
          </h3>
          <p className="type-body text-[#555555] leading-relaxed max-w-xl text-pretty">
            {description}
          </p>
        </div>
      </div>

      {/* Right Part: Arrow + Outcome Pill */}
      <div className="shrink-0 flex items-center gap-2.5 sm:gap-3 self-start sm:self-center pl-[68px] sm:pl-0">
        <ArrowRight
          className="w-4 h-4 text-[#df012a] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#171717] bg-[#fbeaec]/40 border border-[#df012a]/25 whitespace-nowrap tracking-tight">
          {outcome}
        </span>
      </div>

    </div>
  );
}

/* ─── Main Section ─── */
export default function LMModernizationCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: leftRef.current, start: 'top 85%', once: true },
          }
        );

        if (rowsRef.current) {
          gsap.fromTo(
            [...rowsRef.current.children] as HTMLElement[],
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: rowsRef.current, start: 'top 82%', once: true },
            },
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
      id="modernization-capabilities"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] overflow-hidden py-16 lg:py-20 border-t border-neutral-200/80"
      aria-label="Modernization Capabilities"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-14 items-stretch">

          {/* ── LEFT: Image Card Panel ── */}
          <div
            ref={leftRef}
            className="w-full lg:w-[36%] xl:w-[35%] shrink-0 rounded-3xl border border-neutral-200/90 overflow-hidden relative shadow-2xs p-7 sm:p-9 lg:p-10 flex flex-col justify-between group min-h-[460px] lg:min-h-[580px]"
          >
            <img
              src="/images/server_room_bg.jpg"
              alt="Enterprise server room infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/75 to-white/90 pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              <p className="type-eyebrow-accent mb-3 tracking-[0.22em] text-[#df012a]">
                MODERNIZATION CAPABILITIES
              </p>
              <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
              <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.15]">
                Modernize the systems that matter most to your business<span className="text-[#df012a]">.</span>
              </h2>
            </div>
          </div>

          {/* ── RIGHT: Capability Rows ── */}
          <div className="w-full lg:w-[64%] xl:w-[65%] flex flex-col justify-center">
            <div ref={rowsRef} className="border-t border-neutral-200/80">
              {capabilities.map((item) => (
                <CapabilityRow key={item.title} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
