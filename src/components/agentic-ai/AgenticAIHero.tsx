import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
} from 'lucide-react';

export default function AgenticAIHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.dataset.ready = 'true';
  }, []);

  return (
    <section ref={heroRef} className="agentic-hero relative overflow-hidden bg-white pt-[100px]" aria-labelledby="agentic-ai-title">
      <div className="agentic-photo" role="img" aria-label="Digital intelligence profile emerging from a connected AI network" />

      <svg className="agentic-arcs" viewBox="0 0 760 700" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="650" cy="350" rx="350" ry="258" stroke="#a3a3a3" strokeOpacity="0.18" strokeWidth="1" />
        <ellipse cx="650" cy="350" rx="274" ry="202" stroke="#df012a" strokeOpacity="0.09" strokeWidth="1" />
      </svg>

      <div className="agentic-main relative z-10 mx-auto grid min-h-[670px] max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="agentic-copy self-center pb-10 pt-12 lg:pb-4 lg:pt-0">
          <div className="agentic-reveal mb-7">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Agentic AI</p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>
          <h1 id="agentic-ai-title" className="agentic-reveal type-hero-heading mb-6 max-w-[820px] text-[#0a0a0a]">
            Autonomous AI.<br />Real Business Impact<span className="text-[#df012a]">.</span>
          </h1>
          <p className="agentic-reveal type-hero-lead mb-10 max-w-[540px] text-neutral-500">
            Agentic AI systems that reason, act, and adapt—working alongside your teams to automate complex processes and drive measurable outcomes.
          </p>
          <Link to="/contact" className="agentic-reveal btn-etech btn-etech--primary-dark btn-etech--hero group">
            <span>Let&apos;s Build Your AI Advantage</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="agentic-mobile-photo" role="img" aria-label="Digital intelligence profile emerging from a connected AI network" />
      </div>
    </section>
  );
}
