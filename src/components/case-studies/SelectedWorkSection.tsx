import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from './selectedWork';

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!isReducedMotion && sectionRef.current) {
        // Header reveal
        gsap.fromTo(
          '.selected-work-header',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );

        // Grid cards reveal
        gsap.fromTo(
          '.case-study-card',
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.case-studies-grid',
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      aria-labelledby="selected-work-heading"
      className="relative scroll-mt-24 bg-white py-16 lg:py-20 border-t border-neutral-100"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8">
        
        {/* ── Centered Section Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          {/* Eyebrow */}
          <div className="selected-work-header inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em] text-[#df012a]">
              CASE STUDIES
            </span>
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="selected-work-heading"
            className="selected-work-header type-section-heading-lg text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] font-bold tracking-tight text-[#0a0a0a]"
          >
            Real Results Across Industries<span className="text-[#df012a]">.</span>
          </h2>
        </div>

        {/* ── Industry Case Studies Grid (Desktop 3 col / Tablet 2 col / Mobile 1 col) ── */}
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {caseStudies.map((item) => (
            <article
              key={item.id}
              className="case-study-card group relative bg-white border border-neutral-200/90 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neutral-300/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Top: Large realistic industry image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-100">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
              </div>

              {/* Bottom: Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Small uppercase red industry label */}
                  <p className="text-xs font-mono font-semibold tracking-[0.2em] text-[#df012a] uppercase mb-3">
                    {item.industry}
                  </p>

                  {/* Case study title */}
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0a0a0a] mb-3 text-balance group-hover:text-[#df012a] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Short supporting description */}
                  <p className="type-body text-neutral-500 mb-6 text-pretty">
                    {item.description}
                  </p>
                </div>

                {/* Explore Case Study Link */}
                <div className="pt-2 border-t border-neutral-100/80 mt-auto">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] group-hover:text-[#df012a] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 text-[#df012a] transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] group-hover:text-[#df012a] transition-colors cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 text-[#df012a] transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
