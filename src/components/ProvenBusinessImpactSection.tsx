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
      'Automate document handling, data extraction, task routing, and system updates with built-in business rules.',
    Icon: ClipboardList,
  },
  {
    index: '02',
    title: 'Multi-System Workflow Execution',
    description:
      'Autonomous AI agents operate across ERP, CRM, and custom platforms to execute multi-step operations.',
    Icon: Waypoints,
  },
  {
    index: '03',
    title: 'Human-in-the-Loop Control',
    description:
      'Ensure human oversight for critical review, approval thresholds, and operational decision gates.',
    Icon: FlaskConical,
  },
];

export default function ProvenBusinessImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introEyebrowRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
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
            canvasRef.current,
            millionsWrapRef.current,
            progressLineRef.current,
            outcomesRef.current?.querySelectorAll('[data-outcome]'),
          ],
          { opacity: 1, y: 0, clipPath: 'none', scaleY: 1 },
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
        [introEyebrowRef.current, millionsWrapRef.current],
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

      tl.fromTo(
        progressLineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.9, transformOrigin: 'top center' },
        '-=0.45',
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
      className="relative w-full overflow-hidden text-[#111111] py-16 lg:py-20 border-t border-neutral-200/80"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5">

        {/* Main impact canvas */}
        <div
          ref={canvasRef}
          className="relative bg-[#f8f8f6] text-[#0a0a0a] border border-neutral-200/90 rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — dominant impact message */}
            <div className="relative border-b lg:border-b-0 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div ref={millionsWrapRef} className="relative z-10 max-w-xl">
              <p
              ref={introEyebrowRef}
              className="type-eyebrow-accent mb-5"
            >
              Proven Business Impact
            </p>
                <p className="font-display font-semibold text-[2rem] sm:text-[2.5rem] md:text-[2.85rem] lg:text-[3.1rem] leading-[1.06] tracking-tight">
                  <span className="text-[#df012a]">Millions saved</span>
                  <span className="text-[#0a0a0a]"> through agentic AI workflow automation.</span>
                </p>
                <p className="type-body mt-5 text-neutral-600 max-w-md">
                  We engineer deterministic AI agents that execute real business workflows across departments and enterprise systems—delivering measurable cost reduction.
                </p>
              </div>
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
                      className={`relative pl-12 sm:pl-14 py-7 sm:py-3 ${
                        i !== outcomes.length - 1 ? 'border-b border-neutral-200/90' : ''
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.65rem] sm:left-[1.85rem] top-9 sm:top-10 w-2 h-2 -translate-x-1/2 rounded-full bg-white border border-[#df012a]"
                      />

                      <div className="flex items-start gap-4 sm:gap-5">
                        <div
                          className="flex w-10 shrink-0 items-start justify-center pt-0.5 sm:w-11"
                          aria-hidden="true"
                        >
                          <Icon
                            className="h-8 w-8 text-[#df012a] sm:h-9 sm:w-9"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display font-semibold text-lg sm:text-xl text-[#0a0a0a] leading-snug mb-1.5">
                            {outcome.title}
                          </h3>
                          <p className="type-body text-neutral-600 max-w-lg line-clamp-2">
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
