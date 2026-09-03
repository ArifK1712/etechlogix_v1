import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Service = {
  number: string;
  title: string;
  description: string;
  keywords: string[];
  visual: 'radar' | 'agent' | 'integration' | 'governance' | 'production';
};

const services: Service[] = [
  {
    number: '01',
    title: 'Agentic AI Strategy & Use-Case Design',
    description: 'We identify high-value opportunities, define operating boundaries, and design use cases that deliver measurable impact.',
    keywords: ['Strategy', 'Discovery', 'Use-Case Design'],
    visual: 'radar',
  },
  {
    number: '02',
    title: 'Custom AI Agent Development',
    description: 'We design and engineer intelligent agents that understand context, reason, use tools, and complete real enterprise work.',
    keywords: ['Agents', 'Reasoning', 'Tool Use'],
    visual: 'agent',
  },
  {
    number: '03',
    title: 'Enterprise Integration & Orchestration',
    description: 'We connect agents to your existing systems, APIs, data sources, and workflows, creating seamless, coordinated execution.',
    keywords: ['CRM', 'ERP', 'APIs', 'Cloud', 'Data'],
    visual: 'integration',
  },
  {
    number: '04',
    title: 'AI Governance & Guardrails',
    description: 'We build permissions, policy enforcement, approvals, and auditability into every action so you stay in control at all times.',
    keywords: ['Policies', 'Approvals', 'Security', 'Audit'],
    visual: 'governance',
  },
  {
    number: '05',
    title: 'Production Deployment & Optimization',
    description: 'We take Agentic AI from prototype to production with robust observability, continuous evaluation, and ongoing optimization for scale.',
    keywords: ['Deployment', 'Observability', 'Evaluation', 'Scale'],
    visual: 'production',
  },
];

function ServiceVisual({ type }: { type: Service['visual'] }) {
  if (type === 'radar') {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <g className="how-help-draw" fill="none" stroke="currentColor">
          <ellipse cx="164" cy="60" rx="106" ry="42" />
          <ellipse cx="164" cy="60" rx="76" ry="30" />
          <ellipse cx="164" cy="60" rx="46" ry="18" />
          <path d="M45 60h238M164 12v96" />
        </g>
        <g className="how-help-nodes" fill="#df012a">
          <circle cx="58" cy="60" r="3" /><circle cx="164" cy="18" r="3" /><circle cx="240" cy="40" r="3" /><circle cx="210" cy="82" r="3" /><circle cx="88" cy="76" r="3" />
        </g>
        <circle className="how-help-core" cx="164" cy="60" r="8" fill="#df012a" />
        <path className="how-help-signal" d="M164 60L240 40" fill="none" stroke="#df012a" strokeWidth="2" />
      </svg>
    );
  }

  if (type === 'agent') {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <g className="how-help-draw" fill="none" stroke="currentColor">
          <path d="M52 60h70M198 60h70M160 22v20M160 78v20" />
          <rect x="126" y="42" width="68" height="36" rx="8" />
          <rect x="24" y="43" width="34" height="34" rx="7" />
          <rect x="264" y="43" width="34" height="34" rx="7" />
          <rect x="143" y="8" width="34" height="26" rx="6" />
          <rect x="143" y="86" width="34" height="26" rx="6" />
        </g>
        <circle className="how-help-core" cx="160" cy="60" r="11" fill="#df012a" />
        <circle className="how-help-signal" cx="54" cy="60" r="4" fill="#df012a" />
        <text x="32" y="64">DATA</text><text x="268" y="64">API</text><text x="149" y="25">TOOL</text><text x="148" y="104">ACT</text>
      </svg>
    );
  }

  if (type === 'integration') {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <g className="how-help-draw" fill="none" stroke="currentColor">
          <path d="M28 60C100 60 105 20 174 20h70M28 60c72 0 77-20 146-20h86M28 60h232M28 60c72 0 77 20 146 20h86M28 60c72 0 77 40 146 40h70" />
        </g>
        <g className="how-help-endpoints">
          {['CRM', 'ERP', 'API', 'CLOUD', 'DATA'].map((label, index) => <text key={label} x={index % 2 === 0 ? 250 : 266} y={24 + index * 20}>{label}</text>)}
        </g>
        <circle className="how-help-signal" cx="28" cy="60" r="4" fill="#df012a" />
      </svg>
    );
  }

  if (type === 'governance') {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <g className="how-help-draw" fill="none" stroke="currentColor">
          <ellipse cx="160" cy="60" rx="112" ry="46" />
          <ellipse cx="160" cy="60" rx="72" ry="32" />
          <path d="M48 60h62M210 60h62" />
          <path d="M160 34l24 9v17c0 17-10 27-24 34-14-7-24-17-24-34V43z" />
          <rect x="38" y="46" width="28" height="28" rx="6" /><rect x="254" y="46" width="28" height="28" rx="6" />
        </g>
        <path className="how-help-core" d="M151 60l7 7 13-16" fill="none" stroke="#df012a" strokeWidth="3" />
        <circle className="how-help-signal" cx="48" cy="60" r="4" fill="#df012a" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
      <g className="how-help-draw" fill="none" stroke="currentColor">
        <path d="M38 90h72V70H52V50h48V30H64" />
        <rect x="126" y="32" width="70" height="62" rx="8" />
        <path d="M138 76l12-12 12 6 20-24" />
        <rect x="218" y="24" width="76" height="74" rx="8" />
        <path d="M230 82V68M246 82V55M262 82V62M278 82V40" />
      </g>
      <circle className="how-help-signal" cx="64" cy="30" r="4" fill="#df012a" />
      <g className="how-help-nodes" fill="#df012a"><circle cx="150" cy="64" r="3" /><circle cx="162" cy="70" r="3" /><circle cx="182" cy="46" r="3" /></g>
    </svg>
  );
}

export default function AgenticAIServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        if (entry.target === sectionRef.current) entry.target.setAttribute('data-visible', 'true');
      }),
      { threshold: 0.35 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-active={activeRow ?? undefined} className="how-help-section relative overflow-hidden border-t border-neutral-200/70 bg-white py-16 lg:py-20" aria-labelledby="agentic-services-title">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="mb-7">
              <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">How We Help</p>
              <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
            </div>
            <h2 id="agentic-services-title" className="type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]">
              From AI opportunity<br />to enterprise capability<span className="text-[#df012a]">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="type-body max-w-[500px] text-[#555555]">
              We partner with you across the full lifecycle of Agentic AI, from strategy to scale, with governance built in from day one.
            </p>
          </div>
        </header>

        <div className="mt-10 border-t border-neutral-200 md:mt-12">
          {services.map((service, index) => (
            <article
              key={service.number}
              ref={(element) => { rowRefs.current[index] = element; }}
              tabIndex={0}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              onFocus={() => setActiveRow(index)}
              onBlur={() => setActiveRow(null)}
              className="how-help-row group grid min-h-[110px] grid-cols-[48px_1fr] gap-x-5 border-b border-neutral-200 py-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#df012a] md:grid-cols-[60px_1fr_40px_240px] md:items-center md:gap-0 md:py-4"
            >
              <span className="font-display text-xl font-medium text-[#df012a] md:text-2xl">{service.number}</span>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold leading-snug tracking-[-0.025em] text-[#111] transition-colors duration-300 group-hover:text-[#df012a] group-focus-visible:text-[#df012a] md:pr-6 md:whitespace-nowrap">{service.title}</h3>
              <ArrowRight className="hidden h-5 w-5 text-[#111] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 md:block" strokeWidth={1.6} aria-hidden="true" />
              <div className="how-help-visual col-span-2 mt-5 h-[100px] text-[#df012a]/30 md:col-span-1 md:mt-0 md:h-[110px]">
                <ServiceVisual type={service.visual} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
