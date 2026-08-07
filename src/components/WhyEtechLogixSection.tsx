import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Network, Target, UserRound } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    id: '01',
    title: 'Engineering Ownership',
    description:
      'Senior engineers take responsibility for delivery outcomes—not only assigned development tasks.',
    Icon: UserRound,
  },
  {
    id: '02',
    title: 'Business-First Thinking',
    description:
      'We understand workflows, users, rules, systems, and operational risks before defining the technology.',
    Icon: Target,
  },
  {
    id: '03',
    title: 'Enterprise Integration Experience',
    description:
      'Experience connecting ERP, CRM, healthcare, payment, logistics, distribution, and custom enterprise platforms.',
    Icon: Network,
  },
  {
    id: '04',
    title: 'Long-Term Delivery Partnership',
    description:
      'Support from early strategy and prototyping through implementation, modernization, scaling, and continuous improvement after launch.',
    Icon: BarChart3,
  },
] as const;

export default function WhyEtechLogixSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ownershipRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const items = section.querySelectorAll<HTMLElement>('[data-diff-item]');
      const icons = section.querySelectorAll<HTMLElement>('[data-diff-icon]');
      const nodes = section.querySelectorAll<HTMLElement>('[data-diff-node]');

      if (reducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            headingRef.current,
            descriptionRef.current,
            ownershipRef.current,
            timelineLineRef.current,
            ...items,
            ...icons,
            ...nodes,
          ],
          { opacity: 1, y: 0, scale: 1, scaleY: 1 },
        );
        return;
      }

      gsap.set(timelineLineRef.current, { scaleY: 0, transformOrigin: 'top center' });
      gsap.set(items, { opacity: 0, y: 22 });
      gsap.set(icons, { opacity: 0, scale: 0.9 });
      gsap.set(nodes, { opacity: 0, scale: 0.6 });
      gsap.set(ownershipRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.35',
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.45',
        )
        .fromTo(
          ownershipRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.1, ease: 'power2.out' },
          '-=0.5',
        )
        .to(
          timelineLineRef.current,
          { scaleY: 1, duration: 1.05, ease: 'power2.inOut' },
          '-=0.55',
        );

      items.forEach((item, index) => {
        tl.to(
          item,
          { opacity: 1, y: 0, duration: 0.62 },
          index === 0 ? '-=0.35' : `-=${0.42}`,
        )
          .to(
            nodes[index],
            { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' },
            '<',
          )
          .to(
            icons[index],
            { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' },
            '<+=0.06',
          );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="why-etechlogix"
      aria-labelledby="why-etechlogix-heading"
      className="relative w-full overflow-hidden bg-[#f3f1ec] text-[#0a0a0a] py-16 md:py-20 lg:py-24 border-t border-black/[0.06]"
    >
      <div
        ref={ownershipRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] left-[-2%] z-0 select-none font-display font-extrabold text-[clamp(4.5rem,18vw,11rem)] leading-none tracking-[-0.04em] text-[#0a0a0a]/[0.045] uppercase"
      >
        OWNERSHIP
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-14 xl:gap-x-16">
          <div className="lg:col-span-5 xl:col-span-5">
            <p
              ref={eyebrowRef}
              className="type-eyebrow-accent mb-3 tracking-[0.22em]"
            >
              WHY ETECHLOGIX
            </p>
            <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <h2
              id="why-etechlogix-heading"
              ref={headingRef}
              className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]"
            >
              An engineering partner built for complex, long-term business challenges.
            </h2>

            <p
              ref={descriptionRef}
              className="type-body mt-6 max-w-md text-[#555555]"
            >
              We combine enterprise delivery experience, business understanding, engineering ownership, and
              practical technology expertise to build solutions that remain dependable long after launch.
            </p>
          </div>

          <div ref={timelineRef} className="relative lg:col-span-7 xl:col-span-7 lg:pt-2">
            <div
              ref={timelineLineRef}
              className="absolute left-[11px] top-3 bottom-3 w-px bg-[#df012a]"
              aria-hidden="true"
            />

            <ul className="flex flex-col">
              {differentiators.map((item, index) => (
                <li key={item.id} data-diff-item className="relative">
                  <div className="grid grid-cols-[24px_1fr] gap-x-5 sm:grid-cols-[24px_3.5rem_1fr] sm:gap-x-6">
                    <div className="relative flex justify-center pt-1 sm:pt-2">
                      <span
                        data-diff-node
                        className="relative z-[1] flex h-3 w-3 items-center justify-center rounded-full border border-[#df012a] bg-[#f3f1ec]"
                        aria-hidden="true"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#df012a]" />
                      </span>
                    </div>

                    <div
                      data-diff-icon
                      className="col-start-2 row-start-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_28px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04] sm:col-start-2 sm:row-start-1"
                    >
                      <item.Icon
                        className="h-[1.35rem] w-[1.35rem] text-[#df012a]"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="col-span-2 col-start-2 row-start-2 pb-10 sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:pb-12">
                      <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-[#0a0a0a] md:text-xl">
                        <span className="font-mono text-sm font-semibold text-[#df012a] md:text-base">
                          {item.id}
                        </span>
                        <span className="mx-2 text-neutral-300" aria-hidden="true">
                          —
                        </span>
                        {item.title}
                      </h3>
                      <p className="type-body mt-2 max-w-xl text-[#555555]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {index < differentiators.length - 1 ? (
                    <div
                      className="mb-2 ml-[calc(24px+0.625rem)] border-b border-black/[0.07] sm:ml-[calc(24px+3.5rem+1.5rem)]"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
