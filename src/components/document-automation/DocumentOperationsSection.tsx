import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Folder, Search, FileText, SlidersHorizontal, LayoutGrid, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const manualSteps = [
  { id: 'open', title: 'OPEN', desc: 'Find the document', icon: Folder },
  { id: 'locate', title: 'LOCATE', desc: 'Find the information', icon: Search },
  { id: 'copy', title: 'COPY', desc: 'Extract the values', icon: FileText },
  { id: 'reformat', title: 'REFORMAT', desc: 'Adjust to the required format', icon: SlidersHorizontal },
  { id: 'organize', title: 'ORGANIZE', desc: 'Place in the right fields', icon: LayoutGrid },
];

export default function DocumentOperationsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    // STEP 1: Left text reveal
    tl.fromTo('.doc-op-text', 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    // STEP 2: Manual-work steps reveal
    tl.fromTo('.doc-op-step',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    );

    // STEP 3: Pale-red traces reveal
    if (!isReducedMotion) {
      tl.fromTo('.doc-op-trace',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.inOut' },
        '-=0.2'
      );
    } else {
      tl.fromTo('.doc-op-trace', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');
    }

    // STEP 4: Red dot pulses
    tl.fromTo('.doc-op-axis', { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2');
    tl.fromTo('.doc-op-dot',
      { scale: 0 },
      { scale: 1, duration: 0.4, ease: 'back.out(1.5)' },
      '-=0.2'
    );
    tl.fromTo('.doc-op-pulse',
      { scale: 0.8, opacity: 0.8 },
      { scale: 2.5, opacity: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.2'
    );

    // STEP 5: Outcome area reveals
    tl.fromTo('.doc-op-outcome-item',
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
      '-=0.4'
    );

    // Very subtle breathing on red dot after sequence
    if (!isReducedMotion) {
      gsap.to('.doc-op-dot', {
        scale: 1.15,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5
      });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 lg:py-16 bg-[#fafafa] overflow-hidden border-t border-neutral-200/70">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="doc-op-text flex flex-col items-start mb-6">
              <p className="type-eyebrow-accent uppercase mb-3">DOCUMENT OPERATIONS</p>
              <div className="w-8 h-[2px] bg-brand-red"></div>
            </div>
            <h2 className="doc-op-text type-section-heading-lg mb-6 max-w-[400px]">
              Reduce the work<br />
              between documents<br />
              and usable data<span className="text-brand-red">.</span>
            </h2>
            <p className="doc-op-text type-body text-neutral-500 max-w-[380px]">
              Turn repetitive document handling into a cleaner path from incoming information to structured data ready for business use.
            </p>
          </div>

          {/* RIGHT COLUMN - VISUAL (Desktop) */}
          <div className="hidden lg:flex lg:col-span-7 relative w-full h-[580px] items-stretch">
            
            {/* SVG Traces Overlay */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Vertical axis line */}
              <line className="doc-op-axis stroke-brand-red/30" strokeWidth="0.25" x1="61.5" y1="8" x2="61.5" y2="92" />
              
              {/* Converging Traces */}
              {/* Manual steps align to y: 19, 36.5, 54.1, 71.7, 89.3. Center dot is at (61.5, 54.1) */}
              <path className="doc-op-trace stroke-brand-red/40 fill-none" strokeWidth="0.25" vectorEffect="non-scaling-stroke" d="M 42 19 L 49 19 C 56 19, 57 54.1, 61.5 54.1" />
              <path className="doc-op-trace stroke-brand-red/40 fill-none" strokeWidth="0.25" vectorEffect="non-scaling-stroke" d="M 42 36.5 L 49 36.5 C 55 36.5, 57 54.1, 61.5 54.1" />
              <path className="doc-op-trace stroke-brand-red/40 fill-none" strokeWidth="0.25" vectorEffect="non-scaling-stroke" d="M 42 54.1 L 61.5 54.1" />
              <path className="doc-op-trace stroke-brand-red/40 fill-none" strokeWidth="0.25" vectorEffect="non-scaling-stroke" d="M 42 71.7 L 49 71.7 C 55 71.7, 57 54.1, 61.5 54.1" />
              <path className="doc-op-trace stroke-brand-red/40 fill-none" strokeWidth="0.25" vectorEffect="non-scaling-stroke" d="M 42 89.3 L 49 89.3 C 56 89.3, 57 54.1, 61.5 54.1" />
            </svg>

            {/* MANUAL WORK (Left area ~ 55%) */}
            <div className="w-[55%] flex flex-col relative z-10 pr-8 pt-8 pb-8">
              <div className="doc-op-text text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase mb-8 pl-[72px] h-4">
                MANUAL WORK
              </div>
              <div className="flex flex-col w-full justify-between flex-1">
                {manualSteps.map((step) => (
                  <div key={step.id} className="doc-op-step flex items-start gap-5 border-b border-neutral-100/80 pb-5 last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-full bg-brand-red/5 border border-brand-red/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <span className="font-display text-lg font-semibold uppercase leading-[1.25] tracking-[-0.015em] text-[#111111] md:text-xl mb-0.5">{step.title}</span>
                      <span className="type-body text-neutral-500">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TRANSITION AXIS (~13%) */}
            <div className="w-[13%] relative z-20 flex flex-col pt-8 pb-8">
               <div className="h-4 mb-8"></div>
               <div className="flex-1 flex justify-center items-center">
                 <div className="doc-op-dot w-2 h-2 rounded-full bg-brand-red relative">
                    <div className="doc-op-pulse absolute inset-[-5px] rounded-full border border-brand-red/30 opacity-0"></div>
                 </div>
               </div>
            </div>

            {/* OUTCOME (~32%) */}
            <div className="w-[32%] flex flex-col relative z-10 pl-6 pt-8 pb-8">
              <div className="doc-op-outcome-item text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase mb-8 text-center h-4">
                WITH DOCUMENT AUTOMATION
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center text-center w-full mt-2">
                <div className="doc-op-outcome-item w-16 h-16 rounded-full border border-brand-red/20 bg-white flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(223,1,42,0.06)]">
                  <Check className="w-7 h-7 text-brand-red" strokeWidth={1.5} />
                </div>
                
                <h4 className="doc-op-outcome-item font-display text-lg font-semibold uppercase leading-[1.25] tracking-[-0.015em] text-brand-red md:text-xl mb-1">
                  STRUCTURED DATA
                </h4>
                
                <p className="doc-op-outcome-item text-body text-neutral-800 mb-6">
                  Clean. Consistent.<br />
                  Ready for business use.
                </p>

                {/* Abstract Data Representation */}
                <div className="doc-op-outcome-item flex flex-col gap-3 w-[320px] opacity-75">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={`data-row-${i}`} className="flex items-center gap-3.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0"></div>
                      <div className="h-[3px] w-full bg-neutral-200 rounded-full"></div>
                      <div className="h-[3px] w-20 bg-neutral-100 rounded-full shrink-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* MOBILE VISUAL (Stacked) */}
          <div className="lg:hidden flex flex-col gap-10 w-full mt-6">
            
            {/* Manual Work */}
            <div className="flex flex-col w-full py-4">
              <div className="text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase mb-8 text-center">
                MANUAL WORK
              </div>
              <div className="flex flex-col gap-2">
                {manualSteps.map((step) => (
                  <div key={`m-${step.id}`} className="doc-op-step flex items-start gap-4 border-b border-neutral-200/50 pb-5 mb-1 last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-full bg-brand-red/5 border border-brand-red/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="font-display text-lg font-semibold uppercase leading-[1.25] tracking-[-0.015em] text-[#111111] md:text-xl mb-0.5">{step.title}</span>
                      <span className="type-body text-neutral-500">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Axis Indicator */}
            <div className="flex justify-center items-center h-8">
               <div className="w-[1px] h-full bg-brand-red/30 absolute"></div>
               <div className="w-2 h-2 bg-brand-red rounded-full relative z-10">
                  <div className="absolute inset-[-5px] rounded-full border border-brand-red/30 animate-ping opacity-50"></div>
               </div>
            </div>

            {/* Outcome */}
            <div className="flex flex-col items-center text-center w-full py-6 relative overflow-hidden">
              <div className="text-[10px] font-bold text-neutral-400 tracking-[0.2em] uppercase mb-8 z-10">
                WITH DOCUMENT AUTOMATION
              </div>
              
              <div className="w-16 h-16 rounded-full border border-brand-red/20 bg-white flex items-center justify-center mb-4 z-10 shadow-[0_4px_20px_rgba(223,1,42,0.06)]">
                <Check className="w-7 h-7 text-brand-red" strokeWidth={1.5} />
              </div>
              
              <h4 className="font-display text-lg font-semibold uppercase leading-[1.25] tracking-[-0.015em] text-brand-red md:text-xl mb-1 z-10">
                STRUCTURED DATA
              </h4>
              
              <p className="text-body text-neutral-800 mb-6 z-10">
                Clean. Consistent.<br />
                Ready for business use.
              </p>

              <div className="flex flex-col gap-3 w-[280px] opacity-75 z-10">
                {[1, 2, 3].map((i) => (
                  <div key={`m-data-row-${i}`} className="flex items-center gap-3.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0"></div>
                    <div className="h-[3px] w-full bg-neutral-200 rounded-full"></div>
                    <div className="h-[3px] w-16 bg-neutral-100 rounded-full shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
