import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DocumentAutomationHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.dataset.ready = 'true';
  }, []);

  return (
    <section ref={heroRef} className="document-hero relative overflow-hidden bg-white pt-[100px]" aria-labelledby="document-automation-title">
      <div className="document-automation-photo" role="img" aria-label="Digital intelligence profile emerging from a connected AI network" />

      <svg className="document-automation-arcs" viewBox="0 0 760 700" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="650" cy="350" rx="350" ry="258" stroke="#a3a3a3" strokeOpacity="0.18" strokeWidth="1" />
        <ellipse cx="650" cy="350" rx="274" ry="202" stroke="#df012a" strokeOpacity="0.09" strokeWidth="1" />
      </svg>

      <div className="document-main relative z-10 mx-auto grid min-h-[670px] w-full max-w-[1400px] px-5">
        <div className="document-hero-copy self-center pb-10 pt-12 lg:pb-4 lg:pt-0">
          <div className="document-hero-reveal mb-7">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Document Automation</p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h1 id="document-automation-title" className="service-hero-heading document-hero-reveal type-hero-heading mb-6 max-w-[820px] text-[#0a0a0a]">
            Turn documents into<br className="hidden sm:block" /> business-ready<br className="hidden sm:block" /> intelligence<span className="service-hero-dot">.</span>
          </h1>

          <p className="document-hero-reveal type-hero-lead mb-10 max-w-[560px] text-neutral-500">
            Transform contracts, forms, invoices, reports, and other document-heavy processes with AI that understands context and turns unstructured content into trusted, usable data.
          </p>

          <Link to="/contact" className="document-hero-reveal btn-etech btn-etech--primary-dark btn-etech--hero group">
            <span>Explore Document Automation</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="document-automation-mobile-photo" role="img" aria-label="Digital intelligence profile emerging from a connected AI network" />
      </div>
    </section>
  );
}
