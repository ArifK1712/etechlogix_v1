import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Network, ServerCog, ShieldCheck, type LucideIcon } from 'lucide-react';

type Checkpoint = 'data' | 'intelligence' | 'systems';

type Capability = {
  title: string;
  description: string;
  labels: string;
  Icon: LucideIcon;
  checkpoint: Checkpoint;
};

const capabilities: Capability[] = [
  {
    title: 'Works with your ecosystem',
    description: 'Connect intelligence to the technology you already use.',
    labels: 'CRM · ERP · APIs · Cloud · Data Platforms · Internal Apps',
    Icon: Network,
    checkpoint: 'systems',
  },
  {
    title: 'Operates within your rules',
    description: 'Autonomy without losing enterprise control.',
    labels: 'Policies · Permissions · Approval Boundaries · Business Rules',
    Icon: ShieldCheck,
    checkpoint: 'intelligence',
  },
  {
    title: 'Ready for production',
    description: 'Engineered beyond the prototype.',
    labels: 'Security · Observability · Integration · Reliability · Scale',
    Icon: ServerCog,
    checkpoint: 'data',
  },
];

export default function EnterpriseByDesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCheckpoint, setActiveCheckpoint] = useState<Checkpoint | null>(null);

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
      { threshold: 0.22 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="enterprise-design-section border-t border-neutral-200/70 bg-[#fafafa] py-16 lg:py-20" aria-labelledby="enterprise-design-title">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 md:grid-cols-[minmax(0,41%)_minmax(0,59%)] md:items-stretch md:gap-x-12 md:gap-y-7 lg:gap-x-20 lg:gap-y-8">
        <div className="enterprise-design-intro md:col-start-2 md:row-start-1">
          <div className="mb-8">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Enterprise by Design</p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h2 id="enterprise-design-title" className="type-section-heading-lg max-w-[560px] text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]">
            Built into your business.<br />Not bolted on<span className="text-[#df012a]">.</span>
          </h2>

          <p className="type-body mt-6 max-w-[570px] text-[#555555]">
            Agentic AI becomes valuable when it works with the systems, data, policies, and people already running your business. We engineer AI capabilities around your enterprise environment, not beside it.
          </p>
        </div>

        <div className="enterprise-design-visual relative min-h-[500px] overflow-hidden rounded-2xl bg-neutral-200 md:col-start-1 md:row-span-2 md:row-start-1 md:min-h-[580px]">
          <img
            src="/images/server_room_bg.jpg"
            alt="Enterprise data infrastructure inside a modern glass-walled technology facility"
            className="enterprise-design-image absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="enterprise-design-image-shade absolute inset-0" aria-hidden="true" />

          <div className="enterprise-design-path" aria-hidden="true">
            <span className="enterprise-design-path-line enterprise-design-path-line--one" />
            <span className="enterprise-design-path-line enterprise-design-path-line--two" />
            <span className="enterprise-design-travel" />
          </div>

          {(['data', 'intelligence', 'systems'] as Checkpoint[]).map((checkpoint, index) => (
            <div
              key={checkpoint}
              className={`enterprise-design-checkpoint enterprise-design-checkpoint--${checkpoint} ${activeCheckpoint === checkpoint ? 'is-active' : ''}`}
              aria-hidden="true"
            >
              <span className="enterprise-design-node" />
              <span className="enterprise-design-label">
                <strong>{checkpoint}</strong>
                <small>
                  {index === 0 && 'Business data and context'}
                  {index === 1 && 'Agents understand, reason and act'}
                  {index === 2 && 'Connected where work happens'}
                </small>
              </span>
            </div>
          ))}
        </div>

        <div className="enterprise-design-rows md:col-start-2 md:row-start-2 md:self-start">
          {capabilities.map(({ title, labels, Icon, checkpoint }) => (
            <button
              key={title}
              type="button"
              onMouseEnter={() => setActiveCheckpoint(checkpoint)}
              onMouseLeave={() => setActiveCheckpoint(null)}
              onFocus={() => setActiveCheckpoint(checkpoint)}
              onBlur={() => setActiveCheckpoint(null)}
              className="enterprise-design-row group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-neutral-200 py-5 text-left last:border-b focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#df012a] sm:gap-5"
            >
              <Icon className="mt-0.5 h-5 w-5 text-[#df012a]" strokeWidth={1.6} aria-hidden="true" />
              <span>
                <strong className="block font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#111] md:text-xl">{title}</strong>
                <span className="mt-2 block text-sm sm:text-[0.9375rem] leading-relaxed text-neutral-600">{labels}</span>
              </span>
              <ArrowRight className="mt-1 h-4 w-4 text-neutral-400 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-[#df012a] group-focus-visible:translate-x-1 group-focus-visible:text-[#df012a]" strokeWidth={1.7} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
