import { useRef, useState, useCallback, type KeyboardEvent, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';
const CASE_COUNT = 3;

interface CaseStudy {
  id: string;
  selectorTitle: string;
  selectorDescription: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcomeLead: string;
  outcomeRest: string;
  visualImage: string;
  visualAlt: string;
}

const cases: CaseStudy[] = [
  {
    id: '01',
    selectorTitle: 'Agentic AI Automation',
    selectorDescription: 'Intelligent workflows that understand, decide, and act.',
    category: 'Agentic AI & Workflow Automation',
    title: 'Automating complex workflows from intake to completion.',
    challenge:
      'Manual document processing, business rules, system updates, approvals, and exception handling required extensive manual coordination.',
    solution:
      'AI agents were engineered to understand information, execute business rules, update connected systems, and route exceptions for human review.',
    outcomeLead: 'Millions saved',
    outcomeRest: 'through reduced manual effort and faster workflow completion.',
    visualImage: '/images/workspace-panoramic.jpg',
    visualAlt: 'Enterprise operations workspace with monitors displaying workflow interfaces',
  },
  {
    id: '02',
    selectorTitle: 'Enterprise Event Technology',
    selectorDescription: 'Scalable platforms for events, attendees, and on-site operations.',
    category: 'Enterprise Event Technology',
    title: 'Connecting the complete event experience through one platform.',
    challenge:
      'Registration, payments, attendee engagement, meetings, scheduling, check-in, and reporting operated through disconnected processes.',
    solution:
      'A unified event platform connected organizer workflows, attendee experiences, mobile engagement, on-site operations, and reporting.',
    outcomeLead: 'Simplified event operations',
    outcomeRest: 'from registration and attendee engagement through on-site delivery and reporting.',
    visualImage: '/images/industry-retail.jpg',
    visualAlt: 'Professional conference environment with attendee operations and event technology',
  },
  {
    id: '03',
    selectorTitle: 'Enterprise Integration',
    selectorDescription: 'Connecting systems, data, and processes across the enterprise.',
    category: 'ERP, Distribution & Enterprise Integration',
    title: 'Connecting disconnected systems into one dependable operational flow.',
    challenge:
      'ERP, CRM, inventory, pricing, logistics, tax, payment, and custom platforms required duplicated data and manual coordination.',
    solution:
      'Secure APIs, middleware, synchronized data, and automated processes connected critical enterprise applications.',
    outcomeLead: 'Improved data accuracy',
    outcomeRest: 'with faster processing and better operational visibility.',
    visualImage: '/images/industry-infrastructure.jpg',
    visualAlt: 'Enterprise infrastructure and connected operational systems',
  },
];

function CaseImageVisual({
  imageSrc,
  imageAlt,
  priority = false,
}: {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 bg-[#f0f0ee]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={1200}
        height={800}
      />
    </div>
  );
}

function CaseVisualFrame({
  activeIndex,
  layerRefs,
}: {
  activeIndex: number;
  layerRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div className="relative w-full h-full min-h-0 bg-[#f0f0ee]">
      {[0, 1, 2].map((i) => (
        <div
          key={cases[i].id}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          className="absolute inset-0"
          aria-hidden={activeIndex !== i}
        >
          <CaseImageVisual
            imageSrc={cases[i].visualImage}
            imageAlt={cases[i].visualAlt}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}

function NarrativeContent({
  study,
  categoryRef,
  titleRef,
  challengeRef,
  solutionRef,
  outcomeRef,
  outcomeLineRef,
  linkRef,
  density = 'default',
}: {
  study: CaseStudy;
  categoryRef: RefObject<HTMLParagraphElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  challengeRef: RefObject<HTMLDivElement | null>;
  solutionRef: RefObject<HTMLDivElement | null>;
  outcomeRef: RefObject<HTMLDivElement | null>;
  outcomeLineRef: RefObject<HTMLDivElement | null>;
  linkRef: RefObject<HTMLAnchorElement | null>;
  density?: 'default' | 'stage';
}) {
  const stage = density === 'stage';
  return (
    <>
      <div className={`flex items-baseline gap-3 ${stage ? 'mb-1.5' : 'mb-2'}`}>
        <span className="font-mono text-sm font-bold text-[#df012a]">{study.id}</span>
        <p
          ref={categoryRef}
          className={`font-mono uppercase tracking-[0.16em] text-[#787774] leading-snug ${
            stage ? 'text-[9px] line-clamp-2' : 'text-[10px]'
          }`}
        >
          {study.category}
        </p>
      </div>
      <p
        className={`font-display font-extrabold tracking-[-0.02em] text-[#111111] ${
          stage ? 'text-xl md:text-2xl leading-tight mb-3' : 'text-xl md:text-2xl leading-tight mb-4'
        }`}
      >
        {study.selectorTitle}
      </p>
      <h3
        ref={titleRef}
        className={`font-display font-extrabold tracking-[-0.02em] text-[#111111] ${
          stage
            ? 'text-[1.35rem] lg:text-[1.5rem] leading-[1.15] mb-4 max-w-none'
            : 'text-[1.65rem] md:text-[2rem] lg:text-[2.15rem] leading-[1.12] mb-8 max-w-md'
        }`}
      >
        {study.title}
      </h3>
      <div
        ref={challengeRef}
        className={`border-b border-[#e5e7eb] ${stage ? 'pb-3 mb-3' : 'pb-6 mb-6'}`}
      >
        <p className={`font-mono uppercase tracking-[0.14em] text-[#787774] ${stage ? 'text-[9px] mb-1.5' : 'text-[10px] mb-2'}`}>
          Challenge
        </p>
        <p
          className={`text-[#2F3437] ${stage ? 'text-[13px] leading-[1.55]' : 'text-sm md:text-[15px] leading-[1.65]'}`}
        >
          {study.challenge}
        </p>
      </div>
      <div
        ref={solutionRef}
        className={`border-b border-[#e5e7eb] ${stage ? 'pb-3 mb-3' : 'pb-6 mb-6'}`}
      >
        <p className={`font-mono uppercase tracking-[0.14em] text-[#787774] ${stage ? 'text-[9px] mb-1.5' : 'text-[10px] mb-2'}`}>
          Solution
        </p>
        <p
          className={`text-[#2F3437] ${stage ? 'text-[13px] leading-[1.55]' : 'text-sm md:text-[15px] leading-[1.65]'}`}
        >
          {study.solution}
        </p>
      </div>
      <div ref={outcomeRef} className={stage ? 'mb-4' : 'mb-8'}>
        <p className={`font-mono uppercase tracking-[0.14em] text-[#787774] ${stage ? 'text-[9px] mb-1.5' : 'text-[10px] mb-2'}`}>
          Outcome
        </p>
        <div className="relative pt-1">
          <div ref={outcomeLineRef} className="absolute left-0 top-0 h-px w-16 bg-[#df012a] origin-left scale-x-0" />
          <p
            className={`font-display font-bold text-[#111111] leading-snug pt-2 ${
              stage ? 'text-base lg:text-lg' : 'text-xl md:text-2xl pt-3'
            }`}
          >
            <span className="text-[#df012a]">{study.outcomeLead}</span>{' '}
            <span className="font-semibold text-[#111111]">{study.outcomeRest}</span>
          </p>
        </div>
      </div>
      <a
        ref={linkRef}
        href="#contact"
        className={`group inline-flex items-center gap-2.5 font-bold uppercase tracking-[0.14em] text-[#111111] hover:text-[#df012a] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-sm ${
          stage ? 'text-[10px]' : 'text-[11px] md:text-xs gap-3'
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        Explore this solution
        <span
          className={`flex items-center justify-center rounded-full ring-1 ring-[#e5e7eb] bg-white group-hover:ring-[#df012a]/50 transition-[transform,ring-color] duration-500 group-hover:translate-x-0.5 ${
            stage ? 'h-8 w-8' : 'h-9 w-9'
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5 text-[#df012a]" strokeWidth={1.5} aria-hidden />
        </span>
      </a>
    </>
  );
}

function MobileCaseBlock({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="pt-12 first:pt-0 border-t border-[#e5e7eb] first:border-t-0">
      <p className="font-mono text-sm font-bold text-[#df012a] mb-2">{study.id}</p>
      <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#787774] mb-2">{study.category}</p>
      <p className="font-display font-extrabold text-xl md:text-2xl tracking-[-0.02em] text-[#111111] mb-4">{study.selectorTitle}</p>
      <h3 className="font-display font-extrabold text-xl leading-tight text-[#111111] mb-6">{study.title}</h3>
      <div className="space-y-6 mb-8">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#787774] mb-2">Challenge</p>
          <p className="text-sm text-[#2F3437] leading-relaxed">{study.challenge}</p>
        </div>
        <div className="border-t border-[#e5e7eb] pt-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#787774] mb-2">Solution</p>
          <p className="text-sm text-[#2F3437] leading-relaxed">{study.solution}</p>
        </div>
        <div className="border-t border-[#e5e7eb] pt-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#787774] mb-2">Outcome</p>
          <p className="text-lg font-display font-bold">
            <span className="text-[#df012a]">{study.outcomeLead}</span> {study.outcomeRest}
          </p>
        </div>
      </div>
      <div className="relative rounded-[14px] overflow-hidden ring-1 ring-[#e5e7eb] aspect-[16/10] max-h-[220px] mb-8">
        <CaseImageVisual imageSrc={study.visualImage} imageAlt={study.visualAlt} priority={index === 0} />
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#111111]"
      >
        Explore this solution
        <ArrowRight className="w-4 h-4 text-[#df012a]" strokeWidth={1.5} aria-hidden />
      </a>
    </article>
  );
}

export default function SelectedClientOutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introLeftRef = useRef<HTMLDivElement>(null);
  const introRightRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageContentRef = useRef<HTMLDivElement>(null);
  const stageImageRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const visualLayerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categoryRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const outcomeLineRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const transitionRef = useRef<gsap.core.Timeline | null>(null);
  const isTransitioningRef = useRef(false);

  const study = cases[activeIndex];

  const animateVisualSwap = useCallback((from: number, to: number, useClip: boolean) => {
    const outgoing = visualLayerRefs.current[from];
    const incoming = visualLayerRefs.current[to];
    if (!incoming) return;

    visualLayerRefs.current.forEach((layer, i) => {
      if (layer && i !== to && i !== from) gsap.set(layer, { opacity: 0, zIndex: 0 });
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !useClip || from === to) {
      visualLayerRefs.current.forEach((layer, i) => {
        if (!layer) return;
        gsap.set(layer, {
          opacity: i === to ? 1 : 0,
          scale: 1,
          zIndex: i === to ? 2 : 0,
        });
      });
      return;
    }

    gsap.set(incoming, { opacity: 0, scale: 1, zIndex: 3 });
    gsap
      .timeline({ defaults: { ease: 'power2.inOut', overwrite: 'auto' } })
      .to(outgoing, { opacity: 0, duration: 0.4 }, 0)
      .to(incoming, { opacity: 1, duration: 0.45 }, 0.12)
      .set(outgoing, { zIndex: 0 }, 0.5);
  }, []);

  const animateContentIn = useCallback(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parts = [
      categoryRef.current,
      titleRef.current,
      challengeRef.current,
      solutionRef.current,
      outcomeRef.current,
      linkRef.current,
    ].filter(Boolean);

    if (reduced) {
      gsap.set(parts, { opacity: 1, y: 0, filter: 'blur(0px)' });
      gsap.set(titleRef.current, { clipPath: 'inset(0 0 0 0)' });
      gsap.set(outcomeLineRef.current, { scaleX: 1 });
      return;
    }

    gsap.set(titleRef.current, { clipPath: 'inset(0 0 100% 0)' });
    gsap.set(outcomeLineRef.current, { scaleX: 0, transformOrigin: 'left center' });

    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(categoryRef.current, { opacity: 0, y: 20, filter: 'blur(3px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 })
      .fromTo(
        titleRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.55 },
        '-=0.25',
      )
      .fromTo(
        [challengeRef.current, solutionRef.current],
        { opacity: 0, y: 18, filter: 'blur(3px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.45, stagger: 0.07 },
        '-=0.2',
      )
      .fromTo(outcomeRef.current, { opacity: 0, y: 20, filter: 'blur(3px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 }, '-=0.15')
      .to(outcomeLineRef.current, { scaleX: 1, duration: 0.45, ease: 'power2.out' }, '-=0.2')
      .fromTo(linkRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1');
  }, []);

  const animateContentOut = useCallback(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return gsap.timeline();
    return gsap.timeline().to(
      [categoryRef.current, titleRef.current, challengeRef.current, solutionRef.current, outcomeRef.current],
      { opacity: 0, y: -18, filter: 'blur(3px)', duration: 0.28, stagger: 0.04, ease: 'power2.in' },
    );
  }, []);

  const selectCase = useCallback(
    (index: number) => {
      if (index === activeIndexRef.current || isTransitioningRef.current) return;
      transitionRef.current?.kill();
      const from = activeIndexRef.current;
      const useClip = typeof window !== 'undefined' && window.innerWidth >= 768;

      isTransitioningRef.current = true;

      const finish = () => {
        activeIndexRef.current = index;
        setActiveIndex(index);
        animateVisualSwap(from, index, useClip);
        requestAnimationFrame(() => {
          animateContentIn();
          isTransitioningRef.current = false;
          ScrollTrigger.refresh();
        });
      };

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        finish();
        return;
      }

      transitionRef.current = gsap.timeline().add(animateContentOut()).call(finish);
    },
    [animateContentIn, animateContentOut, animateVisualSwap],
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const ctx = gsap.context(() => {
        visualLayerRefs.current.forEach((layer, i) => {
          if (layer)
            gsap.set(layer, {
              opacity: i === 0 ? 1 : 0,
              scale: 1,
              zIndex: i === 0 ? 2 : 0,
            });
        });

        if (reduced) {
          gsap.set([stageContentRef.current, stageImageRef.current].filter(Boolean), { opacity: 1, x: 0 });
          return;
        }

        gsap.fromTo(
          [introLeftRef.current, introRightRef.current],
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 82%', once: true, invalidateOnRefresh: true },
          },
        );

        const stage = stageRef.current;
        const stageContent = stageContentRef.current;
        const stageImage = stageImageRef.current;

        if (stage && stageContent && stageImage) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stage,
                start: 'top 85%',
                once: true,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              stage,
              { clipPath: 'inset(0 0 4% 0)', opacity: 0.96 },
              { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.75, ease: 'power3.out' },
            )
            .fromTo(
              stageContent,
              { x: -36, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false },
              '-=0.45',
            )
            .fromTo(
              stageImage,
              { x: 36, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false },
              '-=0.55',
            );
        } else {
          gsap.set([stageContent, stageImage].filter(Boolean), { opacity: 1, x: 0 });
        }

        closingRef.current &&
          gsap.fromTo(
            closingRef.current,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: { trigger: closingRef.current, start: 'top 92%', once: true, invalidateOnRefresh: true },
            },
          );

        visualLayerRefs.current.forEach((layer, i) => {
          if (layer)
            gsap.set(layer, {
              opacity: i === 0 ? 1 : 0,
              scale: 1,
              zIndex: i === 0 ? 2 : 0,
            });
        });

        animateContentIn();

        const img = section.querySelector('img');
        const refresh = () => ScrollTrigger.refresh();
        if (img && !img.complete) {
          img.addEventListener('load', refresh);
          img.addEventListener('error', refresh);
        } else refresh();
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [animateContentIn] },
  );

  const handleStageKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      selectCase(Math.min(CASE_COUNT - 1, activeIndex + 1));
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      selectCase(Math.max(0, activeIndex - 1));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="client-outcomes"
      aria-labelledby="client-outcomes-heading"
      className="w-full bg-[#fafaf8] text-[#111111] py-[72px] md:py-24 lg:py-[120px] border-t border-[#e5e7eb]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 lg:mb-14">
          <div ref={introLeftRef} className="lg:col-span-4 max-w-[360px]">
            <p className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-5">
              Selected Client Outcomes
            </p>
            <p className="text-base text-[#787774] leading-[1.65]">
              Explore how intelligent automation, connected platforms, and custom enterprise software solve
              real operational challenges.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2
              ref={introRightRef}
              id="client-outcomes-heading"
              className="font-display font-extrabold text-[1.85rem] sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-balance max-w-[800px]"
            >
              Complex operations transformed into dependable digital experiences.
            </h2>
          </div>
        </div>

        <div className="hidden md:block">
          <div
            ref={stageRef}
            role="group"
            aria-roledescription="carousel"
            aria-label="Client outcome case studies"
            tabIndex={0}
            onKeyDown={handleStageKeyDown}
            className="rounded-[18px] ring-1 ring-[#e5e7eb] bg-white overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2"
          >
            <div className="flex flex-col lg:flex-row lg:items-stretch">
            <div
              ref={stageContentRef}
              className="relative lg:w-1/2 flex flex-col px-7 py-7 md:px-9 md:py-8 lg:px-10 lg:py-9 border-b lg:border-b-0 lg:border-r border-[#e5e7eb]"
            >
              <div className="flex items-center justify-end gap-1.5 mb-5 lg:absolute lg:top-7 lg:right-7 lg:mb-0 z-10">
                <button
                  type="button"
                  aria-label="Previous case study"
                  disabled={activeIndex === 0}
                  onClick={() => selectCase(activeIndex - 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-[#e5e7eb] text-[#111111] disabled:opacity-35 hover:ring-[#111111]/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Next case study"
                  disabled={activeIndex === CASE_COUNT - 1}
                  onClick={() => selectCase(activeIndex + 1)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 text-[#111111] disabled:opacity-35 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${
                    activeIndex < CASE_COUNT - 1 ? 'ring-[#df012a] text-[#df012a]' : 'ring-[#e5e7eb]'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 text-[#df012a]" strokeWidth={1.5} aria-hidden />
                </button>
              </div>
              <div className="lg:pr-2 lg:pt-11">
                <NarrativeContent
                  study={study}
                  categoryRef={categoryRef}
                  titleRef={titleRef}
                  challengeRef={challengeRef}
                  solutionRef={solutionRef}
                  outcomeRef={outcomeRef}
                  outcomeLineRef={outcomeLineRef}
                  linkRef={linkRef}
                  density="stage"
                />
              </div>
            </div>
            <div ref={stageImageRef} className="lg:w-1/2 relative min-h-[200px] md:min-h-[240px] lg:min-h-0">
              <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:absolute lg:inset-0 lg:h-full">
                <CaseVisualFrame activeIndex={activeIndex} layerRefs={visualLayerRefs} />
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-12">
          {cases.map((c, i) => (
            <MobileCaseBlock key={c.id} study={c} index={i} />
          ))}
        </div>

        <div
          ref={closingRef}
          className="mt-14 lg:mt-16 pt-8 border-t border-[#e5e7eb] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
        >
          <p className="text-base text-[#787774] leading-relaxed max-w-md">
            Every engagement begins with a real operational challenge.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em] text-[#111111] hover:text-[#df012a] transition-colors duration-500 w-fit"
            style={{ transitionTimingFunction: EASE }}
          >
            View more work
            <span className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-[#e5e7eb] group-hover:ring-[#df012a]/40 transition-colors">
              <ArrowRight className="w-4 h-4 text-[#df012a]" strokeWidth={1.5} aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
