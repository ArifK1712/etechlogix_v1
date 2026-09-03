import {
  BrainCircuit,
  Cloud,
  Database,
  Goal,
  Grid2X2,
  ScrollText,
  ShieldCheck,
  UserCheck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type Capability = {
  label: string;
  Icon: LucideIcon;
};

type ProcessStage = {
  title: string;
  description: string;
  capabilities: Capability[];
};

const stages: ProcessStage[] = [
  {
    title: 'Understand the business context',
    description: 'Connect data, policies, goals, permissions, and operational context.',
    capabilities: [
      { label: 'Data', Icon: Database },
      { label: 'Policies', Icon: ShieldCheck },
      { label: 'Goals', Icon: Goal },
      { label: 'Context', Icon: UsersRound },
    ],
  },
  {
    title: 'Decide within your guardrails',
    description: 'Reason across information, business rules, and human approval points.',
    capabilities: [
      { label: 'Reasoning', Icon: BrainCircuit },
      { label: 'Business Rules', Icon: ScrollText },
      { label: 'Approvals', Icon: UserCheck },
    ],
  },
  {
    title: 'Act across your enterprise',
    description: 'Execute work across applications, APIs, workflows, and teams.',
    capabilities: [
      { label: 'Applications', Icon: Grid2X2 },
      { label: 'APIs', Icon: Cloud },
      { label: 'Workflows', Icon: Workflow },
      { label: 'Teams', Icon: UsersRound },
    ],
  },
];

function CapabilityRow({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-y-3 text-neutral-600">
      {capabilities.map(({ label, Icon }, index) => (
        <div
          className={`flex items-center gap-2.5 pr-4 text-sm sm:text-[0.9375rem] md:text-base leading-relaxed ${
            index > 0 ? 'border-l border-neutral-300 pl-4' : ''
          }`}
          key={label}
        >
          <Icon className="h-4.5 w-4.5 shrink-0 text-[#555555]" strokeWidth={1.6} aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function BeyondTraditionalAutomationSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-neutral-200/80 bg-white py-16 text-[#0a0a0a] lg:py-20"
      aria-labelledby="beyond-automation-title"
    >
      <div className="agentic-process-warmth pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-start gap-12 px-5 lg:flex-row lg:gap-8 xl:gap-14">
        <div className="w-full lg:w-[44%]">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
            Beyond Traditional Automation
          </p>
          <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />

          <h2
            id="beyond-automation-title"
            className="type-section-heading-lg max-w-[500px] text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]"
          >
            AI that doesn&apos;t just respond.<br />
            It gets work done<span className="text-[#df012a]">.</span>
          </h2>

          <p className="type-body mt-6 max-w-[500px] text-[#555555]">
            Agentic AI goes beyond prompts and predefined workflows. It understands goals,
            makes context-aware decisions, coordinates across systems, and takes action — while
            keeping your teams in control.
          </p>
        </div>

        <div className="w-full lg:w-[56%]">
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute bottom-6 left-[5px] top-6 w-px bg-neutral-200 sm:left-[7px]" aria-hidden="true" />

            <div className="divide-y divide-neutral-200">
              {stages.map((stage) => (
                <article
                  className="agentic-process-stage relative py-8 first:pt-0 last:pb-0"
                  key={stage.title}
                >
                  <span className="absolute -left-[29px] top-8 z-10 h-3 w-3 rounded-full border-[3px] border-white bg-[#df012a] shadow-[0_0_0_1px_rgba(223,1,42,0.35)] sm:-left-[38px]" aria-hidden="true" />

                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase leading-[1.25] tracking-[-0.015em] text-[#111111] md:text-xl">
                      {stage.title}
                    </h3>
                    <div className="mt-3">
                      <CapabilityRow capabilities={stage.capabilities} />
                    </div>
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
