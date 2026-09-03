import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';

interface JourneyMilestone {
  decade: string;
  title?: string;
  description: string;
  isCurrent?: boolean;
}

const milestones: JourneyMilestone[] = [
  {
    decade: '1990s',
    description:
      'Built experience across business systems, custom applications, and enterprise operations.',
  },
  {
    decade: '2000s',
    description:
      'Expanded into large-scale software platforms, integrations, and business-critical systems.',
  },
  {
    decade: '2010s',
    description:
      'Helped organizations modernize legacy technology and connect increasingly complex ecosystems.',
  },
  {
    decade: 'TODAY',
    title: 'AI + Modern Engineering',
    description:
      'Combining enterprise software, automation, AI, and engineering teams to build what comes next.',
    isCurrent: true,
  },
];

export default function OurJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const spineLineRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      // 1. Left column headline & eyebrow reveal
      if (leftColRef.current) {
        tl.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          }
        );
      }

      // 2. Central spine line drawing downwards smoothly
      if (spineLineRef.current) {
        tl.fromTo(
          spineLineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 0.85,
            ease: 'power2.inOut',
          },
          '-=0.45'
        );
      }

      // 3. Staggered reveal of milestone rows
      const validRows = rowsRef.current.filter(Boolean);
      if (validRows.length > 0) {
        tl.fromTo(
          validRows,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '-=0.55'
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="our-journey"
      ref={sectionRef}
      className="our-journey-section relative isolate overflow-hidden bg-white border-t border-neutral-200/70 py-16 lg:py-20 text-[#0a0a0a]"
      aria-labelledby="our-journey-title"
    >
      {/* ─── VIEWPORT-ANCHORED SVG FLOW LINES / WAVES (Starts at left viewport edge) ─── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full md:w-[60vw] max-w-[850px] h-[220px] sm:h-[260px] lg:h-[300px] select-none z-0 overflow-visible"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-left-bottom overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Subtle fade gradient toward the right */}
            <linearGradient id="journeyWaveFade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.14" />
              <stop offset="65%" stopColor="#0f172a" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="journeyWaveRedFade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df012a" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#df012a" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#df012a" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Flow Line 1 (Upper smooth bezier wave) */}
          <path
            d="M0 160 C 140 160, 220 100, 380 100 C 520 100, 640 50, 800 50"
            stroke="url(#journeyWaveFade)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Flow Line 2 (Primary Red Accent Wave) */}
          <path
            d="M0 195 C 160 195, 240 135, 420 135 C 560 135, 680 85, 800 85"
            stroke="url(#journeyWaveRedFade)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Flow Line 3 (Parallel offset wave) */}
          <path
            d="M0 225 C 180 225, 270 170, 460 170 C 600 170, 700 120, 800 120"
            stroke="url(#journeyWaveFade)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Flow Line 4 (Lower subtle wave) */}
          <path
            d="M0 255 C 200 255, 300 205, 500 205 C 640 205, 720 160, 800 160"
            stroke="url(#journeyWaveFade)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Flow Line 5 (Dashed secondary wave) */}
          <path
            d="M0 135 C 130 135, 210 75, 360 75 C 490 75, 600 30, 750 30"
            stroke="url(#journeyWaveFade)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />

          {/* Red Node on Accent Wave */}
          <circle cx="420" cy="135" r="3" fill="#df012a" />
          <circle cx="420" cy="135" r="8" stroke="#df012a" strokeWidth="1" strokeOpacity="0.25" fill="none" />

          {/* Neutral Nodes */}
          <circle cx="220" cy="195" r="2" fill="#94a3b8" opacity="0.6" />
          <circle cx="380" cy="100" r="2" fill="#94a3b8" opacity="0.6" />
          <circle cx="500" cy="205" r="2" fill="#94a3b8" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* ─── LEFT COLUMN (38–42%) ─── */}
          <div className="lg:col-span-5 relative flex flex-col justify-start self-stretch">
            <div ref={leftColRef} className="lg:sticky lg:top-32">
              {/* Eyebrow */}
              <p className="type-eyebrow-accent mb-3 tracking-[0.22em] text-[#df012a]">
                OUR JOURNEY
              </p>
              <span className="mb-6 block h-[2px] w-10 bg-[#df012a]" aria-hidden="true" />

              {/* Main Headline */}
              <h2
                id="our-journey-title"
                className="type-section-heading-xl text-balance max-w-[500px] font-display font-semibold tracking-[-0.025em] text-[#111111] leading-[1.12]"
              >
                Built through decades of solving real business problems
                <span className="text-[#df012a]">.</span>
              </h2>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: TIMELINE ROWS (58–62%) ─── */}
          <div className="lg:col-span-7 relative">
            
            {/* Central Spine Line */}
            <div
              ref={spineLineRef}
              className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200/90"
              aria-hidden="true"
            />

            <div className="space-y-0">
              {milestones.map((milestone, index) => {
                if (milestone.isCurrent) {
                  // ─── LAST POINT (TODAY): Red background card (No top margin) ───
                  return (
                    <article
                      key={milestone.decade}
                      ref={(el) => {
                        rowsRef.current[index] = el;
                      }}
                      className="journey-row journey-row--today group relative rounded-2xl bg-[#df012a] text-white p-6 sm:p-8 lg:p-9 shadow-[0_14px_38px_rgba(223,1,42,0.18)] transition-all duration-300 hover:shadow-[0_18px_44px_rgba(223,1,42,0.24)] ml-5 sm:ml-7 lg:ml-9"
                    >
                      {/* Spine Marker Node (Positioned on the spine line opposite the card) */}
                      <div
                        className="absolute -left-5 sm:-left-7 lg:-left-9 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        aria-hidden="true"
                      >
                        <div className="relative flex h-8 w-8 items-center justify-center">
                          {/* Pulsing subtle ring */}
                          <span className="absolute inset-0 rounded-full border border-[#df012a]/35 animate-pulse" />
                          {/* Inner white circle container */}
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                            {/* Inner solid red core */}
                            <div className="h-2.5 w-2.5 rounded-full bg-[#df012a]" />
                          </div>
                        </div>
                      </div>

                      {/* Row Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-[minmax(140px,auto)_1px_1fr] items-center gap-4 sm:gap-6 md:gap-0">
                        {/* Zone 1: Decade Typography (Semibold) */}
                        <div className="select-none md:pr-6 lg:pr-8">
                          <span className="font-display font-semibold text-white text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[3rem] xl:text-[3.25rem] leading-none tracking-[-0.03em] block">
                            {milestone.decade}
                          </span>
                        </div>

                        {/* Zone 2: Vertical Separator Line */}
                        <div
                          className="hidden md:block w-px self-stretch bg-white/25 my-1"
                          aria-hidden="true"
                        />

                        {/* Zone 3: Milestone Content Area */}
                        <div className="md:pl-6 lg:pl-8 transition-transform duration-300 md:group-hover:translate-x-1">
                          {/* Short white horizontal accent line */}
                          <span
                            className="block h-[2.5px] w-8 bg-white mb-3 transition-all duration-300 md:group-hover:w-11"
                            aria-hidden="true"
                          />

                          {/* Milestone Title */}
                          <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="type-body text-white/95 text-base md:text-lg leading-relaxed max-w-[420px] mt-2">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                }

                // ─── STANDARD ROWS (1990s, 2000s, 2010s) ───
                return (
                  <article
                    key={milestone.decade}
                    ref={(el) => {
                      rowsRef.current[index] = el;
                    }}
                    className="journey-row group relative border-t border-neutral-200/80 py-7 sm:py-8 lg:py-9 pl-7 sm:pl-9 lg:pl-11 transition-colors duration-300"
                  >
                    {/* Spine Marker Node (Positioned directly on the vertical spine line at left-0) */}
                    <div
                      className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                      aria-hidden="true"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-all duration-300 group-hover:border-[#df012a]/50 group-hover:scale-110">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#df012a]" />
                      </div>
                    </div>

                    {/* Row Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(140px,auto)_1px_1fr] items-center gap-4 sm:gap-6 md:gap-0">
                      {/* Zone 1: Decade Typography (Semibold) */}
                      <div className="select-none md:pr-6 lg:pr-8">
                        <span className="font-display font-semibold text-[#111111] text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[3rem] xl:text-[3.25rem] leading-none tracking-[-0.03em] block transition-colors duration-300 group-hover:text-black">
                          {milestone.decade}
                        </span>
                      </div>

                      {/* Zone 2: Thin Vertical Separator Line */}
                      <div
                        className="hidden md:block w-px self-stretch bg-neutral-200/85 my-1"
                        aria-hidden="true"
                      />

                      {/* Zone 3: Milestone Content Area */}
                      <div className="md:pl-6 lg:pl-8 transition-transform duration-300 md:group-hover:translate-x-1">
                        {/* Short red horizontal accent line */}
                        <span
                          className="block h-[2px] w-7 bg-[#df012a] mb-3.5 transition-all duration-300 md:group-hover:w-10"
                          aria-hidden="true"
                        />

                        {/* Description */}
                        <p className="type-body text-neutral-600 text-base md:text-lg leading-relaxed max-w-[420px]">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
