import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { InternalLink } from './InternalLink';
import { buttonClassName } from './ui/Button';

const headingWords = [
  'Technology',
  'built',
  'around',
  'how',
  'your',
  'business',
  'actually',
  'works',
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translate3d(0, ${y * 0.05}px, 0)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) return;

      const tl = gsap.timeline({ delay: 0.1 });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
      }

      const chars = headingRef.current?.querySelectorAll('.hero-char');
      if (chars && chars.length > 0) {
        tl.fromTo(
          chars,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.022,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.35'
        );
      }

      const lowerElements = [paragraphRef.current, ctaRef.current].filter(Boolean);
      if (lowerElements.length > 0) {
        tl.fromTo(
          lowerElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.25'
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] w-full max-w-[100vw] flex-col overflow-x-clip bg-white text-[#0a0a0a] selection:bg-[#df012a] selection:text-white px-5 pb-20 pt-[5.75rem] md:pb-24 md:pt-[6.5rem]"
    >
      
      {/* ─── Parallax Background Visual ─── */}
      <div ref={parallaxRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-light-photo absolute inset-0" />
        <div className="hero-light-photo-fade absolute inset-0" />
      </div>

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center min-w-0">
        <div className="flex w-full min-w-0 max-w-full flex-col items-center text-center">
          
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#fafafa]/80 px-3.5 py-1.5"
          >
            <Sparkles className="h-3 w-3 text-[#df012a]" strokeWidth={2} aria-hidden="true" />
            <span className="type-eyebrow text-neutral-600">ENGINEERING FOR COMPLEX BUSINESS</span>
          </div>

          {/* Heading & Supporting Paragraph */}
          <div className="mt-8 flex w-full max-w-5xl flex-col items-center gap-5 md:mt-9 md:gap-6">
            <h1
              ref={headingRef}
              className="type-hero-heading text-balance text-[#0a0a0a] px-1"
              aria-label="Technology built around how your business actually works."
            >
              {headingWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.26em] last:mr-0" aria-hidden="true">
                  {word.split('').map((char, charIndex) => (
                    <span key={charIndex} className="hero-char inline-block">
                      {char}
                    </span>
                  ))}
                  {word === 'works' && (
                    <span className="hero-char inline-block text-[#df012a]">.</span>
                  )}
                </span>
              ))}
            </h1>
            <p
              ref={paragraphRef}
              className="type-body mx-auto max-w-[38rem] text-center text-neutral-600 font-normal"
            >
              We design and engineer enterprise software, AI automation, integrations, and modern digital platforms around real workflows, systems, and operational requirements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="mt-11 flex w-full max-w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-14 px-1"
          >
            <InternalLink
              href="/contact"
              className={`${buttonClassName('primaryDark', 'hero')} group`}
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </InternalLink>
            <InternalLink
              href="#services"
              className={buttonClassName('secondary', 'hero')}
            >
              Explore Capabilities
            </InternalLink>
          </div>

        </div>
      </div>
    </section>
  );
}
