import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { InternalLink } from '../InternalLink';
import { IntegrationHubMap } from './IntegrationHubMap';

gsap.registerPlugin(ScrollTrigger);

/** Scroll entrance only — continuous line flow runs via CSS on overlay paths */
export default function EnterpriseIntegrationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const mapAreaRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(introRef.current?.children ?? [], { opacity: 1, y: 0 });
        gsap.set(engineRef.current, { opacity: 1, scale: 1 });
        gsap.set(nodeRefs.current, { opacity: 1, y: 0 });
        pathRefs.current.forEach((path) => path && gsap.set(path, { strokeDashoffset: 0, opacity: 1 }));
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
        defaults: { ease: 'power3.out', immediateRender: false },
      });

      tl.fromTo(
        introRef.current?.children ?? [],
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, immediateRender: false },
      ).fromTo(
        mapAreaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, immediateRender: false },
        '-=0.3',
      );

      tl.fromTo(
        engineRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', immediateRender: false },
        '-=0.15',
      );

      tl.fromTo(
        nodeRefs.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.42, stagger: 0.06, ease: 'power2.out', immediateRender: false },
        '-=0.25',
      );

      pathRefs.current.forEach((path, index) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: `${length} ${length}`,
          strokeDashoffset: length,
          opacity: 0.45,
        });
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power2.inOut',
            onComplete: () => {
              path.removeAttribute('stroke-dasharray');
              path.removeAttribute('stroke-dashoffset');
            },
          },
          index === 0 ? '-=0.35' : `-=${0.58}`,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="enterprise-integrations"
      aria-labelledby="enterprise-integration-heading"
      className="relative w-full overflow-x-hidden border-t border-neutral-200/70 bg-[#f7f6f2] py-10 md:py-12 lg:py-14"
    >
      <div className="relative z-[1] mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-5 md:gap-10 md:px-6 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div ref={introRef} className="lg:max-w-[520px]">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-[#df012a] md:text-xs">
            ENTERPRISE INTEGRATION ENGINEERING
          </p>
          <h2
            id="enterprise-integration-heading"
            className="mt-3 font-display text-[1.65rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] text-balance sm:text-[2rem] md:text-[2.25rem] lg:text-[2.35rem]"
          >
            Connect every system
            <span className="block">your business depends on.</span>
          </h2>
          <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-[#555555] md:text-base">
          We engineer secure enterprise integrations across CRM, ERP, logistics, tax, healthcare, payment, and custom platforms—synchronizing critical data, automating cross-system workflows, and eliminating operational silos.
          </p>
          <InternalLink
            href="/contact"
            className="group mt-6 inline-flex w-full sm:w-auto items-center justify-between gap-3 bg-[#df012a] hover:bg-[#b80122] text-white font-semibold text-[14px] min-h-[48px] pl-5 pr-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f6f2]"
          >
            <span className="px-1 whitespace-nowrap sm:px-2">Discuss Your Integration Needs</span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#df012a] transition-transform duration-700 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </span>
          </InternalLink>
        </div>

        <div ref={mapAreaRef} className="flex w-full items-center justify-center py-2 md:py-0">
          <IntegrationHubMap
            pathRefs={pathRefs}
            nodeRefs={nodeRefs}
            engineRef={engineRef}
          />
        </div>
      </div>
    </section>
  );
}
