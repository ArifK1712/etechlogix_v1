import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Waypoints, FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  {
    index: '01',
    title: 'Automated Business Workflows',
    description:
      'Automate document handling, information extraction, business rules, task routing, approvals, and system updates.',
    Icon: ClipboardList,
  },
  {
    index: '02',
    title: 'Multi-System Workflow Execution',
    description:
      'AI agents work across ERP, CRM, healthcare, payment, and custom systems to complete operational tasks.',
    Icon: Waypoints,
  },
  {
    index: '03',
    title: 'Human-in-the-Loop Control',
    description:
      'Manage exceptions and involve the right business users when review, approval, or operational decisions are required.',
    Icon: FlaskConical,
  },
];

function WorkflowSchematic({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 200"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 100 H88 M88 100 V52 M88 52 H152 M152 52 V148 M152 148 H216 M216 148 V100 M216 100 H296"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      <path
        d="M152 100 H216 M216 100 V52 M216 52 H280"
        stroke="rgba(223,1,42,0.35)"
        strokeWidth="1"
      />
      <rect x="16" y="88" width="16" height="24" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="144" y="40" width="16" height="24" rx="1" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
      <rect x="144" y="136" width="16" height="24" rx="1" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
      <circle cx="88" cy="100" r="4" fill="#111111" stroke="rgba(223,1,42,0.55)" strokeWidth="1" />
      <circle cx="152" cy="52" r="4" fill="#111111" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="152" cy="148" r="4" fill="#111111" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="216" cy="100" r="4" fill="#111111" stroke="rgba(223,1,42,0.55)" strokeWidth="1" />
      <path d="M268 46 L280 52 L268 58" stroke="rgba(223,1,42,0.45)" strokeWidth="1" />
      <path d="M104 94 L112 100 L104 106" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  );
}

export default function ProvenBusinessImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introEyebrowRef = useRef<HTMLParagraphElement>(null);
  const introHeadingRef = useRef<HTMLHeadingElement>(null);
  const introCopyRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const flowPathRef = useRef<SVGPathElement>(null);
  const millionsWrapRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(
          [
            introEyebrowRef.current,
            introHeadingRef.current,
            introCopyRef.current,
            canvasRef.current,
            millionsWrapRef.current,
            progressLineRef.current,
            flowPathRef.current,
            outcomesRef.current?.querySelectorAll('[data-outcome]'),
          ],
          { opacity: 1, y: 0, clipPath: 'none', scaleY: 1, strokeDashoffset: 0 },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        [introEyebrowRef.current, introHeadingRef.current, introCopyRef.current],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
      )
        .fromTo(
          canvasRef.current,
          { clipPath: 'inset(0 100% 0 0 round 12px)' },
          { clipPath: 'inset(0 0% 0 0 round 12px)', duration: 0.95, ease: 'power2.inOut' },
          '-=0.25',
        )
        .fromTo(
          millionsWrapRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 0.85, ease: 'power2.out' },
          '-=0.55',
        );

      if (flowPathRef.current) {
        const length = flowPathRef.current.getTotalLength();
        gsap.set(flowPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        tl.to(
          flowPathRef.current,
          { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' },
          '-=0.65',
        );
      }

      tl.fromTo(
        progressLineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.9, transformOrigin: 'top center' },
        '-=0.85',
      ).fromTo(
        outcomesRef.current?.querySelectorAll('[data-outcome]') ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        '-=0.55',
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="business-impact"
      aria-labelledby="business-impact-heading"
      className="relative w-full overflow-hidden bg-[#f8f8f6] text-[#111111] py-16 lg:py-20 border-t border-neutral-200/80"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5">
        {/* Section introduction — balanced two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 lg:mb-12 items-start">
          <div className="lg:col-span-4 xl:col-span-4 max-w-md">
            <p
              ref={introEyebrowRef}
              className="text-xs md:text-sm font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-5"
            >
              Proven Business Impact
            </p>
            <p
              ref={introCopyRef}
              className="text-base md:text-lg text-neutral-600 leading-relaxed"
            >
              We help enterprises automate complex workflows, connect critical systems, modernize
              operations, and bring new digital products to market faster.
            </p>
          </div>
          <div className="lg:col-span-8 xl:col-span-8">
            <h2
              ref={introHeadingRef}
              id="business-impact-heading"
              className="font-display font-extrabold text-[1.75rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-5xl leading-[1.12] tracking-tight text-[#111111] text-balance max-w-4xl"
            >
              Engineering outcomes that improve operations, reduce cost, and accelerate growth.
            </h2>
          </div>
        </div>

        {/* Main impact canvas */}
        <div
          ref={canvasRef}
          className="relative bg-[#111111] text-white border border-neutral-800/80 rounded-xl overflow-hidden"
        >
          {/* Desktop workflow bridge */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              ref={flowPathRef}
              d="M420 280 C560 280, 620 220, 720 240 S920 300, 980 320"
              stroke="rgba(223,1,42,0.55)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M420 280 C560 280, 620 220, 720 240 S920 300, 980 320"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — dominant impact message */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <WorkflowSchematic className="absolute right-4 top-6 w-[45%] max-w-[220px] opacity-80 hidden sm:block lg:right-6 lg:top-8 lg:max-w-[260px]" />

              <div ref={millionsWrapRef} className="relative z-10 max-w-xl">
                <p className="font-display font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[2.85rem] lg:text-[3.1rem] leading-[1.06] tracking-tight">
                  <span className="text-[#df012a]">Millions saved</span>
                  <span className="text-white"> through agentic AI workflow automation.</span>
                </p>
                <p className="mt-5 text-sm md:text-base text-neutral-400 leading-relaxed max-w-md">
                  We help clients reduce operational costs by building AI agent tools that automate
                  real business workflows across users, departments, and enterprise systems.
                </p>
                <p className="mt-3 text-sm md:text-base text-neutral-400 leading-relaxed max-w-md">
                  Focused on Agentic AI that executes business flows—not generic generative AI.
                </p>
              </div>

              <WorkflowSchematic className="mt-8 w-full max-w-md opacity-70 sm:hidden" />
            </div>

            {/* Right — operational impact journey */}
            <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div
                ref={progressLineRef}
                aria-hidden="true"
                className="absolute left-[2.15rem] sm:left-[2.35rem] top-10 bottom-10 w-px bg-[#df012a]/25 origin-top"
              >
                <div className="absolute inset-0 w-full bg-[#df012a]/70 origin-top scale-y-100" />
              </div>

              <div ref={outcomesRef} className="flex flex-col gap-0">
                {outcomes.map((outcome, i) => {
                  const { Icon } = outcome;
                  return (
                    <article
                      key={outcome.index}
                      data-outcome
                      className={`relative pl-12 sm:pl-14 py-7 sm:py-8 ${
                        i !== outcomes.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.65rem] sm:left-[1.85rem] top-9 sm:top-10 w-2 h-2 -translate-x-1/2 rounded-full bg-[#111111] border border-[#df012a]"
                      />

                      <div className="flex items-start gap-4 sm:gap-5">
                        <span className="font-display font-black text-4xl sm:text-5xl leading-none text-white/[0.07] tabular-nums select-none shrink-0">
                          {outcome.index}
                        </span>
                        <div className="min-w-0 pt-1">
                          <div className="flex items-center gap-2.5 mb-2">
                            <Icon
                              className="w-4 h-4 text-[#df012a] shrink-0"
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                            <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                              {outcome.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-[0.9375rem] text-neutral-400 leading-relaxed max-w-lg">
                            {outcome.description}
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
      </div>
    </section>
  );
}
