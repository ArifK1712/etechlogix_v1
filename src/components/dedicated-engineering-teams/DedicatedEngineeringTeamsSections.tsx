import { ArrowRight, Check, CloudCog, Code2, Database, Monitor, Network, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const workingModel = [
  ['01', 'Aligned to your roadmap', 'Engineering effort stays focused on business and product priorities.'],
  ['02', 'Integrated with your processes', 'We work within your existing delivery rhythm, ceremonies, and governance.'],
  ['03', 'Connected to your systems', 'Collaboration happens through the tools and platforms your teams already use.'],
  ['04', 'Clear delivery ownership', 'Responsibilities remain visible from planning through release.'],
];

const environmentRows = [
  ['Your technology stack', 'Work within the architecture and platforms your organization already uses.'],
  ['Your delivery rhythm', 'Integrate with existing sprints, releases, reviews, and decision-making.'],
  ['Your standards', 'Follow established engineering, security, quality, and governance practices.'],
];

const capabilities = [
  { title: 'Frontend', Icon: Monitor },
  { title: 'Backend', Icon: Code2 },
  { title: 'Mobile', Icon: Smartphone },
  { title: 'QA & Automation', Icon: ShieldCheck },
  { title: 'DevOps & Cloud', Icon: CloudCog },
  { title: 'Data', Icon: Database },
  { title: 'Technical Leadership', Icon: Network },
];

const deliverySteps = [
  ['01', 'Define', 'Align on product priorities, required expertise, responsibilities, and expected outcomes.'],
  ['02', 'Assemble', 'Build the right team around the technology, delivery model, and working environment.'],
  ['03', 'Integrate', 'Connect engineers with your tools, processes, leadership, and existing teams.'],
  ['04', 'Deliver & Evolve', 'Maintain clear ownership while adjusting team capabilities as your roadmap changes.'],
];

const enterprisePoints = [
  'Clear delivery ownership',
  'Transparent communication',
  'Engineering standards alignment',
  'Security-conscious development',
  'Quality assurance throughout delivery',
  'Flexible team scaling',
  'Knowledge continuity',
  'Integration with existing teams and vendors',
];

export default function DedicatedEngineeringTeamsSections() {
  return (
    <>
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 lg:grid-cols-[45fr_55fr] lg:gap-20">
          <div>
            <p className="type-eyebrow-accent mb-4">HOW WE WORK</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg max-w-xl text-balance">
              Embedded in your delivery model.<br />Accountable to your outcomes<span className="text-[#df012a]">.</span>
            </h2>
            <p className="type-body mt-7 max-w-xl">
              Our engineers integrate into your product, technology, and delivery environment — working within your processes, tools, governance, and priorities while taking clear ownership of delivery.
            </p>
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="type-body-sm max-w-xl border-l-2 border-[#df012a] pl-5 font-medium text-[#222222]">
                Not an external handoff. An engineering team built into the way your organization delivers.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-300">
            {workingModel.map(([number, title, description]) => (
              <article key={number} className="grid gap-4 border-b border-neutral-200 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-[#df012a]">{number}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">{title}</h3>
                  <p className="type-body-sm mt-2 max-w-xl">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-10 px-5 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <figure className="min-h-[28rem] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:min-h-[42rem]">
            <img
              src="/images/dedicated-engineering-collaboration.webp"
              alt="Product and engineering team collaborating during a technical planning session"
              width={1800}
              height={1013}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </figure>

          <div className="flex flex-col justify-center">
            <p className="type-eyebrow-accent mb-4">BUILT AROUND YOUR ENVIRONMENT</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg text-balance">
              Your processes stay intact.<br />Your capacity gets stronger<span className="text-[#df012a]">.</span>
            </h2>
            <p className="type-body mt-7">
              A dedicated team should fit into the way your organization already operates. We align with your technology stack, product roadmap, communication model, security requirements, and delivery standards instead of forcing a separate way of working.
            </p>
            <div className="mt-9 border-t border-neutral-300">
              {environmentRows.map(([title, description]) => (
                <div key={title} className="border-b border-neutral-200 py-5">
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">{title}</h3>
                  <p className="type-body-sm mt-1">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute -bottom-64 -left-64 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(223,1,42,0.12)_0%,rgba(223,1,42,0.045)_42%,transparent_72%)] blur-2xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="lg:pt-2">
            <p className="type-eyebrow-accent mb-4">THE TEAM YOU NEED</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg max-w-xl text-balance">Built around the work — not a predefined package<span className="text-[#df012a]">.</span></h2>
            <p className="type-body mt-7 max-w-xl">Start with the engineering capabilities your roadmap requires and adjust the team as priorities evolve.</p>

            <div className="mt-12 border-t border-neutral-200 pt-8">
              <p className="type-body-sm max-w-xl border-l-2 border-[#df012a] pl-5 font-medium text-[#222222]">
                Scale capability without rebuilding your internal organization every time priorities change.
              </p>
            </div>
          </div>

          <div className="relative border-t border-[#0a0a0a]">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-neutral-200" aria-hidden="true" />
            {capabilities.map(({ title, Icon }) => (
              <div key={title} className="group relative grid grid-cols-[1fr_auto] items-center border-b border-neutral-200 py-3 pl-6 sm:pl-8">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-1 md:text-xl">{title}</h3>
                <span className="ml-5 mr-1 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-[#fafaf8] text-[#df012a] transition-colors duration-300 group-hover:border-[#df012a]/45">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="max-w-4xl">
            <p className="type-eyebrow-accent mb-4">FROM NEED TO DELIVERY</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg text-balance">A clear path from capacity gap to integrated team<span className="text-[#df012a]">.</span></h2>
          </div>

          <div className="mt-14 grid border-t border-neutral-300 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map(([number, title, description]) => (
              <article key={number} className="border-b border-neutral-200 py-8 md:px-7 md:first:pl-0 xl:border-r xl:last:border-r-0">
                <p className="type-section-heading-lg text-[#df012a]">{number}</p>
                <div className="mt-6 h-px w-8 bg-[#df012a]" aria-hidden="true" />
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">{title}</h3>
                <p className="type-body-sm mt-3">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="type-eyebrow-accent mb-4">ENTERPRISE READY</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg text-balance">More capacity without losing control<span className="text-[#df012a]">.</span></h2>
            <p className="type-body mt-7 max-w-xl">
              Dedicated delivery only works when visibility, accountability, and governance remain clear. Our teams are structured to operate within enterprise environments from day one.
            </p>
          </div>

          <div className="grid border-t border-neutral-300 sm:grid-cols-2 sm:gap-x-8">
            {enterprisePoints.map((point) => (
              <div key={point} className="flex items-start gap-3 border-b border-neutral-200 py-5">
                <span className="mt-0.5 flex h-[1.625rem] w-[1.625rem] shrink-0 items-center justify-center rounded-full border border-[#df012a]/55 bg-[#df012a]/[0.035]">
                  <Check className="h-3 w-3 text-[#df012a]" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="type-body-sm font-medium text-[#222222]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
        <div className="absolute bottom-0 right-[8%] top-0 w-px bg-neutral-200" aria-hidden="true" />
        <div className="absolute bottom-12 right-[8%] h-24 w-px bg-[#df012a]" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-[1400px] items-end gap-10 px-5 lg:grid-cols-[8fr_4fr] lg:gap-20">
          <div>
            <p className="type-eyebrow-accent mb-4">BUILD THE RIGHT TEAM</p>
            <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-xl max-w-5xl text-balance">Add the engineering capacity your roadmap needs — without creating another layer to manage<span className="text-[#df012a]">.</span></h2>
            <p className="type-body mt-7 max-w-3xl">Tell us where your team needs more capacity, specialist expertise, or delivery ownership. We’ll help shape an engineering team around the work.</p>
          </div>
          <div className="lg:pb-1">
            <Link to="/contact" className="btn-etech btn-etech--primary btn-etech--section group">
              Talk to Our Engineering Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
