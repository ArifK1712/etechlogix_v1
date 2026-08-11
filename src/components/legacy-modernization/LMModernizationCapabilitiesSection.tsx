import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Icons (outline red, 24×24 viewBox, w-5 h-5 rendered) ─── */

const IconAppWindow = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a]">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6.5" r="1" fill="currentColor" />
    <circle cx="9" cy="6.5" r="1" fill="currentColor" />
    <rect x="7" y="12" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconNodes = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a]">
    <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.8 8.2L7.2 14.8M13.2 8.2l3.6 6.6M8.5 17h7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a]">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a]">
    <path
      d="M6.5 17.5A4.5 4.5 0 016 8.53a6 6 0 0111.45-1.92A4.5 4.5 0 0118.5 17.5H6.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const IconRedArrow = () => (
  <svg viewBox="0 0 36 14" fill="none" className="w-7 h-3.5 text-[#df012a] shrink-0">
    <path
      d="M0 7H32M26 1L32 7L26 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Row Data ─── */

interface RowData {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  outcome: string;
}

const rows: RowData[] = [
  {
    icon: <IconAppWindow />,
    title: 'Application Modernization',
    description:
      'Modernize business-critical applications without losing the logic that keeps operations running.',
    tags: ['Monoliths', 'Custom Applications', 'Outdated Frameworks'],
    outcome: 'Modular &\nMaintainable\nApplications',
  },
  {
    icon: <IconNodes />,
    title: 'API & Integration Modernization',
    description:
      'Replace tightly coupled connections with cleaner, more manageable integration architecture.',
    tags: ['Middleware', 'APIs', 'Third-party Systems', 'Dependencies'],
    outcome: 'Connected &\nDecoupled\nSystems',
  },
  {
    icon: <IconDatabase />,
    title: 'Data Modernization',
    description:
      'Make legacy enterprise data easier to access, govern and use across modern applications.',
    tags: ['Databases', 'Data Models', 'Silos', 'Access Layers'],
    outcome: 'Consistent &\nAccessible\nData',
  },
  {
    icon: <IconCloud />,
    title: 'Cloud & Infrastructure Modernization',
    description:
      'Move beyond infrastructure that limits deployment, performance and growth.',
    tags: ['Hosting', 'Deployment', 'Runtime', 'Infrastructure'],
    outcome: 'Scalable &\nCloud-Ready\nPlatforms',
  },
];

/* ─── Single Row Component (shared by all four rows) ─── */
function CapabilityRow({ icon, title, description, tags, outcome }: RowData) {
  return (
    <div className="
      border-b border-neutral-200/80
      flex flex-col sm:flex-row
      items-start
      py-4
      gap-4 sm:gap-0
      group
      transition-colors duration-200
      rounded-sm
    ">
      {/* ── Column A: Icon badge — fixed 52px wide ── */}
      <div className="shrink-0 w-[52px] pt-0.5">
        <div className="
          w-16 h-16
          rounded-full
          bg-white
          border border-neutral-200/90
          flex items-center justify-center
          shadow-sm
          group-hover:border-[#df012a]/30
          transition-colors duration-200
        ">
          {icon}
        </div>
      </div>

      {/* ── Column B: Title + description + tags — flex-1 ── */}
      <div className="flex-1 min-w-0 sm:pl-8 sm:pr-6">
        <h3 className="
          font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug block
        ">
          {title}
        </h3>

        <p className="
          type-body text-[#555555] mb-4 leading-relaxed max-w-md
        ">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] sm:text-xs text-neutral-500">
          {tags.map((tag, idx) => (
            <span key={tag} className="flex items-center gap-2">
              <span>{tag}</span>
              {idx < tags.length - 1 && (
                <span className="text-[#df012a] font-bold select-none" aria-hidden="true">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Column C: Arrow + outcome — fixed width ── */}
      <div className="
        shrink-0
        flex items-center gap-3 sm:gap-4
        sm:w-[300px]
        w-full
        pt-3 sm:pt-0
        border-t sm:border-t-0
        border-neutral-200/60
        sm:self-start sm:pt-1
      ">
        <div className="shrink-0 group-hover:translate-x-1 transition-transform duration-200">
          <IconRedArrow />
        </div>
        <p className="
          font-display font-semibold text-md p-2 px-4 bg-[#fbeaec]/40 border border-[#df012a]/35 rounded-full tracking-[-0.02em] leading-snug block
        ">
          {outcome}
        </p>
      </div>
    </div>
  );
}

/* ─── Section ─── */
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
          },
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
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="modernization-capabilities"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] overflow-hidden py-15 md:py-20 border-t border-neutral-200/80"
      aria-label="Modernization Capabilities"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-16 items-start">

          {/* ── LEFT: Image Card Panel ── */}
          <div
            ref={leftRef}
            className="w-full lg:w-[35%] xl:w-[35%] shrink-0 lg:sticky rounded-3xl border border-neutral-200/90 overflow-hidden relative shadow-2xs p-7 sm:p-9 lg:p-10 flex flex-col justify-between group min-h-[500px] lg:min-h-[680px]"
          >
            <img
              src="/images/server_room_bg.jpg"
              alt="Enterprise server room infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/35 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white/85 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
                  MODERNIZATION CAPABILITIES
                </p>
                <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
                <h2 className="type-section-heading-lg text-[#0a0a0a] mb-6 leading-[1.12]">
                  Modernize the<br />
                  systems<br />
                  that matter <span className="text-[#df012a]">most to</span><br />
                  <span className="text-[#df012a]">your business.</span>
                </h2>
              </div>
              <p className="type-body text-[#444444] font-normal leading-relaxed max-w-md mt-4">
                From business-critical applications to the infrastructure beneath them, we
                modernize legacy environments in focused stages — improving maintainability,
                connectivity, data access and scalability without unnecessary replacement.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Capability Rows ── */}
          <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col">
            {/* All four rows rendered via the same CapabilityRow component */}
            <div ref={rowsRef} className="border-t border-neutral-200/80">
              {rows.map((row) => (
                <CapabilityRow key={row.title} {...row} />
              ))}
            </div>

            {/* Bottom micro-message */}
            <div className="pt-8 md:pt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a] uppercase">
                FOCUSED STAGES
              </span>
              <span className="text-[#df012a] font-bold text-xs select-none">•</span>
              <span className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a] uppercase">
                MEASURABLE OUTCOMES
              </span>
              <span className="text-[#df012a] font-bold text-xs select-none">•</span>
              <span className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a] uppercase">
                MINIMAL DISRUPTION
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
