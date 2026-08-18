import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────
   Vector Icons for Capabilities
──────────────────────────────────────────── */
const IconRules = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#df012a]" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>
);

const IconExceptions = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#df012a]" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.2" />
  </svg>
);

const IconSystemReady = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#df012a]" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

/* ────────────────────────────────────────────
   Active Pill Icons
──────────────────────────────────────────── */
const ActiveCheck = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#df012a]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3.5,8 6.5,11 12.5,4.5" />
  </svg>
);

const ActiveWarning = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#df012a]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2 L14 13 H2 Z" />
    <line x1="8" y1="6" x2="8" y2="9" strokeWidth="2" />
    <circle cx="8" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function BuiltAroundProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const closingLineRef = useRef<HTMLDivElement>(null);
  const closingTextRef = useRef<HTMLDivElement>(null);

  /* Hover states for the three capability rows */
  const [activeZone, setActiveZone] = useState<'rules' | 'exceptions' | 'ready' | null>(null);

  /* Refs for the SVG path connectors */
  const rulesPathRef = useRef<SVGPathElement>(null);
  const exceptionsPathRef = useRef<SVGPathElement>(null);
  const readyPathRef = useRef<SVGPathElement>(null);
  const poMatchPathRef = useRef<SVGPathElement>(null);

  /* ── GSAP ScrollTrigger reveals ── */
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {

      /* Header Copy Reveal */
      gsap.fromTo(
        [eyebrowRef.current, headingRef.current, bodyRef.current],
        { opacity: 0, y: reduced ? 0 : 16 },
        {
          opacity: 1, y: 0,
          duration: reduced ? 0.1 : 0.75,
          ease: 'power2.out',
          stagger: reduced ? 0 : 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      /* Red eyebrow underline scale */
      if (!reduced && lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 0.5, ease: 'power2.out',
            delay: 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
          }
        );
      }

      /* Workspace Diagram entry */
      if (diagramRef.current) {
        gsap.fromTo(diagramRef.current,
          { opacity: 0, y: reduced ? 0 : 20, scale: reduced ? 1 : 0.985 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: reduced ? 0.1 : 0.85,
            ease: 'power2.out',
            delay: reduced ? 0 : 0.2,
            scrollTrigger: {
              trigger: diagramRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      /* Stepped Connector SVG Animations */
      if (!reduced) {
        const paths = [
          rulesPathRef.current,
          exceptionsPathRef.current,
          readyPathRef.current,
          poMatchPathRef.current
        ];
        paths.forEach((path) => {
          if (!path) return;
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len}`;
          path.style.transition = 'none';

          ScrollTrigger.create({
            trigger: diagramRef.current,
            start: 'top 70%',
            once: true,
            onEnter: () => {
              path.style.transition = 'stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1)';
              path.style.strokeDashoffset = '0';
            },
          });
        });
      }

      /* Closing Statement reveal */
      if (closingLineRef.current && closingTextRef.current) {
        gsap.fromTo(closingLineRef.current,
          { scaleX: 0, transformOrigin: 'center center' },
          {
            scaleX: 1, duration: reduced ? 0.1 : 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: closingTextRef.current, start: 'top 92%', once: true },
          }
        );
        gsap.fromTo(closingTextRef.current,
          { opacity: 0, y: reduced ? 0 : 12 },
          {
            opacity: 1, y: 0, duration: reduced ? 0.1 : 0.65,
            ease: 'power2.out', delay: reduced ? 0 : 0.12,
            scrollTrigger: { trigger: closingTextRef.current, start: 'top 92%', once: true },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      ref={sectionRef}
      id="da-built-around"
      className="relative w-full bg-[#fafaf8] overflow-hidden py-12 lg:py-14 border-t border-neutral-200/80"
      aria-labelledby="da-built-around-title"
    >
      {/* Corner dotted textures */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute bottom-0 left-0 w-[200px] opacity-[0.03]" viewBox="0 0 200 150" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 10} cy={r * 36 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
        <svg className="absolute bottom-0 right-0 w-[200px] opacity-[0.03]" viewBox="0 0 200 150" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={190 - c * 40} cy={r * 36 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">

        {/* ══════════════════════════════════════════════
            HEADER INTRO BLOCK
        ══════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 lg:mb-10">
          <div className="w-full lg:w-[68%] xl:w-[66%] lg:max-w-[860px]">
            <p ref={eyebrowRef} className="type-eyebrow-accent mb-2.5 tracking-[0.22em]">
              Built Around Your Process
            </p>
            <span ref={lineRef} className="block h-px w-10 bg-[#df012a] mb-6" aria-hidden="true" />

            <h2
              ref={headingRef}
              id="da-built-around-title"
              className="type-section-heading-lg text-balance mb-4 text-[#0a0a0a]"
            >
              Your documents are unique.<br className="hidden sm:block" />
              Your automation should be too<span className="text-[#df012a]">.</span>
            </h2>

            <p ref={bodyRef} className="type-body text-[#555555] max-w-[720px]">
              We design document automation around your business rules, exceptions, and existing systems—so the output fits seamlessly into the way your organization works.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            DESKTOP LAYOUT (72% / 28% Split)
        ══════════════════════════════════════════════ */}
        <div
          ref={diagramRef}
          className="hidden lg:grid grid-cols-[71%_29%] gap-8 relative items-center min-h-[480px] max-w-[1400px] mx-auto mb-10"
        >
          {/* Connector SVGs using viewBox for scale-invariance */}
          <svg viewBox="0 0 1000 480" className="absolute inset-0 w-full h-full pointer-events-none z-20" aria-hidden="true">
            {/* Rules Connector: Rules Card to PO Number Box on PO card */}
            <path
              ref={rulesPathRef}
              d="M 725 158 H 610 V 78 H 565"
              fill="none"
              stroke="#df012a"
              strokeWidth="1.2"
              className="transition-all duration-300"
              style={{
                opacity: activeZone === null || activeZone === 'rules' ? 1 : 0.2,
                strokeWidth: activeZone === 'rules' ? 1.8 : 1.2
              }}
            />
            {/* Exceptions Connector: Exceptions Card to Total box on PO card */}
            <path
              ref={exceptionsPathRef}
              d="M 725 284 H 660 V 382 H 615"
              fill="none"
              stroke="#df012a"
              strokeWidth="1.2"
              className="transition-all duration-300"
              style={{
                opacity: activeZone === null || activeZone === 'exceptions' ? 1 : 0.2,
                strokeWidth: activeZone === 'exceptions' ? 1.8 : 1.2
              }}
            />
            {/* Ready Connector: Ready Card to Total Due box on Invoice card */}
            <path
              ref={readyPathRef}
              d="M 725 410 H 360"
              fill="none"
              stroke="#df012a"
              strokeWidth="1.2"
              className="transition-all duration-300"
              style={{
                opacity: activeZone === null || activeZone === 'ready' ? 1 : 0.2,
                strokeWidth: activeZone === 'ready' ? 1.8 : 1.2
              }}
            />
            {/* PO Match Connector: Invoice PO box to Rules path point */}
            <path
              ref={poMatchPathRef}
              d="M 142 414 H 368 v 20 H 610"
              fill="none"
              stroke="#df012a"
              strokeWidth="1"
              strokeDasharray="4 3"
              className="transition-all duration-300"
              style={{
                opacity: activeZone === null || activeZone === 'rules' ? 0.75 : 0.15,
              }}
            />
          </svg>

          {/* LEFT: Central Workspace containing Invoice and PO */}
          <div className="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] grid grid-cols-[1.05fr_px_1fr] gap-6 items-stretch min-h-[440px] relative z-10 w-full">
            
            {/* INVOICE CARD */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1 text-[#df012a]">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                        <rect width="16" height="16" rx="3" />
                        <rect x="4" y="4" width="8" height="8" fill="white" />
                        <rect x="6" y="6" width="4" height="4" fill="#df012a" />
                      </svg>
                      <span className="font-display font-bold text-[0.74rem] tracking-tight text-[#0a0a0a]">GLOBAL SUPPLIES INC.</span>
                    </div>
                    <div className="text-[0.62rem] text-neutral-400 font-medium leading-tight">
                      Bill To:<br />
                      Northpoint Solutions<br />
                      2100 Commerce Way, Austin, TX 78701
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-[0.76rem] tracking-[0.08em] uppercase text-[#0a0a0a] block mb-0.5">INVOICE</span>
                    <span className="text-[0.6rem] text-neutral-400 block leading-tight">Invoice No: INV-88421</span>
                    <span className="text-[0.6rem] text-neutral-400 block leading-tight">Invoice Date: May 12, 2024</span>
                    <span className="text-[0.6rem] text-neutral-400 block leading-tight">Due Date: Jun 11, 2024</span>
                  </div>
                </div>

                {/* Line items table */}
                <div className="border border-neutral-100 rounded-md overflow-hidden text-[0.64rem] mb-4">
                  <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 bg-neutral-50 px-2 py-1 font-semibold text-neutral-400 uppercase tracking-[0.04em]">
                    <span>Description</span>
                    <span className="text-center">Qty</span>
                    <span className="text-right">Unit Price</span>
                    <span className="text-right">Amount</span>
                  </div>
                  <div className="divide-y divide-neutral-100 text-neutral-600">
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Consulting Services</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$12,000.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$12,000.00</span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Software License</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$4,000.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$4,000.00</span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Implementation Support</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$2,500.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$2,500.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoice Totals */}
              <div className="border-t border-neutral-100 pt-2.5">
                <div className="flex justify-between text-[0.64rem] text-neutral-400 mb-0.5">
                  <span>Subtotal</span>
                  <span>$18,500.00</span>
                </div>
                <div className="flex justify-between text-[0.64rem] text-neutral-400 mb-2">
                  <span>Tax (8.25%)</span>
                  <span>$1,526.25</span>
                </div>
                
                {/* Total due highlight area */}
                <div
                  className="flex justify-between items-center bg-neutral-50 px-2 py-1 text-[0.68rem] transition-all duration-300 relative border border-transparent rounded"
                  style={{
                    backgroundColor: activeZone === 'ready' || activeZone === null ? 'rgba(223,1,42,0.06)' : 'rgba(249,249,249,0.7)',
                    borderColor: activeZone === 'ready' || activeZone === null ? '#df012a' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-[#0a0a0a]">Total Due</span>
                  <span className="font-bold text-[#0a0a0a] relative">
                    $20,026.25
                    <span className="absolute -right-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white]" />
                  </span>
                </div>

                {/* Bottom PO Box */}
                <div className="mt-3">
                  <div
                    className="border border-neutral-200 rounded p-1.5 max-w-[100px] transition-all duration-300 relative"
                    style={{
                      borderColor: activeZone === 'rules' || activeZone === null ? '#df012a' : 'rgb(229,231,235)',
                      backgroundColor: activeZone === 'rules' || activeZone === null ? 'rgba(223,1,42,0.03)' : 'transparent'
                    }}
                  >
                    <span className="absolute -right-[11px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white]" />
                    <span className="block text-[0.5rem] text-neutral-400 uppercase tracking-tight leading-none mb-0.5">PO Number</span>
                    <span className="block text-[0.6rem] font-bold text-[#0a0a0a] leading-none">PO-45871</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Split Divider */}
            <div className="w-px bg-neutral-200/80 self-stretch" aria-hidden="true" />

            {/* PURCHASE ORDER CARD */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="font-display font-semibold text-[0.76rem] tracking-[0.06em] text-[#0a0a0a] block mb-1">PURCHASE ORDER</span>
                    <span className="text-[0.6rem] text-neutral-400 block leading-tight">PO Date: May 10, 2024</span>
                  </div>
                  <div className="text-right">
                    {/* Rules Highlight Box */}
                    <div
                      className="border border-neutral-200 rounded p-1.5 max-w-[110px] ml-auto transition-all duration-300 relative"
                      style={{
                        borderColor: activeZone === 'rules' || activeZone === null ? '#df012a' : 'rgb(229,231,235)',
                        backgroundColor: activeZone === 'rules' || activeZone === null ? 'rgba(223,1,42,0.03)' : 'transparent'
                      }}
                    >
                      <span className="absolute -right-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white]" />
                      <span className="block text-[0.5rem] text-neutral-400 uppercase tracking-tight leading-none mb-0.5">PO Number</span>
                      <span className="block text-[0.6rem] font-bold text-[#0a0a0a] leading-none">PO-45871</span>
                    </div>
                  </div>
                </div>

                {/* Line items table */}
                <div className="border border-neutral-100 rounded-md overflow-hidden text-[0.64rem] mb-4">
                  <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 bg-neutral-50 px-2 py-1 font-semibold text-neutral-400 uppercase tracking-[0.04em]">
                    <span>Description</span>
                    <span className="text-center">Qty</span>
                    <span className="text-right">Unit Price</span>
                    <span className="text-right">Amount</span>
                  </div>
                  <div className="divide-y divide-neutral-100 text-neutral-600">
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Consulting Services</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$12,000.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$12,000.00</span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Software License</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$4,000.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$4,000.00</span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 py-1.5">
                      <span>Implementation Support</span>
                      <span className="text-center">1</span>
                      <span className="text-right">$2,500.00</span>
                      <span className="text-right font-medium text-[#0a0a0a]">$2,500.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PO Total Highlight Box */}
              <div>
                <div
                  className="flex justify-between items-center bg-neutral-50 px-2 py-1.5 text-[0.68rem] transition-all duration-300 relative border border-transparent rounded"
                  style={{
                    backgroundColor: activeZone === 'exceptions' || activeZone === null ? 'rgba(223,1,42,0.06)' : 'rgba(249,249,249,0.7)',
                    borderColor: activeZone === 'exceptions' || activeZone === null ? '#df012a' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-[#0a0a0a]">Total</span>
                  <span className="font-bold text-[#0a0a0a] relative">
                    $18,500.00
                    <span className="absolute -right-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white]" />
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Capability Rows Column */}
          <div className="flex flex-col justify-between min-h-[410px] relative z-20">
            
            {/* ROW 1: Business Rules */}
            <div
              className="flex items-start gap-4 py-4 transition-all duration-300 relative"
              style={{
                opacity: activeZone === null || activeZone === 'rules' ? 1 : 0.35,
                transform: activeZone === 'rules' ? 'translateX(2px)' : 'translateX(0)'
              }}
              onMouseEnter={() => setActiveZone('rules')}
              onMouseLeave={() => setActiveZone(null)}
            >
              {/* Dot for path reference */}
              <span className="absolute -left-[6px] top-[26px] w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white] hidden lg:block" />

              {/* Circle Icon Badge */}
              <div className="w-11 h-11 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconRules />
              </div>
              {/* Red Vertical bar */}
              <div className="w-px bg-[#df012a] self-stretch shrink-0" aria-hidden="true" />
              {/* Text Block */}
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold leading-snug tracking-tight text-[#111] uppercase mb-1">
                  BUSINESS RULES
                </h3>
                <p className="type-body text-[0.76rem] leading-[1.4] text-neutral-500 mb-2">
                  Validate document information against your policies, thresholds, and reference data.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/15 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveCheck />
                  Amount must match PO
                </div>
              </div>
            </div>

            {/* Horizontal Row Divider */}
            <div className="h-px bg-neutral-200/75 w-full" aria-hidden="true" />

            {/* ROW 2: Exceptions */}
            <div
              className="flex items-start gap-4 py-4 transition-all duration-300 relative"
              style={{
                opacity: activeZone === null || activeZone === 'exceptions' ? 1 : 0.35,
                transform: activeZone === 'exceptions' ? 'translateX(2px)' : 'translateX(0)'
              }}
              onMouseEnter={() => setActiveZone('exceptions')}
              onMouseLeave={() => setActiveZone(null)}
            >
              {/* Dot for path reference */}
              <span className="absolute -left-[6px] top-[26px] w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white] hidden lg:block" />

              {/* Circle Icon Badge */}
              <div className="w-11 h-11 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconExceptions />
              </div>
              {/* Red Vertical bar */}
              <div className="w-px bg-[#df012a] self-stretch shrink-0" aria-hidden="true" />
              {/* Text Block */}
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold leading-snug tracking-tight text-[#111] uppercase mb-1">
                  EXCEPTIONS
                </h3>
                <p className="type-body text-[0.76rem] leading-[1.4] text-neutral-500 mb-2">
                  Surface missing, conflicting, or uncertain information that needs attention.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/15 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveWarning />
                  Mismatch detected
                </div>
              </div>
            </div>

            {/* Horizontal Row Divider */}
            <div className="h-px bg-neutral-200/75 w-full" aria-hidden="true" />

            {/* ROW 3: System Ready */}
            <div
              className="flex items-start gap-4 py-4 transition-all duration-300 relative"
              style={{
                opacity: activeZone === null || activeZone === 'ready' ? 1 : 0.35,
                transform: activeZone === 'ready' ? 'translateX(2px)' : 'translateX(0)'
              }}
              onMouseEnter={() => setActiveZone('ready')}
              onMouseLeave={() => setActiveZone(null)}
            >
              {/* Dot for path reference */}
              <span className="absolute -left-[6px] top-[26px] w-2 h-2 rounded-full bg-[#df012a] shadow-[0_0_0_1.5px_white] hidden lg:block" />

              {/* Circle Icon Badge */}
              <div className="w-11 h-11 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconSystemReady />
              </div>
              {/* Red Vertical bar */}
              <div className="w-px bg-[#df012a] self-stretch shrink-0" aria-hidden="true" />
              {/* Text Block */}
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold leading-snug tracking-tight text-[#111] uppercase mb-1">
                  SYSTEM READY
                </h3>
                <p className="type-body text-[0.76rem] leading-[1.4] text-neutral-500 mb-2">
                  Prepare clean, validated information for your applications and workflows.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/15 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveCheck />
                  Validated and ready
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════
            MOBILE STACK LAYOUT (< 1024px)
        ══════════════════════════════════════════════ */}
        <div className="flex flex-col gap-6 lg:hidden max-w-[480px] mx-auto mb-8">
          {/* Document Workspace (Invoice + PO summaries stack) */}
          <div className="bg-white border border-neutral-200/90 rounded-xl p-4 shadow-[0_3px_12px_rgba(0,0,0,0.03)] space-y-4">
            
            {/* Invoice Portion */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="font-display font-bold text-[0.7rem] tracking-tight text-[#0a0a0a]">GLOBAL SUPPLIES INC. · INVOICE</span>
                <span className="text-[0.6rem] text-neutral-400">INV-88421</span>
              </div>
              <div className="flex justify-between text-[0.64rem] bg-neutral-50 px-2 py-1.5 rounded">
                <span className="text-neutral-500">Invoice Total Due</span>
                <span className="font-bold text-[#df012a]">$20,026.25</span>
              </div>
            </div>

            {/* PO Portion */}
            <div className="border-t border-neutral-100 pt-3">
              <div className="flex justify-between items-start mb-2">
                <span className="font-display font-semibold text-[0.7rem] text-[#0a0a0a]">PURCHASE ORDER</span>
                <span className="text-[0.6rem] text-neutral-400 font-semibold">PO-45871</span>
              </div>
              <div className="flex justify-between text-[0.64rem] bg-neutral-50 px-2 py-1.5 rounded">
                <span className="text-neutral-500">PO Amount Total</span>
                <span className="font-bold text-[#df012a]">$18,500.00</span>
              </div>
            </div>

          </div>

          {/* Capability rows stacked */}
          <div className="space-y-4">
            {/* Business Rules */}
            <div className="bg-white border border-neutral-200/90 rounded-xl p-4 flex gap-3.5">
              <div className="w-10 h-10 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconRules />
              </div>
              <div>
                <h3 className="font-display text-[0.8rem] font-bold text-[#111] uppercase mb-1">
                  BUSINESS RULES
                </h3>
                <p className="text-[0.76rem] text-neutral-500 leading-normal mb-2">
                  Validate document information against your policies, thresholds, and reference data.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/10 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveCheck />
                  Amount must match PO
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-white border border-neutral-200/90 rounded-xl p-4 flex gap-3.5">
              <div className="w-10 h-10 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconExceptions />
              </div>
              <div>
                <h3 className="font-display text-[0.8rem] font-bold text-[#111] uppercase mb-1">
                  EXCEPTIONS
                </h3>
                <p className="text-[0.76rem] text-neutral-500 leading-normal mb-2">
                  Surface missing, conflicting, or uncertain information that needs attention.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/10 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveWarning />
                  Mismatch detected
                </div>
              </div>
            </div>

            {/* System Ready */}
            <div className="bg-white border border-neutral-200/90 rounded-xl p-4 flex gap-3.5">
              <div className="w-10 h-10 rounded-full border border-[#df012a]/20 bg-[#fbeaec] flex items-center justify-center shrink-0">
                <IconSystemReady />
              </div>
              <div>
                <h3 className="font-display text-[0.8rem] font-bold text-[#111] uppercase mb-1">
                  SYSTEM READY
                </h3>
                <p className="text-[0.76rem] text-neutral-500 leading-normal mb-2">
                  Prepare clean, validated information for your applications and workflows.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#fbeaec] border border-[#df012a]/10 rounded px-2 py-0.5 text-[0.66rem] font-bold text-[#df012a]">
                  <ActiveCheck />
                  Validated and ready
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            CLOSING DIVIDER & STATEMENT
        ══════════════════════════════════════════════ */}
        <div>
          {/* Horizontal line with central red dot */}
          <div ref={closingLineRef} className="relative w-full h-px bg-neutral-200/80 mb-6 max-w-[800px] mx-auto flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#df012a] absolute" />
          </div>

          <div ref={closingTextRef} className="text-center">
            <p className="font-display font-bold text-[1.25rem] sm:text-[1.4rem] lg:text-[1.5rem] leading-[1.4] tracking-[-0.025em] text-[#0a0a0a]">
              Automation built around<br />
              <span className="text-[#df012a]">your rules.</span> your exceptions. <span className="text-[#df012a]">your systems.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
