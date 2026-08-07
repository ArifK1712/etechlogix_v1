import { useRef, useState, useCallback, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_DELAY_MS = 4500;

interface Industry {
  id: string;
  title: string;
  summary: string;
  label: string;
  operationalFocus: [string, string, string];
  icon: 'events' | 'erp' | 'healthcare' | 'integrations' | 'operations' | 'finance' | 'manufacturing' | 'retail';
}

const industries: Industry[] = [
  {
    id: '01',
    title: 'Events & Conferences',
    summary:
      'Registration, attendee engagement, and on-site operations for conferences and large-scale events.',
    label: 'Events & conferences',
    icon: 'events',
    operationalFocus: ['Registration and ticketing', 'Attendee management', 'On-site check-in'],
  },
  {
    id: '02',
    title: 'ERP & Distribution',
    summary:
      'Inventory, orders, pricing, and logistics connected across warehouses, distributors, and supply chain partners.',
    label: 'ERP & distribution',
    icon: 'erp',
    operationalFocus: ['Inventory and warehousing', 'Order workflows', 'Logistics coordination'],
  },
  {
    id: '03',
    title: 'Healthcare',
    summary:
      'Secure clinical and administrative workflows with integrated systems built for compliance and reliability.',
    label: 'Healthcare',
    icon: 'healthcare',
    operationalFocus: ['Document workflows', 'Patient operations', 'Secure integrations'],
  },
  {
    id: '04',
    title: 'Enterprise Platforms & Integrations',
    summary:
      'APIs and middleware that connect CRM, ERP, tax, payment, and custom platforms into one operation.',
    label: 'Platforms & integrations',
    icon: 'integrations',
    operationalFocus: ['Enterprise APIs', 'Data synchronization', 'CRM and ERP connections'],
  },
  {
    id: '05',
    title: 'Enterprise Operations',
    summary:
      'Dashboards and cross-functional workflows that give leadership and ops teams live visibility into performance.',
    label: 'Enterprise operations',
    icon: 'operations',
    operationalFocus: ['Operational dashboards', 'Cross-team workflows', 'Executive reporting'],
  },
  {
    id: '06',
    title: 'Financial Services & Payments',
    summary:
      'Billing, tax, reconciliation, and payment flows integrated with the systems finance teams depend on.',
    label: 'Finance & payments',
    icon: 'finance',
    operationalFocus: ['Payment integrations', 'Tax and compliance', 'Reconciliation reporting'],
  },
  {
    id: '07',
    title: 'Manufacturing & Supply Chain',
    summary:
      'Production, procurement, and supplier coordination on connected systems from plant floor to distribution.',
    label: 'Manufacturing',
    icon: 'manufacturing',
    operationalFocus: ['Production planning', 'Supplier portals', 'Quality and traceability'],
  },
  {
    id: '08',
    title: 'Retail & Commerce',
    summary:
      'Catalog, orders, fulfillment, and customer experiences synchronized across channels and back-office systems.',
    label: 'Retail & commerce',
    icon: 'retail',
    operationalFocus: ['Catalog and pricing', 'Order fulfillment', 'Channel inventory sync'],
  },
];

const INDUSTRY_COUNT = industries.length;

function IndustryIcon({ type }: { type: Industry['icon'] }) {
  const stroke = 'rgba(10,10,10,0.72)';
  const accent = '#df012a';
  const common = { fill: 'none', strokeWidth: 1.35, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    case 'events':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <rect x="8" y="12" width="32" height="28" rx="3" stroke={stroke} {...common} />
          <path d="M8 20h32" stroke={stroke} {...common} />
          <path d="M16 8v8M32 8v8" stroke={accent} {...common} />
          <circle cx="24" cy="30" r="4" stroke={accent} {...common} />
        </svg>
      );
    case 'erp':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <path d="M10 34V18l14-8 14 8v16" stroke={stroke} {...common} />
          <path d="M10 34h28M24 26v8" stroke={stroke} {...common} />
          <path d="M18 34v-6M30 34v-6" stroke={accent} {...common} />
        </svg>
      );
    case 'healthcare':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <path d="M24 8v32M8 24h32" stroke={accent} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="10" y="10" width="28" height="28" rx="6" stroke={stroke} {...common} />
        </svg>
      );
    case 'integrations':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <circle cx="24" cy="24" r="5" stroke={accent} {...common} />
          <circle cx="10" cy="14" r="3" stroke={stroke} {...common} />
          <circle cx="38" cy="14" r="3" stroke={stroke} {...common} />
          <circle cx="10" cy="34" r="3" stroke={stroke} {...common} />
          <circle cx="38" cy="34" r="3" stroke={stroke} {...common} />
          <path d="M13 16l8 6M35 16l-8 6M13 32l8-6M35 32l-8-6" stroke={stroke} {...common} />
        </svg>
      );
    case 'operations':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <rect x="8" y="10" width="32" height="22" rx="2" stroke={stroke} {...common} />
          <path d="M14 32v6M24 28v10M34 30v8" stroke={accent} {...common} />
          <path d="M14 18h8M14 24h12" stroke={stroke} {...common} />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <rect x="10" y="14" width="28" height="20" rx="3" stroke={stroke} {...common} />
          <path d="M10 22h28" stroke={stroke} {...common} />
          <circle cx="18" cy="30" r="2" stroke={accent} {...common} />
          <path d="M26 30h6" stroke={accent} {...common} />
        </svg>
      );
    case 'manufacturing':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <circle cx="24" cy="24" r="10" stroke={stroke} {...common} />
          <path d="M24 14v4M24 30v4M14 24h4M30 24h4" stroke={accent} {...common} />
          <circle cx="24" cy="24" r="3" stroke={accent} {...common} />
        </svg>
      );
    case 'retail':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <path d="M12 18h24l-2 22H14L12 18z" stroke={stroke} {...common} />
          <path d="M16 18c0-4 3-8 8-8s8 4 8 8" stroke={accent} {...common} />
        </svg>
      );
  }
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="group industry-slide-card flex h-full w-full min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-white p-6 transition-[border-color] duration-500 hover:border-[#df012a]/40 lg:p-7">
      <div className="mb-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f7f6f2] ring-1 ring-neutral-200/90">
          <IndustryIcon type={industry.icon} />
        </div>
      </div>
      <h3 className="font-display font-extrabold text-xl leading-tight text-[#0a0a0a] mb-3">
        {industry.title}
      </h3>
      <p className="type-body text-neutral-600 leading-snug mb-5">{industry.summary}</p>
      <ul className="mt-auto space-y-2.5">
        {industry.operationalFocus.map((label) => (
          <li
            key={label}
            className="flex gap-2 text-md text-neutral-600 leading-snug pl-3 border-l border-[#df012a]/35"
          >
            {label}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function IndustriesWeUnderstandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introLeftRef = useRef<HTMLDivElement>(null);
  const introRightRef = useRef<HTMLHeadingElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const [slideIndex, setSlideIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const autoplayPausedRef = useRef(false);

  const syncSwiperState = useCallback((swiper: SwiperInstance) => {
    setSlideIndex(swiper.snapIndex);
    setPageCount(Math.max(1, swiper.snapGrid.length));
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const goToSlide = useCallback((index: number) => {
    swiperRef.current?.slideTo(index);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    if (reducedMotion) {
      swiper.autoplay.stop();
      return;
    }
    if (!autoplayPausedRef.current) swiper.autoplay.start();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const swiper = swiperRef.current;
    if (!section || !swiper?.autoplay) return;

    const pause = () => {
      autoplayPausedRef.current = true;
      swiper.autoplay.stop();
    };
    const resume = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      autoplayPausedRef.current = false;
      swiper.autoplay.start();
    };

    section.addEventListener('focusin', pause);
    section.addEventListener('focusout', resume);

    return () => {
      section.removeEventListener('focusin', pause);
      section.removeEventListener('focusout', resume);
    };
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          [introLeftRef.current, introRightRef.current],
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 85%', once: true },
          },
        );
        gsap.fromTo(
          '.industries-swiper-wrap',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 90%', once: true },
          },
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  const canPrev = !isBeginning;
  const canNext = !isEnd;
  const progressLabel = `${String(slideIndex + 1).padStart(2, '0')} / ${String(pageCount).padStart(2, '0')}`;

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      className="relative w-full bg-[#fafaf8] text-[#0a0a0a] py-16 lg:py-20 border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="relative z-[1] w-full max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-10 lg:mb-12">
          <div ref={introLeftRef} className="lg:col-span-5">
            <p className="type-eyebrow-accent mb-5">
              Industry Experience
            </p>
            <p className="type-body text-neutral-600 leading-relaxed max-w-md">
              We build software around the workflows, systems, regulations, users, and operational
              challenges unique to each industry.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              ref={introRightRef}
              id="industries-heading"
              className="type-section-heading-lg text-balance max-w-3xl text-[#0a0a0a] sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] tracking-tight"
            >
              Enterprise technology shaped by real operational environments.
            </h2>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono tabular-nums text-neutral-500 hidden sm:inline">
                {progressLabel}
                <span className="text-neutral-600 mx-1.5">·</span>
                {String(INDUSTRY_COUNT).padStart(2, '0')} industries
              </span>
              <button
                type="button"
                aria-label="Previous industries"
                disabled={!canPrev}
                onClick={() => swiperRef.current?.slidePrev()}
                className="h-11 w-11 rounded-lg border border-neutral-200 bg-white flex items-center justify-center text-[#0a0a0a] disabled:opacity-35 disabled:pointer-events-none hover:border-neutral-300 hover:bg-[#fafafa] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]"
              >
                <span aria-hidden className="font-mono text-lg leading-none">
                  ←
                </span>
              </button>
              <button
                type="button"
                aria-label="Next industries"
                disabled={!canNext}
                onClick={() => swiperRef.current?.slideNext()}
                className="h-11 w-11 rounded-lg border border-neutral-200 bg-white flex items-center justify-center text-[#0a0a0a] disabled:opacity-35 disabled:pointer-events-none hover:border-neutral-300 hover:bg-[#fafafa] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]"
              >
                <span aria-hidden className="font-mono text-lg leading-none">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="industries-swiper-wrap -mx-5 px-5 md:mx-0 md:px-0"
          aria-roledescription="carousel"
          aria-label="Industry experience cards"
        >
          <Swiper
            modules={[Autoplay, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncSwiperState(swiper);
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                swiper.autoplay.stop();
              }
            }}
            onSlideChange={syncSwiperState}
            onBreakpoint={syncSwiperState}
            onResize={syncSwiperState}
            spaceBetween={20}
            slidesPerView={1}
            speed={650}
            rewind
            grabCursor
            watchOverflow
            autoplay={{
              delay: AUTOPLAY_DELAY_MS,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous industries',
              nextSlideMessage: 'Next industries',
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!overflow-hidden"
          >
            {industries.map((item) => (
              <SwiperSlide key={item.id} className="!flex !h-auto">
                <IndustryCard industry={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={slideIndex === i}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slideIndex === i ? 'w-8 bg-[#df012a]' : 'w-1.5 bg-neutral-300/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
