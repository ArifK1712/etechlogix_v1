import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────
   Data — three primary panels
──────────────────────────────────────────── */
interface Annotation {
  label: string;
  top: string;   // CSS top
  left: string;  // CSS left
  /** Direction the connector extends from the dot */
  dir: 'tl' | 'tr' | 'bl' | 'br';
}

interface Panel {
  num: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  annotations: Annotation[];
}

const PANELS: Panel[] = [
  {
    num: '01',
    title: 'Contracts & Agreements',
    desc: 'Identify critical terms, obligations, renewals, notice periods and business risks.',
    img: '/images/document-automation/contracts-panel.jpg',
    alt: 'Master Services Agreement contract document on an executive desk with a professional reviewing clauses',
    annotations: [
      { label: 'Renewal identified', top: '22%', left: '58%', dir: 'tr' },
      { label: 'Obligation detected', top: '46%', left: '62%', dir: 'tr' },
      { label: 'Notice period captured', top: '64%', left: '54%', dir: 'br' },
    ],
  },
  {
    num: '02',
    title: 'Invoices & Purchase Orders',
    desc: 'Capture data, match with POs, validate amounts and flag discrepancies.',
    img: '/images/document-automation/invoices-panel.jpg',
    alt: 'Business invoices and purchase orders spread on a professional desk being reviewed',
    annotations: [
      { label: 'PO matched', top: '24%', left: '52%', dir: 'tr' },
      { label: 'Amount validated', top: '50%', left: '20%', dir: 'bl' },
      { label: 'Exception detected', top: '68%', left: '56%', dir: 'br' },
    ],
  },
  {
    num: '03',
    title: 'Forms & Applications',
    desc: 'Extract, validate and structure submitted information from any format or layout.',
    img: '/images/document-automation/forms-panel.jpg',
    alt: 'Business application form being reviewed in an enterprise office setting',
    annotations: [
      { label: 'Missing field identified', top: '30%', left: '60%', dir: 'tr' },
      { label: 'Information validated', top: '52%', left: '55%', dir: 'tr' },
      { label: 'Record structured', top: '72%', left: '48%', dir: 'br' },
    ],
  },
];

/* ────────────────────────────────────────────
   Secondary use cases
──────────────────────────────────────────── */
interface SecondaryItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]" stroke="#df012a" strokeWidth="1.4">
    <path d="M12 2L3.5 6.5v5C3.5 16.5 7 21 12 22.5c5-1.5 8.5-6 8.5-11V6.5L12 2z" />
    <polyline points="8,12.5 10.5,15 16,9.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]" stroke="#df012a" strokeWidth="1.4">
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 2.5h6a1 1 0 0 1 1 1V5H8V3.5a1 1 0 0 1 1-1z" />
    <line x1="8.5" y1="10" x2="15.5" y2="10" strokeLinecap="round" />
    <line x1="8.5" y1="13" x2="15.5" y2="13" strokeLinecap="round" />
    <line x1="8.5" y1="16" x2="12.5" y2="16" strokeLinecap="round" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]" stroke="#df012a" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <line x1="7" y1="15" x2="7" y2="18" strokeLinecap="round" strokeWidth="1.8" />
    <line x1="11" y1="11" x2="11" y2="18" strokeLinecap="round" strokeWidth="1.8" />
    <line x1="15" y1="13" x2="15" y2="18" strokeLinecap="round" strokeWidth="1.8" />
    <polyline points="7,14 11,10 15,12 19,7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
  </svg>
);

const SECONDARY: SecondaryItem[] = [
  {
    title: 'Compliance Documents',
    desc: 'Ensure completeness, accuracy and regulatory compliance.',
    icon: <IconShield />,
  },
  {
    title: 'Claims & Records',
    desc: 'Automate intake, evaluation and record management.',
    icon: <IconClipboard />,
  },
  {
    title: 'Reports & Operational Documents',
    desc: 'Extract insights from reports and turn them into actionable information.',
    icon: <IconChart />,
  },
];

/* ────────────────────────────────────────────
   Annotation component
──────────────────────────────────────────── */
function AnnotationTag({
  a,
  idx,
  hovered,
}: {
  a: Annotation;
  idx: number;
  hovered: boolean;
}) {
  const isFirst = idx === 0;
  // First annotation always visible; rest reveal on hover
  const show = isFirst || hovered;

  return (
    <div
      className="absolute z-20 pointer-events-none transition-all duration-500"
      style={{
        top: a.top,
        left: a.left,
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(4px)',
      }}
    >
      {/* Anchor dot */}
      <div className="relative">
        <span
          className="block w-[7px] h-[7px] rounded-full bg-[#df012a] shadow-[0_0_0_2px_rgba(255,255,255,0.8)]"
          aria-hidden="true"
        />
        {/* Connector line */}
        <svg
          className="absolute"
          width="40"
          height="20"
          style={{
            top: a.dir.startsWith('t') ? '-18px' : '5px',
            left: a.dir.endsWith('r') ? '6px' : '-38px',
          }}
          aria-hidden="true"
        >
          <line
            x1={a.dir.endsWith('r') ? 0 : 38}
            y1={a.dir.startsWith('t') ? 18 : 2}
            x2={a.dir.endsWith('r') ? 38 : 0}
            y2={a.dir.startsWith('t') ? 4 : 16}
            stroke="#df012a"
            strokeWidth="0.8"
            strokeDasharray={show ? '0' : '40'}
            strokeDashoffset={show ? '0' : '40'}
            className="transition-all duration-700"
          />
        </svg>
        {/* Label */}
        <div
          className="absolute whitespace-nowrap"
          style={{
            top: a.dir.startsWith('t') ? '-32px' : '14px',
            left: a.dir.endsWith('r') ? '12px' : 'auto',
            right: a.dir.endsWith('l') ? '12px' : 'auto',
          }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm shadow-[0_1px_6px_rgba(0,0,0,0.08)] rounded-md px-2.5 py-1 text-[0.66rem] font-medium tracking-[0.02em] text-[#0a0a0a]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#df012a] shrink-0" />
            {a.label}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Circle arrow icon
──────────────────────────────────────────── */
function CircleArrow({ hovered }: { hovered: boolean }) {
  return (
    <div
      className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 shrink-0"
      style={{
        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        borderColor: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)',
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="8" x2="12" y2="8" />
        <polyline points="9,5 12,8 9,11" />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────
   Photographic panel
──────────────────────────────────────────── */
function PhotoPanel({ panel, index }: { panel: Panel; index: number }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Subtle parallax on scroll (desktop only) */
  useEffect(() => {
    const el = panelRef.current;
    const img = imgRef.current;
    if (!el || !img) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!mq.matches || reduced) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yShift = (self.progress - 0.5) * 14; // ±7px
        gsap.set(img, { y: yShift });
      },
    });
    return () => { st.kill(); };
  }, []);

  return (
    <div
      ref={panelRef}
      data-panel
      className="relative overflow-hidden rounded-xl cursor-default group"
      style={{ aspectRatio: '3 / 4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        ref={imgRef}
        src={panel.img}
        alt={panel.alt}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: hovered ? 'scale(1.025)' : 'scale(1)',
          filter: hovered ? 'contrast(1.04) brightness(1.01)' : 'contrast(1) brightness(1)',
          transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.7s ease',
        }}
      />

      {/* AI annotations */}
      {panel.annotations.map((a, i) => (
        <AnnotationTag key={i} a={a} idx={i} hovered={hovered} />
      ))}

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '55%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 z-10">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            {/* Number marker */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-7 h-7 rounded-full bg-[#df012a] flex items-center justify-center text-white text-[0.62rem] font-bold tracking-[0.04em]">
                {panel.num}
              </span>
            </div>
            <h3 className="font-display font-semibold text-white text-[1.05rem] sm:text-[1.15rem] lg:text-[1.25rem] leading-snug tracking-[-0.015em] mb-1.5">
              {panel.title}
            </h3>
            <p className="text-white/70 text-[0.8rem] sm:text-[0.85rem] leading-[1.55] max-w-[280px]">
              {panel.desc}
            </p>
          </div>
          <CircleArrow hovered={hovered} />
        </div>
      </div>
    </div>
  );
}

const OutcomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-[#df012a]" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M12 5v14" />
    <path d="M12 9h4a2 2 0 0 0 0-4h-3" />
    <path d="M12 9H8a2 2 0 0 1 0-4h3" />
    <path d="M12 13h4a2 2 0 0 1 0 4h-3" />
    <path d="M12 13H8a2 2 0 0 0 0 4h3" />
  </svg>
);

/* ════════════════════════════════════════════
   MAIN SECTION COMPONENT
════════════════════════════════════════════ */
export default function DAValueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const outcomeRuleRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  /* ── GSAP section entry ── */
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {

      /* Left column stagger */
      gsap.fromTo(
        [eyebrowRef.current, headingRef.current, bodyRef.current],
        { opacity: 0, y: reduced ? 0 : 14 },
        {
          opacity: 1, y: 0,
          duration: reduced ? 0.1 : 0.75,
          ease: 'power2.out',
          stagger: reduced ? 0 : 0.13,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      /* Red underline */
      if (!reduced && lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 0.5, ease: 'power2.out',
            delay: 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
          },
        );
      }

      /* Business outcome rule + content */
      if (outcomeRuleRef.current && outcomeRef.current) {
        gsap.fromTo(outcomeRuleRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1, duration: reduced ? 0.1 : 0.55, ease: 'power2.out',
            delay: reduced ? 0 : 0.3,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
          },
        );
        gsap.fromTo(outcomeRef.current,
          { opacity: 0, y: reduced ? 0 : 10 },
          {
            opacity: 1, y: 0, duration: reduced ? 0.1 : 0.65,
            ease: 'power2.out', delay: reduced ? 0 : 0.42,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
          },
        );
      }

      /* Panels staggered reveal */
      if (panelsRef.current) {
        const panels = panelsRef.current.querySelectorAll('[data-panel]');
        gsap.fromTo(panels,
          { opacity: 0, y: reduced ? 0 : 26, scale: reduced ? 1 : 0.985 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: reduced ? 0.1 : 0.8,
            ease: 'power2.out',
            stagger: reduced ? 0 : 0.12,
            scrollTrigger: {
              trigger: panelsRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        );
      }

      /* Secondary strip */
      if (stripRef.current) {
        const items = stripRef.current.querySelectorAll('[data-strip-item]');
        gsap.fromTo(items,
          { opacity: 0, y: reduced ? 0 : 12 },
          {
            opacity: 1, y: 0,
            duration: reduced ? 0.1 : 0.6,
            ease: 'power2.out',
            stagger: reduced ? 0 : 0.09,
            scrollTrigger: {
              trigger: stripRef.current,
              start: 'top 88%',
              once: true,
            },
          },
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      ref={sectionRef}
      id="da-value"
      className="relative w-full bg-white overflow-hidden py-16 lg:py-20"
      aria-labelledby="da-value-title"
    >
      {/* Very faint dotted texture in bottom corners */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute bottom-0 left-0 w-[200px] opacity-[0.03]" viewBox="0 0 200 160" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 10} cy={r * 40 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
        <svg className="absolute bottom-0 right-0 w-[200px] opacity-[0.03]" viewBox="0 0 200 160" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={190 - c * 40} cy={r * 40 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">

        {/* ══════════════════════════════════════════════
            HEADER AREA — Left 60% / Right 34%
        ══════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 lg:mb-16">

          {/* ── LEFT ── */}
          <div className="w-full lg:w-[68%] xl:w-[66%] lg:max-w-[860px]">
            <p ref={eyebrowRef} className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              Where Document Automation Creates Value
            </p>
            <span ref={lineRef} className="block h-px w-10 bg-[#df012a] mb-8" aria-hidden="true" />

            <h2
              ref={headingRef}
              id="da-value-title"
              className="type-section-heading-lg text-balance mb-5 text-[#0a0a0a]"
            >
              Where Document Automation<br className="hidden sm:block" />
              creates real business value<span className="text-[#df012a]">.</span>
            </h2>

            <p ref={bodyRef} className="type-body text-[#555555] max-w-[720px]">
              From contracts to invoices, applications to compliance—we automate the document-intensive processes that move your operations forward.
            </p>
          </div>

          {/* ── RIGHT — Business outcome statement ── */}
          <div className="flex items-center gap-6 lg:mt-10 xl:mt-12 shrink-0">
            {/* Vertical red rule */}
            <div
              ref={outcomeRuleRef}
              className="hidden lg:block w-px h-[72px] bg-[#df012a] shrink-0"
              aria-hidden="true"
            />

            <div ref={outcomeRef} className="flex items-center gap-4">
              {/* Icon Container with pink background and 1px border */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#fbeaec] border border-[#df012a]/15 flex items-center justify-center shrink-0">
                <OutcomeIcon />
              </div>
              {/* Text */}
              <div>
                <p className="font-display font-semibold text-[#df012a] text-[1.1rem] sm:text-[1.15rem] leading-[1.3] tracking-[-0.015em] max-w-[340px] sm:max-w-[420px]">
                  Unlock faster decisions,<br />
                  fewer errors and lower operational cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            THREE PHOTOGRAPHIC PANELS
        ══════════════════════════════════════════════ */}
        <div
          ref={panelsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-2.5 lg:gap-3 mb-12 lg:mb-16"
        >
          {PANELS.map((p, i) => (
            <PhotoPanel key={p.num} panel={p} index={i} />
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            SECONDARY USE-CASE STRIP
        ══════════════════════════════════════════════ */}
        <div
          ref={stripRef}
          className="flex flex-col md:flex-row md:items-start md:divide-x md:divide-neutral-200 gap-6 md:gap-0"
        >
          {SECONDARY.map((item, i) => (
            <div
              key={i}
              data-strip-item
              className="flex items-start gap-3.5 md:px-7 lg:px-9 first:md:pl-0 last:md:pr-0 flex-1"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[rgba(223,1,42,0.06)] border border-[#df012a]/10 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              {/* Text */}
              <div className="min-w-0">
                <p className="font-display font-semibold text-[0.9rem] sm:text-[0.95rem] text-[#0a0a0a] leading-snug tracking-[-0.01em] mb-1">
                  {item.title}
                </p>
                <p className="text-[0.82rem] sm:text-[0.85rem] text-[#555555] leading-[1.55]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
