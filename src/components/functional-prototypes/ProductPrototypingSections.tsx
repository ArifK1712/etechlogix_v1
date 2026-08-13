import { ArrowRight, BarChart3, Box, Braces, ChartNoAxesCombined, Check, CheckCircle2, Code2, Crosshair, Database, GitBranch, List, MessageSquare, MessagesSquare, MousePointer2, Paperclip, PanelsTopLeft, Route, ShieldCheck, UserRound, Workflow } from 'lucide-react';

const validationJourney = [
  { number: '01', title: 'Define', description: 'Clarify the business need, critical workflow and product decision that must be proven.', Icon: Crosshair },
  { number: '02', title: 'Prototype', description: 'Make the critical workflow tangible with enough interaction, data and logic to test the idea.', Icon: PanelsTopLeft },
  { number: '03', title: 'Validate', description: 'Use stakeholder feedback and technical evidence to decide what should be built next.', Icon: ChartNoAxesCombined },
];

const deliverables = [
  { label: 'JOURNEY', title: 'Critical User Journeys', description: 'What the user needs to accomplish', Icon: Route, top: 'top-0', width: 'w-[48%]', fold: 'w-[4%]' },
  { label: 'EXPERIENCE', title: 'Interactive Product Experience', description: 'How the product responds and behaves', Icon: MousePointer2, top: 'top-[7.25rem]', width: 'w-[55%]', fold: 'w-[4%]' },
  { label: 'LOGIC', title: 'Representative Data & Logic', description: 'What makes the experience believable', Icon: Database, top: 'top-[14.5rem]', width: 'w-[61%]', fold: 'w-[4%]' },
  { label: 'DIRECTION', title: 'Technical Direction', description: 'What informs the path toward production', Icon: Code2, top: 'top-[21.75rem]', width: 'w-[64%]', fold: 'w-[4%]' },
];

const outcomes = ['A clearer product scope', 'Earlier stakeholder feedback', 'Lower risk before full development', 'A stronger customer or investor demonstration'];

export default function ProductPrototypingSections() {
  return (
    <>
      <section className="border-t border-neutral-200/80 bg-[#fafaf8] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-5 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="type-eyebrow-accent mb-4">PRODUCT VALIDATION</p>
            <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 className="type-section-heading-lg max-w-xl text-balance">
              Reduce uncertainty<br className="hidden lg:block" /> before you scale<br className="hidden lg:block" /> the investment<span className="text-[#df012a]">.</span>
            </h2>
            <p className="type-body mt-7 max-w-[30rem]">A functional prototype helps you test the critical product decision before larger development investment is made.</p>
            <div className="mt-14 max-w-lg md:mt-16 lg:mt-20">
              <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
              <p className="type-section-heading-lg text-balance">
                Build the right<br className="hidden lg:block" /> product before<br className="hidden lg:block" /> building the whole<br className="hidden lg:block" /> product<span className="text-[#df012a]">.</span>
              </p>
            </div>
          </div>
          <div className="lg:pt-8">
            <div className="relative">
              <div>
                {validationJourney.map(({ number, title, description, Icon }, index) => (
                  <article key={number} className="relative grid min-h-[12.5rem] grid-cols-[6rem_1fr] items-start sm:min-h-[13.75rem] sm:grid-cols-[7rem_1fr]">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200/50">
                      <Icon className="h-7 w-7 text-[#df012a]" strokeWidth={1.35} aria-hidden="true" />
                      {index < validationJourney.length - 1 ? (
                        <div className="absolute left-1/2 top-full h-32 w-px -translate-x-1/2 bg-neutral-400/70 sm:h-36" aria-hidden="true">
                          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-neutral-400 bg-[#fafaf8]" />
                        </div>
                      ) : (
                        <div className="absolute left-1/2 top-full h-12 w-px -translate-x-1/2 bg-neutral-400/70" aria-hidden="true">
                          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-neutral-400 bg-[#fafaf8]" />
                        </div>
                      )}
                    </div>
                    <div className="pt-2 sm:pt-3">
                      <div className="flex items-baseline gap-5">
                        <span className="font-display text-2xl font-medium tracking-[-0.03em] text-[#df012a] md:text-[1.75rem]">{number}</span>
                        <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">{title}</h3>
                      </div>
                      <div className="ml-[4.05rem] mt-4 h-px w-6 bg-[#df012a]" aria-hidden="true" />
                      <p className="type-body mt-4 max-w-sm !text-[1.0625rem] text-[#444444] md:!text-[1.125rem]">{description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-2 border-t border-neutral-300 pt-7 sm:mt-3">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.17em] text-[#df012a]">PROTOTYPE OUTCOME</p>
                <p className="mt-5 flex flex-col gap-3 font-display text-base font-medium tracking-[-0.02em] text-[#0a0a0a] sm:flex-row sm:items-center sm:gap-0 lg:text-lg">
                  <span>Validated Direction</span><span className="w-fit rotate-90 text-[#df012a] sm:mx-5 sm:rotate-0">→</span><span>Defined Scope</span><span className="w-fit rotate-90 text-[#df012a] sm:mx-5 sm:rotate-0">→</span><span>Development Readiness</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="type-eyebrow-accent mb-4">WHAT YOU GET</p>
              <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
              <h2 className="type-section-heading-lg max-w-3xl text-balance">A prototype built with<br className="hidden sm:block" /> just enough depth to<br className="hidden sm:block" /> answer the right question<span className="text-[#df012a]">.</span></h2>
            </div>
            <p className="type-body max-w-md lg:col-span-5 lg:justify-self-end">We include the essentials needed to validate your idea, de-risk the unknowns and give your team evidence to make confident decisions.</p>
          </div>

          <div className="relative mt-14 hidden h-[28rem] lg:block">
            <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 1400 448" preserveAspectRatio="none" aria-hidden="true">
              <g fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4">
                <path d="M692 50 H920 L1050 224" />
                <path d="M790 166 H965 L1050 224" />
                <path d="M874 282 H965 L1050 224" />
                <path d="M916 398 H920 L1050 224" />
                <path d="M1060 224 H1160" />
              </g>
              <g fill="white" stroke="#d4d4d4" strokeWidth="1">
                <circle cx="692" cy="50" r="6" /><circle cx="790" cy="166" r="6" /><circle cx="874" cy="282" r="6" /><circle cx="916" cy="398" r="6" />
              </g>
              <g fill="#df012a"><circle cx="692" cy="50" r="2.5" /><circle cx="790" cy="166" r="2.5" /><circle cx="874" cy="282" r="2.5" /><circle cx="916" cy="398" r="2.5" /></g>
              <circle cx="1050" cy="224" r="9" fill="white" stroke="#df012a" strokeWidth="1.25" />
              <circle cx="1050" cy="224" r="3.5" fill="#df012a" />
            </svg>

            {deliverables.map(({ label, title, description, Icon, top, width, fold }) => (
              <article key={label} className={`absolute left-0 z-10 flex h-[6.25rem] items-center rounded-[2px] border border-neutral-300 bg-white px-6 ${top} ${width}`}>
                <div className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full bg-neutral-100">
                  <Icon className="h-6 w-6 text-[#df012a]" strokeWidth={1.45} aria-hidden="true" />
                </div>
                <div className="ml-5 h-14 w-px shrink-0 bg-neutral-300" aria-hidden="true" />
                <div className="ml-6 min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">{title}</h3>
                  <p className="type-body-sm mt-1 text-[#555555]">{description}</p>
                </div>
                <svg
                  className={`absolute left-[calc(100%-1px)] top-[-1px] h-[calc(100%+0.45rem)] overflow-visible ${fold}`}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon
                    points="0,0 28,0 100,50 100,100 28,100 0,95"
                    fill="#fafafa"
                    stroke="#d4d4d4"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="miter"
                  />
                </svg>
              </article>
            ))}

            <aside className="absolute right-0 top-16 z-30 h-[20rem] w-[15rem] rounded-md border border-neutral-300 bg-[#fafaf8] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white"><Box className="h-7 w-7 text-[#df012a]" strokeWidth={1.4} aria-hidden="true" /></div>
              <div className="mt-4 h-px w-8 bg-[#df012a]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">One Working<br />Prototype</h3>
              <div className="mt-4 h-px w-8 bg-[#df012a]" aria-hidden="true" />
              <p className="type-body-sm mt-3 text-[#555555]">Focused enough to learn.<br />Real enough to decide.</p>
            </aside>
          </div>

          <div className="mt-12 space-y-4 lg:hidden">
            {deliverables.map(({ label, title, description, Icon }) => (
              <article key={label} className="flex items-center border-y border-neutral-200 py-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100"><Icon className="h-6 w-6 text-[#df012a]" strokeWidth={1.45} /></div>
                <div className="ml-5"><h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#0a0a0a]">{title}</h3><p className="type-body-sm mt-1 text-[#555555]">{description}</p></div>
              </article>
            ))}
            <aside className="border border-neutral-300 bg-[#fafaf8] p-7"><Box className="h-8 w-8 text-[#df012a]" strokeWidth={1.4} /><h3 className="mt-5 font-display text-lg font-semibold uppercase leading-snug tracking-[-0.02em] text-[#0a0a0a] md:text-xl">One Working Prototype</h3><p className="type-body-sm mt-3 text-[#555555]">Focused enough to learn. Real enough to decide.</p></aside>
          </div>
        </div>
      </section>

      <section id="how-we-build" className="scroll-mt-28 border-y border-neutral-200/80 bg-[#fafaf8] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="type-eyebrow-accent mb-4">PROTOTYPE WORKSPACE</p>
              <div className="mb-7 h-px w-10 bg-[#df012a]" aria-hidden="true" />
              <h2 className="type-section-heading-lg max-w-3xl text-balance">From idea to a working<br className="hidden sm:block" /> experience<span className="text-[#df012a]">.</span></h2>
            </div>
            <p className="type-body max-w-md lg:col-span-5 lg:justify-self-end">We build just enough of the product to make the critical workflow real, so your team can interact, review and decide with confidence.</p>
          </div>

          <div className="relative mt-14 grid gap-10 lg:grid-cols-[12.5rem_minmax(0,1fr)_13rem] lg:gap-6">
            <div className="hidden lg:block absolute left-[12.5rem] right-[13rem] top-1/2 h-px -translate-y-1/2 bg-neutral-300" aria-hidden="true" />
            <span className="hidden lg:block absolute left-[12.5rem] top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#df012a] ring-1 ring-neutral-300" aria-hidden="true" />
            <span className="hidden lg:block absolute right-[13rem] top-1/2 z-20 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#df012a] ring-1 ring-neutral-300" aria-hidden="true" />

            <aside className="lg:border-r lg:border-neutral-200 lg:pr-6">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.17em] text-[#df012a]">BUSINESS QUESTION</p>
              <div className="mt-4 h-px w-7 bg-[#df012a]" />
              <h3 className="mt-8 font-display text-xl font-semibold leading-tight tracking-[-0.025em]">What do we need<br />to prove?</h3>
              <div className="mt-7 border-t border-neutral-200 pt-6 space-y-5">
                {[{ label: 'User need is real', Icon: UserRound }, { label: 'Workflow makes sense', Icon: Workflow }, { label: 'Solution is feasible', Icon: ShieldCheck }].map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-4"><Icon className="h-5 w-5 shrink-0 text-[#df012a]" strokeWidth={1.5} aria-hidden="true" /><span className="text-sm font-medium leading-snug text-[#333333]">{label}</span></div>
                ))}
              </div>
            </aside>

            <div className="relative z-10 rounded-2xl border border-neutral-200/80 bg-[#f7f7f5] p-5 sm:p-7">
              <div className="grid gap-7 md:grid-cols-3 md:gap-5">
                <div>
                  <div className="mb-5 flex items-center justify-center gap-3"><span className="text-xs font-semibold uppercase tracking-[0.12em]">Entry</span><ArrowRight className="ml-auto hidden h-4 w-4 text-neutral-400 md:block" strokeWidth={1.25} /></div>
                  <div className="h-[19.5rem] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,15,15,0.06)]">
                    <div className="grid h-full grid-cols-[2.25rem_1fr]">
                      <div className="flex flex-col items-center gap-5 bg-[#171717] py-4 text-white/55"><span className="h-3 w-3 bg-[#df012a]" /><List className="h-3.5 w-3.5" /><CheckCircle2 className="h-3.5 w-3.5" /></div>
                      <div className="flex min-h-0 flex-col p-5"><h4 className="text-sm font-semibold">Start a request</h4><div className="mt-7 h-2 w-24 rounded bg-neutral-100" /><p className="mt-5 text-[0.7rem] font-medium">Request type</p><div className="mt-2 flex h-10 items-center justify-between rounded border border-neutral-200 px-3 text-[0.7rem] text-neutral-600">New Request <span>⌄</span></div><div className="mt-7 space-y-2"><div className="h-2 w-full rounded bg-neutral-100" /><div className="h-2 w-4/5 rounded bg-neutral-100" /></div><button type="button" className="mt-auto flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded bg-[#df012a] text-[0.7rem] font-semibold text-white">Continue <ArrowRight className="h-3 w-3" /></button></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center justify-center gap-3"><span className="text-xs font-semibold uppercase tracking-[0.12em]">Action</span><ArrowRight className="ml-auto hidden h-4 w-4 text-neutral-400 md:block" strokeWidth={1.25} /></div>
                  <div className="h-[19.5rem] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,15,15,0.06)]">
                    <div className="grid h-full grid-cols-[2.25rem_1fr]">
                      <div className="flex flex-col items-center gap-5 bg-[#171717] py-4 text-white/55"><span className="h-3 w-3 bg-[#df012a]" /><GitBranch className="h-3.5 w-3.5" /><Braces className="h-3.5 w-3.5" /></div>
                      <div className="flex min-h-0 flex-col p-5"><h4 className="text-sm font-semibold">Provide details</h4><div className="mt-6 flex items-center justify-between"><span className="h-3 w-3 rounded-full border border-neutral-400" /><span className="h-px flex-1 bg-neutral-200" /><span className="h-3 w-3 rounded-full border-[3px] border-[#df012a]" /><span className="h-px flex-1 bg-neutral-200" /><span className="h-3 w-3 rounded-full border border-neutral-400" /></div><p className="mt-6 text-[0.7rem] font-medium">Title</p><div className="mt-2 h-10 rounded border border-neutral-200 bg-white px-3 py-3"><div className="h-2 w-16 rounded bg-neutral-100" /></div><p className="mt-4 text-[0.7rem] font-medium">Category</p><div className="mt-2 h-10 rounded border border-neutral-200" /><button type="button" className="mt-auto flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded border border-dashed border-neutral-300 text-[0.7rem] font-medium"><Paperclip className="h-3 w-3" /> Add attachment</button></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center justify-center gap-3"><span className="text-xs font-semibold uppercase tracking-[0.12em]">Result</span></div>
                  <div className="flex h-[19.5rem] flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,15,15,0.06)]"><h4 className="text-sm font-semibold">Request summary</h4><div className="mt-8 flex justify-center"><CheckCircle2 className="h-10 w-10 text-emerald-600" strokeWidth={1.25} /></div><p className="mx-auto mt-4 max-w-28 text-center text-[0.7rem] font-medium leading-relaxed">Request submitted successfully</p><div className="mt-8 space-y-2"><div className="h-2 w-full rounded bg-neutral-100" /><div className="h-2 w-4/5 rounded bg-neutral-100" /><div className="h-2 w-1/2 rounded bg-neutral-100" /></div><button type="button" className="mt-auto flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded border border-neutral-200 text-[0.7rem] font-medium">View summary <ArrowRight className="h-3 w-3" /></button></div>
                </div>
              </div>
            </div>

            <aside className="lg:border-l lg:border-neutral-200 lg:pl-6">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.17em] text-[#df012a]">DECISION EVIDENCE</p>
              <div className="mt-4 h-px w-7 bg-[#df012a]" />
              <div className="mt-7 divide-y divide-neutral-200">
                {[{ label: 'Usability', Icon: BarChart3 }, { label: 'Workflow fit', Icon: GitBranch }, { label: 'Technical feasibility', Icon: Braces }, { label: 'Stakeholder confidence', Icon: UserRound }].map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-4 py-5 first:pt-0"><Icon className="h-5 w-5 shrink-0 text-[#df012a]" strokeWidth={1.5} aria-hidden="true" /><span className="text-sm font-semibold leading-snug text-[#222222]">{label}</span></div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-9 flex max-w-3xl items-start gap-5"><div className="h-12 w-px shrink-0 bg-[#df012a]" /><p className="font-display text-lg leading-relaxed text-[#222222] md:text-xl"><strong className="font-semibold text-[#0a0a0a]">Not a concept deck.</strong> A working experience your team can react to.</p></div>

          <div className="mt-14 flex flex-col gap-7 rounded-2xl border border-[#df012a]/35 bg-white p-7 md:flex-row md:items-center md:p-9">
            <div className="flex flex-1 items-start gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100"><MessageSquare className="h-6 w-6 text-[#df012a]" strokeWidth={1.5} /></div><div><h3 className="font-display text-xl font-semibold tracking-[-0.025em]">Have a product idea that needs to become tangible?</h3><p className="type-body mt-2 max-w-2xl">Tell us what you need to validate. We’ll help define the smallest useful prototype that can give your team credible evidence for the next decision.</p></div></div>
            <a href="/contact" className="btn-etech btn-etech--primary btn-etech--section group shrink-0">Discuss Your Product Idea <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" /></a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="type-eyebrow-accent mb-4">THE BUSINESS OUTCOME</p><h2 className="type-section-heading-lg max-w-3xl text-balance">Move forward with evidence, not assumptions.</h2>
            <div className="mt-10 grid gap-x-8 sm:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3 border-t border-neutral-200 py-5"><span className="mt-0.5 flex h-[1.625rem] w-[1.625rem] shrink-0 items-center justify-center rounded-full border border-[#df012a]/55 bg-[#df012a]/[0.035]"><Check className="h-3 w-3 text-[#df012a]" strokeWidth={2} aria-hidden="true" /></span><span className="text-[0.95rem] font-medium text-[#222222]">{outcome}</span></div>)}</div>
          </div>
          <aside className="rounded-2xl border border-neutral-200 bg-[#fafaf8] p-7 md:p-9 lg:col-span-5">
            <MessagesSquare className="h-7 w-7 text-[#df012a]" strokeWidth={1.5} aria-hidden="true" /><h3 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">Have a product idea that needs to become tangible?</h3><p className="type-body mt-5">Tell us what you need to validate. We will help define the smallest useful prototype.</p>
            <a href="/contact" className="btn-etech btn-etech--primary-dark btn-etech--section group mt-8">Discuss Your Product Idea<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" /></a>
          </aside>
        </div>
      </section>
    </>
  );
}
