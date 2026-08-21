import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const credibilityAreas = [
  {
    title: 'Enterprise Engineering Depth',
    description: 'Enterprise-grade AI built for reliability, scale and real-world operations.',
  },
  {
    title: 'Integration at the Core',
    description: 'AI connected with the applications, APIs, data and workflows you already use.',
  },
  {
    title: 'Production from Day One',
    description: 'Security, governance and observability considered from the start.',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From strategy and build through deployment and continuous improvement.',
  },
];

function DeliveryNetwork() {
  return (
    <svg viewBox="0 0 360 360" className="h-full w-full" aria-hidden="true">
      <g className="delivery-network-lines" fill="none">
        <path className="delivery-branch delivery-branch-0" d="M180 180C145 150 146 91 72 70C40 61 31 38 22 22" />
        <path className="delivery-branch delivery-branch-1" d="M180 180C215 150 214 91 288 70C320 61 329 38 338 22" />
        <path className="delivery-branch delivery-branch-2" d="M180 180C145 210 146 269 72 290C40 299 31 322 22 338" />
        <path className="delivery-branch delivery-branch-3" d="M180 180C215 210 214 269 288 290C320 299 329 322 338 338" />
        <path d="M180 180C105 180 110 120 50 120M180 180C255 180 250 120 310 120M180 180C105 180 110 240 50 240M180 180C255 180 250 240 310 240" />
      </g>
      <g className="delivery-network-nodes" fill="#df012a">
        <circle cx="22" cy="22" r="5" /><circle cx="338" cy="22" r="5" /><circle cx="22" cy="338" r="5" /><circle cx="338" cy="338" r="5" />
        <circle cx="50" cy="120" r="3.5" /><circle cx="310" cy="120" r="3.5" /><circle cx="50" cy="240" r="3.5" /><circle cx="310" cy="240" r="3.5" />
      </g>
      <circle className="delivery-network-center-ring" cx="180" cy="180" r="18" fill="none" stroke="#df012a" />
      <circle className="delivery-network-center" cx="180" cy="180" r="7" fill="#df012a" />
      <circle className="delivery-network-signal" cx="180" cy="180" r="4" fill="#df012a" />
    </svg>
  );
}

export default function BuiltToDeliverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeArea, setActiveArea] = useState<number | null>(null);

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

  return (
    <section ref={sectionRef} data-active={activeArea ?? undefined} className="built-deliver-section overflow-hidden border-t border-neutral-200/70 bg-[#fafafa] py-16 lg:py-20" aria-labelledby="built-deliver-title">
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <header className="built-deliver-intro mx-auto w-full text-center">
          <div className="mb-7">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Built to Deliver</p>
            <span className="mx-auto block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>
          <h2 id="built-deliver-title" className="type-section-heading-lg sm:text-4xl md:text-[2.65rem] lg:whitespace-nowrap lg:text-[2.75rem]">
            Enterprise AI needs more than a great model<span className="text-[#df012a]">.</span>
          </h2>
          <p className="type-body mx-auto mt-5 max-w-[650px] text-[#555555]">
            We combine engineering, integration and production discipline to make AI work at enterprise scale.
          </p>
        </header>

        <div className="built-deliver-grid relative mt-12 grid md:grid-cols-2">
          <span className="built-deliver-divider built-deliver-divider--horizontal" aria-hidden="true" />
          <span className="built-deliver-divider built-deliver-divider--vertical" aria-hidden="true" />
          <div className="built-deliver-network pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 lg:block">
            <DeliveryNetwork />
          </div>

          {credibilityAreas.map((area, index) => (
            <article
              key={area.title}
              tabIndex={0}
              onMouseEnter={() => setActiveArea(index)}
              onMouseLeave={() => setActiveArea(null)}
              onFocus={() => setActiveArea(index)}
              onBlur={() => setActiveArea(null)}
              className={`built-deliver-area group relative min-h-[200px] py-7 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#df012a] ${index % 2 === 0 ? 'md:pr-12 lg:pr-[190px]' : 'md:pl-12 lg:pl-[190px]'} ${index > 1 ? 'border-t border-neutral-200 md:border-t-0' : index === 1 ? 'border-t border-neutral-200 md:border-t-0' : ''}`}
            >
              <span className="mb-5 block h-px w-8 bg-[#df012a]/70" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-[#111] transition-colors duration-300 group-hover:text-[#df012a] group-focus-visible:text-[#df012a] md:text-2xl">{area.title}</h3>
              <p className="type-body mt-3 text-[#555555]">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="built-deliver-conclusion border-t border-neutral-200 pt-10 md:pt-12">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
            <p className="font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-[#111] md:text-2xl">
              Strategy<span className="text-[#df012a]">.</span> Engineering<span className="text-[#df012a]">.</span> Integration<span className="text-[#df012a]">.</span> Governance<span className="text-[#df012a]">.</span> Production<span className="text-[#df012a]">.</span>
            </p>
            <Link to="/contact" className="btn-etech btn-etech--primary btn-etech--section group justify-self-start md:justify-self-end">
              <span>Talk to Our AI Team</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
