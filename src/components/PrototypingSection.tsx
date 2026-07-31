import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { ArrowRight, CheckCircle2, Monitor, Smartphone } from 'lucide-react';

interface PrototypeStep {
  step: string;
  name: string;
  description: string;
}

const steps: PrototypeStep[] = [
  { step: '01', name: 'Concept', description: 'Transforming napkin ideas into structured functional specs.' },
  { step: '02', name: 'Product Definition', description: 'Architecture blueprints, user personas, and data schemas.' },
  { step: '03', name: 'UX Prototype', description: 'Interactive clickable wireframes designed for investor pitches.' },
  { step: '04', name: 'Functional Build', description: 'Working web & mobile code with real API integrations.' },
  { step: '05', name: 'Investor Demo', description: 'Polished demo environment ready to showcase market traction.' },
];

export default function PrototypingSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.proto-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#ffffff] text-[#000000] py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Headline */}
        <div className="max-w-4xl mb-16">
          <p className="proto-header text-[#df012a] text-xs font-bold uppercase tracking-widest mb-3">
            STARTUP & PRODUCT PROTOTYPING
          </p>
          <h2 className="proto-header font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#000000] leading-tight">
            Turn an idea into something <span className="text-[#df012a]">investors can experience.</span>
          </h2>
          <p className="proto-header text-[#555555] text-lg max-w-2xl mt-6 leading-relaxed">
            We help founders move beyond presentations by building functional prototypes and product demonstrations that communicate the opportunity clearly.
          </p>
        </div>

        {/* Visual Horizontal Timeline Flow (Interconnected Track) */}
        <div className="mt-12 mb-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-black/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => (
              <div 
                key={index}
                className="bg-[#f7f7f5] border border-black/10 hover:border-[#df012a] p-6 rounded-2xl transition-all duration-300 group hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-white bg-[#df012a] px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#df012a]/30 group-hover:bg-[#df012a] transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#000000] group-hover:text-[#df012a] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5 text-[10px] font-mono text-[#df012a] uppercase font-bold flex items-center justify-between">
                  <span>STAGE METRIC</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Prototype Workspace Frame */}
        <div className="rounded-3xl border border-black/10 bg-[#090909] text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-white/50 ml-2">
                etechlogix-prototype-environment.v2.live
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#df012a]/20 border border-[#df012a]/40 text-[#df012a] text-xs font-mono rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#df012a] animate-ping" />
                WORKING DEMO STATE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-mono text-[#df012a] uppercase tracking-widest block mb-2">
                LIVE DEMO CAPABILITY
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Interactive Multi-Platform Prototype
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Real code, working user authentication, live API connections, and responsive UI layouts built to pitch directly to angels, VCs, and early enterprise customers.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Monitor className="w-4 h-4 text-[#df012a]" /> Desktop App
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Smartphone className="w-4 h-4 text-[#df012a]" /> Mobile iOS/Android
                </span>
              </div>
            </div>

            <div className="bg-black/80 rounded-2xl p-6 border border-white/10 font-mono text-xs text-emerald-400 space-y-2">
              <div className="text-white/40">// Prototype API Request Output</div>
              <div><span className="text-purple-400">const</span> demoPayload = {'{'} status: <span className="text-amber-300">'APPROVED'</span>, investorAccess: <span className="text-[#df012a]">true</span> {'}'};</div>
              <div className="text-white/60">await eTechLogixCore.<span className="text-blue-400">deployFunctionalBuild</span>(demoPayload);</div>
              <div className="text-emerald-400 flex items-center gap-2 pt-2 border-t border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#df012a]" />
                <span>SUCCESS: Functional Prototype Live (Latency: 14ms)</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-[#df012a] text-white px-10 py-5 rounded-full font-bold text-base hover:bg-[#b80122] transition-colors shadow-lg shadow-[#df012a]/20 inline-flex items-center gap-3"
          >
            <span>Build a functional prototype</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
