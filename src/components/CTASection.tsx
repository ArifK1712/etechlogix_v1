import { useRef, useState, type MouseEvent } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
// Using local onMouseMove rather than import { useMousePosition } to ensure robustness within a section

export default function CTASection() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    gsap.from('.cta-content-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <img 
        src="/images/cta-abstract.jpg" 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/70 to-bg-primary/90"></div>
      
      <div 
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-accent-cyan/8 blur-[100px] pointer-events-none transition-none"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="cta-content-item text-text-secondary uppercase tracking-widest text-sm mb-6">
          Ready to Start?
        </div>
        
        <h2 
          className="cta-content-item font-display font-black text-text-primary leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
        >
          Let's Build
        </h2>
        <h2 
          className="cta-content-item font-display font-black gradient-text-cyan-gold leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
        >
          What's Next.
        </h2>
        
        <p className="cta-content-item text-text-secondary text-lg md:text-xl mt-8 max-w-2xl mx-auto">
          Whether you're modernizing legacy systems, scaling cloud infrastructure, or exploring AI, we are ready.
        </p>
        
        <div className="cta-content-item flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-accent-cyan text-bg-primary px-10 py-4 rounded-full font-semibold text-lg btn-glow hover:bg-accent-cyan-glow transition-all duration-300 cursor-pointer">
            Start a Conversation
          </button>
          <button className="border border-text-dim text-text-primary px-10 py-4 rounded-full font-semibold text-lg hover:border-accent-gold hover:text-accent-gold transition-all duration-300 cursor-pointer">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
