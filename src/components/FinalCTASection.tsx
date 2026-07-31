import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTASection() {
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      }
    });

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
      });
    }

    tl.from('.cta-content', { opacity: 0, y: 40, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=1.5');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#000000] text-white py-16 lg:py-20 px-6 relative flex items-center justify-center overflow-hidden min-h-[80vh]">
      {/* Animated Path Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <svg viewBox="0 0 1000 400" className="w-full max-w-6xl h-auto" preserveAspectRatio="xMidYMid slice">
          <path 
            ref={pathRef}
            d="M -100,200 C 200,400 300,50 500,200 C 700,350 800,-50 1100,200" 
            fill="none" 
            stroke="#df012a" 
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="cta-content font-display text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-6">
          Bring us the operational problem everyone else has learned to work around.
        </h2>
        
        <p className="cta-content text-white/70 text-lg md:text-xl max-w-2xl mx-auto mt-6">
          We will help you turn it into a system your business can rely on.
        </p>
        
        <div className="cta-content mt-12 flex flex-col items-center">
          <button className="bg-[#df012a] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#b80122] transition-all duration-300 shadow-xl shadow-[#df012a]/20 inline-flex items-center gap-3 group">
            <MessageSquare className="w-5 h-5" />
            Start a conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a href="mailto:hello@etechlogix.com" className="text-white/60 hover:text-white text-base block mt-8 transition-colors font-medium">
            hello@etechlogix.com
          </a>
        </div>
      </div>
    </section>
  );
}
