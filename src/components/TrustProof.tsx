import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { Quote } from 'lucide-react';

export default function TrustProof() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.tp-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#090909] text-white py-16 lg:py-20 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="tp-elem font-display text-3xl md:text-5xl font-bold text-center max-w-4xl mx-auto mb-24 leading-tight">
          Trusted to solve complex business and technology challenges.
        </h2>

        <div className="tp-elem relative max-w-4xl text-center mb-20 px-4 md:px-12">
          <Quote className="w-16 h-16 text-[#df012a]/20 absolute -top-8 -left-2 md:-left-8 -z-10 rotate-180" />
          <p className="font-display text-2xl md:text-4xl text-white/90 leading-relaxed font-medium">
            "Our product was complex and required multiple skills. We chose eTechLogix for their track record, commitment to quality, and business sensitivity. And we were very pleased with the results."
          </p>
          <div className="mt-8 flex flex-col items-center justify-center">
            <p className="font-bold text-lg">Team DecorShore</p>
            <p className="text-white/50 text-sm mt-1">Enterprise Commerce Platform · 3+ Year Partnership</p>
          </div>
        </div>

        <div className="tp-elem w-full border-t border-white/10 pt-16 mt-8">
          <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-10 font-semibold">Our Enterprise Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented as clean text marks for now, per minimal design */}
            <div className="font-display text-2xl font-bold tracking-tighter">DecorShore</div>
            <div className="font-display text-xl font-medium flex items-center gap-2"><span className="w-6 h-6 bg-white rounded-sm inline-block"></span> Enterprise Java Ptrs</div>
            <div className="font-display text-2xl font-black italic tracking-wide">Cloud Tech</div>
            <div className="font-display text-xl uppercase tracking-widest border border-white px-2 py-1">HealthSys</div>
          </div>
        </div>
      </div>
    </section>
  );
}
