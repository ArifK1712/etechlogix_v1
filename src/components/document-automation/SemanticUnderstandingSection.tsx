import { useEffect, useRef, useState, useCallback } from 'react';

/* ─────────────────────────────────────────────
   Data — three semantic examples
───────────────────────────────────────────── */
const STATES = [
  {
    id: 'notice-period',
    nav: { num: '01', label: 'Notice Period' },
    docLabel: 'CONTRACT',
    clauseParts: [
      { text: 'Either party may terminate this Agreement upon ', highlight: false },
      { text: 'sixty (60) days written notice', highlight: true },
      { text: ' prior to renewal.', highlight: false },
    ],
    aiLabel: 'NOTICE PERIOD',
    aiValue: '60 days',
    aiNote: 'Required notice before termination.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-5 h-5">
        <rect x="3" y="3" width="22" height="22" rx="3.5" stroke="#df012a" strokeWidth="1.5" />
        <line x1="3" y1="9" x2="25" y2="9" stroke="#df012a" strokeWidth="1.5" />
        <line x1="9" y1="3" x2="9" y2="7" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="3" x2="19" y2="7" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="15" x2="20" y2="15" stroke="#df012a" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <line x1="8" y1="19" x2="15" y2="19" stroke="#df012a" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'payment-terms',
    nav: { num: '02', label: 'Payment Terms' },
    docLabel: 'CONTRACT',
    clauseParts: [
      { text: 'Payment shall be made within ', highlight: false },
      { text: 'thirty days', highlight: true },
      { text: ' following receipt of invoice.', highlight: false },
    ],
    aiLabel: 'PAYMENT TERMS',
    aiValue: 'Net 30',
    aiNote: 'Payment window after invoice receipt.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-5 h-5">
        <rect x="3" y="7" width="22" height="14" rx="2.5" stroke="#df012a" strokeWidth="1.5" />
        <line x1="3" y1="12" x2="25" y2="12" stroke="#df012a" strokeWidth="1.5" />
        <circle cx="9" cy="18" r="1.5" fill="#df012a" opacity="0.7" />
        <circle cx="14" cy="18" r="1.5" fill="#df012a" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'renewal-terms',
    nav: { num: '03', label: 'Renewal Terms' },
    docLabel: 'CONTRACT',
    clauseParts: [
      { text: 'This Agreement shall ', highlight: false },
      { text: 'renew automatically for successive twelve-month periods', highlight: true },
      { text: ' unless either party provides written notice of non-renewal.', highlight: false },
    ],
    aiLabel: 'RENEWAL',
    aiValue: 'Automatic · 12 months',
    aiNote: 'Automatic renewal period.',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-5 h-5">
        <path d="M5 14a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 14a9 9 0 0 1-9 9 9 9 0 0 1-6.36-2.64" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 5 L20.5 7.5 L16.5 7.5 Z" fill="#df012a" />
        <path d="M9.5 23 L7.5 20.5 L11.5 20.5 Z" fill="#df012a" />
      </svg>
    ),
  },
] as const;

type StateIndex = 0 | 1 | 2;

/* ─────────────────────────────────────────────
   Sub-component — the right-side document visual
───────────────────────────────────────────── */
function DocumentVisual({ stateIdx, visible }: { stateIdx: StateIndex; visible: boolean }) {
  const state = STATES[stateIdx];
  const connectorRef = useRef<SVGPathElement>(null);
  const interpretRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  // Animate on state change
  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reset highlight
    if (highlightRef.current) {
      highlightRef.current.style.backgroundColor = 'transparent';
    }
    if (interpretRef.current) {
      interpretRef.current.style.opacity = '0';
      interpretRef.current.style.transform = 'translateY(6px)';
    }
    if (anchorRef.current) {
      anchorRef.current.style.opacity = '0';
      anchorRef.current.style.transform = 'scale(0.5)';
    }

    // Draw connector
    const path = connectorRef.current;
    if (path && !reduced) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      path.style.transition = 'none';
    }

    if (reduced) {
      if (highlightRef.current) highlightRef.current.style.backgroundColor = 'rgba(223,1,42,0.10)';
      if (interpretRef.current) { interpretRef.current.style.opacity = '1'; interpretRef.current.style.transform = 'none'; }
      if (anchorRef.current) { anchorRef.current.style.opacity = '1'; anchorRef.current.style.transform = 'none'; }
      return;
    }

    const t1 = setTimeout(() => {
      if (highlightRef.current) {
        highlightRef.current.style.transition = 'background-color 0.45s ease';
        highlightRef.current.style.backgroundColor = 'rgba(223,1,42,0.10)';
      }
    }, 80);

    const t2 = setTimeout(() => {
      if (anchorRef.current) {
        anchorRef.current.style.transition = 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
        anchorRef.current.style.opacity = '1';
        anchorRef.current.style.transform = 'scale(1)';
      }
    }, 300);

    const t3 = setTimeout(() => {
      if (path) {
        path.style.transition = 'stroke-dashoffset 0.55s cubic-bezier(0.16,1,0.3,1)';
        path.style.strokeDashoffset = '0';
      }
    }, 420);

    const t4 = setTimeout(() => {
      if (interpretRef.current) {
        interpretRef.current.style.transition = 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)';
        interpretRef.current.style.opacity = '1';
        interpretRef.current.style.transform = 'translateY(0)';
      }
    }, 680);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [stateIdx, visible]);

  return (
    <div className="relative w-full flex items-start gap-3 sm:gap-5 min-h-[260px]">

      {/* ── Document card ── */}
      <div
        ref={docRef}
        className="relative flex-1 min-w-0 bg-white border border-neutral-200/90 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] px-5 py-5 sm:px-7 sm:py-6 overflow-hidden"
        aria-label="Contract excerpt"
      >
        {/* Document header */}
        <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-neutral-100">
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 text-neutral-300" aria-hidden="true">
            <rect x="3" y="1" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M14 4h2.5a1 1 0 0 1 .7.3l1.5 1.5a1 1 0 0 1 .3.7V18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium"
          >
            {state.docLabel}
          </span>
        </div>

        {/* Placeholder lines above */}
        <div className="space-y-1.5 mb-4" aria-hidden="true">
          <div className="h-[5px] rounded-full bg-neutral-100 w-[72%]" />
          <div className="h-[5px] rounded-full bg-neutral-100 w-[55%]" />
        </div>

        {/* Ellipsis */}
        <p className="text-neutral-300 text-sm mb-2 font-mono">…</p>

        {/* The clause with highlight */}
        <p className="text-[0.9375rem] leading-[1.75] text-[#1a1a1a] relative">
          {state.clauseParts.map((part, i) =>
            part.highlight ? (
              <span
                key={i}
                ref={highlightRef}
                className="relative rounded px-0.5 -mx-0.5 transition-colors duration-300"
                style={{ backgroundColor: 'transparent' }}
              >
                {part.text}
                {/* Red anchor dot on the right edge of highlight */}
                <span
                  ref={anchorRef}
                  className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#df012a] hidden sm:block"
                  aria-hidden="true"
                  style={{ opacity: 0, transform: 'scale(0.5)' }}
                />
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>

        {/* Ellipsis + placeholder lines below */}
        <p className="text-neutral-300 text-sm mt-2 mb-3 font-mono">…</p>
        <div className="space-y-1.5" aria-hidden="true">
          <div className="h-[5px] rounded-full bg-neutral-100 w-[60%]" />
          <div className="h-[5px] rounded-full bg-neutral-100 w-[40%]" />
        </div>
      </div>

      {/* ── SVG Connector — desktop only ── */}
      <div className="hidden sm:flex flex-col items-center self-stretch w-8 shrink-0 pt-[110px]" aria-hidden="true">
        <svg
          viewBox="0 0 32 50"
          fill="none"
          className="w-8 h-12 overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            ref={connectorRef}
            d="M 0 5 Q 32 5 32 25"
            stroke="#df012a"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* ── Mobile: short vertical red line ── */}
      <div className="sm:hidden absolute left-5 -bottom-5 flex flex-col items-center" aria-hidden="true">
        <div className="w-px h-5 bg-[#df012a] opacity-50" />
      </div>

      {/* ── Interpretation panel ── */}
      <div
        ref={interpretRef}
        className="w-[44%] sm:w-[42%] shrink-0 pt-[95px] sm:pt-[98px]"
        style={{ opacity: 0, transform: 'translateY(6px)' }}
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Subtle dot field behind — extremely light */}
        <div className="relative">
          <svg
            viewBox="0 0 120 80"
            fill="none"
            className="absolute -top-6 -right-2 w-[120px] opacity-[0.06] pointer-events-none"
            aria-hidden="true"
          >
            {Array.from({ length: 4 }).map((_, r) =>
              Array.from({ length: 6 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 20} cy={r * 20} r="1.2" fill="#df012a" />
              ))
            )}
          </svg>

          {/* AI eyebrow */}
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-neutral-400 mb-2">
            AI UNDERSTANDS
          </p>
          <div className="w-5 h-px bg-[#df012a] mb-3" />

          {/* Icon */}
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#fff0f1] border border-[#df012a]/15 mb-3">
            {state.icon}
          </div>

          {/* Label */}
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-neutral-400 mb-1">
            {state.aiLabel}
          </p>

          {/* Main interpreted value */}
          <p className="font-display font-bold text-[1.45rem] sm:text-[1.65rem] leading-none tracking-[-0.025em] text-[#df012a] mb-2">
            {state.aiValue}
          </p>

          {/* Supporting note */}
          <p className="text-[0.78rem] sm:text-[0.8125rem] leading-[1.55] text-neutral-400 max-w-[160px]">
            {state.aiNote}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main section component
───────────────────────────────────────────── */
export default function SemanticUnderstandingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState<StateIndex>(0);
  const [visualVisible, setVisualVisible] = useState(false);

  // Scroll-driven state progression using scroll position within pinned region
  const scrollStepRef = useRef<HTMLDivElement[]>([]);

  // IntersectionObserver for left column fade-in
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // IntersectionObserver to trigger visual visibility
  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisualVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-driven state advancement: watch three invisible sentinel divs
  useEffect(() => {
    const sentinels = scrollStepRef.current.filter(Boolean);
    if (sentinels.length < 3) return;

    const observers = sentinels.map((el, i) => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(i as StateIndex);
            setVisualVisible(true);
          }
        },
        { threshold: 0.6, rootMargin: '-10% 0px -20% 0px' },
      );
      io.observe(el);
      return io;
    });

    return () => observers.forEach(io => io.disconnect());
  }, []);

  // Closing statement fade-in
  useEffect(() => {
    const el = closingRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleNavClick = useCallback((i: StateIndex) => {
    setActiveIdx(i);
    setVisualVisible(true);
    // Soft-scroll the section into good view
    visualRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="semantic-understanding"
      className="relative w-full bg-white overflow-hidden border-t border-neutral-200/80 py-16 lg:py-20"
      aria-labelledby="semantic-understanding-title"
    >
      {/* ── Subtle bg decoration — top right ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-[320px] opacity-[0.038]"
          viewBox="0 0 320 400"
          fill="none"
        >
          <path d="M320 0 Q100 160 260 320 Q400 480 80 400" stroke="#df012a" strokeWidth="1" />
          <path d="M340 0 Q120 160 280 320 Q420 480 100 400" stroke="#df012a" strokeWidth="0.7" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">

        {/* ══════════════════════════════════════════════════
            MAIN ASYMMETRIC LAYOUT
            Left ~36% · Right ~60%
        ══════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-10 xl:gap-14">

          {/* ── LEFT COLUMN ── */}
          <div
            ref={leftRef}
            className="w-full lg:w-[36%] xl:w-[35%] lg:sticky lg:top-28 lg:pb-8"
          >
            {/* Eyebrow + red underline */}
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              Beyond Extraction
            </p>
            <span className="block h-px w-10 bg-[#df012a] mb-9" aria-hidden="true" />

            {/* Section heading */}
            <h2
              id="semantic-understanding-title"
              className="type-section-heading-lg text-balance mb-6 text-[#0a0a0a]"
            >
              Reading the words<br />
              isn't enough<span className="text-[#df012a]">.</span>
            </h2>

            {/* Supporting copy — single concise paragraph */}
            <p className="type-body text-[#555555] max-w-[420px] lg:max-w-none">
              Business documents carry meaning in clauses, relationships, context, and exceptions—not just individual fields. AI turns that meaning into usable business information.
            </p>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="w-full lg:w-[62%] xl:w-[63%] flex flex-col gap-8">

            {/* ── Scroll sentinel steps (invisible, for intersection-based advancement) ── */}
            <div className="space-y-0">
              {STATES.map((s, i) => (
                <div
                  key={s.id}
                  ref={el => { if (el) scrollStepRef.current[i] = el; }}
                  className={i === 0 ? '' : 'mt-0'}
                  aria-hidden="true"
                  style={{ height: 1, overflow: 'hidden' }}
                />
              ))}
            </div>

            {/* ── Document visual panel ── */}
            <div ref={visualRef}>
              <DocumentVisual stateIdx={activeIdx} visible={visualVisible} />
            </div>

            {/* ── State navigation ── */}
            <nav
              aria-label="Contract clause examples"
              className="flex items-center gap-0 border-t border-neutral-100 pt-4 mt-1"
            >
              {STATES.map((s, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleNavClick(i as StateIndex)}
                    aria-current={isActive ? 'true' : undefined}
                    className={[
                      'flex items-center gap-1.5 py-2 pr-4 sm:pr-6 lg:pr-8 text-left transition-colors duration-200 group',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]/40 rounded-sm',
                      i > 0 ? 'pl-4 sm:pl-6 lg:pl-8 border-l border-neutral-100' : '',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'font-mono text-[10px] sm:text-[11px] tracking-[0.14em] transition-colors duration-200',
                        isActive ? 'text-[#df012a]' : 'text-neutral-300 group-hover:text-neutral-400',
                      ].join(' ')}
                    >
                      {s.nav.num}
                    </span>
                    <span
                      className={[
                        'text-[0.78rem] sm:text-[0.8125rem] font-medium tracking-[-0.005em] transition-colors duration-200',
                        isActive ? 'text-[#0a0a0a]' : 'text-neutral-400 group-hover:text-neutral-500',
                      ].join(' ')}
                    >
                      {s.nav.label}
                    </span>
                    {/* Active indicator line */}
                    {isActive && (
                      <span className="ml-0.5 block w-4 h-px bg-[#df012a] shrink-0" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            CLOSING STATEMENT
        ══════════════════════════════════════════════════ */}
        <div
          ref={closingRef}
          className="mt-16 lg:mt-20 text-center"
          aria-label="Section conclusion"
        >
          <p className="font-display font-semibold text-[1.2rem] sm:text-[1.35rem] leading-[1.5] tracking-[-0.02em] text-[#0a0a0a]">
            Text tells you what was written.<br className="hidden sm:block" />
            {' '}Context tells you{' '}
            <span className="text-[#df012a]">what it means.</span>
          </p>

          {/* Small red chevron downward — narrative bridge cue */}
          <div className="mt-6 flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 20 12" fill="none" className="w-5 h-3 text-[#df012a]">
              <path d="M1 1l9 9 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
