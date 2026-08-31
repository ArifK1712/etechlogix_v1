import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Stage Header Icons ─── */
const IconShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-700">
    <path d="M12 3L20 6.5V12C20 16.5 16.5 20.2 12 21.5C7.5 20.2 4 16.5 4 12V6.5L12 3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M8.5 12L10.5 14L15.5 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLinkChain = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a]">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-800">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55l-2.45-2.45c-.74-.59-1.84-.51-2.55.2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M12 15l-3-3 7.5-7.5c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5L14 17l-2-2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M9 18l-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

/* ─── 9 Grid Card Icons ─── */
const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-600 shrink-0 mt-0.5">
    <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconApiHex = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a] shrink-0 mt-0.5">
    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <text x="12" y="13.5" textAnchor="middle" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">API</text>
  </svg>
);

const IconCloudServices = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-800 shrink-0 mt-0.5">
    <path d="M6.5 17.5A4.5 4.5 0 016 8.53a6 6 0 0111.45-1.92A4.5 4.5 0 0118.5 17.5H6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconWorkflowTree = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-600 shrink-0 mt-0.5">
    <rect x="10" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5M6 17v-3h12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCubes = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a] shrink-0 mt-0.5">
    <path d="M12 3l7 4v7.5l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 11.5L19 7.5M12 11.5L5 7.5M12 11.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconAppGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-800 shrink-0 mt-0.5">
    <rect x="4" y="4" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-600 shrink-0 mt-0.5">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconDataRed = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#df012a] shrink-0 mt-0.5">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconStackedLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-800 shrink-0 mt-0.5">
    <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 12L12 16.5L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 16.5L12 21L21 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default function LMModernizeWithoutDisruptionSection() {
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
      id="our-approach"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden py-16 md:py-20 border-t border-neutral-200/80"
      aria-label="Modernize Without Disruption — Architectural Strategy"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-16 items-start lg:items-center">

          {/* ── LEFT CONTENT AREA (~38%) ── */}
          <div ref={leftRef} className="w-full lg:w-[38%] xl:w-[36%] shrink-0">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              MODERNIZE WITHOUT DISRUPTION
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2 className="type-section-heading-lg text-[#0a0a0a] mb-6 leading-[1.12]">
              Keep the business logic.<br />
              Replace the technical constraints<span className="text-[#df012a]">.</span>
            </h2>

            <p className="type-body text-[#555555] mb-6 leading-relaxed max-w-md">
              We modernize legacy systems in controlled stages — preserving the workflows, rules and data your business relies on while replacing the architecture that limits speed, integration and scale.
            </p>

            <p className="font-display font-semibold text-base md:text-lg text-[#0a0a0a] leading-snug">
              Modernization doesn’t have to mean starting over.
            </p>
          </div>

          {/* ── RIGHT VISUAL PANEL (~62%) — 3-Stage Architecture ── */}
          <div ref={rightRef} className="w-full lg:w-[62%] xl:w-[64%]">
            <div className="rounded-2xl border border-neutral-200/80 bg-[#fafaf8] p-6 sm:p-8">

              {/* 3 Stage Headers */}
              <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4 md:gap-0">
                {/* Stage 1 */}
                <div className="w-full md:w-[28%]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <IconShieldCheck />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#df012a]">01</span>
                      <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug block">
                        PRESERVE
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">
                        Protect what already works
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />

                {/* Stage 2 */}
                <div className="w-full md:w-[28%]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <IconLinkChain />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#df012a]">02</span>
                      <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug block">
                        DECOUPLE
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">
                        Remove technical dependencies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />

                {/* Stage 3 */}
                <div className="w-full md:w-[28%]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-16 h-16 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <IconRocket />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#df012a]">03</span>
                      <h3 className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug block">
                        MODERNIZE
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">
                        Build for what comes next
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3x3 Architectural Flow Matrix */}
              <div className="space-y-5 sm:space-y-6">

                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 md:gap-0 relative">
                  {/* Card 1 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconDocument />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Business Rules</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Critical business rules and logic</p>
                    </div>
                  </div>

                  {/* Connector 1: PRESERVE -> DECOUPLE (Dashed Grey Line + One Red Circular Node) */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px border-t border-dashed border-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 2 (Decouple - Red Accent) */}
                  <div className="w-full md:w-[28%] bg-[#fbeaec]/40 border border-[#df012a]/35 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconApiHex />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">API Abstraction</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Create clean system boundaries</p>
                    </div>
                  </div>

                  {/* Connector 2: DECOUPLE -> MODERNIZE (Solid Red Line + One Red Circular Node) */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px bg-[#df012a]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 3 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconCloudServices />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Modern Services</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Modular, independent services</p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 md:gap-0 relative">
                  {/* Card 1 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconWorkflowTree />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Workflows</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Critical workflows and processes</p>
                    </div>
                  </div>

                  {/* Connector 1: PRESERVE -> DECOUPLE */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px border-t border-dashed border-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 2 (Decouple - Red Accent) */}
                  <div className="w-full md:w-[28%] bg-[#fbeaec]/40 border border-[#df012a]/35 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconCubes />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Integration Layer</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Decouple integrations safely</p>
                    </div>
                  </div>

                  {/* Connector 2: DECOUPLE -> MODERNIZE */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px bg-[#df012a]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 3 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconAppGrid />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Cloud-Ready Apps</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Scalable, resilient and future-ready</p>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 md:gap-0 relative">
                  {/* Card 1 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconDatabase />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Enterprise Data</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Enterprise data worth preserving</p>
                    </div>
                  </div>

                  {/* Connector 1: PRESERVE -> DECOUPLE */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px border-t border-dashed border-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 2 (Decouple - Red Accent) */}
                  <div className="w-full md:w-[28%] bg-[#fbeaec]/40 border border-[#df012a]/35 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconDataRed />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Data Layer</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Create consistent data access</p>
                    </div>
                  </div>

                  {/* Connector 2: DECOUPLE -> MODERNIZE */}
                  <div className="hidden md:flex items-center flex-1 px-1.5 sm:px-3 relative">
                    <div className="w-full h-px bg-[#df012a]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#df012a] shrink-0 -ml-1" />
                  </div>

                  {/* Card 3 */}
                  <div className="w-full md:w-[28%] bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                    <IconStackedLayers />
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a0a0a] leading-snug">Scalable Platform</h4>
                      <p className="text-[11px] sm:text-xs text-[#555555] font-normal leading-tight mt-1">Built for performance and growth</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Architectural Banner */}
              <div className="mt-8 pt-5 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[11px] font-semibold text-neutral-600 uppercase tracking-wider">
                  CONTROLLED MODERNIZATION
                </span>

                <div className="hidden sm:flex items-center gap-1 text-[#df012a] flex-1 max-w-[140px] px-2">
                  <div className="h-px w-full border-t border-dashed border-[#df012a]" />
                  <div className="text-[10px] select-none font-bold">→</div>
                </div>

                <span className="font-mono text-[11px] font-bold text-[#df012a] uppercase tracking-wider">
                  MINIMAL BUSINESS DISRUPTION
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
