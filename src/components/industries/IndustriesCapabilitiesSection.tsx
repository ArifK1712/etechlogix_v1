import { AppWindow, CloudUpload, Cpu, Network } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: 'Custom Software',
    description: 'Systems engineered around complex business operations and workflows.',
    icon: AppWindow,
  },
  {
    title: 'Enterprise Integrations',
    description: 'Seamlessly connect applications, data, platforms and legacy systems.',
    icon: Network,
  },
  {
    title: 'AI & Automation',
    description: 'Automate processes and uncover insights to drive operational efficiency.',
    icon: Cpu,
  },
  {
    title: 'Modernization',
    description: 'Modernize existing systems and unlock new value without disrupting the business.',
    icon: CloudUpload,
  },
];

export default function IndustriesCapabilitiesSection() {
  return (
    <section
      className="w-full bg-[#fafaf8] py-16 text-[#0a0a0a] md:py-20"
      aria-labelledby="industries-capabilities-title"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.72fr)] md:items-end md:gap-12 lg:gap-20">
          <div>
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              CAPABILITIES ACROSS INDUSTRIES
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2
              id="industries-capabilities-title"
              className="type-section-heading-lg max-w-[720px] text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]"
            >
              The same engineering depth.
              <br />
              Applied to different
              <br />
              industry realities<span className="text-[#df012a]">.</span>
            </h2>
          </div>

          <p className="type-body max-w-[520px] text-[#5f5f5f] md:justify-self-end md:pb-1">
            No matter the sector, our approach stays the same — understand the real challenge,
            engineer the right solution, and deliver measurable outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {capabilities.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className={`border-neutral-200/90 py-9 first:pt-0 last:pb-0 md:px-8 md:py-10 md:first:pt-10 md:last:pb-10 lg:min-h-[330px] lg:px-10 lg:py-0 lg:first:pt-0 lg:last:pb-0 ${
                index > 0 ? 'border-t md:border-t-0' : ''
              } ${index % 2 === 1 ? 'md:border-l' : ''} ${
                index >= 2 ? 'md:border-t lg:border-t-0' : ''
              } ${index > 0 ? 'lg:border-l' : ''}`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200/80 bg-white/70">
                <Icon
                  className="h-9 w-9 text-[#df012a]"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
                {title}
              </h3>
              <div className="mt-5 h-0.5 w-8 bg-[#df012a]" aria-hidden="true" />
              <p className="type-body mt-5 max-w-[290px] text-[#5f5f5f]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
