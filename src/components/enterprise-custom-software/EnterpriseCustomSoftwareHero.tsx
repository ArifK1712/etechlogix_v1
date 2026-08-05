import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { InternalLink } from '../InternalLink';

const HERO_IMAGE = '/images/enterprise-custom-software-hero-dark.jpg';
const HERO_IMAGE_FALLBACK = '/images/enterprise-custom-software-hero.jpg';

const capabilityItems = [
  'Operational Platforms',
  'Workflow Systems',
  'Enterprise Applications',
  'Connected Data',
];

export default function EnterpriseCustomSoftwareHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualBandRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      if (introRef.current) {
        gsap.fromTo(
          introRef.current.children,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.08,
          },
        );
      }

      if (visualBandRef.current) {
        gsap.fromTo(
          visualBandRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.35 },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ecs-hero-heading"
      className="relative w-full overflow-hidden bg-[#030712] text-[#f5f3ef]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-10 md:px-6 md:pt-32 md:pb-12">
        <div ref={introRef} className="relative max-w-[920px]">
          <div className="flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#df012a]/35 bg-[#df012a]/10 px-4 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[#fbeaec] md:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#df012a]" aria-hidden="true" />
                Enterprise Custom Software
              </p>
              <p
                className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:block sm:max-w-[14rem] sm:text-right sm:leading-relaxed"
                aria-hidden="true"
              >
                Service / Platform Engineering
              </p>
            </div>

            <h1
              id="ecs-hero-heading"
              className="font-display text-[1.95rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#f5f3ef] text-balance sm:text-[2.45rem] md:text-[2.85rem] lg:text-[3rem]"
            >
              Build software around your operation—
              <span className="text-[#df012a]">not around the limits</span> of an off-the-shelf product.
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10 lg:gap-14">
              <p className="max-w-xl text-base leading-[1.68] text-neutral-300 md:text-[1.0625rem]">
                We design and build enterprise platforms around your workflows, users, approvals, business rules,
                data, and existing systems—creating dependable software that supports complex operations and
                long-term growth.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row md:shrink-0">
                <InternalLink
                  href="/contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-between gap-4 bg-[#df012a] hover:bg-[#b80122] text-white font-semibold text-[15px] h-[52px] pl-6 pr-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
                >
                  <span className="px-2 whitespace-nowrap">Discuss Your Requirements</span>
                  <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:bg-white/30">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </InternalLink>
                <InternalLink
                  href="/#approach"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 h-[52px] rounded-full border border-white/18 bg-white/[0.04] text-[#f5f3ef] font-medium text-[15px] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/45"
                >
                  Explore the Approach
                </InternalLink>
              </div>
            </div>
          </div>
        </div>

        <div ref={visualBandRef} className="relative mt-10 md:mt-12">
          <div className="rounded-[1.25rem] bg-white/[0.05] p-1 ring-1 ring-white/10 md:rounded-[1.5rem]">
            <div className="relative overflow-hidden rounded-[calc(1.25rem-0.25rem)] border border-white/10 bg-[#0a0a0a] md:rounded-[calc(1.5rem-0.375rem)]">
              <img
                src={HERO_IMAGE}
                alt="Enterprise operational planning with workflow maps and system architecture materials"
                className="h-[200px] w-full object-cover object-center sm:h-[240px] md:h-[280px] lg:h-[300px]"
                width={1440}
                height={600}
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = HERO_IMAGE_FALLBACK;
                }}
              />
              <div className="absolute inset-0 bg-[#030712]/35 pointer-events-none" aria-hidden="true" />
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#030712]/90 px-4 py-3 md:px-5 md:py-3.5"
              >
                <ul className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
                  {capabilityItems.map((item) => (
                    <li
                      key={item}
                      className="text-[10px] font-mono uppercase tracking-[0.12em] text-neutral-400 sm:text-[11px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[#df012a] md:inline">
                  Custom platform delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
