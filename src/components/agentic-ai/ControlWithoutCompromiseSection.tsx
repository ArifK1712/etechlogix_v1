import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import {
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserCheck,
  UserRound,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type GovernanceState = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const states: GovernanceState[] = [
  {
    title: 'Routine Action',
    description: 'AI executes automatically within established policies.',
    Icon: Zap,
  },
  {
    title: 'Policy-Sensitive Action',
    description: 'AI evaluates context, checks permissions and business rules.',
    Icon: ShieldCheck,
  },
  {
    title: 'High-Impact Action',
    description: 'Requires human approval before the action is taken.',
    Icon: UserRound,
  },
];

const principles = [
  { title: 'Policy-aware', description: 'Acts within defined business rules.', Icon: FileCheck2 },
  { title: 'Permission-aware', description: 'Respects roles and access boundaries.', Icon: LockKeyhole },
  { title: 'Human-governed', description: 'Escalates when human judgment matters.', Icon: UserCheck },
  { title: 'Auditable', description: 'Decisions and actions remain traceable.', Icon: Search },
];

export default function ControlWithoutCompromiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const wavesRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        if (introRef.current) {
          gsap.fromTo(
            introRef.current,
            { y: 12, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: { trigger: section, start: 'top 82%', once: true },
            },
          );
        }

        if (panelRef.current) {
          gsap.fromTo(
            panelRef.current,
            { y: 26 },
            {
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: { trigger: panelRef.current, start: 'top 90%', once: true },
            },
          );
        }
      });

      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        if (backgroundRef.current) {
          gsap.fromTo(
            backgroundRef.current,
            { y: -220, scale: 1.32 },
            {
              y: 220,
              scale: 1.32,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            },
          );
        }

        if (wavesRef.current) {
          gsap.fromTo(
            wavesRef.current,
            { y: 115 },
            {
              y: -115,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            },
          );
        }
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="agentic-governance relative overflow-hidden border-t border-neutral-200/70 bg-[#fafafa] py-16 lg:py-20" aria-labelledby="agentic-governance-title">
      <div ref={backgroundRef} className="agentic-governance-photo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div ref={wavesRef} className="agentic-governance-waves pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="agentic-governance-wave agentic-governance-wave--left" />
        <span className="agentic-governance-wave agentic-governance-wave--right" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <header ref={introRef} className="mx-auto max-w-[800px] text-center">
          <div className="mb-7">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Control Without Compromise</p>
            <span className="mx-auto block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>
          <h2 id="agentic-governance-title" className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]">
            Autonomous when it can be.<br />Human-led when it should be<span className="text-[#df012a]">.</span>
          </h2>
          <p className="type-body mx-auto mt-5 max-w-[680px] text-[#555555]">
            Agentic AI that operates within defined guardrails, adapts to business context, and escalates when human judgment is essential.
          </p>
        </header>

        <div ref={panelRef} className="agentic-governance-panel mt-10 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/95 shadow-[0_12px_38px_rgba(15,23,42,0.045)] md:mt-12">
          <div className="px-5 pb-8 pt-7 sm:px-8 lg:px-12 lg:pb-10">
            <p className="type-eyebrow-accent text-center tracking-[0.22em]">Should the Agent Act?</p>

            <div className={`agentic-risk-spectrum agentic-risk-spectrum--active-${activeState} relative mt-8`} aria-label="Decision spectrum from autonomous action to human approval">
              <div className="grid grid-cols-3 items-end text-xs leading-relaxed text-neutral-600">
                <div><strong className="block font-semibold uppercase tracking-[0.08em] text-[#111]">Low Risk</strong><span>Agent acts</span></div>
                <div className="text-center"><strong className="block font-semibold uppercase tracking-[0.08em] text-[#111]">Business Rules</strong></div>
                <div className="text-right"><strong className="block font-semibold uppercase tracking-[0.08em] text-[#111]">High Risk</strong><span>Human approval</span></div>
              </div>
              <div className="agentic-spectrum-track relative mt-4 h-px bg-neutral-300" aria-hidden="true">
                <span className="agentic-spectrum-segment agentic-spectrum-segment--one" />
                <span className="agentic-spectrum-segment agentic-spectrum-segment--two" />
                <span className="agentic-spectrum-node agentic-spectrum-node--one" />
                <span className="agentic-spectrum-node agentic-spectrum-node--two" />
                <span className="agentic-spectrum-node agentic-spectrum-node--three" />
              </div>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-3 md:gap-6 lg:gap-10">
              {states.map(({ title, description, Icon }, index) => {
                const selected = activeState === index;
                return (
                  <button
                    key={title}
                    type="button"
                    onMouseEnter={() => setActiveState(index)}
                    onFocus={() => setActiveState(index)}
                    className="agentic-governance-state group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-4"
                  >
                    <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full border bg-[#fff7f8] transition-[border-color,color,transform] duration-300 ${selected ? 'scale-[1.04] border-[#df012a]/35 text-[#df012a]' : 'border-[#df012a]/15 text-[#df012a]/75'}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <strong className="mt-5 block font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#111] md:text-xl">{title}</strong>
                    <span className="mx-auto mt-2 block max-w-[280px] text-sm leading-[1.6] text-neutral-600">{description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-neutral-200 px-5 py-5 text-center">
            <p className="inline-flex items-center gap-3 text-sm leading-relaxed text-neutral-600">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#df012a] bg-white" aria-hidden="true" />
              Every action is logged, monitored, and continuously improved.
            </p>
          </div>

          <div className="grid border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, description, Icon }, index) => (
              <div className={`flex gap-4 px-5 py-6 sm:px-7 lg:py-7 ${index > 0 ? 'lg:border-l lg:border-neutral-200' : ''} ${index > 1 ? 'sm:border-t lg:border-t-0' : ''}`} key={title}>
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#df012a]" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-[#111]">{title}</h3>
                  <p className="mt-1 text-sm leading-[1.55] text-neutral-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
