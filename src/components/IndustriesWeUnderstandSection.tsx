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
  description: string;
  label: string;
  operationalFocus: string[];
  icon: 'events' | 'erp' | 'healthcare' | 'integrations' | 'operations' | 'finance' | 'manufacturing' | 'retail';
}

const industries: Industry[] = [
  {
    id: '01',
    title: 'Events & Conferences',
    summary: 'Registration, engagement, and on-site operations for large-scale events.',
    description:
      'Digital platforms for registration, ticketing, attendee engagement, event applications, check-in, payments, scheduling, meetings, and operational reporting.',
    label: 'Events & conferences',
    icon: 'events',
    operationalFocus: [
      'Registration and ticketing',
      'Attendee and exhibitor management',
      'Mobile event applications',
      'On-site check-in and badges',
      'Meetings and scheduling',
      'Event payments and reporting',
    ],
  },
  {
    id: '02',
    title: 'ERP & Distribution',
    summary: 'Inventory, orders, and logistics connected across the supply chain.',
    description:
      'Connected business applications for inventory, pricing, order processing, warehouse operations, logistics, tax systems, distributor workflows, and operational data.',
    label: 'ERP & distribution',
    icon: 'erp',
    operationalFocus: [
      'Inventory and warehouse operations',
      'Order and pricing workflows',
      'Distribution management',
      'Logistics and shipment coordination',
      'Tax and payment integrations',
      'ERP modernization',
    ],
  },
  {
    id: '03',
    title: 'Healthcare',
    summary: 'Secure workflows for clinical, administrative, and integrated care operations.',
    description:
      'Secure digital solutions for healthcare workflows, document processing, patient operations, administrative processes, system integration, and compliance-focused applications.',
    label: 'Healthcare',
    icon: 'healthcare',
    operationalFocus: [
      'Healthcare document workflows',
      'Patient and administrative operations',
      'Secure system integration',
      'Approval and exception management',
      'Data processing',
      'Compliance-focused applications',
    ],
  },
  {
    id: '04',
    title: 'Enterprise Platforms & Integrations',
    summary: 'APIs and middleware connecting CRM, ERP, tax, payment, and custom systems.',
    description:
      'Enterprise integration solutions connecting Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP, CRM, payment, healthcare, and custom platforms.',
    label: 'Platforms & integrations',
    icon: 'integrations',
    operationalFocus: [
      'Enterprise APIs',
      'Middleware and orchestration',
      'Data synchronization',
      'CRM and ERP connections',
      'Payment and tax platforms',
      'Custom system integration',
    ],
  },
  {
    id: '05',
    title: 'Enterprise Operations',
    summary: 'Dashboards, telemetry, and cross-functional workflows for leadership and ops teams.',
    description:
      'Custom operational dashboards, executive decision support, task orchestration across departments, and live visibility into KPIs—replacing fragmented spreadsheets with systems teams actually run day to day.',
    label: 'Enterprise operations',
    icon: 'operations',
    operationalFocus: [
      'Operational dashboards and KPIs',
      'Cross-departmental workflows',
      'Executive reporting',
      'Task and exception tracking',
      'Role-based access and audit trails',
      'Real-time operational telemetry',
    ],
  },
  {
    id: '06',
    title: 'Financial Services & Payments',
    summary: 'Billing, tax, reconciliation, and payment flows tied to core business systems.',
    description:
      'Payment gateways, tax calculation, invoicing, reconciliation, and financial data pipelines integrated with ERP, CRM, and industry platforms—built for accuracy, traceability, and compliance with finance controls.',
    label: 'Finance & payments',
    icon: 'finance',
    operationalFocus: [
      'Payment gateway integration',
      'Tax and compliance platforms',
      'Invoicing and billing workflows',
      'Reconciliation and reporting',
      'Multi-entity financial data',
      'Audit-ready transaction logs',
    ],
  },
  {
    id: '07',
    title: 'Manufacturing & Supply Chain',
    summary: 'Production, procurement, and supplier coordination on connected digital systems.',
    description:
      'Applications for production planning, supplier portals, quality tracking, shop-floor data capture, and supply chain visibility—linking plants, vendors, and distribution into one operational picture.',
    label: 'Manufacturing',
    icon: 'manufacturing',
    operationalFocus: [
      'Production and capacity planning',
      'Supplier and procurement portals',
      'Quality and traceability',
      'Shop-floor data capture',
      'Inventory and material flows',
      'Supply chain visibility',
    ],
  },
  {
    id: '08',
    title: 'Retail & Commerce',
    summary: 'Catalog, orders, fulfillment, and customer experiences across channels.',
    description:
      'Omnichannel commerce platforms, product catalogs, order management, fulfillment coordination, and customer-facing applications connected to inventory, ERP, and payment systems.',
    label: 'Retail & commerce',
    icon: 'retail',
    operationalFocus: [
      'Product catalog and pricing',
      'Order and fulfillment management',
      'Inventory sync across channels',
      'Customer self-service portals',
      'Promotions and loyalty flows',
      'POS and e-commerce integrations',
    ],
  },
];

const INDUSTRY_COUNT = industries.length;

function IndustryIcon({ type }: { type: Industry['icon'] }) {
  const stroke = 'rgba(255,255,255,0.88)';
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
    <article className="group industry-slide-card relative flex flex-col h-full min-h-[420px] overflow-hidden rounded-xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-[box-shadow,border-color] duration-500 hover:border-[#df012a]/45 hover:shadow-[0_16px_44px_rgba(0,0,0,0.55)] h-full">
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-90"
        aria-hidden
        style={{
          background:
            'linear-gradient(155deg, #060606 0%, #0e0e0e 30%, #180910 58%, #3a0a16 80%, #851028 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            'linear-gradient(225deg, rgba(0,0,0,0.55) 0%, transparent 48%, rgba(223,1,42,0.24) 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-7">
        <div className="flex items-start gap-3 mb-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-black/45 ring-1 ring-white/[0.12]">
            <IndustryIcon type={industry.icon} />
          </div>
        </div>
        <h3 className="font-display font-extrabold text-xl leading-tight text-white mb-3">{industry.title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed mb-4">{industry.summary}</p>
        <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1 line-clamp-4">{industry.description}</p>
        <ul className="space-y-2 mb-6">
          {industry.operationalFocus.slice(0, 4).map((label) => (
            <li key={label} className="flex gap-2 text-xs text-neutral-300 leading-snug pl-3 border-l border-[#df012a]/35">
              {label}
            </li>
          ))}
        </ul>
      </div>
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
      className="relative w-full text-white py-16 lg:py-20 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(145deg, #030303 0%, #0a0a0a 28%, #12080c 52%, #2a0812 76%, #5c0f22 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(200deg, rgba(0,0,0,0.65) 0%, transparent 42%, rgba(223,1,42,0.18) 88%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <div className="relative z-[1] w-full max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-10 lg:mb-12">
          <div ref={introLeftRef} className="lg:col-span-5">
            <p className="text-xs md:text-sm font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-5">
              Industry Experience
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-md">
              We build software around the workflows, systems, regulations, users, and operational
              challenges unique to each industry.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              ref={introRightRef}
              id="industries-heading"
              className="font-display font-extrabold text-[1.85rem] sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] leading-[1.1] tracking-tight text-balance max-w-3xl text-white"
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
                className="h-11 w-11 rounded-lg border border-white/[0.12] bg-[#161616] flex items-center justify-center text-white disabled:opacity-35 disabled:pointer-events-none hover:border-white/25 hover:bg-[#1c1c1c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
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
                className="h-11 w-11 rounded-lg border border-white/[0.12] bg-[#161616] flex items-center justify-center text-white disabled:opacity-35 disabled:pointer-events-none hover:border-white/25 hover:bg-[#1c1c1c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
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
              <SwiperSlide key={item.id} className="!h-auto">
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
                slideIndex === i ? 'w-8 bg-[#df012a]' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
