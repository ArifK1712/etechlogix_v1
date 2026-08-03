import { useRef, type ReactElement } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DeliveryStage {
  id: string;
  title: string;
  description: string;
  Illustration: () => ReactElement;
}

const W = 'rgba(255,255,255,0.28)';
const W2 = 'rgba(255,255,255,0.48)';
const R = '#df012a';
const sw = { hair: '1.75', mid: '2', accent: '2.25', accentStrong: '2.5' };

const STAGE_COUNT = 5;
const HEADER_OFFSET = 96;

/** Desktop pin scroll distance from card/track height (not viewport multiples). */
function getPinScrollDistance(trackEl: HTMLElement, cards: HTMLElement[]) {
  const cardHeight = cards[0]?.offsetHeight ?? 420;
  const trackHeight = trackEl.offsetHeight || cardHeight;
  const base = Math.max(cardHeight, trackHeight * 0.72);
  return Math.round(base * 0.36 * STAGE_COUNT);
}

function UnderstandIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true" fill="none">
      <path data-draw d="M32 48 H88 M32 88 H72 M32 128 H96" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M32 48 L160 100 M72 88 L160 100 M96 128 L160 100" stroke={W} strokeWidth={sw.hair} />
      <circle data-draw cx="32" cy="48" r="4" stroke={W2} strokeWidth={sw.hair} />
      <circle data-draw cx="32" cy="88" r="4" stroke={W2} strokeWidth={sw.hair} />
      <circle data-draw cx="32" cy="128" r="4" stroke={W2} strokeWidth={sw.hair} />
      <path
        data-draw
        data-red-process
        d="M160 100 C200 100, 220 72, 260 72 S300 100, 288 140"
        stroke={R}
        strokeWidth={sw.accent}
      />
      <path data-draw d="M288 140 H296" stroke={W2} strokeWidth={sw.hair} />
      <rect data-hover-detail x="248" y="56" width="56" height="36" rx="2" stroke={W} strokeWidth={sw.hair} opacity="0" />
      <path
        data-hover-detail
        d="M256 68 H288 M256 78 H280 M256 88 H284"
        stroke={W2}
        strokeWidth={sw.hair}
        opacity="0"
      />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true" fill="none">
      <path data-draw data-red-process d="M160 36 V164" stroke={R} strokeWidth={sw.accent} />
      <path data-draw d="M160 36 C120 56, 100 80, 88 108" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M160 36 C200 56, 220 80, 232 108" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M64 120 H256" stroke={W2} strokeWidth={sw.hair} />
      <path data-draw d="M80 144 H240" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M96 168 H224" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M88 108 V168 M232 108 V168" stroke={W} strokeWidth={sw.hair} strokeDasharray="3 4" />
      <path data-hover-detail d="M112 132 H208 M112 156 H192" stroke={R} strokeWidth={sw.hair} opacity="0" />
    </svg>
  );
}

function BuildIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true" fill="none">
      <rect data-draw x="48" y="56" width="56" height="40" rx="2" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="132" y="72" width="56" height="40" rx="2" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="216" y="48" width="56" height="40" rx="2" stroke={W} strokeWidth={sw.hair} />
      <path data-draw d="M104 76 L132 92 M188 92 L216 68" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="96" y="112" width="128" height="72" rx="3" stroke={W2} strokeWidth={sw.mid} />
      <path data-draw data-red-process d="M112 128 H208 M112 144 H192 M112 160 H176" stroke={R} strokeWidth={sw.mid} />
      <path data-hover-detail d="M112 176 H160" stroke={R} strokeWidth={sw.accent} opacity="0" />
      <circle data-hover-detail cx="168" cy="176" r="3" fill={R} opacity="0" />
    </svg>
  );
}

function LaunchIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true" fill="none">
      <rect data-draw x="112" y="64" width="96" height="72" rx="3" stroke={W2} strokeWidth={sw.mid} />
      <path data-draw data-red-process d="M160 136 V172" stroke={R} strokeWidth={sw.accent} />
      <path data-draw d="M160 172 H96 M160 172 H224" stroke={W} strokeWidth={sw.hair} />
      <circle data-draw cx="96" cy="172" r="6" stroke={W2} strokeWidth={sw.hair} />
      <circle data-draw cx="224" cy="172" r="6" stroke={W2} strokeWidth={sw.hair} />
      <path data-draw d="M96 172 V188 M224 172 V188" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="72" y="188" width="48" height="8" rx="1" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="200" y="188" width="48" height="8" rx="1" stroke={W} strokeWidth={sw.hair} />
      <path
        data-hover-detail
        d="M128 88 H192 M128 100 H184 M128 112 H176"
        stroke={R}
        strokeWidth={sw.hair}
        opacity="0"
      />
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" aria-hidden="true" fill="none">
      <rect data-draw x="128" y="72" width="64" height="56" rx="2" stroke={W2} strokeWidth={sw.mid} />
      <path data-draw data-red-process d="M160 128 V148" stroke={R} strokeWidth={sw.accent} />
      <path data-draw d="M96 148 H224" stroke={W2} strokeWidth={sw.hair} />
      <path data-draw d="M96 148 L72 168 M160 148 L160 168 M224 148 L248 168" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="56" y="168" width="32" height="24" rx="2" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="144" y="168" width="32" height="24" rx="2" stroke={W} strokeWidth={sw.hair} />
      <rect data-draw x="232" y="168" width="32" height="24" rx="2" stroke={W} strokeWidth={sw.hair} />
      <path data-hover-detail d="M64 176 H80 M152 176 H168 M240 176 H256" stroke={R} strokeWidth={sw.mid} opacity="0" />
    </svg>
  );
}

const stages: DeliveryStage[] = [
  {
    id: '01',
    title: 'Understand the Operation',
    description:
      'Map users, workflows, business rules, systems, risks, and expected outcomes.',
    Illustration: UnderstandIllustration,
  },
  {
    id: '02',
    title: 'Design the Solution',
    description:
      'Define the architecture, experience, integrations, data flow, security, and delivery roadmap.',
    Illustration: DesignIllustration,
  },
  {
    id: '03',
    title: 'Build and Validate',
    description:
      'Develop working functionality in focused releases and validate it against real operational scenarios.',
    Illustration: BuildIllustration,
  },
  {
    id: '04',
    title: 'Integrate and Launch',
    description:
      'Connect enterprise systems, migrate data, test critical workflows, and deploy safely.',
    Illustration: LaunchIllustration,
  },
  {
    id: '05',
    title: 'Improve and Scale',
    description:
      'Monitor adoption, automate additional workflows, improve performance, and expand capabilities.',
    Illustration: ScaleIllustration,
  },
];

function prepareDrawPaths(card: HTMLElement) {
  card.querySelectorAll<SVGElement>('[data-draw]').forEach((el) => {
    if (el instanceof SVGGeometryElement && typeof el.getTotalLength === 'function') {
      const len = el.getTotalLength() || 120;
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    } else if (el.tagName === 'circle') {
      const r = Number(el.getAttribute('r') || 4);
      const len = 2 * Math.PI * r;
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    } else if (el.tagName === 'rect') {
      const w = Number(el.getAttribute('width') || 40);
      const h = Number(el.getAttribute('height') || 40);
      const len = 2 * (w + h);
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    }
  });

  const redEl = card.querySelector<SVGPathElement>('[data-red-process]');
  if (redEl?.getTotalLength) {
    const len = redEl.getTotalLength();
    redEl.style.strokeDasharray = `${len}`;
    redEl.style.strokeDashoffset = `${len}`;
  }
}

function drawCardIllustration(card: HTMLElement) {
  const drawEls = card.querySelectorAll('[data-draw]');
  const redEl = card.querySelector('[data-red-process]');
  gsap.to(drawEls, {
    strokeDashoffset: 0,
    duration: 0.55,
    stagger: 0.035,
    ease: 'power2.out',
    overwrite: 'auto',
  });
  if (redEl) {
    gsap.to(redEl, {
      strokeDashoffset: 0,
      duration: 0.45,
      delay: 0.18,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });
  }
}

function resetCardIllustration(card: HTMLElement) {
  prepareDrawPaths(card);
}

function completeCardIllustration(card: HTMLElement) {
  card.querySelectorAll<SVGElement>('[data-draw], [data-red-process]').forEach((el) => {
    if (el instanceof SVGGeometryElement || el.tagName === 'circle' || el.tagName === 'rect') {
      gsap.set(el, { strokeDashoffset: 0, opacity: 1 });
    }
  });
}

export default function HowWeDeliverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContentRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const processFillRef = useRef<HTMLDivElement>(null);
  const processNodeRef = useRef<HTMLDivElement>(null);
  const progressIdRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileLineFillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pinContent = pinContentRef.current;
      const pinWrap = pinWrapRef.current;
      const track = trackRef.current;
      if (!section || !pinContent || !pinWrap || !track) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const cards = gsap.utils.toArray<HTMLElement>('[data-stage-card]', track);
      cards.forEach((card) => prepareDrawPaths(card));

      const hoverHandlers: { card: HTMLElement; onEnter: () => void; onLeave: () => void }[] = [];
      let lastDrawnStage = -1;

      const applyStageVisualState = (activeIndex: number, lineProgress: number) => {
        cards.forEach((card, i) => {
          const title = card.querySelector<HTMLElement>('[data-stage-title]');
          const desc = card.querySelector<HTMLElement>('[data-stage-desc]');
          const indicator = card.querySelector<HTMLElement>('[data-stage-complete]');
          const illustration = card.querySelector<HTMLElement>('[data-stage-illustration]');

          const isCompleted = i < activeIndex;
          const isActive = i === activeIndex;
          const isUpcoming = i > activeIndex;

          let opacity = 0.38;
          let scale = 0.98;
          let y = 0;
          let borderColor = 'rgba(255, 255, 255, 0.08)';

          if (isCompleted) {
            opacity = 0.85;
            scale = 1;
            y = 0;
            borderColor = 'rgba(223, 1, 42, 0.22)';
          } else if (isActive) {
            opacity = 1;
            scale = 1;
            y = -13;
            borderColor = 'rgba(223, 1, 42, 0.72)';
          } else if (isUpcoming) {
            opacity = 0.38;
            scale = 0.98;
            y = 0;
            borderColor = 'rgba(255, 255, 255, 0.08)';
          }

          gsap.set(card, {
            opacity,
            scale,
            y,
            transformOrigin: 'center bottom',
            borderColor,
          });

          if (title) {
            gsap.set(title, {
              color: isActive
                ? '#ffffff'
                : isCompleted
                  ? 'rgba(245, 243, 239, 0.92)'
                  : 'rgba(245, 243, 239, 0.42)',
            });
          }

          if (desc) {
            gsap.set(desc, {
              color: isActive
                ? 'rgba(212, 212, 212, 1)'
                : isCompleted
                  ? 'rgba(163, 163, 163, 0.95)'
                  : 'rgba(115, 115, 115, 0.55)',
            });
          }

          if (indicator) {
            gsap.set(indicator, {
              opacity: isCompleted ? 1 : 0,
              scale: isCompleted ? 1 : 0.6,
            });
          }

          if (illustration) {
            gsap.set(illustration, {
              opacity: isUpcoming ? 0.42 : isCompleted ? 0.95 : 1,
            });
          }

          if (isCompleted) {
            completeCardIllustration(card);
          } else if (isUpcoming) {
            resetCardIllustration(card);
          }
        });

        const processLineProgress =
          STAGE_COUNT > 1
            ? Math.max(lineProgress, activeIndex / (STAGE_COUNT - 1))
            : lineProgress;

        if (processFillRef.current) {
          gsap.set(processFillRef.current, {
            scaleX: processLineProgress,
            transformOrigin: 'left center',
          });
        }
        if (processNodeRef.current && processLineRef.current) {
          const lineW = processLineRef.current.offsetWidth;
          const nodeX = processLineProgress * lineW;
          gsap.set(processNodeRef.current, { x: nodeX, y: -3 });
        }
        if (progressIdRef.current) {
          progressIdRef.current.textContent = stages[activeIndex]?.id ?? '01';
        }
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: processLineProgress,
            transformOrigin: 'left center',
          });
        }

        pinWrap.querySelectorAll<HTMLElement>('[data-progress-point]').forEach((point, i) => {
          const isCompleted = i < activeIndex;
          const isActive = i === activeIndex;

          if (isCompleted) {
            gsap.set(point, {
              width: 8,
              height: 8,
              backgroundColor: '#df012a',
              borderColor: '#df012a',
              boxShadow: 'none',
            });
          } else if (isActive) {
            gsap.set(point, {
              width: 10,
              height: 10,
              backgroundColor: '#df012a',
              borderColor: '#df012a',
              boxShadow: '0 0 0 3px rgba(223, 1, 42, 0.2)',
            });
          } else {
            gsap.set(point, {
              width: 8,
              height: 8,
              backgroundColor: '#141414',
              borderColor: 'rgba(115, 115, 115, 0.55)',
              boxShadow: 'none',
            });
          }
        });

        if (activeIndex !== lastDrawnStage) {
          drawCardIllustration(cards[activeIndex]);
          lastDrawnStage = activeIndex;
        }
      };

      let removeResizeListener: (() => void) | null = null;

      const ctx = gsap.context(() => {
        if (reducedMotion) {
          gsap.set([introRef.current, pinContent, pinWrap, ...cards], { opacity: 1, y: 0, scale: 1 });
          cards.forEach((card) => {
            card.querySelectorAll('[data-draw]').forEach((el) => {
              gsap.set(el, { strokeDashoffset: 0 });
            });
            card.querySelectorAll('[data-red-process]').forEach((el) => {
              gsap.set(el, { strokeDashoffset: 0 });
            });
          });
          if (processFillRef.current) gsap.set(processFillRef.current, { scaleX: 1 });
          if (progressBarRef.current) gsap.set(progressBarRef.current, { scaleX: 1 });
          if (mobileLineFillRef.current) gsap.set(mobileLineFillRef.current, { scaleY: 1 });
          pinWrap.querySelectorAll<HTMLElement>('[data-progress-point]').forEach((point) => {
            gsap.set(point, {
              width: 8,
              height: 8,
              backgroundColor: '#df012a',
              borderColor: '#df012a',
              boxShadow: 'none',
            });
          });
          return;
        }

        const refreshScrollTriggers = () => {
          ScrollTrigger.refresh();
        };

        const onResize = () => refreshScrollTriggers();
        window.addEventListener('resize', onResize);
        removeResizeListener = () => window.removeEventListener('resize', onResize);
        window.addEventListener('load', refreshScrollTriggers, { once: true });

        const mediaImages = section.querySelectorAll('img');
        let imagesReady = 0;
        const onImageReady = () => {
          imagesReady += 1;
          if (imagesReady >= mediaImages.length) refreshScrollTriggers();
        };
        if (mediaImages.length === 0) {
          requestAnimationFrame(() => requestAnimationFrame(refreshScrollTriggers));
        } else {
          mediaImages.forEach((img) => {
            if (img.complete) onImageReady();
            else {
              img.addEventListener('load', onImageReady);
              img.addEventListener('error', onImageReady);
            }
          });
        }

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1280px)', () => {
          gsap.set(introRef.current, { opacity: 1, y: 0, clearProps: 'transform' });
          gsap.set(cards, { opacity: 0.38, scale: 0.98, y: 0 });

          const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: `top top+=${HEADER_OFFSET}`,
            end: () => `+=${getPinScrollDistance(track, cards)}`,
            pin: pinContent,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = Math.min(1, self.progress);
              const activeIndex = Math.min(STAGE_COUNT - 1, Math.floor(p * STAGE_COUNT));
              applyStageVisualState(activeIndex, p);
            },
            onEnter: () => {
              lastDrawnStage = -1;
              gsap.set(introRef.current, { opacity: 1, y: 0 });
              applyStageVisualState(0, 0);
            },
            onLeave: () => {
              applyStageVisualState(STAGE_COUNT - 1, 1);
            },
          });

          requestAnimationFrame(refreshScrollTriggers);

          return () => {
            pinTrigger.kill();
          };
        });

        mm.add('(max-width: 1279px)', () => {
          gsap.fromTo(
            introRef.current,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: section, start: 'top 82%', once: true },
            },
          );

          gsap.set(cards, { opacity: 1, scale: 1, y: 0, clearProps: 'borderColor' });

          cards.forEach((card, index) => {
            ScrollTrigger.create({
              trigger: card,
              start: 'top 82%',
              once: true,
              onEnter: () => {
                drawCardIllustration(card);
                if (mobileLineFillRef.current) {
                  gsap.to(mobileLineFillRef.current, {
                    scaleY: (index + 1) / STAGE_COUNT,
                    duration: 0.65,
                    ease: 'power2.inOut',
                    overwrite: 'auto',
                    transformOrigin: 'top center',
                  });
                }
                gsap.fromTo(
                  card,
                  { opacity: 0.55, y: 16 },
                  { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
                );
              },
            });

            const onEnter = () => {
              gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
              card.querySelectorAll('[data-hover-detail]').forEach((el) => {
                gsap.to(el, { opacity: 1, duration: 0.35, ease: 'power2.out' });
              });
            };
            const onLeave = () => {
              gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
              card.querySelectorAll('[data-hover-detail]').forEach((el) => {
                gsap.to(el, { opacity: 0, duration: 0.25, ease: 'power2.out' });
              });
            };
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            hoverHandlers.push({ card, onEnter, onLeave });
          });

          return () => {};
        });
      }, section);

      return () => {
        removeResizeListener?.();
        ctx.revert();
        hoverHandlers.forEach(({ card, onEnter, onLeave }) => {
          card.removeEventListener('mouseenter', onEnter);
          card.removeEventListener('mouseleave', onLeave);
        });
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="how-we-deliver"
      aria-labelledby="how-we-deliver-heading"
      className="relative w-full overflow-hidden bg-[#0c0c0c] text-[#f5f3ef] py-16 md:py-20 lg:py-24 border-t border-white/[0.06]"
    >
      <div className="relative w-full max-w-[1440px] mx-auto px-5 md:px-6">
        <div ref={pinContentRef} className="relative">
        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10 md:mb-12">
          <div className="lg:col-span-4 max-w-md">
            <p className="text-xs md:text-sm font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-5">
              HOW WE DELIVER
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-[1.65]">
              We combine business understanding, practical architecture, focused engineering, enterprise
              integration, and continuous improvement to deliver technology that works in real operations.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2
              id="how-we-deliver-heading"
              className="font-display font-extrabold text-[1.75rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] leading-[1.08] tracking-[-0.03em] text-[#f5f3ef] text-balance max-w-4xl"
            >
              From a complex business challenge to a production-ready solution.
            </h2>
          </div>
        </div>

        <div ref={pinWrapRef} className="relative xl:flex xl:flex-col xl:justify-center">
          <div
            className="hidden xl:flex items-center gap-4 mb-6 font-mono text-xs tracking-wider text-neutral-500"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="shrink-0 whitespace-nowrap">
              Active stage{' '}
              <span ref={progressIdRef} className="text-[#df012a] font-bold">
                01
              </span>
            </span>
            <div className="relative flex-1 min-w-0 h-5">
              <div
                className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10"
                aria-hidden="true"
              />
              <div
                ref={progressBarRef}
                className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#df012a] origin-left scale-x-0"
                aria-hidden="true"
              />
              {stages.map((stage, index) => (
                <div
                  key={`top-progress-${stage.id}`}
                  data-progress-point
                  aria-hidden="true"
                  className="absolute top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 box-border"
                  style={{ left: `${(index / (STAGE_COUNT - 1)) * 100}%` }}
                />
              ))}
            </div>
            <span className="shrink-0 whitespace-nowrap text-neutral-600">05 stages</span>
          </div>

          <div
            ref={processLineRef}
            className="hidden xl:block absolute left-0 right-0 top-[58%] h-px pointer-events-none z-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-white/[0.1]" />
            <div
              ref={processFillRef}
              className="absolute inset-0 bg-[#df012a] origin-left scale-x-0"
            />
            <div
              ref={processNodeRef}
              className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#df012a] ring-2 ring-[#0c0c0c]"
            />
          </div>

          <div className="xl:hidden absolute left-2 top-0 bottom-0 w-px pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-white/[0.08]" />
            <div
              ref={mobileLineFillRef}
              className="absolute inset-0 bg-[#df012a] origin-top scale-y-0"
            />
          </div>

          <div
            ref={trackRef}
            className="relative z-[1] flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:gap-5 xl:pb-10 pl-0 md:pl-0 xl:pl-0"
          >
            {stages.map((stage) => (
              <article
                key={stage.id}
                id={`deliver-${stage.id}`}
                data-stage-card
                tabIndex={0}
                className="group relative flex min-h-[420px] flex-col border border-white/[0.08] bg-[#141414] p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]/50 rounded-lg xl:flex-1 will-change-transform"
              >
                <span
                  data-stage-complete
                  className="absolute top-5 right-5 h-1.5 w-1.5 rounded-full bg-[#df012a] opacity-0 shadow-[0_0_0_3px_rgba(223,1,42,0.12)]"
                  aria-hidden="true"
                />
                <h3
                  data-stage-title
                  className="font-display font-bold text-xl leading-tight tracking-[-0.02em] text-[#f5f3ef] mb-3"
                >
                  {stage.title}
                </h3>

                <p
                  data-stage-desc
                  className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-4 flex-1"
                >
                  {stage.description}
                </p>

                <div
                  data-stage-illustration
                  className="relative mt-auto min-h-[160px] md:min-h-[180px] border-t border-white/[0.06] pt-5"
                >
                  <stage.Illustration />
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
