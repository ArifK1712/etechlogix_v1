import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DETFinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          }
        );

        gsap.fromTo(
          rightRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="build-the-right-team"
      className="relative w-full bg-white py-16 lg:py-20 border-t border-neutral-200/80 overflow-hidden"
      aria-label="Build the Right Team"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,54%)_minmax(0,46%)] gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ── LEFT COLUMN: Proposition Copy (~54%) ── */}
          <div ref={leftRef} className="w-full flex flex-col justify-center">
            <p className="type-eyebrow-accent mb-3 tracking-[0.2em] text-[#df012a]">
              BUILD THE RIGHT TEAM
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            
            <h2 className="type-section-heading-lg text-[#0a0a0a] leading-[1.12] mb-6 max-w-xl text-balance">
              Add the engineering capacity your roadmap needs — without creating another layer to manage<span className="text-[#df012a]">.</span>
            </h2>
            
            <p className="type-body text-[#555555] leading-relaxed max-w-lg text-pretty">
              Tell us where your team needs more capacity, specialist expertise, or delivery ownership. We’ll help shape an engineering team around the work.
            </p>
          </div>

          {/* ── RIGHT COLUMN: Minimal Integration Framework & CTA (~46%) ── */}
          <div ref={rightRef} className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[440px] flex flex-col items-center">
              
              {/* Step 1: YOUR TEAM */}
              <div className="text-center">
                <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#0a0a0a] font-medium">
                  YOUR TEAM
                </span>
              </div>

              {/* Connector 1: Vertical Line with Dotted Horizontal Crossbar & Node */}
              <div className="relative w-full flex flex-col items-center my-3 sm:my-3.5">
                <div className="w-px h-6 sm:h-7 bg-neutral-300" />
                
                <div className="relative w-full flex items-center justify-center">
                  <div className="w-full h-px border-t border-dotted border-neutral-300" />
                  <div className="absolute flex items-center justify-center">
                    <div className="w-[18px] h-[18px] rounded-full border border-[#df012a]/40 bg-white flex items-center justify-center shadow-2xs">
                      <div className="w-2 h-2 rounded-full bg-[#df012a]" />
                    </div>
                  </div>
                </div>

                <div className="w-px h-6 sm:h-7 bg-neutral-300" />
              </div>

              {/* Step 2: ENGINEERING CAPACITY (Primary visual anchor) */}
              <div className="text-center my-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-[26px] text-[#0a0a0a] tracking-[-0.02em] leading-tight uppercase">
                  ENGINEERING<br />CAPACITY
                </h3>
              </div>

              {/* Connector 2: Vertical Line with Dotted Horizontal Crossbar & Downward Arrow */}
              <div className="relative w-full flex flex-col items-center my-3 sm:my-3.5">
                <div className="w-px h-6 sm:h-7 bg-neutral-300" />
                
                <div className="relative w-full flex items-center justify-center">
                  <div className="w-full h-px border-t border-dotted border-neutral-300" />
                  <div className="absolute flex items-center justify-center">
                    <div className="w-[18px] h-[18px] rounded-full border border-[#df012a]/40 bg-white flex items-center justify-center shadow-2xs">
                      <div className="w-2 h-2 rounded-full bg-[#df012a]" />
                    </div>
                  </div>
                </div>

                <div className="relative w-px h-7 sm:h-8 bg-neutral-300 flex justify-center">
                  <svg
                    viewBox="0 0 10 8"
                    fill="none"
                    className="absolute -bottom-2 w-2.5 h-2 text-neutral-400"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 6L9 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 3: ONE DELIVERY MODEL */}
              <div className="text-center mt-2 mb-8 sm:mb-9">
                <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#0a0a0a] font-medium">
                  ONE DELIVERY MODEL
                </span>
              </div>

              {/* Centered CTA Pill Button */}
              <div className="w-full flex justify-center">
                <Link
                  to="/contact"
                  className="btn-etech btn-etech--primary btn-etech--section group"
                >
                  Talk to Our Engineering Team
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
