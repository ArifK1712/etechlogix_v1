import { useRef, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLenis } from '../hooks/useLenis';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_IMAGE = '/images/enterprise-custom-software-hero.jpg';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#df012a] md:text-sm">
      {children}
    </p>
  );
}

function PrimaryCta({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex w-full sm:w-auto items-center justify-between gap-4 bg-[#df012a] hover:bg-[#b80122] text-white font-semibold text-[15px] h-[52px] pl-6 pr-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[0_10px_30px_rgba(223,1,42,0.28)] hover:shadow-[0_15px_40px_rgba(223,1,42,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${className}`}
    >
      <span className="px-2 whitespace-normal sm:whitespace-nowrap">{children}</span>
      <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:bg-white/30">
        <ArrowRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </a>
  );
}

function SecondaryCta({
  href,
  children,
  dark = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex w-full sm:w-auto items-center justify-center px-6 h-[52px] rounded-full font-medium text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:outline-none focus-visible:ring-2 active:scale-[0.98] ${
        dark
          ? 'border border-white/20 text-[#f5f3ef] hover:bg-white/[0.06] focus-visible:ring-white/50'
          : 'border border-black/[0.12] bg-white text-[#111111] hover:border-[#df012a]/40 hover:text-[#df012a] focus-visible:ring-[#df012a]'
      } ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-display font-extrabold text-[1.75rem] sm:text-4xl md:text-[2.65rem] leading-[1.08] tracking-[-0.03em] text-balance max-w-3xl ${
        light ? 'text-[#f5f3ef]' : 'text-[#0a0a0a]'
      }`}
    >
      {children}
    </h2>
  );
}

function PlatformStackDiagram() {
  const layers = [
    { label: 'User experiences', tone: 'text-[#f5f3ef]' },
    { label: 'Business workflows', tone: 'text-[#f5f3ef]' },
    { label: 'Application services', tone: 'text-[#f5f3ef]' },
    { label: 'Integration layer', tone: 'text-[#df012a]' },
    { label: 'Enterprise data', tone: 'text-[#f5f3ef]' },
    { label: 'Security & monitoring', tone: 'text-neutral-400' },
  ];

  return (
    <div className="rounded-[calc(2rem-0.375rem)] bg-[#0a0a0a] p-6 md:p-8 ring-1 ring-white/[0.08]">
      <div className="flex flex-col gap-3">
        {layers.map((layer, index) => (
          <div
            key={layer.label}
            className={`relative flex items-center justify-between rounded-2xl border border-white/[0.1] px-5 py-4 md:py-5 ${
              index === 3 ? 'bg-[#df012a]/10 border-[#df012a]/35' : 'bg-white/[0.03]'
            }`}
          >
            <span className={`font-display text-sm md:text-base font-bold tracking-[-0.02em] ${layer.tone}`}>
              {layer.label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
              L{6 - index}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs font-mono uppercase tracking-[0.18em] text-neutral-500">
        Unified platform stack
      </p>
    </div>
  );
}

function OperationOutwardFlow({ dark }: { dark?: boolean }) {
  const phases = [
    { title: 'Operational Reality', detail: 'How work happens today' },
    { title: 'Product Architecture', detail: 'Structure built around the operation' },
    { title: 'Connected Platform', detail: 'Software tied to enterprise systems' },
  ];

  const inputs = [
    'Users and roles',
    'Workflows and exceptions',
    'Business rules',
    'Data ownership',
    'Existing systems',
    'Reporting requirements',
  ];

  const titleClass = dark ? 'text-[#f5f3ef]' : 'text-[#0a0a0a]';
  const detailClass = dark ? 'text-neutral-400' : 'text-[#555555]';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div className="lg:col-span-7 space-y-4">
        {phases.map((phase, index) => (
          <div key={phase.title} className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center shrink-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#df012a] bg-[#fbeaec] font-mono text-xs font-bold text-[#df012a]">
                {String(index + 1).padStart(2, '0')}
              </span>
              {index < phases.length - 1 ? (
                <span className="my-2 h-full min-h-[2.5rem] w-px bg-[#df012a]/30" aria-hidden="true" />
              ) : null}
            </div>
            <div className="pb-6">
              <h3 className={`font-display text-lg md:text-xl font-bold tracking-[-0.02em] ${titleClass}`}>
                {phase.title}
              </h3>
              <p className={`mt-1 text-sm md:text-base ${detailClass}`}>{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-5">
        <div className="rounded-[2rem] bg-black/[0.04] p-1.5 ring-1 ring-black/[0.06]">
          <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 md:p-7 border border-black/[0.06]">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#df012a]">
              Mapped before build
            </p>
            <ul className="space-y-3">
              {inputs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-[0.9375rem] text-[#333333]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#df012a]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const painPoints = [
  'Complex approval paths',
  'Multiple user roles',
  'Disconnected systems',
  'Industry-specific business rules',
  'Manual workarounds',
  'Limited scalability',
];

const platformTypes = [
  {
    title: 'Operational management platforms',
    description: 'Coordinate daily work, assignments, and operational visibility across teams.',
  },
  {
    title: 'Customer and partner portals',
    description: 'Give external stakeholders secure access to the workflows and data they need.',
  },
  {
    title: 'Internal enterprise applications',
    description: 'Replace fragmented tools with one dependable environment for internal teams.',
  },
  {
    title: 'Workflow and approval platforms',
    description: 'Route decisions, exceptions, and sign-offs through defined business logic.',
  },
  {
    title: 'Data and reporting systems',
    description: 'Consolidate operational data into trusted reporting and decision views.',
  },
  {
    title: 'API-first business platforms',
    description: 'Extend capability through integrations without rebuilding core operations.',
  },
];

const enterpriseRequirements = [
  {
    title: 'Role-based access',
    description: 'The right people see and act on the right information at each step.',
  },
  {
    title: 'Audit history',
    description: 'Changes, approvals, and exceptions remain traceable for accountability.',
  },
  {
    title: 'Exception handling',
    description: 'Edge cases route to humans with context instead of breaking the workflow.',
  },
  {
    title: 'Data security',
    description: 'Sensitive business and customer data stays protected across the platform.',
  },
  {
    title: 'System availability',
    description: 'Operations depend on software that remains reachable when teams need it.',
  },
  {
    title: 'Integration resilience',
    description: 'Connected systems stay synchronized when volumes or conditions change.',
  },
  {
    title: 'Long-term maintainability',
    description: 'The platform can evolve as rules, users, and business scope grow.',
  },
];

const growthSteps = [
  {
    step: 'Define the Critical Operation',
    copy: 'Focus on the workflow, users, and outcomes that matter most to the business first.',
  },
  {
    step: 'Launch the First Usable Release',
    copy: 'Deliver working software teams can adopt—not a prototype that stalls in production.',
  },
  {
    step: 'Connect Systems',
    copy: 'Integrate ERP, CRM, payments, logistics, and custom platforms as the operation matures.',
  },
  {
    step: 'Expand Capabilities',
    copy: 'Add modules, automation, and reporting as adoption proves value and priorities shift.',
  },
];

const outcomes = [
  'Fewer spreadsheets and manual handoffs',
  'Faster approvals and processing',
  'Clearer operational accountability',
  'More reliable data',
  'Better visibility across teams',
  'A platform that evolves with the business',
];

export default function EnterpriseCustomSoftwarePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useLenis();
  useScrollReveal(pageRef);

  return (
    <div
      ref={pageRef}
      className="bg-[#ffffff] text-[#171717] min-h-screen font-body selection:bg-[#df012a] selection:text-[#ffffff] overflow-x-clip"
    >
      <Header />
      <main className="overflow-x-clip">
        {/* Section 1 — Hero */}
        <section
          aria-labelledby="ecs-hero-heading"
          className="relative bg-[#f7f7f5] pt-28 pb-16 md:pt-32 md:pb-24 lg:pb-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <div className="lg:col-span-6 xl:col-span-5" data-reveal>
                <Eyebrow>ENTERPRISE CUSTOM SOFTWARE</Eyebrow>
                <h1
                  id="ecs-hero-heading"
                  className="mt-5 font-display font-extrabold text-[2rem] sm:text-[2.65rem] md:text-[3.25rem] leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] text-balance"
                >
                  Build software around your operation—not around the limits of an off-the-shelf product.
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg leading-[1.65] text-[#555555]">
                  We design and build enterprise platforms around your workflows, users, approvals, business
                  rules, data, and existing systems—creating dependable software that supports complex
                  operations and long-term growth.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <PrimaryCta href="/contact">Discuss Your Requirements</PrimaryCta>
                  <SecondaryCta href="#designed-from-operation">Explore the Approach</SecondaryCta>
                </div>
              </div>
              <div className="lg:col-span-6 xl:col-span-7" data-reveal>
                <div className="rounded-[2rem] bg-black/[0.04] p-1.5 ring-1 ring-black/[0.06]">
                  <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] border border-black/[0.06] bg-white">
                    <img
                      src={HERO_IMAGE}
                      alt=""
                      className="aspect-[16/10] w-full object-cover object-center"
                      width={1280}
                      height={800}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — When Standard Software Falls Short */}
        <section
          aria-labelledby="ecs-falls-short-heading"
          className="relative bg-white py-20 md:py-24 lg:py-28 border-t border-black/[0.06]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start" data-reveal>
                <Eyebrow>WHEN STANDARD SOFTWARE FALLS SHORT</Eyebrow>
                <SectionHeading>
                  <span id="ecs-falls-short-heading">Complex operations rarely fit inside a generic product.</span>
                </SectionHeading>
                <p className="mt-5 max-w-md text-base leading-[1.65] text-[#555555]">
                  Off-the-shelf systems often create workarounds when the business has specialized workflows,
                  approval paths, user roles, data requirements, or integration dependencies.
                </p>
              </div>
              <div className="lg:col-span-7 relative">
                <div
                  className="absolute left-4 top-0 bottom-0 w-px bg-[#df012a]/20 hidden sm:block"
                  aria-hidden="true"
                />
                <ul className="space-y-0">
                  {painPoints.map((item, index) => (
                    <li
                      key={item}
                      data-reveal
                      className={`relative pl-0 sm:pl-12 py-6 md:py-7 ${
                        index < painPoints.length - 1 ? 'border-b border-black/[0.07]' : ''
                      }`}
                    >
                      <span
                        className="absolute left-0 top-8 hidden sm:flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#df012a] bg-white"
                        aria-hidden="true"
                      />
                      <p className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-[#0a0a0a]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Designed From the Operation Outward */}
        <section
          id="designed-from-operation"
          aria-labelledby="ecs-operation-heading"
          className="relative bg-[#030712] text-white py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="max-w-3xl mb-12 md:mb-16" data-reveal>
              <Eyebrow>DESIGNED FROM THE OPERATION OUTWARD</Eyebrow>
              <SectionHeading light>
                <span id="ecs-operation-heading">The platform begins with how the business actually works.</span>
              </SectionHeading>
              <p className="mt-5 text-base md:text-lg leading-[1.65] text-neutral-400">
                Before defining technology, we map the users, workflows, rules, exceptions, systems, data
                ownership, reporting needs, and operational constraints behind the requirement.
              </p>
            </div>
            <div data-reveal>
              <OperationOutwardFlow dark />
            </div>
          </div>
        </section>

        {/* Section 4 — The Platforms We Create */}
        <section
          aria-labelledby="ecs-platforms-heading"
          className="relative bg-[#f7f7f5] py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-12 md:mb-16">
              <div className="lg:col-span-5" data-reveal>
                <Eyebrow>THE PLATFORMS WE CREATE</Eyebrow>
                <SectionHeading>
                  <span id="ecs-platforms-heading">Purpose-built software for complex business environments.</span>
                </SectionHeading>
              </div>
            </div>
            <div className="space-y-0 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {platformTypes.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-baseline"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm font-semibold text-[#df012a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-lg md:text-xl font-bold tracking-[-0.02em] text-[#0a0a0a]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm md:text-base leading-[1.65] text-[#555555]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — A Platform That Fits Your Environment */}
        <section
          aria-labelledby="ecs-environment-heading"
          className="relative bg-white py-20 md:py-24 lg:py-28 border-t border-black/[0.06]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div data-reveal>
                <Eyebrow>A PLATFORM THAT FITS YOUR ENVIRONMENT</Eyebrow>
                <SectionHeading>
                  <span id="ecs-environment-heading">Every layer is designed to work together.</span>
                </SectionHeading>
                <p className="mt-5 max-w-lg text-base leading-[1.65] text-[#555555]">
                  From experiences teams use every day to the integrations and data beneath them, each layer
                  supports how the operation runs—not isolated features that drift apart over time.
                </p>
              </div>
              <div data-reveal className="rounded-[2rem] bg-black/[0.04] p-1.5 ring-1 ring-black/[0.06]">
                <PlatformStackDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Built for Enterprise Use */}
        <section
          aria-labelledby="ecs-enterprise-heading"
          className="relative bg-[#fbeaec] py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="max-w-3xl mb-12 md:mb-14" data-reveal>
              <Eyebrow>BUILT FOR ENTERPRISE USE</Eyebrow>
              <SectionHeading>
                <span id="ecs-enterprise-heading">The platform must work reliably beyond the first release.</span>
              </SectionHeading>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {enterpriseRequirements.map((item) => (
                <div key={item.title} data-reveal className="border-l-2 border-[#df012a] pl-5">
                  <h3 className="font-display text-base md:text-lg font-bold text-[#0a0a0a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.6] text-[#555555]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — From First Release to Long-Term Platform */}
        <section
          aria-labelledby="ecs-growth-heading"
          className="relative bg-[#0a0a0a] py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="max-w-2xl mb-12 md:mb-14" data-reveal>
              <Eyebrow>FROM FIRST RELEASE TO LONG-TERM PLATFORM</Eyebrow>
              <SectionHeading light>
                <span id="ecs-growth-heading">Launch what matters first, then expand with confidence.</span>
              </SectionHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {growthSteps.map((item, index) => (
                <div
                  key={item.step}
                  data-reveal
                  className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/[0.08]"
                >
                  <div className="h-full rounded-[calc(2rem-0.375rem)] border border-white/[0.08] bg-[#111111] p-6">
                    <span className="font-mono text-xs font-bold text-[#df012a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em] text-[#f5f3ef]">
                      {item.step}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.6] text-neutral-400">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 — What Changes After Launch */}
        <section
          aria-labelledby="ecs-outcomes-heading"
          className="relative bg-white py-20 md:py-24 lg:py-28 border-t border-black/[0.06]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5" data-reveal>
                <Eyebrow>WHAT CHANGES AFTER LAUNCH</Eyebrow>
                <SectionHeading>
                  <span id="ecs-outcomes-heading">Better software changes how the operation performs.</span>
                </SectionHeading>
              </div>
              <div className="lg:col-span-7">
                <ul className="space-y-5 md:space-y-6">
                  {outcomes.map((item) => (
                    <li
                      key={item}
                      data-reveal
                      className="flex items-start gap-4 border-b border-black/[0.06] pb-5 md:pb-6 last:border-0"
                    >
                      <span
                        className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fbeaec] text-[#df012a]"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <p className="font-display text-lg md:text-xl font-semibold tracking-[-0.02em] text-[#0a0a0a]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 — Final CTA */}
        <section
          aria-labelledby="ecs-final-cta-heading"
          className="relative bg-[#f7f7f5] py-20 md:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
            <div
              data-reveal
              className="rounded-[2rem] bg-black/[0.06] p-1.5 ring-1 ring-black/[0.08]"
            >
              <div className="rounded-[calc(2rem-0.375rem)] border border-white/[0.08] bg-[#070707] px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 text-center">
                <Eyebrow>START WITH THE OPERATIONAL CHALLENGE</Eyebrow>
                <h2
                  id="ecs-final-cta-heading"
                  className="mx-auto mt-5 max-w-3xl font-display text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#f5f3ef] text-balance sm:text-4xl md:text-[2.35rem]"
                >
                  Let&apos;s define the platform your business actually needs.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-[1.65] text-neutral-400">
                  Share the workflows, systems, constraints, and goals behind your requirement. We&apos;ll help
                  determine the right product, architecture, and path forward.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                  <PrimaryCta href="/contact" className="sm:justify-center">
                    Discuss Your Software Requirement
                  </PrimaryCta>
                  <SecondaryCta href="/contact" dark>
                    Contact eTechLogix
                  </SecondaryCta>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
