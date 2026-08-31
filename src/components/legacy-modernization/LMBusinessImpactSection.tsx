import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Clock,
  DollarSign,
  Share2,
  Eye,
  Zap,
  Settings,
  Link2,
  BarChart3,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TransformationRow {
  number: string;
  challenge: {
    icon: React.ReactNode;
    text: string;
  };
  outcome: {
    icon: React.ReactNode;
    text: string;
  };
}

const transformationRows: TransformationRow[] = [
  {
    number: '01',
    challenge: {
      icon: <Clock className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Slow to change',
    },
    outcome: {
      icon: <Zap className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Faster response',
    },
  },
  {
    number: '02',
    challenge: {
      icon: <DollarSign className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'High maintenance cost',
    },
    outcome: {
      icon: <Settings className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Simpler operations',
    },
  },
  {
    number: '03',
    challenge: {
      icon: <Share2 className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Disconnected systems',
    },
    outcome: {
      icon: <Link2 className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Connected workflows',
    },
  },
  {
    number: '04',
    challenge: {
      icon: <Eye className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Limited visibility',
    },
    outcome: {
      icon: <BarChart3 className="w-5 h-5 text-[#171717]" strokeWidth={1.75} />,
      text: 'Better decisions',
    },
  },
];

export default function LMBusinessImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          headRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true },
          }
        );

        if (containerRef.current) {
          gsap.fromTo(
            [...containerRef.current.children] as HTMLElement[],
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="business-impact"
      className="relative w-full bg-white text-[#0a0a0a] overflow-hidden py-16 lg:py-20 border-t border-neutral-200/80"
      aria-label="Business Impact — Why Modernize"
    >
      {/* ── Subtle Blush/Red Bottom Flowing Ribbon Lines ── */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-[140px] opacity-[0.2] overflow-visible"
        viewBox="0 0 1600 140"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-120 100 C 280 20 680 130 1080 55 C 1340 5 1520 85 1720 35"
          stroke="#df012a"
          strokeWidth="1.2"
        />
        <path
          d="M-120 115 C 280 35 680 145 1080 70 C 1340 20 1520 100 1720 50"
          stroke="#df012a"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <path
          d="M-120 130 C 280 50 680 160 1080 85 C 1340 35 1520 115 1720 65"
          stroke="#df012a"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        
        {/* ── Section Header ── */}
        <div ref={headRef} className="mb-12 lg:mb-16">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em] text-[#df012a]">
            BUSINESS IMPACT
          </p>
          <div className="mb-5 h-px w-10 bg-[#df012a]" aria-hidden="true" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-end justify-between gap-6 lg:gap-14">
            <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.14]">
              Modernization should change<br />
              how your business performs<span className="text-[#df012a]">.</span>
            </h2>
            
            <p className="type-body text-[#555555] leading-relaxed max-w-lg lg:justify-self-end text-pretty lg:pb-1">
              The real value of modernization is simpler operations, faster change and systems that can grow with the business.
            </p>
          </div>
        </div>

        {/* ── Comparison Structure ── */}
        <div className="w-full">
          
          {/* Column Titles + Center Direction Indicator */}
          <div className="hidden sm:flex items-center justify-between mb-4 px-6 sm:px-8 lg:px-10">
            <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#0a0a0a] uppercase">
              WHAT HOLDS YOU BACK
            </span>

            <div className="flex-1 flex items-center justify-center gap-3 px-6 max-w-[320px]">
              <div className="w-full border-t border-dashed border-neutral-300" />
              <div className="w-6 h-6 rounded-full bg-[#df012a] flex items-center justify-center shrink-0 shadow-2xs">
                <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
              </div>
              <div className="w-full border-t border-dashed border-neutral-300" />
            </div>

            <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#df012a] uppercase">
              WHAT MODERNIZATION ENABLES
            </span>
          </div>

          {/* Single Clean Outer Comparison Container */}
          <div
            ref={containerRef}
            className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden"
          >
            {transformationRows.map((row, idx) => (
              <div
                key={row.number}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6.5 gap-4 sm:gap-6 group transition-colors duration-150 hover:bg-neutral-50/60 ${
                  idx < transformationRows.length - 1 ? 'border-b border-neutral-200/75' : ''
                }`}
              >
                {/* Left Side: Number + Divider + Challenge */}
                <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                  {/* Number */}
                  <span className="font-mono font-bold text-sm sm:text-base text-[#df012a] tracking-tight shrink-0 w-6">
                    {row.number}
                  </span>

                  {/* Subtle vertical divider */}
                  <span className="h-6 w-px bg-neutral-200 shrink-0" aria-hidden="true" />

                  {/* Challenge Icon in Soft Blush Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#fbeaec] flex items-center justify-center shrink-0 border border-[#df012a]/10">
                    {row.challenge.icon}
                  </div>

                  {/* Challenge Text */}
                  <p className="text-[15px] sm:text-base lg:text-[1.0625rem] font-medium text-[#171717] tracking-tight truncate">
                    {row.challenge.text}
                  </p>
                </div>

                {/* Center Transition Arrow */}
                <div className="hidden sm:flex shrink-0 px-4 items-center justify-center">
                  <ArrowRight
                    className="w-4.5 h-4.5 text-[#df012a] transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                {/* Mobile-only subtle down arrow */}
                <div className="flex sm:hidden items-center justify-start pl-11 -my-1 text-[#df012a]">
                  <ArrowRight className="w-4 h-4 rotate-90 text-[#df012a]" strokeWidth={2} />
                </div>

                {/* Right Side: Outcome Icon + Outcome Text */}
                <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0 sm:justify-start pl-11 sm:pl-4">
                  {/* Outcome Icon in Soft Blush Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#fbeaec] flex items-center justify-center shrink-0 border border-[#df012a]/10">
                    {row.outcome.icon}
                  </div>

                  {/* Outcome Text */}
                  <p className="text-[15px] sm:text-base lg:text-[1.0625rem] font-bold text-[#0a0a0a] tracking-tight truncate">
                    {row.outcome.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
