import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline SVG icons with subtle red accents ─── */
const IconLogic = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-[2.125rem] sm:h-[2.125rem]">
    <rect x="7" y="15" width="9" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" />
    <rect x="24" y="7" width="9" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" />
    <rect x="24" y="25" width="9" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" />
    <path d="M16 18.5h4.5m0 0v-8m0 8v8m0 0h3.5" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20.5" cy="10.5" r="1.5" fill="#df012a" />
    <circle cx="20.5" cy="26.5" r="1.5" fill="#df012a" />
  </svg>
);

const IconSystems = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-[2.125rem] sm:h-[2.125rem]">
    <ellipse cx="18" cy="11" rx="10" ry="4" stroke="#111" strokeWidth="1.5" />
    <path d="M8 11v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="#111" strokeWidth="1.5" />
    <path d="M8 18v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="#111" strokeWidth="1.5" />
    <path d="M28 14h5M28 21h5M28 27h5" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="33" cy="14" r="1.5" fill="#df012a" />
    <circle cx="33" cy="21" r="1.5" fill="#df012a" />
    <circle cx="33" cy="27" r="1.5" fill="#df012a" />
  </svg>
);

const IconScale = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-[2.125rem] sm:h-[2.125rem]">
    <circle cx="20" cy="12" r="4.5" stroke="#111" strokeWidth="1.5" />
    <path d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="15" r="3.5" stroke="#df012a" strokeWidth="1.25" opacity="0.85" />
    <path d="M6 28c0-3.3 2.7-6 6-6" stroke="#df012a" strokeWidth="1.25" strokeLinecap="round" opacity="0.85" />
    <circle cx="28" cy="15" r="3.5" stroke="#df012a" strokeWidth="1.25" opacity="0.85" />
    <path d="M34 28c0-3.3-2.7-6-6-6" stroke="#df012a" strokeWidth="1.25" strokeLinecap="round" opacity="0.85" />
  </svg>
);

const IconLegacy = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-[2.125rem] sm:h-[2.125rem]">
    <rect x="7" y="7" width="22" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" />
    <circle cx="11" cy="10.5" r="1" fill="#df012a" />
    <circle cx="15" cy="10.5" r="1" fill="#111" />
    <rect x="7" y="17" width="22" height="7" rx="1.5" stroke="#111" strokeWidth="1.5" />
    <circle cx="11" cy="20.5" r="1" fill="#df012a" />
    <circle cx="15" cy="20.5" r="1" fill="#111" />
    <circle cx="27" cy="29" r="4" stroke="#df012a" strokeWidth="1.5" />
    <path d="M27 24v10M22 29h10M23.5 25.5l7 7M23.5 32.5l7-7" stroke="#df012a" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const capabilities = [
  {
    num: '01',
    title: 'Complex Business Logic',
    desc: 'Multi-stage processes, approvals, exceptions, roles and operational rules.',
    Icon: IconLogic,
  },
  {
    num: '02',
    title: 'Connected Enterprise Systems',
    desc: 'ERP, CRM, finance, logistics, third-party platforms, APIs and internal applications.',
    Icon: IconSystems,
  },
  {
    num: '03',
    title: 'Operational Scale',
    desc: 'Applications designed for multiple teams, locations, users, workflows and growing data volumes.',
    Icon: IconScale,
  },
  {
    num: '04',
    title: 'Existing Technology Landscape',
    desc: 'Custom software engineered to work with legacy systems and established enterprise infrastructure.',
    Icon: IconLegacy,
  },
];

export default function ECSCapabilitiesSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const listRef     = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const bottomRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = gsap.context(() => {

      /* Left column slide-up */
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 82%', once: true },
        }
      );

      /* Right capability items — staggered */
      const items = listRef.current?.querySelectorAll('[data-cap-item]') ?? [];
      gsap.fromTo(items,
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: listRef.current, start: 'top 80%', once: true },
        }
      );

      /* Red connector line draws downward */
      gsap.fromTo(connectorRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1, duration: 1.1, ease: 'power2.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 80%', once: true },
        }
      );

      /* Bottom statement */
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: bottomRef.current, start: 'top 88%', once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="ecs-capabilities"
      className="relative w-full bg-[#fafaf8] overflow-hidden"
      aria-label="Enterprise capabilities"
    >
      {/* ── Decorative background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Faint flowing lines — left edge */}
        <svg className="absolute -left-16 top-0 h-full w-[280px] opacity-[0.290]" viewBox="0 0 280 800" preserveAspectRatio="none" fill="none">
          <path d="M280 0 Q60 200 200 400 Q340 600 80 800" stroke="#df012a" strokeWidth="1" />
          <path d="M300 0 Q80 200 220 400 Q360 600 100 800" stroke="#df012a" strokeWidth="0.8" />
        </svg>

        {/* Dot grid — top right */}
        <svg className="absolute top-10 right-10 w-[160px] opacity-[0.04]" viewBox="0 0 160 100" fill="none">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 22} cy={r * 22} r="1.3" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      {/* ── Main content container ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-16 lg:py-20">

        {/* ═══════════════════════════════════════════ */}
        {/* TOP: Asymmetric 2-column                   */}
        {/* ═══════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-14 items-start">

          {/* ── LEFT COLUMN ── */}
          <div ref={leftRef} className="w-full lg:w-[44%] xl:w-[44%]">

            {/* Eyebrow matching WhyEtechLogixSection */}
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              BUILT FOR COMPLEX OPERATIONS
            </p>
            <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            {/* Heading matching WhyEtechLogixSection */}
            <h2 className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]">
              Enterprise software<br />
              has to work across<br />
              more than one system.{' '}
              <span className="text-[#df012a]">
                It has to work across<br />
                your entire operation.
              </span>
            </h2>

            {/* Body paragraph matching WhyEtechLogixSection */}
            <p className="type-body mt-6 max-w-md text-[#555555]">
              We engineer custom platforms for environments where workflows span
              departments, business rules are complex, systems need to exchange data,
              permissions matter, and existing enterprise applications cannot simply
              be replaced.
            </p>
          </div>

          {/* ── RIGHT COLUMN — Capability list (Dominant 56% width) ── */}
          <div className="w-full lg:w-[56%] xl:w-[56%]">
            <div className="relative flex" ref={listRef}>

              {/* Red vertical connector line with top/bottom brackets */}
              <div className="hidden sm:flex flex-col items-center mr-6 sm:mr-8 pt-7 pb-7 shrink-0 relative">
                <div
                  ref={connectorRef}
                  className="w-px bg-[#df012a] flex-1 relative"
                  style={{ minHeight: '100%' }}
                />
              </div>

              {/* Capability rows */}
              <div className="flex-1 divide-y divide-[#EAEAEA]">
                {capabilities.map((cap) => (
                  <div
                    key={cap.num}
                    data-cap-item
                    className="relative flex items-center gap-5 sm:gap-6 py-7 sm:py-8 first:pt-0 last:pb-0"
                  >
                    {/* Connection dot on the connector line */}
                    <span
                      className="hidden sm:block absolute -left-[31px] sm:-left-[39px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border border-[#df012a] bg-white z-10"
                      aria-hidden="true"
                    >
                      <span className="block h-1 w-1 rounded-full bg-[#df012a] m-0.5" />
                    </span>

                    {/* Large red number */}
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#df012a] shrink-0 w-8 sm:w-9 text-left">
                      {cap.num}
                    </span>

                    {/* Pure white circular icon container (size preserved, white bg) */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                      <cap.Icon />
                    </div>

                    {/* Title and description */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#0a0a0a] md:text-xl">
                        {cap.title}
                      </h3>
                      <p className="type-body mt-1.5 text-[#555555]">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* BOTTOM STATEMENT BAND (Refined White Panel)  */}
        {/* ═══════════════════════════════════════════ */}
        <div
          ref={bottomRef}
          className="mt-16 rounded-2xl border border-neutral-200/80 bg-white p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 shadow-[0_4px_20px_rgba(0,0,0,0.025)]"
        >
          {/* Left — statement with vertical red bar (wider ~70% layout) */}
          <div className="flex gap-5 items-start w-full lg:w-[72%]">
            {/* Thin vertical red accent line */}
            <div className="w-[2px] bg-[#df012a] self-stretch shrink-0 rounded-full" aria-hidden="true" />

            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-semibold tracking-[-0.02em] text-[#0a0a0a] md:text-xl">
                We don't build isolated applications.
              </p>
              <p className="font-display text-lg font-semibold tracking-[-0.02em] text-[#df012a] md:text-xl mt-1">
                We engineer software that becomes part of your enterprise operation.
              </p>
            </div>
          </div>

          {/* Right — text link (~24% width, right-aligned) */}
          <div className="shrink-0 lg:w-[24%] flex lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 type-nav text-[#0a0a0a] border-b border-[#0a0a0a] pb-0.5 hover:text-[#df012a] hover:border-[#df012a] transition-colors duration-200"
            >
              How we approach custom software
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
