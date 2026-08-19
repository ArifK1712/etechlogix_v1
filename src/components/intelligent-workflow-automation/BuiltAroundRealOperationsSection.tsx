import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BuiltAroundRealOperationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Entrance Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    // 1. Header reveal
    tl.fromTo(
      '.ops-header-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
    );

    // 2. Connector line drawing
    tl.fromTo(
      '.ops-main-line',
      { strokeDasharray: 1200, strokeDashoffset: 1200 },
      { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' },
      '-=0.3'
    );

    // 3. Branch lines drawing
    tl.fromTo(
      '.ops-branch-line',
      { strokeDasharray: 200, strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1 },
      '-=0.6'
    );

    // 4. Circular Nodes pop in
    tl.fromTo(
      '.ops-node-circle',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' },
      '-=0.8'
    );

    // 5. Branch Nodes pop in
    tl.fromTo(
      '.ops-branch-item',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    );

    // 6. Node text labels & descriptions
    tl.fromTo(
      '.ops-node-text',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
      '-=0.4'
    );

    // 7. Localized Background Texture reveal
    tl.fromTo(
      '.ops-bg-aura',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power1.out' },
      '-=0.8'
    );

    // Continuous Travelling Signal Animation (if motion allowed)
    if (!isReducedMotion && sectionRef.current) {
      gsap.to('.ops-pulse-signal', {
        x: '+=10',
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: 'sine.inOut',
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 lg:py-24 overflow-hidden border-t border-neutral-100"
      aria-label="Built Around Real Operations"
    >
      {/* ── Background Subtle Radial Wash Layer ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft radial wash centered across DECIDE -> BUSINESS RULES -> ACT */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[15%] w-[860px] h-[480px] rounded-full opacity-80 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(223, 1, 42, 0.024) 0%, rgba(246, 246, 248, 0.55) 42%, rgba(255, 255, 255, 0) 72%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8">
        
        {/* ── Top Area: Left-aligned Eyebrow, Heading, Intro Paragraph ── */}
        <div className="max-w-[760px] mb-10 lg:mb-14">
          {/* Eyebrow */}
          <div className="ops-header-item mb-5">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em] text-[#df012a]">
              BUILT AROUND REAL OPERATIONS
            </p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="ops-header-item type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] mb-5">
            Automation built around how your business works<span className="text-[#df012a]">.</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="ops-header-item type-body text-neutral-500 max-w-2xl text-pretty">
            Connect approvals, decisions, systems, and actions into workflows that keep operations moving.
          </p>
        </div>

        {/* ── Main Workflow Visual: Desktop (Horizontal Layout) ── */}
        <div className="hidden lg:block relative w-full pt-2 pb-4">
          
          {/* SVG Connector Lines & Localized Decision Texture */}
          <svg
            className="ops-bg-aura pointer-events-none absolute inset-0 w-full h-full z-0 overflow-visible opacity-90"
            viewBox="0 0 1200 280"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Localized dot grid pattern */}
              <pattern id="decision-dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="1" fill="#71717a" opacity="0.32" />
              </pattern>
              <pattern id="decision-red-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1.1" fill="#df012a" opacity="0.38" />
              </pattern>

              {/* Radial gradient mask: Confined strictly around DECIDE (x = 384) & Business Rules (x = 472) */}
              <radialGradient id="decision-texture-mask-grad" cx="420" cy="52" r="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <mask id="decision-texture-mask">
                <rect x="250" y="-80" width="350" height="260" fill="url(#decision-texture-mask-grad)" />
              </mask>
            </defs>

            {/* Localized Decision Dotted Data Field (Confined to DECIDE area) */}
            <g mask="url(#decision-texture-mask)">
              <rect x="250" y="-80" width="350" height="260" fill="url(#decision-dot-grid)" />
              <rect x="250" y="-80" width="350" height="260" fill="url(#decision-red-dot-grid)" />
            </g>

            {/* ── Main Connecting Horizontal Solid Lines (Center y = 52) ── */}
            {/* Segment 1: REQUEST (120) -> DECIDE (384) */}
            <path
              className="ops-main-line"
              d="M 172 52 L 328 52"
              stroke="#27272a"
              strokeWidth="1.25"
            />
            {/* Arrow at end of Segment 1 */}
            <path d="M 320 48 L 328 52 L 320 56" stroke="#27272a" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Segment 2: DECIDE -> Decision Branch Node */}
            <path
              className="ops-main-line"
              d="M 436 52 L 472 52"
              stroke="#27272a"
              strokeWidth="1.25"
            />

            {/* Branching curves from Fork Node (x: 472, y: 52) */}
            {/* Branch Up: to APPROVED (x: 516, y: 14) */}
            <path
              className="ops-branch-line"
              d="M 472 52 C 472 14, 492 14, 516 14"
              stroke="#71717a"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
              fill="none"
            />
            {/* Branch Down: to EXCEPTION (x: 516, y: 90) */}
            <path
              className="ops-branch-line"
              d="M 472 52 C 472 90, 492 90, 516 90"
              stroke="#71717a"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
              fill="none"
            />

            {/* Segment 3: Main Line Through BUSINESS RULES to ACT (780) */}
            <path
              className="ops-main-line"
              d="M 472 52 L 724 52"
              stroke="#27272a"
              strokeWidth="1.25"
            />
            {/* Arrow at end of Segment 3 */}
            <path d="M 716 48 L 724 52 L 716 56" stroke="#27272a" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Segment 4: ACT (780) -> COMPLETE (1070) */}
            <path
              className="ops-main-line"
              d="M 832 52 L 1018 52"
              stroke="#27272a"
              strokeWidth="1.25"
            />
            {/* Arrow at end of Segment 4 */}
            <path d="M 1010 48 L 1018 52 L 1010 56" stroke="#27272a" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Activity Signals & Matrix Indicators along connectors */}
            {/* Signal 1 (Between Request and Decide) */}
            <g className="ops-pulse-signal" transform="translate(244, 52)">
              <circle cx="0" cy="0" r="10" fill="#df012a" opacity="0.15" />
              <circle cx="0" cy="0" r="4" fill="#df012a" />
              <g fill="#a1a1aa" opacity="0.6">
                <circle cx="24" cy="-3" r="1" />
                <circle cx="28" cy="-3" r="1" />
                <circle cx="32" cy="-3" r="1" />
                <circle cx="24" cy="3" r="1" />
                <circle cx="28" cy="3" r="1" />
                <circle cx="32" cy="3" r="1" />
              </g>
            </g>

            {/* Decision Branch Center Red Node */}
            <circle cx="472" cy="52" r="3.5" fill="#df012a" stroke="#ffffff" strokeWidth="1.5" />

            {/* Signal 2 (Between Business Rules and Act) */}
            <g className="ops-pulse-signal" transform="translate(684, 52)">
              <circle cx="0" cy="0" r="10" fill="#df012a" opacity="0.15" />
              <circle cx="0" cy="0" r="4" fill="#df012a" />
            </g>

            {/* Signal 3 (Between Act and Complete) */}
            <g className="ops-pulse-signal" transform="translate(926, 52)">
              <circle cx="0" cy="0" r="10" fill="#df012a" opacity="0.15" />
              <circle cx="0" cy="0" r="4" fill="#df012a" />
              <g fill="#a1a1aa" opacity="0.6">
                <circle cx="24" cy="-3" r="1" />
                <circle cx="28" cy="-3" r="1" />
                <circle cx="32" cy="-3" r="1" />
                <circle cx="24" cy="3" r="1" />
                <circle cx="28" cy="3" r="1" />
                <circle cx="32" cy="3" r="1" />
              </g>
            </g>
          </svg>

          {/* ── HTML Nodes Layer ── */}
          <div className="relative z-10 w-full" style={{ height: '280px' }}>
            
            {/* ── STAGE 1: REQUEST ── */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: '10%', top: '0px', transform: 'translateX(-50%)' }}
            >
              {/* Circular Node */}
              <div className="ops-node-circle relative w-[104px] h-[104px] rounded-full bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {/* Request Icon (Red Only) */}
                <svg className="w-9 h-9 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" stroke="#df012a" strokeWidth="2" />
                  <line x1="8" y1="13" x2="16" y2="13" stroke="#df012a" strokeOpacity="0.55" strokeWidth="1.4" />
                  <line x1="8" y1="17" x2="12" y2="17" stroke="#df012a" strokeOpacity="0.55" strokeWidth="1.4" />
                </svg>
              </div>

              {/* Typography */}
              <div className="ops-node-text mt-6 text-center max-w-[240px]">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">
                  REQUEST
                </h3>
                <p className="type-body text-neutral-500 font-normal">
                  Work is initiated across your teams and systems.
                </p>
              </div>
            </div>

            {/* ── STAGE 2: DECIDE ── */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: '32%', top: '0px', transform: 'translateX(-50%)' }}
            >
              {/* Circular Node */}
              <div className="ops-node-circle relative w-[104px] h-[104px] rounded-full bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {/* Decide Icon (Red Only) */}
                <svg className="w-9 h-9 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Typography */}
              <div className="ops-node-text mt-6 text-center max-w-[260px]">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">
                  DECIDE
                </h3>
                <p className="type-body text-neutral-500 font-normal">
                  The right people review, apply business rules, and make decisions.
                </p>
              </div>
            </div>

            {/* ── DECIDE BRANCH OUTCOMES: APPROVED & EXCEPTION ── */}
            <div
              className="absolute flex flex-col justify-between pointer-events-none"
              style={{ left: '43%', top: '0px', height: '104px' }}
            >
              {/* Upper Branch: APPROVED */}
              <div className="ops-branch-item flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.9">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-[#0a0a0a] uppercase whitespace-nowrap">
                  APPROVED
                </span>
              </div>

              {/* Lower Branch: EXCEPTION */}
              <div className="ops-branch-item flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-[#0a0a0a] uppercase whitespace-nowrap">
                  EXCEPTION
                </span>
              </div>
            </div>

            {/* ── SINGLE-LINE "BUSINESS RULES" LABEL (Centered on Connector Between Branch & ACT) ── */}
            <div
              className="ops-branch-item absolute z-20"
              style={{ left: '53.5%', top: '52px', transform: 'translate(-50%, -50%)' }}
            >
              <span className="inline-flex items-center px-2.5 py-1 bg-white border border-neutral-200/80 rounded shadow-sm text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-neutral-500 uppercase whitespace-nowrap">
                BUSINESS RULES
              </span>
            </div>

            {/* ── STAGE 3: ACT ── */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: '66%', top: '0px', transform: 'translateX(-50%)' }}
            >
              {/* Circular Node */}
              <div className="ops-node-circle relative w-[104px] h-[104px] rounded-full bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {/* Act Icon (Red Only) */}
                <svg className="w-9 h-9 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" stroke="#df012a" strokeWidth="2" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>

              {/* Typography */}
              <div className="ops-node-text mt-6 text-center max-w-[260px]">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">
                  ACT
                </h3>
                <p className="type-body text-neutral-500 font-normal">
                  Systems are updated, tasks are triggered, and work moves forward.
                </p>
              </div>
            </div>

            {/* ── STAGE 4: COMPLETE ── */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: '89.2%', top: '0px', transform: 'translateX(-50%)' }}
            >
              {/* Circular Node */}
              <div className="ops-node-circle relative w-[104px] h-[104px] rounded-full bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {/* Complete Checkmark Icon (Red Only) */}
                <div className="w-10 h-10 rounded-full border border-brand-red/30 flex items-center justify-center bg-brand-red/5">
                  <svg className="w-5 h-5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Typography */}
              <div className="ops-node-text mt-6 text-center max-w-[240px]">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">
                  COMPLETE
                </h3>
                <p className="type-body text-neutral-500 font-normal">
                  The process is completed and everyone stays in sync.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Mobile & Tablet Layout (Vertical Sequence) ── */}
        <div className="lg:hidden flex flex-col items-center gap-6 mt-4 max-w-md mx-auto">
          
          {/* Stage 1: REQUEST */}
          <div className="ops-node-circle w-full bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-50 border border-neutral-200 shadow-sm flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" stroke="#df012a" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">REQUEST</h3>
            <p className="type-body text-neutral-500 leading-relaxed">Work is initiated across your teams and systems.</p>
          </div>

          {/* Arrow Down */}
          <div className="w-px h-6 bg-[#27272a] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a]" />
          </div>

          {/* Stage 2: DECIDE + Branches */}
          <div className="ops-node-circle w-full bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-50 border border-neutral-200 shadow-sm flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="text-base font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">DECIDE</h3>
            <p className="type-body text-neutral-500 leading-relaxed mb-5">
              The right people review, apply business rules, and make decisions.
            </p>

            {/* Branches Card Container with single-line BUSINESS RULES */}
            <div className="w-full pt-4 border-t border-neutral-100 flex flex-col items-center gap-3">
              <span className="inline-block px-2.5 py-0.5 bg-neutral-50 border border-neutral-200/80 rounded text-[10px] font-bold tracking-[0.14em] text-neutral-500 uppercase">
                BUSINESS RULES
              </span>
              <div className="w-full flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-[#0a0a0a] tracking-wider">APPROVED</span>
                </div>
                <div className="w-px h-6 bg-neutral-200" />
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-[#0a0a0a] tracking-wider">EXCEPTION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="w-px h-6 bg-[#27272a] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a]" />
          </div>

          {/* Stage 3: ACT */}
          <div className="ops-node-circle w-full bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-50 border border-neutral-200 shadow-sm flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" stroke="#df012a" strokeWidth="2" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="text-base font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">ACT</h3>
            <p className="type-body text-neutral-500 leading-relaxed">
              Systems are updated, tasks are triggered, and work moves forward.
            </p>
          </div>

          {/* Arrow Down */}
          <div className="w-px h-6 bg-[#27272a] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a]" />
          </div>

          {/* Stage 4: COMPLETE */}
          <div className="ops-node-circle w-full bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-50 border border-neutral-200 shadow-sm flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full border border-brand-red/30 flex items-center justify-center bg-brand-red/5">
                <svg className="w-5 h-5 text-[#df012a]" viewBox="0 0 24 24" fill="none" stroke="#df012a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h3 className="text-base font-bold tracking-[0.12em] text-[#0a0a0a] uppercase mb-2">COMPLETE</h3>
            <p className="type-body text-neutral-500 leading-relaxed">
              The process is completed and everyone stays in sync.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
