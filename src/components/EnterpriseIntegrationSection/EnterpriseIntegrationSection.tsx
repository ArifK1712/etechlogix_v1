import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { InternalLink } from '../InternalLink';
import { buttonClassName } from '../ui/Button';
import { IntegrationHubMap } from './IntegrationHubMap';

gsap.registerPlugin(ScrollTrigger);

/** Scroll entrance only — continuous line flow runs via CSS on overlay paths */
export default function EnterpriseIntegrationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const mapAreaRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobileLayout = window.matchMedia('(max-width: 767px)').matches;
      const activeNodes = isMobileLayout ? mobileNodeRefs.current : nodeRefs.current;

      if (reducedMotion) {
        gsap.set(introRef.current?.children ?? [], { opacity: 1, y: 0 });
        gsap.set(engineRef.current, { opacity: 1, scale: 1 });
        gsap.set(activeNodes, { opacity: 1, y: 0 });
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

      if (!isMobileLayout) {
        tl.fromTo(
          engineRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', immediateRender: false },
          '-=0.15',
        );
      }

      tl.fromTo(
        activeNodes,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.42, stagger: 0.06, ease: 'power2.out', immediateRender: false },
        isMobileLayout ? '-=0.35' : '-=0.25',
      );

      if (!isMobileLayout) {
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
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="enterprise-integrations"
      aria-labelledby="enterprise-integration-heading"
      className="relative w-full overflow-x-hidden border-t border-neutral-200/70 bg-[#f7f6f2] py-8"
    >
      <div className="relative z-[1] mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-5 md:gap-10 md:px-6 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div ref={introRef} className="lg:max-w-[520px]">
          <p className="type-eyebrow text-[#df012a] tracking-[0.22em] md:text-xs">
            ENTERPRISE INTEGRATION ENGINEERING
          </p>
          <h2
            id="enterprise-integration-heading"
            className="type-section-heading mt-3 text-balance sm:text-[2rem] md:text-[2.25rem] lg:text-[2.35rem]"
          >
            Connect every system
            <span className="block">your business depends on.</span>
          </h2>
          <p className="type-body mt-3 max-w-[420px] text-[#555555]">
          We engineer secure enterprise integrations across CRM, ERP, logistics, tax, healthcare, payment, and custom platforms—synchronizing critical data, automating cross-system workflows, and eliminating operational silos.
          </p>
          <InternalLink
            href="/contact"
            className={`${buttonClassName('primaryDark', 'section')} group mt-6`}
          >
            Discuss Integration
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </InternalLink>
        </div>

        <div ref={mapAreaRef} className="flex w-full items-center justify-center py-2 md:py-0">
          <IntegrationHubMap
            pathRefs={pathRefs}
            nodeRefs={nodeRefs}
            mobileNodeRefs={mobileNodeRefs}
            engineRef={engineRef}
          />
        </div>
      </div>
    </section>
  );
}
