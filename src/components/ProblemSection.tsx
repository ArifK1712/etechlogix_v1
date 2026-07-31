import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { Network, Database, FileSpreadsheet, Lock, AlertTriangle, ArrowRight, UserCheck } from 'lucide-react';

interface EcosystemNode {
  title: string;
  category: string;
  icon: typeof Network;
  positionClass: string;
}

const problemNodes: EcosystemNode[] = [
  { title: 'Legacy Core Systems', category: 'COBOL / On-Prem DB', icon: Database, positionClass: 'top-0 left-0 md:left-8' },
  { title: 'Manual Spreadsheet Silos', category: 'Excel / Offline Files', icon: FileSpreadsheet, positionClass: 'top-12 right-4 md:right-16' },
  { title: 'Approval Bottlenecks', category: 'Delayed Handoffs', icon: Lock, positionClass: 'top-44 left-4 md:left-32' },
  { title: 'Disconnected Applications', category: 'SaaS Silos', icon: Network, positionClass: 'top-56 right-8 md:right-28' },
  { title: 'Duplicate Data Entry', category: 'Human Error Risk', icon: AlertTriangle, positionClass: 'top-96 left-8 md:left-20' },
  { title: 'Manual Exception Handling', category: 'Operational Friction', icon: UserCheck, positionClass: 'top-[28rem] right-4 md:right-20' },
];

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.problem-headline-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    gsap.from('.problem-node', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.4)',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f7f7f5] text-[#000000] py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="max-w-4xl">
          <p className="problem-headline-item text-[#df012a] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            THE ENTERPRISE CHALLENGE
          </p>
          <h2 className="problem-headline-item font-display font-bold text-3xl md:text-5xl lg:text-6xl text-[#000000] leading-tight">
            Most operational problems are not caused by a lack of software.
          </h2>
          <h2 className="problem-headline-item font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#df012a] mt-4 leading-tight">
            They are caused by disconnected software.
          </h2>
        </div>

        {/* Visual Operational Ecosystem Map (NOT cards!) */}
        <div className="mt-20 relative min-h-[500px] border border-black/10 rounded-2xl bg-white/60 p-8 md:p-12 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(#df012a_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* SVG Animated Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="20%" y1="15%" x2="80%" y2="25%" stroke="#df012a" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-40" />
            <line x1="25%" y1="18%" x2="35%" y2="55%" stroke="#df012a" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
            <line x1="75%" y1="30%" x2="65%" y2="70%" stroke="#df012a" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-40" />
            <line x1="35%" y1="58%" x2="70%" y2="75%" stroke="#df012a" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-40" />
          </svg>

          {/* Disconnected Ecosystem Nodes */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div
                  key={index}
                  className="problem-node group p-6 rounded-xl bg-white border border-black/10 hover:border-[#df012a] hover:bg-[#fbeaec]/60 transition-all duration-300 shadow-sm flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f7f7f5] group-hover:bg-[#df012a] text-[#df012a] group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#df012a] uppercase tracking-wider block mb-1">
                      {node.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#000000] group-hover:text-[#df012a] transition-colors">
                      {node.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Data Flow Indicator */}
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#555555]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#df012a] animate-ping" />
              <span>Data latency & fragmentation across departments</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#df012a]">
              <span>[DISCONNECTED API PATHS]</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Closing Highlight Statement */}
        <div className="problem-headline-item mt-20 border-l-4 border-[#df012a] pl-6 py-2 max-w-3xl">
          <p className="font-display font-bold text-xl md:text-3xl text-[#000000] leading-snug">
            We design the layer that connects, automates, and improves the entire operation.
          </p>
        </div>

      </div>
    </section>
  );
}
