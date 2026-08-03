import { useRef, useState, useCallback, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Capability {
  id: string;
  title: string;
  desc: string;
  keywords: string[];
  caption: string;
  label: string;
  image: string;
  operationalFocus: [string, string, string];
}

function CapabilityImage({ cap, priority = false }: { cap: Capability; priority?: boolean }) {
  return (
    <img
      src={cap.image}
      alt=""
      role="presentation"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      width={1600}
      height={1067}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}

const capabilities: Capability[] = [
  {
    id: '01',
    title: 'Enterprise Custom Software',
    desc:
      'Custom platforms designed around specific operational processes, users, systems, and business requirements. We map how work actually moves through your organization—roles, approvals, data sources, and edge cases—and translate that into software your teams can run every day. From modular services and secure APIs to cloud-ready deployment, we build for reliability, auditability, and long-term change without forcing a generic product to fit.',
    keywords: ['Architecture', 'Full-Stack', 'Cloud-Native'],
    caption: 'Application architecture across cloud, APIs, and operational systems.',
    label: 'Enterprise platforms',
    operationalFocus: ['Business Process', 'Custom Platform', 'Scalable Operations'],
    image: '/images/custom-software.webp',
  },
  {
    id: '02',
    title: 'Agentic AI & Workflow Automation',
    desc:
      'AI agents that process information, apply business rules, update systems, manage exceptions, and support approvals. We design workflows where documents, forms, and operational signals enter a defined path: data is interpreted, business logic is applied, downstream systems are updated, and people step in only when judgment is required. The result is faster throughput, fewer manual handoffs, and traceable automation that fits compliance and operational controls.',
    keywords: ['LLMs', 'Workflow Rules', 'Autonomous Agents'],
    caption: 'Documents, rules, approvals, and system updates in one operational flow.',
    label: 'Workflow automation',
    operationalFocus: [
      'Information Received',
      'AI Executes Workflow',
      'Human Reviews Exceptions',
    ],
    image: '/images/service-ai.jpg',
  },
  {
    id: '03',
    title: 'Enterprise Integrations',
    desc:
      'Connect Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP, CRM, healthcare, payment, and custom enterprise platforms.',
    keywords: ['APIs', 'Middleware', 'Data Sync'],
    caption: 'Named enterprise platforms connected through a central integration layer.',
    label: 'Integration layer',
    operationalFocus: ['Connected Systems', 'Synchronized Data', 'Unified Operations'],
    image: '/images/enterprise-integrations.webp',
  },
  {
    id: '04',
    title: 'Investor-ready functional product prototypes.',
    desc:
      'We help startups turn ideas into functional prototypes and product demonstrations that support validation, early customer conversations, and fundraising.',
    keywords: ['Functional Demo', 'Investor Ready', 'Market Validation'],
    caption: 'From product concept to functional demonstrations investors and customers can experience.',
    label: 'Product prototypes',
    operationalFocus: ['Product Idea', 'Functional Experience', 'Market Validation'],
    image: '/images/product-prototypes.webp',
  },
  {
    id: '05',
    title: 'Extend your team with engineers who work like owners.',
    desc:
      'Experienced engineers who understand the product context, take responsibility for outcomes, and operate as an extension of your internal team.',
    keywords: ['Product Ownership', 'Senior Engineers', 'Embedded Collaboration'],
    caption: 'Senior engineers embedded alongside your team with shared delivery ownership.',
    label: 'Team extension',
    operationalFocus: ['Internal Team', 'Embedded Engineers', 'Shared Ownership'],
    image: '/images/team-strategy.jpg',
  },
  {
    id: '06',
    title: 'Move beyond legacy systems without disrupting critical operations.',
    desc:
      'Modernize outdated applications, disconnected systems, and manual workflows through a controlled roadmap that improves scalability, integration, usability, and automation.',
    keywords: ['Controlled Modernization', 'System Migration', 'Workflow Automation'],
    caption: 'Legacy fragmentation resolved through phased migration into a modern platform.',
    label: 'Modernization',
    operationalFocus: ['Legacy Environment', 'Controlled Transition', 'Modern Platform'],
    image: '/images/legacy-systems.webp',
  },
];

const SERVICE_COUNT = capabilities.length;
const HEADER_OFFSET = 96;
/** Viewport heights of pinned scroll — lower = less “hold” per capability */
const SCROLL_VH_FACTOR = 2.75;

function OperationalFocusTrack({
  points,
  lineRef,
  pointsRef,
  animateLine = false,
}: {
  points: [string, string, string];
  lineRef?: RefObject<HTMLDivElement | null>;
  pointsRef?: RefObject<HTMLDivElement | null>;
  animateLine?: boolean;
}) {
  return (
    <div className="mt-6 pt-5 border-t border-neutral-200">
      <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-500 mb-4">
        Operational Focus
      </p>
      <div className="rounded-lg border border-[#EAEAEA] bg-white px-4 py-5 sm:px-5">
        <div className="relative pt-0.5 pb-1">
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[15px] h-px bg-neutral-200"
            aria-hidden="true"
          />
          {animateLine ? (
            <div
              ref={lineRef}
              className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[15px] h-px bg-[#df012a] origin-left"
              aria-hidden="true"
            />
          ) : (
            <div
              className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[15px] h-px bg-[#df012a]/80"
              aria-hidden="true"
            />
          )}
          <div ref={pointsRef} className="relative grid grid-cols-3 gap-2 sm:gap-3">
            {points.map((point, i) => (
              <div
                key={`${point}-${i}`}
                data-op-point
                className="flex min-w-0 flex-col items-center px-1 text-center"
              >
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-[#fafaf8] text-[11px] font-mono font-semibold tabular-nums text-[#df012a] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-3 text-xs sm:text-[13px] font-medium leading-snug text-[#2F3437]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OperationalFocusStatic({ points }: { points: [string, string, string] }) {
  return <OperationalFocusTrack points={points} />;
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introLeftRef = useRef<HTMLDivElement>(null);
  const introRightRef = useRef<HTMLHeadingElement>(null);
  const pinRootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const visualLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentNumberRef = useRef<HTMLParagraphElement>(null);
  const contentTitleRef = useRef<HTMLHeadingElement>(null);
  const contentDescRef = useRef<HTMLParagraphElement>(null);
  const contentKeywordsRef = useRef<HTMLUListElement>(null);
  const contentOperationalRef = useRef<HTMLDivElement>(null);
  const contentLinkRef = useRef<HTMLAnchorElement>(null);
  const operationalLineRef = useRef<HTMLDivElement>(null);
  const operationalPointsRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionTlRef = useRef<gsap.core.Timeline | null>(null);

  const setVisualLayerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      visualLayerRefs.current[index] = el;
    },
    [],
  );

  const cap = capabilities[activeIndex];
  const progressLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(SERVICE_COUNT).padStart(2, '0')}`;

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinRoot = pinRootRef.current;
      const stage = stageRef.current;
      if (!section || !pinRoot || !stage) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = gsap.context(() => {
        if (!reducedMotion) {
          gsap.fromTo(
            [introLeftRef.current, introRightRef.current],
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true,
              },
            },
          );
        }

        const initVisualLayers = () => {
          visualLayerRefs.current.forEach((layer) => {
            if (layer) gsap.killTweensOf(layer);
          });
        };

        initVisualLayers();
        requestAnimationFrame(initVisualLayers);

        const contentParts = [
          contentNumberRef.current,
          contentTitleRef.current,
          contentDescRef.current,
          contentKeywordsRef.current,
          contentOperationalRef.current,
          contentLinkRef.current,
        ].filter(Boolean);

        const refreshScroll = () => ScrollTrigger.refresh();

        const images = section.querySelectorAll('img');
        let loadedCount = 0;
        const onImageReady = () => {
          loadedCount += 1;
          if (loadedCount >= images.length) refreshScroll();
        };
        if (images.length === 0) refreshScroll();
        else {
          images.forEach((img) => {
            if (img.complete) onImageReady();
            else {
              img.addEventListener('load', onImageReady);
              img.addEventListener('error', onImageReady);
            }
          });
        }

        const animateImages = (_from: number, _to: number) => {
          visualLayerRefs.current.forEach((layer) => {
            if (layer) gsap.killTweensOf(layer);
          });
        };

        const animateImagesFast = (_from: number, _to: number) => {
          animateImages(_from, _to);
        };

        const animateContentIn = (fast = false) => {
          if (reducedMotion) return;
          const parts = [
            contentNumberRef.current,
            contentTitleRef.current,
            contentDescRef.current,
            contentKeywordsRef.current,
            contentOperationalRef.current,
            contentLinkRef.current,
          ].filter(Boolean);

          gsap.killTweensOf(parts);
          if (operationalLineRef.current) gsap.killTweensOf(operationalLineRef.current);
          if (operationalPointsRef.current) {
            gsap.killTweensOf(operationalPointsRef.current.querySelectorAll('[data-op-point]'));
          }

          gsap.fromTo(
            parts,
            { y: fast ? 14 : 20, opacity: 0, filter: fast ? 'blur(0px)' : 'blur(2px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: fast ? 0.28 : 0.38,
              stagger: fast ? 0.035 : 0.055,
              ease: 'power3.out',
              overwrite: 'auto',
            },
          );

          if (operationalLineRef.current) {
            gsap.fromTo(
              operationalLineRef.current,
              { scaleX: 0, transformOrigin: 'left center' },
              {
                scaleX: 1,
                duration: fast ? 0.32 : 0.45,
                ease: 'power2.out',
                delay: fast ? 0.06 : 0.12,
                overwrite: 'auto',
              },
            );
          }
          if (operationalPointsRef.current) {
            gsap.fromTo(
              operationalPointsRef.current.querySelectorAll('[data-op-point]'),
              { opacity: 0, y: 4 },
              {
                opacity: 1,
                y: 0,
                duration: fast ? 0.24 : 0.3,
                stagger: fast ? 0.04 : 0.06,
                delay: fast ? 0.08 : 0.14,
                ease: 'power2.out',
                overwrite: 'auto',
              },
            );
          }
        };

        const animateContentOut = (fast = false) => {
          if (reducedMotion) return gsap.timeline();
          const parts = [
            contentNumberRef.current,
            contentTitleRef.current,
            contentDescRef.current,
            contentKeywordsRef.current,
            contentOperationalRef.current,
            contentLinkRef.current,
          ].filter(Boolean);

          return gsap.timeline().to(parts, {
            y: fast ? -10 : -16,
            opacity: 0,
            filter: fast ? 'blur(0px)' : 'blur(2px)',
            duration: fast ? 0.16 : 0.22,
            stagger: fast ? 0.02 : 0.03,
            ease: 'power2.in',
            overwrite: 'auto',
          });
        };

        const transitionToIndex = (nextIndex: number, options?: { fast?: boolean }) => {
          if (nextIndex === activeIndexRef.current) return;

          const fast = options?.fast ?? false;
          transitionTlRef.current?.kill();
          gsap.killTweensOf([
            contentNumberRef.current,
            contentTitleRef.current,
            contentDescRef.current,
            contentKeywordsRef.current,
            contentOperationalRef.current,
            contentLinkRef.current,
          ]);

          const prevIndex = activeIndexRef.current;
          isTransitioningRef.current = true;

          const completeSwap = () => {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
            if (fast) animateImagesFast(prevIndex, nextIndex);
            else animateImages(prevIndex, nextIndex);
            requestAnimationFrame(() => {
              animateContentIn(fast);
              isTransitioningRef.current = false;
            });
          };

          if (reducedMotion) {
            completeSwap();
            return;
          }

          if (fast) {
            completeSwap();
            return;
          }

          transitionTlRef.current = gsap.timeline().add(animateContentOut(false)).call(completeSwap);
        };

        if (reducedMotion) {
          gsap.set(contentParts, { opacity: 1, y: 0, filter: 'blur(0px)' });
          return;
        }

        gsap.set(contentParts, { opacity: 1, y: 0, filter: 'blur(0px)' });
        if (operationalLineRef.current) gsap.set(operationalLineRef.current, { scaleX: 1 });

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
          ScrollTrigger.create({
            trigger: pinRoot,
            start: `top top+=${HEADER_OFFSET}`,
            end: () => `+=${window.innerHeight * SCROLL_VH_FACTOR}`,
            pin: stage,
            pinSpacing: true,
            scrub: 0.15,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                SERVICE_COUNT - 1,
                Math.floor(self.progress * SERVICE_COUNT),
              );
              if (nextIndex !== activeIndexRef.current) {
                transitionToIndex(nextIndex, { fast: true });
              }
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#fafaf8] text-[#111111] py-16 lg:py-20 scroll-mt-24"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 lg:mb-12">
          <div ref={introLeftRef} className="lg:col-span-5 xl:col-span-4">
            <p className="text-xs md:text-sm font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-5">
              What We Engineer
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-md">
              We design intelligent software, connected enterprise systems, and modern digital platforms
              around the way organizations actually operate.
            </p>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <h2
              ref={introRightRef}
              className="font-display font-extrabold text-[1.85rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.1] tracking-tight text-[#111111] text-balance max-w-4xl"
            >
              Technology built around complex business operations.
            </h2>
          </div>
        </div>

        {/* Desktop: pinned master-detail stage */}
        <div ref={pinRootRef} className="hidden lg:block">
          <div
            ref={stageRef}
            className="grid grid-cols-[minmax(0,55%)_minmax(0,45%)] gap-x-8 xl:gap-x-10 min-h-[680px] h-[calc(100vh-90px)] max-h-[850px] bg-[#fafaf8]"
          >
            {/* Image column */}
            <div className="relative flex flex-col justify-center min-h-0 py-1">
              <div className="relative flex-1 min-h-0 border border-neutral-200/90 bg-white p-2">
                <div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-[16px] bg-neutral-100">
                  {capabilities.map((item, index) => (
                    <div
                      key={item.id}
                      ref={setVisualLayerRef(index)}
                      className={`absolute inset-0 overflow-hidden rounded-[16px] bg-neutral-200 transition-opacity duration-300 ${
                        activeIndex === index ? 'opacity-100 z-[2]' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      aria-hidden={activeIndex !== index}
                    >
                      <CapabilityImage cap={item} priority={index === 0} />
                      <div className="absolute inset-0 border border-black/[0.06] pointer-events-none rounded-[16px]" />
                    </div>
                  ))}
                  <span className="absolute top-4 left-4 z-20 text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600 bg-white/95 px-2 py-1 border border-neutral-200">
                    {cap.label}
                  </span>
                  <p className="absolute bottom-4 left-4 right-4 z-20 text-xs text-neutral-600 bg-white/95 px-3 py-2 border border-neutral-200/80 leading-relaxed max-w-md">
                    {cap.caption}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-semibold tabular-nums text-[#111111]">
                  {progressLabel}
                </span>
                <div className="flex items-center gap-1.5 flex-1 max-w-[280px] justify-end">
                  {capabilities.map((_, i) => (
                    <span
                      key={i}
                      className={`h-0.5 transition-all duration-300 ${
                        i <= activeIndex ? 'bg-[#df012a]' : 'bg-neutral-200'
                      } ${i === activeIndex ? 'flex-[2]' : 'flex-1'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content column — single active slot, vertically centered */}
            <div className="relative flex items-center min-h-0 border-l border-neutral-200/80 pl-8 xl:pl-10">
              <div className="relative z-10 w-full max-w-lg py-4">
                <div className="w-px h-8 bg-[#df012a] mb-5" aria-hidden="true" />

                <p
                  ref={contentNumberRef}
                  className="font-mono text-sm font-bold tracking-wider text-[#df012a] mb-3"
                >
                  {cap.id}
                </p>
                <h3
                  ref={contentTitleRef}
                  className="font-display font-extrabold text-[1.65rem] xl:text-[2rem] leading-tight text-[#111111] mb-4"
                >
                  {cap.title}
                </h3>
                <p
                  ref={contentDescRef}
                  className="text-base xl:text-lg text-neutral-600 leading-relaxed mb-5"
                >
                  {cap.desc}
                </p>
                <ul ref={contentKeywordsRef} className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
                  {cap.keywords.map((word) => (
                    <li key={word} className="text-xs font-mono uppercase tracking-[0.12em] text-neutral-500">
                      {word}
                    </li>
                  ))}
                </ul>

                <div ref={contentOperationalRef}>
                  <OperationalFocusTrack
                    points={cap.operationalFocus}
                    lineRef={operationalLineRef}
                    pointsRef={operationalPointsRef}
                    animateLine
                  />
                </div>

                <a
                  ref={contentLinkRef}
                  href="#contact"
                  className="group inline-flex items-center gap-3 mt-8 text-[13px] font-bold uppercase tracking-[0.14em] text-[#111111] hover:text-[#df012a] transition-colors"
                >
                  Discuss this capability
                  <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-[#df012a] transition-colors">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & tablet: document flow */}
        <div className="lg:hidden space-y-14 md:space-y-16">
          {capabilities.map((item) => (
            <article key={item.id} className="border-t border-neutral-200/80 pt-8">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[14px] border border-neutral-200 bg-neutral-100 mb-7">
                <CapabilityImage cap={item} />
                <div className="absolute inset-0 border border-black/[0.05] pointer-events-none rounded-[14px]" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-600 bg-white/95 px-2 py-1 border border-neutral-200">
                  {item.label}
                </span>
              </div>
              <p className="font-mono text-sm font-bold tracking-wider text-[#df012a] mb-3">{item.id}</p>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[#111111] mb-4 leading-tight max-w-xl">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-5 max-w-xl">{item.desc}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
                {item.keywords.map((word) => (
                  <li key={word} className="text-xs font-mono uppercase tracking-[0.12em] text-neutral-500">
                    {word}
                  </li>
                ))}
              </ul>
              <OperationalFocusStatic points={item.operationalFocus} />
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 mt-8 text-[13px] font-bold uppercase tracking-[0.14em] text-[#111111] hover:text-[#df012a] transition-colors"
              >
                Discuss this capability
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-[#df012a] transition-colors">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </span>
              </a>
              <p className="mt-5 text-xs text-neutral-500 leading-relaxed">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
