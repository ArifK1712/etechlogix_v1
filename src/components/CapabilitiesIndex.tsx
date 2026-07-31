import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { ChevronRight, Check } from 'lucide-react';

interface Capability {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

const capabilities: Capability[] = [
  {
    id: '01',
    title: 'Enterprise Custom Software',
    description: 'Purpose-built platforms engineered for mission-critical operations and complex business logic.',
    details: ['High-throughput Microservices', 'Custom Business Rules Engines', 'Enterprise Security & Compliance'],
    image: '/images/service-java.jpg',
  },
  {
    id: '02',
    title: 'Agentic AI Automation',
    description: 'Autonomous AI agents that execute multi-step workflows, process documents, and apply business policies.',
    details: ['Multi-agent Orchestration', 'Document & Contract Parsing', 'Human-in-the-Loop Guardrails'],
    image: '/images/service-ai.jpg',
  },
  {
    id: '03',
    title: 'Enterprise Integrations',
    description: 'Connecting CRM, ERP, legacy databases, and cloud services into a unified data architecture.',
    details: ['Middleware Architecture', 'Real-time Event Streaming', 'Custom API Adapters & SDKs'],
    image: '/images/service-cloud.jpg',
  },
  {
    id: '04',
    title: 'Legacy Modernization',
    description: 'Transforming outdated software and manual processes into resilient, modern cloud applications.',
    details: ['Database Refactoring', 'Monolith to Microservices', 'Zero-Downtime Migration'],
    image: '/images/architecture-whiteboard.jpg',
  },
  {
    id: '05',
    title: 'Product Prototyping',
    description: 'High-fidelity functional prototypes and demos designed to validate concepts and impress investors.',
    details: ['Clickable UX Prototypes', 'Working Proof of Concepts', 'Rapid MVP Architecture'],
    image: '/images/service-data.jpg',
  },
  {
    id: '06',
    title: 'Dedicated Engineering Teams',
    description: 'Embedded senior engineering teams with complete product ownership and delivery accountability.',
    details: ['Senior Technical Ownership', 'Agile Delivery Cadence', 'Direct SLA Accountability'],
    image: '/images/team-strategy.jpg',
  },
];

export default function CapabilitiesIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.capability-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
    });
  }, { scope: containerRef });

  const activeCapability = capabilities[activeIndex];

  return (
    <section ref={containerRef} className="bg-[#000000] text-white py-16 lg:py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="capability-header text-[#df012a] text-xs font-semibold uppercase tracking-widest mb-3">
            CAPABILITIES INDEX
          </p>
          <h2 className="capability-header font-display font-bold text-3xl md:text-5xl max-w-3xl leading-tight">
            Engineering capabilities built around your operations.
          </h2>
        </div>

        {/* Desktop 2-Column Split Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Capability Rows (01-06) */}
          <div className="lg:col-span-6 flex flex-col border-t border-white/10">
            {capabilities.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group py-8 px-4 border-b border-white/10 transition-all duration-300 cursor-pointer flex flex-col gap-3 relative ${
                    isActive ? 'bg-white/5 border-l-4 border-l-[#df012a] pl-6' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isActive ? 'text-[#df012a]' : 'text-white/40'}`}>
                        {item.id}
                      </span>
                      <h3 className={`font-display font-bold text-xl md:text-2xl transition-colors ${
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-[#df012a] translate-x-1' : 'text-white/30 group-hover:text-white/60'
                    }`} />
                  </div>

                  <p className={`text-sm leading-relaxed transition-all ${
                    isActive ? 'text-white/80 block' : 'text-white/40 hidden md:line-clamp-1'
                  }`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Preview Viewport */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090909] aspect-video lg:aspect-[4/3] shadow-2xl">
              <img
                src={activeCapability.image}
                alt={activeCapability.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs font-mono font-bold text-[#df012a] bg-[#df012a]/10 border border-[#df012a]/30 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                  CAPABILITY {activeCapability.id}
                </span>
                
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {activeCapability.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {activeCapability.description}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  {activeCapability.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                      <Check className="w-3.5 h-3.5 text-[#df012a]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
