import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Image as ImageIcon, FileSpreadsheet, File } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const inputTypes = [
  { id: 'pdf', label: 'PDF', icon: FileText, desc: 'Invoice #4029', yPos: 15 },
  { id: 'image', label: 'IMAGE', icon: ImageIcon, desc: 'Scanned Receipt', yPos: 38 },
  { id: 'spreadsheet', label: 'SPREADSHEET', icon: FileSpreadsheet, desc: 'Line Items', yPos: 62 },
  { id: 'document', label: 'DOCUMENT', icon: File, desc: 'Vendor Contract', yPos: 85 },
];

const structuredData = [
  { label: 'Company', value: 'Acme Corp' },
  { label: 'Document Type', value: 'Invoice' },
  { label: 'Invoice Number', value: 'INV-4029' },
  { label: 'Date', value: 'Oct 24, 2023' },
  { label: 'Amount', value: '$4,200.00' },
  { label: 'Currency', value: 'USD' },
  { label: 'Reference', value: 'PO-9921' },
];

export default function AIExtractionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Entrance Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    tl.fromTo('.extract-header', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    tl.fromTo('.extract-input-card',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      '-=0.2'
    );

    tl.fromTo('.extract-base-line',
      { strokeDasharray: 100, strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut', stagger: 0.1 },
      '-=0.2'
    );

    tl.fromTo('.extract-hub-container',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' },
      '-=0.4'
    );

    tl.fromTo('.extract-base-line-out',
      { strokeDasharray: 100, strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' },
      '-=0.2'
    );

    tl.fromTo('.extract-right-panel',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    );

    tl.fromTo('.extract-data-row',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
      '-=0.1'
    );

    tl.fromTo('.extract-footer',
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '+=0.1'
    );

    // Reveal the pulses only after lines are drawn
    tl.fromTo('.extract-pulses-wrapper', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

    // Continuous Animations
    if (!isReducedMotion && containerRef.current) {
      gsap.fromTo('.extract-pulse-in',
        { strokeDashoffset: 104 },
        { strokeDashoffset: 0, duration: 3.2, ease: 'none', repeat: -1, stagger: 0.4 }
      );

      gsap.fromTo('.extract-pulse-out',
        { strokeDashoffset: 104 },
        { strokeDashoffset: 0, duration: 2.6, ease: 'none', repeat: -1 }
      );

      gsap.to('.extract-hub-core', { 
        scale: 1.03, 
        duration: 2.8, 
        ease: 'sine.inOut', 
        repeat: -1, 
        yoyo: true 
      });

      gsap.to('.extract-hub-ring-1', { 
        scale: 1.8, 
        opacity: 0, 
        duration: 3, 
        ease: 'sine.out', 
        repeat: -1 
      });

      gsap.to('.extract-hub-ring-2', { 
        scale: 2.2, 
        opacity: 0, 
        duration: 3, 
        delay: 1.5, 
        ease: 'sine.out', 
        repeat: -1 
      });

      gsap.to('.extract-vertical-signal', { 
        opacity: 0.2, 
        duration: 4, 
        ease: 'sine.inOut', 
        repeat: -1, 
        yoyo: true 
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-white overflow-hidden border-t border-neutral-200/70">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* AREA 1 — SECTION INTRO */}
        <div className="mb-10 lg:mb-12 max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="type-eyebrow-accent extract-header mb-4">AI-POWERED EXTRACTION</p>
          <h2 className="type-section-heading-lg extract-header mb-6">
            Different formats. One structured outcome.
          </h2>
          <p className="type-body extract-header text-neutral-500 max-w-3xl text-balance">
            Extract data with high accuracy from unstructured documents. Our AI hub instantly digitizes, classifies, and maps fields from any format directly into your systems.
          </p>
        </div>

        {/* AREA 2 — EXTRACTION VISUAL (Desktop Layout) */}
        <div className="hidden lg:grid relative w-full items-center" style={{ gridTemplateColumns: '34% 18% 38%', columnGap: '5%' }}>
          
          {/* Connector SVG Overlay covering only Area 2 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Anchor Dots */}
            {inputTypes.map((item) => (
              <circle key={`dot-start-${item.id}`} cx="34" cy={item.yPos} r="0.4" className="fill-brand-red/40" />
            ))}
            <circle cx="48" cy="50" r="0.4" className="fill-brand-red/40" />
            <circle cx="52" cy="50" r="0.4" className="fill-brand-red/40" />
            <circle cx="62" cy="50" r="0.4" className="fill-brand-red/40" />

            {/* Base Solid Lines */}
            {inputTypes.map((item) => (
              <path
                key={`base-line-${item.id}`}
                className={`extract-base-line fill-none transition-all duration-300 ${
                  hoveredId === item.id ? 'stroke-brand-red opacity-40' : 'stroke-brand-red/40 opacity-25'
                }`}
                strokeWidth={hoveredId === item.id ? "1.5" : "1"}
                vectorEffect="non-scaling-stroke"
                pathLength="100"
                d={`M 34 ${item.yPos} C 41 ${item.yPos}, 41 50, 48 50`}
              />
            ))}
            <path
              className="extract-base-line-out fill-none stroke-brand-red/40 opacity-25"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              pathLength="100"
              d="M 52 50 L 62 50"
            />

            {/* Traveling Pulses */}
            <g className="extract-pulses-wrapper opacity-0">
              {inputTypes.map((item) => (
                <path
                  key={`pulse-line-${item.id}`}
                  className={`extract-pulse-in fill-none transition-all duration-300 ${
                    hoveredId === item.id ? 'stroke-brand-red opacity-100' : 'stroke-brand-red opacity-60'
                  }`}
                  strokeWidth={hoveredId === item.id ? "2.5" : "1.5"}
                  vectorEffect="non-scaling-stroke"
                  pathLength="100"
                  strokeDasharray="4 100"
                  d={`M 34 ${item.yPos} C 41 ${item.yPos}, 41 50, 48 50`}
                />
              ))}
              <path
                className="extract-pulse-out fill-none stroke-brand-red opacity-80"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                pathLength="100"
                strokeDasharray="4 100"
                d="M 52 50 L 62 50"
              />
            </g>
          </svg>

          {/* LEFT: SOURCE DOCUMENTS */}
          <div className="flex flex-col gap-6 justify-center relative z-10 w-full h-full py-4">
            {inputTypes.map((item) => (
              <div
                key={item.id}
                className={`extract-input-card w-full bg-white border rounded-xl p-3.5 flex items-center gap-4 transition-all duration-300 cursor-default shadow-sm ${
                  hoveredId === item.id 
                    ? 'border-brand-red/40 shadow-[0_4px_20px_rgba(223,1,42,0.08)] -translate-y-0.5' 
                    : 'border-neutral-200 hover:border-brand-red/30 hover:shadow-md'
                } ${hoveredId && hoveredId !== item.id ? 'opacity-50 grayscale-[0.2]' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                 <div className="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center border border-brand-red/20 shrink-0">
                    <item.icon className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-neutral-400 tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-[15px] font-medium text-neutral-800">{item.desc}</div>
                  </div>
              </div>
            ))}
          </div>

          {/* CENTER: EXTRACTION VISUAL */}
          <div className="extract-hub-container relative h-full w-full flex flex-col items-center justify-center z-10 py-10">
            {/* Light vertical intelligence field */}
            <div className="extract-vertical-signal absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-red/40 to-transparent opacity-50"></div>
            
            {/* Premium AI Hub */}
            <div className="extract-hub-core bg-white rounded-2xl border border-brand-red/15 shadow-[0_8px_30px_rgba(223,1,42,0.08)] p-5 px-6 flex flex-col items-center gap-3.5 relative z-10">
               <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="extract-hub-ring-1 absolute inset-0 rounded-full border border-brand-red/30"></div>
                  <div className="extract-hub-ring-2 absolute inset-0 rounded-full border border-brand-red/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red shadow-[0_0_12px_rgba(223,1,42,0.8)] z-10"></div>
               </div>
               <span className="text-[10px] font-bold tracking-[0.15em] text-brand-red text-center uppercase leading-tight">
                 AI-Powered<br/>Extraction
               </span>
            </div>
          </div>

          {/* RIGHT: STRUCTURED DATA */}
          <div className="extract-right-panel w-full bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden z-10">
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4">
              <h3 className="text-xs font-bold text-white tracking-widest">STRUCTURED DATA</h3>
            </div>
            <div className="p-2 bg-white">
              {structuredData.map((row, i) => (
                <div 
                  key={i} 
                  className={`extract-data-row flex justify-between items-center px-4 py-2.5 border-b border-neutral-100 last:border-0 rounded-md transition-colors duration-300 ${
                    hoveredId ? 'bg-neutral-50' : ''
                  }`}
                >
                  <span className="text-[14px] text-neutral-500 font-medium">{row.label}</span>
                  <span className={`text-[14px] font-medium transition-colors duration-300 ${hoveredId ? 'text-brand-red' : 'text-neutral-900'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="lg:hidden flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {inputTypes.map((item) => (
              <div key={item.id} className="extract-input-card flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center border border-brand-red/20 shrink-0">
                  <item.icon className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-neutral-400 tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-[15px] font-medium text-neutral-800">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="extract-hub-container flex justify-center py-6">
            <div className="extract-hub-core bg-white rounded-2xl border border-brand-red/15 shadow-[0_8px_30px_rgba(223,1,42,0.08)] p-5 px-6 flex flex-col items-center gap-3.5 relative">
               <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="extract-hub-ring-1 absolute inset-0 rounded-full border border-brand-red/30"></div>
                  <div className="extract-hub-ring-2 absolute inset-0 rounded-full border border-brand-red/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red shadow-[0_0_12px_rgba(223,1,42,0.8)] z-10"></div>
               </div>
               <span className="text-[11px] font-bold tracking-[0.15em] text-brand-red text-center uppercase leading-tight">
                 AI-Powered<br/>Extraction
               </span>
            </div>
          </div>

          <div className="extract-right-panel rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4">
              <h3 className="text-sm font-bold text-white tracking-wide">STRUCTURED DATA</h3>
            </div>
            <div className="p-2">
              {structuredData.map((row, i) => (
                <div key={i} className="extract-data-row flex justify-between items-center px-4 py-3 border-b border-neutral-100 last:border-0 rounded-lg">
                  <span className="text-sm text-neutral-500 font-medium">{row.label}</span>
                  <span className="text-sm text-neutral-900 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="extract-footer text-center mt-10 lg:mt-12">
          <p className="text-lg md:text-xl font-medium text-neutral-900">
            Different inputs. <span className="text-brand-red">Consistent data.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
