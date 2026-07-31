import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { Database, Server, FileSpreadsheet, Unlink, AlertTriangle, Cloud, Lock, Layers, Zap, Layout } from 'lucide-react';

export default function ModernizationSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.mod-headline', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.mod-canvas', {
      scrollTrigger: {
        trigger: '.mod-canvas',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section ref={containerRef} className="bg-[#090909] text-white py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mod-headline font-display text-3xl md:text-5xl font-extrabold max-w-4xl mb-16 leading-tight">
          Modernize what is holding your business back — <br className="hidden md:block" />
          <span className="text-[#df012a]">without disrupting what already works.</span>
        </h2>

        {/* Interactive Canvas */}
        <div 
          ref={sliderRef}
          className="mod-canvas relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Legacy State (Base layer) */}
          <div className="absolute inset-0 bg-[#0c0c0c] p-8 flex flex-col justify-center items-start border-r border-white/5">
            <div className="absolute top-6 left-6 z-10">
              <span className="inline-block text-red-400 bg-red-950/40 border border-red-800/40 px-3 py-1 text-xs font-mono rounded">
                CURRENT LEGACY STATE
              </span>
            </div>
            
            <div className="relative w-full h-full mt-12">
              {/* Fragmented nodes pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                  <path d="M 100,100 L 200,300 M 300,150 L 150,400 M 400,200 L 250,500" stroke="#f87171" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full relative z-10 opacity-60 pointer-events-none">
                <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-black/40 h-32 mt-10">
                  <Server className="w-8 h-8 text-red-500 mb-2 opacity-70" />
                  <span className="text-sm text-white/50 text-center">Aging Applications</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-black/40 h-32 mt-32">
                  <Database className="w-8 h-8 text-red-500 mb-2 opacity-70" />
                  <span className="text-sm text-white/50 text-center">Legacy SQL</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-black/40 h-32 mt-4">
                  <FileSpreadsheet className="w-8 h-8 text-red-500 mb-2 opacity-70" />
                  <span className="text-sm text-white/50 text-center">Manual Entry</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-black/40 h-32 mt-16">
                  <Unlink className="w-8 h-8 text-red-500 mb-2 opacity-70" />
                  <span className="text-sm text-white/50 text-center">Brittle Scripts</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-black/40 h-32 mt-8">
                  <AlertTriangle className="w-8 h-8 text-red-500 mb-2 opacity-70" />
                  <span className="text-sm text-white/50 text-center">Data Silos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modernized State (Overlay layer clipped by slider) */}
          <div 
            className="absolute inset-0 bg-[#061210] p-8 flex flex-col justify-center items-end"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <div className="absolute top-6 right-6 z-10">
              <span className="inline-block text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 text-xs font-mono rounded">
                MODERNIZED ETECHLOGIX LAYER
              </span>
            </div>
            
            <div className="relative w-full h-full mt-12">
               {/* Connected nodes pattern */}
               <div className="absolute inset-0 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <path d="M 500,200 L 700,100 M 500,200 L 700,300 M 700,100 L 900,200 M 700,300 L 900,200 M 900,200 L 1100,200" stroke="#10b981" strokeWidth="2" />
                  <circle cx="500" cy="200" r="4" fill="#10b981" />
                  <circle cx="700" cy="100" r="4" fill="#10b981" />
                  <circle cx="700" cy="300" r="4" fill="#10b981" />
                  <circle cx="900" cy="200" r="4" fill="#10b981" />
                  <circle cx="1100" cy="200" r="4" fill="#10b981" />
                </svg>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full relative z-10 opacity-90 pointer-events-none justify-items-end">
                 <div className="flex flex-col items-center justify-center p-4 border border-emerald-500/20 rounded-lg bg-emerald-950/20 h-32 mt-4 backdrop-blur-sm w-full max-w-[160px]">
                  <Cloud className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-emerald-100 text-center">Cloud Native</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-emerald-500/20 rounded-lg bg-emerald-950/20 h-32 mt-20 backdrop-blur-sm w-full max-w-[160px]">
                  <Lock className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-emerald-100 text-center">Secure Gateway</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-emerald-500/20 rounded-lg bg-emerald-950/20 h-32 mt-8 backdrop-blur-sm w-full max-w-[160px]">
                  <Layers className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-emerald-100 text-center">Central Data</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-emerald-500/20 rounded-lg bg-emerald-950/20 h-32 mt-16 backdrop-blur-sm w-full max-w-[160px]">
                  <Zap className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-emerald-100 text-center">Automated AI</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-emerald-500/20 rounded-lg bg-emerald-950/20 h-32 mt-2 backdrop-blur-sm w-full max-w-[160px]">
                  <Layout className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-emerald-100 text-center">Modern UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none z-20"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white/40 text-sm mt-6 font-mono tracking-widest uppercase">Drag to reveal transformation</p>
      </div>
    </section>
  );
}
