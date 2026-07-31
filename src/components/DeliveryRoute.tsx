import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

const stages = [
  { id: '01', title: 'Understand', desc: 'Deep technical discovery & integration audit', hl: 'Early working software' },
  { id: '02', title: 'Design', desc: 'System architecture blueprinting & UX flows', hl: 'Clear technical ownership' },
  { id: '03', title: 'Build', desc: 'Early working software with weekly sprint demos', hl: 'Enterprise security' },
  { id: '04', title: 'Integrate', desc: 'Enterprise security, API connectors & fail-safe rollback', hl: 'Integration planning' },
  { id: '05', title: 'Launch', desc: 'Phased deployment with zero business disruption', hl: 'Frequent decision checkpoints' },
  { id: '06', title: 'Improve', desc: 'Long-term maintainability & continuous optimization', hl: 'Long-term maintainability' },
];

export default function DeliveryRoute() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.delivery-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
      .from('.route-line', { width: 0, duration: 1.5, ease: 'power2.inOut' }, '-=0.4')
      .from('.route-node', { opacity: 0, scale: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(1.7)' }, '-=1')
      .from('.route-content', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5, ease: 'power2.out' }, '-=0.8');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f7f7f5] text-[#000000] py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="delivery-title font-display text-3xl md:text-5xl font-bold max-w-3xl mb-24 leading-tight">
          A delivery model built for <span className="text-[#df012a]">complex digital products.</span>
        </h2>

        <div className="relative mt-20 hidden md:block">
          {/* Continuous Line */}
          <div className="absolute top-6 left-0 h-1 bg-gray-200 w-full rounded">
            <div className="route-line h-full bg-[#df012a] w-full origin-left rounded"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col">
                <div className="route-node w-12 h-12 rounded-full bg-white border-4 border-[#df012a] shadow-lg flex items-center justify-center font-bold text-[#df012a] mb-6 relative z-10 shrink-0 mx-auto md:mx-0">
                  {stage.id}
                </div>
                <div className="route-content pr-4">
                  <h3 className="font-bold text-lg mb-2">{stage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">{stage.desc}</p>
                  <span className="inline-block bg-white px-2 py-1 text-xs font-semibold text-gray-800 border border-gray-200 rounded">
                    {stage.hl}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col space-y-12 relative">
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-[#df012a]/20 rounded">
             <div className="route-line w-full h-full bg-[#df012a] origin-top rounded"></div>
          </div>
          
          {stages.map((stage, index) => (
            <div key={index} className="flex items-start relative z-10">
              <div className="route-node w-12 h-12 rounded-full bg-white border-4 border-[#df012a] shadow-lg flex items-center justify-center font-bold text-[#df012a] shrink-0 mr-6 mt-1">
                {stage.id}
              </div>
              <div className="route-content pt-2">
                <h3 className="font-bold text-xl mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{stage.desc}</p>
                <span className="inline-block bg-white px-2 py-1 text-xs font-semibold text-gray-800 border border-gray-200 rounded">
                  {stage.hl}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
