import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnterpriseIntegrationsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [...(contentRef.current?.children ?? [])] as HTMLElement[];

    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'none';
    });

    const delay = 80;
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * delay);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-white overflow-hidden"
      aria-label="Enterprise Integrations — Hero"
    >
      {/* ── Subtle background accents ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Very faint red abstract lines — top left */}
        <svg className="absolute -top-20 -left-32 w-[520px] opacity-[0.04]" viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80" x2="520" y2="80" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="160" x2="520" y2="160" stroke="#df012a" strokeWidth="1" />
          <line x1="0" y1="240" x2="520" y2="240" stroke="#df012a" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="420" stroke="#df012a" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="420" stroke="#df012a" strokeWidth="1" />
          <line x1="360" y1="0" x2="360" y2="420" stroke="#df012a" strokeWidth="1" />
        </svg>

        {/* Diagonal accent — top right */}
        <svg className="absolute top-0 right-0 w-[340px] opacity-[0.035]" viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="340" y1="0" x2="0" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="380" y1="0" x2="40" y2="280" stroke="#df012a" strokeWidth="1" />
          <line x1="420" y1="0" x2="80" y2="280" stroke="#df012a" strokeWidth="1" />
        </svg>

        {/* Faint dot grid — bottom center */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] opacity-[0.04]" viewBox="0 0 640 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 9 }).map((_, row) =>
            Array.from({ length: 17 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 40} cy={row * 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>

        {/* Thin red top border accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[2px] bg-[#df012a] opacity-60" />

        {/* Primary ambient glow — behind headline */}
        <div
          style={{
            position: 'absolute',
            top: '-8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140%',
            maxWidth: '1440px',
            height: '72%',
            background: 'radial-gradient(ellipse 68% 58% at 50% 36%, rgba(223,1,42,0.07) 0%, rgba(223,1,42,0.028) 40%, rgba(223,1,42,0.008) 65%, transparent 80%)',
            filter: 'blur(56px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-33 pb-20">
        <div ref={contentRef} className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em]">Enterprise Integrations</span>
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
          </div>

          {/* Headline — uses homepage type-hero-heading for consistent sizing */}
          <h1 className="type-hero-heading text-[#0a0a0a] max-w-[820px] text-balance mb-7">
            Connect the systems{' '}
            <span className="text-[#df012a]">your business runs on.</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="type-hero-lead max-w-[580px] text-neutral-500 mb-11 text-center">
            We connect enterprise platforms, applications, APIs and data so information moves reliably across your business — without disconnected systems slowing your teams down.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-0">
            <Link to="/contact" className="btn-etech btn-etech--primary-dark btn-etech--hero group">
              <span className="relative z-10 whitespace-nowrap">Discuss Your Integration</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <Link to="/services" className="btn-etech btn-etech--secondary btn-etech--hero">
              See How We Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
