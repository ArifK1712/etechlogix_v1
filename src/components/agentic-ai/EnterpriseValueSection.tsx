import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

type CapabilityKey = 'operations' | 'customer' | 'finance' | 'technology';

type Capability = {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  pathClass: string;
};

const capabilities: Record<CapabilityKey, Capability> = {
  operations: {
    title: 'Operations',
    description: 'Resolve issues and coordinate work across systems.',
    image: '/images/agentic-enterprise-operations.png',
    imagePosition: '52% center',
    pathClass: 'enterprise-signal--operations',
  },
  customer: {
    title: 'Customer Experience',
    description: 'Understand context and take the next best action.',
    image: '/images/agentic-enterprise-customer-experience.png',
    imagePosition: '58% center',
    pathClass: 'enterprise-signal--customer',
  },
  finance: {
    title: 'Finance',
    description: 'Automate repetitive processes while maintaining control.',
    image: '/images/agentic-enterprise-finance.png',
    imagePosition: '46% center',
    pathClass: 'enterprise-signal--finance',
  },
  technology: {
    title: 'Technology',
    description: 'Assist teams, respond to incidents, and orchestrate technical workflows.',
    image: '/images/agentic-enterprise-technology.png',
    imagePosition: '63% center',
    pathClass: 'enterprise-signal--technology',
  },
};

const capabilityOrder = Object.keys(capabilities) as CapabilityKey[];

export default function EnterpriseValueSection() {
  const [activeKey, setActiveKey] = useState<CapabilityKey>('operations');
  const sectionRef = useRef<HTMLElement>(null);
  const active = capabilities[activeKey];

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
      { threshold: 0.28 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="enterprise-across-section bg-white py-16 lg:py-20" aria-labelledby="enterprise-value-title">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 md:grid-cols-[minmax(0,43%)_minmax(0,57%)] md:gap-10 lg:gap-16">
        <div className="md:py-3">
          <div className="mb-8">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">AI Across the Enterprise</p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h2 id="enterprise-value-title" className="type-section-heading-lg max-w-[520px] text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]">
            Built to move<br />work forward<span className="text-[#df012a]">.</span>
          </h2>

          <p className="type-body mt-6 max-w-[560px] text-[#555555]">
            From operations to customer experience, finance, and technology, Agentic AI helps enterprises turn context into action across connected systems and teams.
          </p>

          <div className="mt-10 border-t border-neutral-200" role="tablist" aria-label="Enterprise capabilities">
            {capabilityOrder.map((key) => {
              const capability = capabilities[key];
              const selected = activeKey === key;

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="enterprise-capability-visual"
                  onClick={() => setActiveKey(key)}
                  onMouseEnter={() => setActiveKey(key)}
                  className={`enterprise-capability-row group relative grid w-full grid-cols-[1fr_auto] items-center gap-5 border-b border-neutral-200 py-5 pl-5 pr-2 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#df012a] ${selected ? 'bg-[#fff8f9]' : 'hover:bg-neutral-50/70'}`}
                >
                  <span className={`absolute inset-y-0 left-0 w-0.5 bg-[#df012a] transition-opacity duration-300 ${selected ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
                  <span>
                    <strong className="block font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#111] md:text-xl">{capability.title}</strong>
                    <span className="mt-1.5 block max-w-[430px] text-sm leading-[1.55] text-neutral-600">{capability.description}</span>
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-[color,transform] duration-300 ${selected ? 'translate-x-0.5 text-[#df012a]' : 'text-neutral-400 group-hover:text-neutral-700'}`} strokeWidth={1.7} aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="enterprise-capability-visual"
          role="tabpanel"
          aria-label={`${active.title}: ${active.description}`}
          className="enterprise-visual relative min-h-[520px] overflow-hidden rounded-2xl bg-neutral-100 md:min-h-[660px]"
        >
          <div
            key={activeKey}
            className="enterprise-visual-image absolute inset-0"
            style={{ backgroundImage: `url('${active.image}')`, backgroundPosition: active.imagePosition }}
            aria-hidden="true"
          />
          <div className="enterprise-visual-shade absolute inset-0" aria-hidden="true" />
          <div key={`${activeKey}-signal`} className={`enterprise-signal ${active.pathClass}`} aria-hidden="true">
            <span className="enterprise-signal-node enterprise-signal-node--start" />
            <span className="enterprise-signal-node enterprise-signal-node--end" />
            <span className="enterprise-signal-pulse" />
          </div>
          <div className="absolute bottom-0 left-0 max-w-[370px] border-t border-white/60 bg-white/94 px-6 py-5 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#df012a]">Connected intelligence</p>
            <p className="mt-2 font-display text-lg font-medium leading-snug tracking-[-0.02em] text-[#111]">
              Context to action, across the systems where work happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
