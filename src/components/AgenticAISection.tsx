import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { FileText, Cpu, CheckCircle2, Database, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  detail: string;
  techTag: string;
  icon: typeof FileText;
}

const stages: Stage[] = [
  {
    number: '01',
    title: 'Business Request Received',
    detail: 'Document, email, or invoice ingested via secure webhooks and multi-format OCR.',
    techTag: 'Ingestion Layer',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Information Understood & Validated',
    detail: 'Large language models parse unstructured data into validated structured JSON payload.',
    techTag: 'NLP Extraction',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Business Rules & Policies Applied',
    detail: 'Cross-checks against compliance policies, threshold limits, and enterprise contract logic.',
    techTag: 'Policy Engine',
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'ERP, CRM & Platform Updated',
    detail: 'Direct bi-directional API write to SAP, Salesforce, Oracle, or custom microservices.',
    techTag: 'API Integration',
    icon: Database,
  },
  {
    number: '05',
    title: 'Exception Routed & Activity Logged',
    detail: 'Out-of-bound edge cases sent to human reviewer with audit trail and confidence metrics.',
    techTag: 'Human-in-the-Loop',
    icon: UserCheck,
  },
];

export default function AgenticAISection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useGSAP(() => {
    gsap.from('.agentic-left-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#090909] text-white py-16 lg:py-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Sticky Left Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-2 text-[#df012a] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AGENTIC AI & WORKFLOW AUTOMATION</span>
          </div>
          
          <h2 className="agentic-left-item font-display font-extrabold text-3xl md:text-5xl leading-tight">
            AI agents that do the work — <span className="text-[#df012a]">not just generate the answer.</span>
          </h2>
          
          <p className="agentic-left-item text-white/70 text-base md:text-lg mt-6 leading-relaxed">
            We build AI agents that process documents, apply business rules, communicate with enterprise applications, route approvals, handle exceptions, and complete operational workflows.
          </p>

          <a 
            href="#contact" 
            className="agentic-left-item mt-8 inline-flex items-center gap-2 text-[#df012a] font-semibold hover:text-white transition-colors text-base"
          >
            <span>Explore Agentic AI solutions</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Live Pipeline Monitor Box */}
          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] text-white/50 font-mono block mb-2">LIVE PIPELINE MONITOR</span>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/80">Active Execution Stage:</span>
              <span className="font-mono text-[#df012a] font-bold">Stage {stages[activeStage].number}</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-[#df012a] h-full transition-all duration-500"
                style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: 5 Scroll Stages (Continuous Pipeline) */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#df012a] via-[#df012a]/50 to-white/10 hidden md:block" />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveStage(index)}
                className={`relative pl-0 md:pl-16 p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/10 border-[#df012a] shadow-xl shadow-[#df012a]/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step Circle Indicator */}
                <div 
                  className={`hidden md:flex absolute left-3 top-8 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center text-xs font-bold font-mono transition-colors duration-300 ${
                    isActive ? 'bg-[#df012a] text-white shadow-lg shadow-[#df012a]/50' : 'bg-[#111111] text-white/40 border border-white/20'
                  }`}
                >
                  {stage.number}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${isActive ? 'bg-[#df012a]/20 text-[#df012a]' : 'bg-white/5 text-white/60'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 shrink-0">
                    {stage.techTag}
                  </span>
                </div>

                <p className="text-white/70 text-sm mt-4 leading-relaxed">
                  {stage.detail}
                </p>

                {/* Workflow Status Pulse */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#df012a]">
                    <span className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#df012a] animate-ping" />
                      SYSTEM STATE: AUTOMATED EXECUTION IN PROGRESS
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
