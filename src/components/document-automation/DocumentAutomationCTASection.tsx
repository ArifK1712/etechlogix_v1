import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FileText, Image as ImageIcon, LayoutGrid, File, AudioLines, ArrowRight, Calendar, User, Hash, MoreHorizontal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const inputTiles = [
  { id: 'pdf', label: 'INVOICE.PDF', icon: FileText, top: 12, left: 4 },
  { id: 'img', label: 'CONTRACT.JPG', icon: ImageIcon, top: 31, left: 10, hideMobile: true },
  { id: 'xls', label: 'REPORT.XLSX', icon: LayoutGrid, top: 50, left: 4 },
  { id: 'doc', label: 'FORM.DOCX', icon: File, top: 69, left: 10, hideMobile: true },
  { id: 'aud', title: 'AUDIO', label: 'CALL_RECORDING.MP3', icon: AudioLines, top: 88, left: 4, planned: true },
];

const sdRows = [
  { id: 't', char: 'T', w1: '60%', w2: '20%' },
  { id: 'cal', icon: Calendar, w1: '40%', w2: '30%' },
  { id: 's', char: 'S', w1: '55%', w2: '25%' },
  { id: 'usr', icon: User, w1: '45%', w2: '35%' },
  { id: 'o', char: 'O', w1: '65%', w2: '0%' },
  { id: 'hash', icon: Hash, w1: '35%', w2: '0%' },
  { id: 'more', icon: MoreHorizontal, w1: '50%', w2: '0%' },
];

export default function DocumentAutomationCTASection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    // STEP 1: Text content reveals
    tl.fromTo('.cta-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    // STEP 2: Input tiles stagger in (larger scale pop)
    tl.fromTo('.cta-tile',
      { opacity: 0, scale: 0.9, x: -10 },
      { opacity: 1, scale: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.5)' },
      '-=0.2'
    );

    // STEP 3: Connectors fade in
    tl.fromTo('.cta-connector',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.inOut', stagger: 0.02 },
      '-=0.2'
    );

    // STEP 4: Central dot pop
    tl.fromTo('.cta-hub',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '-=0.4'
    );

    // STEP 5: Structured Data block reveal
    tl.fromTo('.cta-sd-block',
      { opacity: 0, x: -15, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)' },
      '-=0.2'
    );

    tl.fromTo('.cta-sd-row',
      { opacity: 0, x: -5 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
      '-=0.3'
    );

    // Subtle Continuous Pulse
    if (!isReducedMotion) {
      gsap.to('.cta-hub-pulse', {
        scale: 2.2,
        opacity: 0,
        duration: 2.5,
        repeat: -1,
        ease: 'sine.out',
        delay: 1
      });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 lg:py-16 bg-white overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT: CONTENT (approx 40-42%) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="type-eyebrow-accent cta-text mb-4">DOCUMENT AUTOMATION</p>
            <h2 className="type-section-heading-lg cta-text mb-6">
              Ready to unlock the<br className="hidden xl:block" />
              data inside your<br className="hidden xl:block" />
              documents<span className="text-brand-red">.</span>
            </h2>
            <p className="type-body cta-text text-neutral-500 max-w-md mb-10 text-balance">
              Every document holds valuable information. eTechLogix helps you turn it into clean, structured data your teams can actually use.
            </p>
            <div className="cta-text">
              <Link
                to="/contact"
                className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex"
              >
                <span>Talk to Our Team</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: VISUAL METAPHOR (approx 58-60%) */}
          {/* Drastically scaled up container */}
          <div className="lg:col-span-7 relative w-full h-[450px] sm:h-[550px] lg:h-[650px]">
            
            {/* BACKGROUND TEXTURES */}
            {/* Dot Grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
            
            {/* Red Glow near convergence point */}
            <div className="absolute top-[50%] left-[62%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none z-0"></div>

            {/* CONNECTOR SVG LAYER */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#df012a" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#df012a" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="secondary-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#df012a" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#df012a" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Generate dynamic rich paths wrapping from behind tiles to the center */}
              {inputTiles.map((tile) => {
                const startX = tile.left + 5; // Starts safely underneath the white tile
                const startY = tile.top;
                const endX = 62;
                const endY = 50;
                const hiddenClass = tile.hideMobile ? 'hidden sm:block' : '';
                
                return (
                  <g key={`paths-${tile.id}`} className={hiddenClass}>
                    {/* Primary Solid Trace */}
                    <path className="cta-connector fill-none" stroke="url(#primary-grad)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" 
                      d={`M ${startX} ${startY} C ${startX + 18} ${startY}, ${endX - 12} ${endY}, ${endX} ${endY}`} />
                    
                    {/* Hairline Upper Trace */}
                    <path className="cta-connector fill-none" stroke="url(#secondary-grad)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" 
                      d={`M ${startX} ${startY - 1} C ${startX + 20} ${startY - 4}, ${endX - 10} ${endY - 1}, ${endX} ${endY}`} />
                      
                    {/* Hairline Lower Trace */}
                    <path className="cta-connector fill-none" stroke="url(#secondary-grad)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" 
                      d={`M ${startX} ${startY + 1} C ${startX + 20} ${startY + 4}, ${endX - 10} ${endY + 1}, ${endX} ${endY}`} />
                  </g>
                );
              })}
              
              {/* Subtle line from center to structured data card */}
              <path className="cta-connector fill-none" stroke="#df012a" strokeOpacity="0.3" strokeWidth="1" vectorEffect="non-scaling-stroke" d="M 62 50 L 70 50" />
            </svg>

            {/* INPUT TILES (Refined compact dimensions) */}
            {inputTiles.map((tile) => (
              <div 
                key={tile.id}
                className={`cta-tile absolute z-10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-white border border-neutral-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] rounded-xl w-[115px] sm:w-[130px] h-[85px] sm:h-[94px] -translate-y-1/2 ${tile.hideMobile ? 'hidden sm:flex' : ''}`}
                style={{ top: `${tile.top}%`, left: `${tile.left}%` }}
              >
                <tile.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-red stroke-[1.2]" />
                <div className="flex flex-col items-center">
                  {tile.title && <span className="text-[9px] sm:text-[10px] font-bold text-neutral-800 tracking-wide">{tile.title}</span>}
                  <span className="text-[8.5px] sm:text-[9.5px] font-mono font-medium text-neutral-500 tracking-tight">{tile.label}</span>
                </div>
                
                {tile.planned && (
                  <div className="absolute -bottom-2.5 border border-brand-red/15 bg-white px-2 py-0.5 rounded-full shadow-sm text-[7px] sm:text-[8px] uppercase tracking-widest font-bold text-brand-red/80">
                    Planned
                  </div>
                )}
              </div>
            ))}

            {/* CENTRAL CONVERGENCE POINT */}
            <div className="cta-hub absolute z-20 top-[50%] left-[62%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-red rounded-full relative z-10 shadow-[0_0_12px_rgba(223,1,42,0.6)]"></div>
              <div className="cta-hub-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-brand-red/50 z-0"></div>
            </div>

            {/* STRUCTURED DATA CARD (Scaled up with proportional internal elements) */}
            <div className="cta-sd-block absolute z-10 top-[50%] left-[68%] -translate-y-1/2 flex flex-col justify-between bg-white border border-neutral-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.07)] rounded-2xl p-6 sm:p-7 w-[185px] sm:w-[240px] min-h-[290px] sm:min-h-[330px]">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-brand-red uppercase mb-4 sm:mb-5 text-center">
                Structured Data
              </span>
              
              <div className="flex flex-col gap-3.5 sm:gap-4 my-auto">
                {sdRows.map((row) => (
                  <div key={row.id} className="cta-sd-row flex items-center gap-3 sm:gap-3.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
                      {row.char ? (
                        <span className="text-[11px] sm:text-[12.5px] font-bold text-brand-red leading-none">{row.char}</span>
                      ) : (
                        <row.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red stroke-[2]" />
                      )}
                    </div>
                    <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
                      <div className="h-2 sm:h-2.5 bg-neutral-100 rounded-full" style={{ width: row.w1 }}></div>
                      {row.w2 !== '0%' && (
                        <div className="h-2 sm:h-2.5 bg-neutral-100 rounded-full" style={{ width: row.w2 }}></div>
                      )}
                    </div>
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
