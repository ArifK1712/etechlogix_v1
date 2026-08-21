import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const industries = [
  { name: 'Healthcare', image: '/images/industries/healthcare.jpg', position: 'healthcare' },
  { name: 'Financial Services', image: '/images/industries/financial-services.jpg', position: 'finance' },
  { name: 'Manufacturing', image: '/images/industries/manufacturing.jpg', position: 'manufacturing' },
  { name: 'Logistics & Supply Chain', image: '/images/industries/logistics.jpg', position: 'logistics' },
  { name: 'Real Estate / Infrastructure', image: '/images/industries/real-estate.jpg', position: 'real-estate' },
  { name: 'Public Sector', image: '/images/industries/public-sector.jpg', position: 'public' },
] as const;

export default function IndustriesHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.dataset.ready = 'true';
  }, []);

  return (
    <section ref={heroRef} className="industries-hero relative overflow-hidden bg-[#fdfdfc] pt-[100px]" aria-labelledby="industries-title">
      <div className="industries-guides" aria-hidden="true" />
      <div className="industries-stage relative mx-auto min-h-[720px] w-full max-w-[1540px] px-5">
        <div className="industries-center relative z-10 mx-auto flex max-w-[820px] flex-col items-center text-center">
          <div className="industries-reveal industries-pill type-eyebrow-accent tracking-[0.2em]"><span aria-hidden="true" />Industries</div>
          <h1 id="industries-title" className="industries-reveal type-hero-heading mt-5 text-balance text-[#0a0a0a]">
            Technology expertise<br /><span>across the industries</span><br />we serve<span className="text-[#df012a]">.</span>
          </h1>
          <p className="industries-reveal type-hero-lead mt-5 max-w-[560px] text-neutral-500">
            From complex operations to industry-specific workflows, eTechLogix designs software, integrations and automation solutions shaped around the way each sector actually works.
          </p>
          <Button
            href="/industries#etechlogix-industries"
            onClick={(event) => {
              event.preventDefault();
              const section = document.getElementById('etechlogix-industries');
              section?.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                  ? 'auto'
                  : 'smooth',
                block: 'start',
              });
            }}
            variant="primary"
            size="hero"
            className="industries-reveal mt-7"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Explore Industries
          </Button>
        </div>

        <div className="industries-card-field" aria-label="Industries served by eTechLogix">
          {industries.map((industry, index) => (
            <article className={`industries-card industries-card--${industry.position}`} style={{ '--card-delay': `${100 + index * 70}ms` } as React.CSSProperties} key={industry.name}>
              <img src={industry.image} alt={`${industry.name} environment`} loading={index > 3 ? 'lazy' : 'eager'} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
