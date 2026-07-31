import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Global Conference Management Engine',
    industry: 'Event Technology & Conferences',
    challenge: 'Coordinating 100k+ live attendees, real-time check-in, venue logistics, and payment processing.',
    solution: 'Custom high-concurrency microservices platform with offline sync capabilities.',
    impact: '100% uptime, 4x faster check-in throughput.',
    img: '/images/service-data.jpg'
  },
  {
    title: 'Enterprise Distribution & Warehouse Automation',
    industry: 'Logistics & ERP',
    challenge: 'Eliminating manual inventory re-keying across 14 distribution hubs.',
    solution: 'Automated API integration layer connecting legacy ERP with cloud WMS.',
    impact: '$1.2M annual operational savings, 99.98% inventory accuracy.',
    img: '/images/service-cloud.jpg'
  },
  {
    title: 'AI-Driven Healthcare Workflow Automation',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Managing complex patient intake paperwork and EHR synchronization.',
    solution: 'Agentic AI document processor with human exception routing.',
    impact: '85% reduction in intake processing time.',
    img: '/images/industry-healthcare.jpg'
  }
];

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.sw-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    const caseCards = gsap.utils.toArray('.case-card');
    caseCards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#000000] text-white py-16 lg:py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="sw-header mb-24">
          <p className="text-[#df012a] text-xs uppercase tracking-widest mb-4 font-bold">Selected Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Proven outcomes for complex enterprise systems.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {cases.map((cs, idx) => (
            <div key={idx} className="case-card flex flex-col group relative">
              <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden mb-8 bg-[#090909]">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#090909] to-[#1a1a1a] opacity-50 z-0"></div>
                
                {/* Normally an img tag here, keeping it robust */}
                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 ease-out relative z-10" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20"></div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 w-full max-w-4xl">
                  <span className="inline-block text-[#df012a] border border-[#df012a]/30 bg-[#df012a]/10 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm">
                    {cs.industry}
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 group-hover:text-[#df012a] transition-colors duration-300">{cs.title}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2">
                <div className="col-span-1 border-t border-white/10 pt-6">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">Challenge</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="col-span-1 border-t border-white/10 pt-6">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">Solution</p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{cs.solution}</p>
                </div>
                <div className="col-span-1 border-t border-[#df012a]/30 pt-6 bg-gradient-to-b from-[#df012a]/5 to-transparent -mx-4 px-4 pb-4 rounded-b-xl">
                  <p className="text-[#df012a] text-xs uppercase tracking-wider mb-2 font-bold">Impact</p>
                  <p className="text-white font-bold text-lg md:text-xl leading-snug mb-6">{cs.impact}</p>
                  <button className="flex items-center gap-2 text-sm font-semibold hover:text-[#df012a] transition-colors group/btn">
                    View Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
