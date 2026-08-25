import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

/* ─── Inline minimal enterprise line icons (Brand Red #df012a) ─── */
const IconSalesforce = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <path d="M12 23h12a5 5 0 001-9.9 7.5 7.5 0 00-14.3-2.1A6 6 0 0012 23z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconERP = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <rect x="7" y="6" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 11h8M12 16h8M12 21h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconMuleSoft = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.75" />
    <path d="M11 19v-6l5 4 5-4v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCRM = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <circle cx="16" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M7 25c0-4.4 4-8 9-8s9 3.6 9 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconAvalara = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <path d="M8 6h16v20H8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M12 11h8M12 16h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M20 22l-6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="14" cy="21" r="1" fill="currentColor" />
    <circle cx="20" cy="17" r="1" fill="currentColor" />
  </svg>
);

const IconAPIs = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <path d="M10 10L4 16l6 6M22 10l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 8l-4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconDescartes = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <rect x="4" y="9" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M20 14h5.5l3.5 4v3h-9v-7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <circle cx="9" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="23" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

const IconInternalSystems = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9 text-[#df012a]">
    <ellipse cx="16" cy="9" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="M7 9v6c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9" stroke="currentColor" strokeWidth="1.75" />
    <path d="M7 15v6c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-6" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="22" cy="21" r="1.5" fill="currentColor" />
  </svg>
);

interface SystemItem {
  name: string;
  Icon: React.ComponentType;
}

const systemItems: SystemItem[] = [
  { name: 'Salesforce', Icon: IconSalesforce },
  { name: 'ERP Systems', Icon: IconERP },
  { name: 'MuleSoft', Icon: IconMuleSoft },
  { name: 'CRM Systems', Icon: IconCRM },
  { name: 'Avalara', Icon: IconAvalara },
  { name: 'APIs', Icon: IconAPIs },
  { name: 'Descartes', Icon: IconDescartes },
  { name: 'Internal Systems', Icon: IconInternalSystems },
];

export default function ECSBuiltToConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        /* Left Column reveal */
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

        /* Right List reveal */
        const items = rightRef.current?.querySelectorAll('[data-system-item]') ?? [];
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 82%',
              once: true,
            },
          },
        );

        /* CTA Panel reveal */
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 88%',
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
      id="built-to-connect"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden py-15 md:py-20 border-t border-neutral-200/80"
      aria-label="Built to Connect — Enterprise Integrations"
    >
      {/* ── Background subtle technical detail — bottom left circuit lines ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -left-10 bottom-12 w-[300px] opacity-[0.045]"
          viewBox="0 0 300 400"
          fill="none"
        >
          <path d="M0 350 L80 270 L180 270 L240 210 M180 270 L180 340" stroke="#df012a" strokeWidth="1.2" />
          <path d="M0 310 L60 250 L140 250 M140 250 L190 200" stroke="#df012a" strokeWidth="1" />
          <circle cx="240" cy="210" r="3" fill="#df012a" />
          <circle cx="190" cy="200" r="2.5" fill="#df012a" />
        </svg>

        {/* Dot grid in CTA background */}
        <svg
          className="absolute left-8 bottom-8 w-[140px] opacity-[0.04]"
          viewBox="0 0 140 120"
          fill="none"
        >
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20} cy={r * 20} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        {/* ═══════════════════════════════════════════ */}
        {/* TOP: 2-Column Section Layout                */}
        {/* ═══════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start mb-16">
          {/* ── LEFT SIDE (~45%) ── */}
          <div ref={leftRef} className="w-full lg:w-[45%] xl:w-[44%]">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              BUILT TO CONNECT
            </p>
            <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2 className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] mb-6">
              Built to work with the enterprise you already have<span className="text-[#df012a]">.</span>
            </h2>

            <p className="type-body text-[#555555] max-w-md leading-relaxed">
              We build custom software that connects with your existing systems, data, and workflows without forcing unnecessary replacement.
            </p>
          </div>

          {/* ── RIGHT SIDE — 2-Column Ecosystem List (~55%) ── */}
          <div
            ref={rightRef}
            className="w-full lg:w-[55%] xl:w-[56%] lg:pl-10 xl:pl-14 lg:border-l border-neutral-200/80"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6">
              {systemItems.map((item) => (
                <div
                  key={item.name}
                  data-system-item
                  className="flex items-center gap-4 pb-5 border-b border-neutral-200/70"
                >
                  {/* Icon in Brand Red */}
                  <div className="flex items-center justify-center shrink-0">
                    <item.Icon />
                  </div>

                  {/* Title (Matched to Section 4 card titles) */}
                  <span className="font-display font-semibold text-lg md:text-xl text-[#0a0a0a] tracking-[-0.02em] leading-snug">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* BOTTOM CTA PANEL */}
        {/* ═══════════════════════════════════════════ */}
        <div
          ref={ctaRef}
          className="relative flex flex-col justify-between gap-8 rounded-2xl border border-neutral-200/90 bg-[#f7f6f2] px-8 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-12"
        >
          {/* Left Question with Vertical Red Accent Bar */}
          <div className="flex gap-5 items-start max-w-md">
            <div className="w-[2px] bg-[#df012a] self-stretch shrink-0 rounded-full" aria-hidden="true" />
            <h3 className="font-display font-bold text-xl md:text-2xl text-[#0a0a0a] leading-tight">
              Your operation doesn't fit off-the-shelf software?
            </h3>
          </div>

          {/* Right Statement + Primary CTA Button */}
          <div className="flex shrink-0 flex-col gap-6 sm:flex-row sm:items-center lg:gap-8">
            <p className="font-display text-xl font-bold leading-tight text-[#0a0a0a] md:text-2xl">
              Let&apos;s engineer what does<span className="text-[#df012a]">.</span>
            </p>

            <Button
              href="/contact"
              variant="primaryDark"
              size="section"
              icon={<ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
