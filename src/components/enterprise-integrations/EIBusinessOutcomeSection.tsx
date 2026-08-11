import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

/* ─── Outcome 1: Less Manual Work ─── */
const IconLessManualWork = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a]">
    <rect x="7" y="6" width="18" height="21" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 6V4.5C12 3.67 12.67 3 13.5 3H18.5C19.33 3 20 3.67 20 4.5V6" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <line x1="15" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
    <line x1="15" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="19" cy="21" r="4.5" fill="white" stroke="currentColor" strokeWidth="1.75" />
    <path d="M17 21L18.25 22.25L21 19.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Outcome 2: More Reliable Operations ─── */
const IconReliableOperations = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a]">
    <path d="M16 4L26 8.5V15.5C26 21.5 21.5 26.2 16 27.5C10.5 26.2 6 21.5 6 15.5V8.5L16 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M11.5 15.5L14.5 18.5L20.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Outcome 3: Better Visibility ─── */
const IconBetterVisibility = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#df012a]">
    <rect x="6" y="18" width="4.5" height="9" rx="1" stroke="currentColor" strokeWidth="1.75" />
    <rect x="13.75" y="12" width="4.5" height="15" rx="1" stroke="currentColor" strokeWidth="1.75" />
    <rect x="21.5" y="6" width="4.5" height="21" rx="1" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

/* ─── Architectural Red Integration Visual — Far Right Boundary Artwork ─── */
const AbstractIntegrationVisual = () => (
  <svg
    viewBox="0 0 400 800"
    fill="none"
    className="w-full h-full text-[#df012a]"
    preserveAspectRatio="xMaxYMid meet"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="focalGlow" cx="400" cy="360" r="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#df012a" stopOpacity="0.14" />
        <stop offset="40%" stopColor="#df012a" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#df012a" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Subtle Red Dot Grid Texture */}
    <g opacity="0.12">
      {Array.from({ length: 36 }).map((_, r) =>
        Array.from({ length: 14 }).map((_, c) => (
          <circle key={`grid-${r}-${c}`} cx={150 + c * 18} cy={r * 22} r="1.1" fill="currentColor" />
        ))
      )}
    </g>

    {/* Soft Focal Glow at Right Edge Convergence Point */}
    <circle cx="400" cy="360" r="140" fill="url(#focalGlow)" />

    {/* Top Flowing Line */}
    <path
      d="M 100 0 C 100 120, 200 240, 400 360"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.5"
      fill="none"
    />

    {/* 3 Primary Connection Lines from Red Square Anchors */}
    {/* Anchor 1 (Top) */}
    <path
      d="M 95 280 L 150 280 C 230 280, 310 330, 400 360"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.55"
      fill="none"
    />

    {/* Anchor 2 (Middle) */}
    <path
      d="M 95 360 L 400 360"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.65"
      fill="none"
    />

    {/* Anchor 3 (Bottom) */}
    <path
      d="M 95 440 L 150 440 C 230 440, 310 390, 400 360"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.55"
      fill="none"
    />

    {/* Faint Secondary Radial Lines */}
    <path
      d="M 400 360 C 320 330, 240 320, 180 325"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.16"
      fill="none"
    />
    <path
      d="M 400 360 C 320 345, 240 340, 170 345"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.12"
      fill="none"
    />
    <path
      d="M 400 360 C 320 375, 240 380, 170 375"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.12"
      fill="none"
    />
    <path
      d="M 400 360 C 320 390, 240 400, 180 395"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.16"
      fill="none"
    />

    {/* Bottom Flowing Lines */}
    {/* Line A: Vertical from bottom then curves up-right */}
    <path
      d="M 95 800 L 95 620 C 95 530, 220 420, 400 360"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.5"
      fill="none"
    />

    {/* Line B: Lower-left curve crossing Line A */}
    <path
      d="M 20 800 C 20 730, 60 670, 100 640 L 400 360"
      stroke="currentColor"
      strokeWidth="1.15"
      opacity="0.38"
      fill="none"
    />

    {/* 3 Small Red Square Anchor Points */}
    <rect x="91.5" y="276.5" width="7" height="7" fill="currentColor" />
    <rect x="91.5" y="356.5" width="7" height="7" fill="currentColor" />
    <rect x="91.5" y="436.5" width="7" height="7" fill="currentColor" />
  </svg>
);

export default function EIBusinessOutcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );

        const outcomeItems = outcomesRef.current?.querySelectorAll('[data-outcome-item]') ?? [];
        gsap.fromTo(
          outcomeItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: outcomesRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );

        gsap.fromTo(
          visualRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
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
      id="business-outcome"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden py-16 md:py-24"
      aria-label="The Business Outcome — Connected Systems"
    >
      {/* ── Far Right Integration Visual (Boundary Artwork) ── */}
      <div
        ref={visualRef}
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[480px] z-0 overflow-hidden hidden md:block"
        aria-hidden="true"
      >
        <AbstractIntegrationVisual />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* ── LEFT SIDE: Eyebrow, Heading, Body & CTAs (~38%) ── */}
          <div ref={leftRef} className="w-full lg:w-[38%] xl:w-[36%] shrink-0">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              THE BUSINESS OUTCOME
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2 className="type-section-heading-lg text-[#0a0a0a] mb-5 leading-[1.12]">
              Connected systems.<br />
              Fewer operational gaps.
            </h2>

            <p className="type-body text-[#555555] mb-8 leading-relaxed max-w-md">
              We design integrations that help your teams work smarter, reduce manual effort and make better decisions with trusted information.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#df012a] text-white hover:bg-[#b80122] px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-2xs group whitespace-nowrap"
              >
                <span>Discuss Your Integration</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0a0a0a] border border-neutral-200 hover:border-neutral-300 hover:bg-[#fafafa] px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 group whitespace-nowrap"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* ── MIDDLE / RIGHT: 3 Business Outcomes (~62%) ── */}
          <div
            ref={outcomesRef}
            className="w-full lg:w-[62%] xl:w-[64%] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-neutral-200/80 pt-6 sm:pt-0 border-t sm:border-t-0 border-neutral-200/80"
          >
            {/* Outcome 1 */}
            <div data-outcome-item className="sm:px-6 lg:px-7 first:pl-0 flex flex-col items-start group">
              <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/70 shadow-2xs flex items-center justify-center mb-5 group-hover:border-[#df012a]/30 transition-colors duration-300">
                <IconLessManualWork />
              </div>
              <div className="h-[2px] w-5 bg-[#df012a] mb-4 group-hover:w-8 transition-all duration-300" aria-hidden="true" />
              <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-2">
                Less Manual Work
              </h3>
              <p className="type-body-sm text-[#555555] leading-relaxed font-normal">
                Reduce duplicate entry and handoffs between systems.
              </p>
            </div>

            {/* Outcome 2 */}
            <div data-outcome-item className="sm:px-6 lg:px-7 flex flex-col items-start group">
              <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/70 shadow-2xs flex items-center justify-center mb-5 group-hover:border-[#df012a]/30 transition-colors duration-300">
                <IconReliableOperations />
              </div>
              <div className="h-[2px] w-5 bg-[#df012a] mb-4 group-hover:w-8 transition-all duration-300" aria-hidden="true" />
              <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-2">
                More Reliable Operations
              </h3>
              <p className="type-body-sm text-[#555555] leading-relaxed font-normal">
                Keep information consistent as it moves across the business.
              </p>
            </div>

            {/* Outcome 3 */}
            <div data-outcome-item className="sm:px-6 lg:px-7 last:pr-0 flex flex-col items-start group">
              <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/70 shadow-2xs flex items-center justify-center mb-5 group-hover:border-[#df012a]/30 transition-colors duration-300">
                <IconBetterVisibility />
              </div>
              <div className="h-[2px] w-5 bg-[#df012a] mb-4 group-hover:w-8 transition-all duration-300" aria-hidden="true" />
              <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug mb-2">
                Better Visibility
              </h3>
              <p className="type-body-sm text-[#555555] leading-relaxed font-normal">
                Give teams access to the information they need, where they need it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
