import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    num: '01',
    title: 'Enterprise Custom Software',
    desc: 'Custom platforms built around specific operational processes, users, systems, and requirements.',
  },
  {
    num: '02',
    title: 'Agentic AI & Workflow Automation',
    desc: 'AI agents that process information, apply rules, update systems, and support approvals.',
  },
  {
    num: '03',
    title: 'Enterprise Integrations',
    desc: 'Connect ERP, CRM, payment, healthcare, and custom platforms into a single ecosystem.',
  },
  {
    num: '04',
    title: 'Functional Product Prototypes',
    desc: 'Working product experiences that validate ideas and support investor conversations.',
  },
  {
    num: '05',
    title: 'Engineering Team Extension',
    desc: 'Experienced engineers who work like owners to strengthen internal technology teams.',
  },
  {
    num: '06',
    title: 'Legacy System Modernization',
    desc: 'Modernize outdated applications and disconnected systems without disrupting operations.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#ffffff] text-[#111111] py-16 lg:py-20 px-5 overflow-hidden"
    >
      {/* Subtle Architectural Background Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        {/* Vertical Rule */}
        <div className="absolute top-0 right-[15%] lg:right-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-200/60 to-transparent" />
        {/* Horizontal Rule */}
        <div className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
      </div>

      {/* Main 2-Column Container */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Sticky Introduction */}
        <div className="flex flex-col items-start lg:sticky lg:top-32 h-fit">
          {/* Eyebrow */}
          <span className="text-xs md:text-sm font-mono font-semibold tracking-[0.15em] text-[#df012a] uppercase mb-5">
            What We Engineer
          </span>
          
          {/* Headline */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-[#111111] max-w-[540px]">
            Technology built around complex business operations.
          </h2>
          
          {/* Supporting Text */}
          <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-[420px]">
            We design software, AI workflows, integrations, and digital platforms for organizations where technology directly supports critical operations.
          </p>
          
          {/* Text Link */}
          <a
            href="#services"
            className="mt-8 md:mt-10 group inline-flex items-center gap-2 text-[15px] font-semibold text-[#111111] hover:text-[#df012a] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md"
          >
            <span>Explore our capabilities</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Right Column: Horizontal Capability Rows */}
        <div className="flex flex-col border-t border-neutral-200">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 lg:gap-10 py-6 md:py-8 border-b border-neutral-200 hover:bg-neutral-50/60 transition-colors duration-200 px-6 md:px-8 -mx-6 md:-mx-8 cursor-pointer"
            >
              {/* Active Indicator Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#df012a] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              {/* Content Wrapper */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 lg:gap-12 w-full">
                {/* Large Number */}
                <span className="text-sm md:text-base font-mono font-semibold text-neutral-400 group-hover:text-[#df012a] transition-colors duration-300 shrink-0">
                  {item.num}
                </span>
                
                {/* Title & Description */}
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-[#111111] group-hover:text-[#df012a] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-[600px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow Indicator (Hidden on smallest mobile, visible on SM+) */}
              <div className="hidden sm:flex shrink-0 pl-2">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 group-hover:text-[#df012a] transition-all duration-200 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
