import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { InternalLink } from './InternalLink';
import { buttonClassName } from './ui/Button';

interface SlideData {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineLine2Highlight: string;
  paragraph: string;
  primaryCta: string;
  secondaryCta: string;
}

const slides: SlideData[] = [
  {
    eyebrow: 'ENTERPRISE CUSTOM SOFTWARE',
    headlineLine1: 'Custom software for',
    headlineLine2Prefix: '',
    headlineLine2Highlight: 'complex business operations.',
    paragraph:
      'We design AI-powered enterprise platforms, workflow automation, and system integrations around complex operational requirements.',
    primaryCta: 'Talk to Our Team',
    secondaryCta: 'Explore Capabilities',
  },
  {
    eyebrow: 'AGENTIC AI & WORKFLOW AUTOMATION',
    headlineLine1: 'AI agents that execute',
    headlineLine2Prefix: '',
    headlineLine2Highlight: 'real business workflows.',
    paragraph:
      'We build AI agents that process information, apply business rules, update enterprise systems, manage exceptions, and route approvals to the right people.',
    primaryCta: 'Talk to Our Team',
    secondaryCta: 'Explore Capabilities',
  },
  {
    eyebrow: 'ENTERPRISE SYSTEM INTEGRATION',
    headlineLine1: 'Connect every system into',
    headlineLine2Prefix: '',
    headlineLine2Highlight: 'one dependable operation.',
    paragraph:
      'We connect Salesforce, MuleSoft, Descartes, Avalara, ERP, CRM, healthcare, payment, and custom platforms through secure, synchronized integrations.',
    primaryCta: 'Talk to Our Team',
    secondaryCta: 'Explore Capabilities',
  },
  {
    eyebrow: 'MODERNIZATION & PRODUCT ACCELERATION',
    headlineLine1: 'Move beyond legacy systems and',
    headlineLine2Prefix: '',
    headlineLine2Highlight: 'bring new products to life.',
    paragraph:
      'We modernize outdated applications and help businesses turn new ideas into functional, production-ready products for validation, growth, and long-term use.',
    primaryCta: 'Talk to Our Team',
    secondaryCta: 'Explore Capabilities',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <section className="relative flex min-h-[100dvh] w-full max-w-[100vw] flex-col overflow-x-clip bg-white text-[#0a0a0a] selection:bg-[#df012a] selection:text-white px-5 pb-20 pt-[5.75rem] md:pb-24 md:pt-[6.5rem]">
      
      <div ref={parallaxRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-light-photo absolute inset-0" />
        <div className="hero-light-photo-fade absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center min-w-0">
        <div className="relative w-full min-h-[20rem] sm:min-h-[21rem] md:min-h-[22rem]">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`flex w-full min-w-0 max-w-full flex-col items-center text-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'relative opacity-100 translate-y-0 pointer-events-auto z-10'
                    : 'absolute inset-x-0 top-0 opacity-0 pointer-events-none z-0'
                }`}
                aria-hidden={!isActive}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#fafafa]/80 px-3.5 py-1.5">
                  <Sparkles className="h-3 w-3 text-[#df012a]" strokeWidth={2} aria-hidden="true" />
                  <span className="type-eyebrow text-neutral-600">{slide.eyebrow}</span>
                </div>

                <div className="mt-8 flex w-full max-w-7xl flex-col items-center gap-5 md:mt-9 md:gap-6">
                  <h1 className="type-hero-heading text-balance text-[#0a0a0a] px-1">
                    <span className="block">{slide.headlineLine1}</span>
                    <span className="mt-0.5 block">
                      {slide.headlineLine2Prefix}
                      <span className="text-[#df012a]">{slide.headlineLine2Highlight}</span>
                    </span>
                  </h1>
                  <p className="type-body mx-auto max-w-[34rem] text-center text-neutral-600 font-normal">{slide.paragraph}</p>
                </div>

                <div className="mt-11 flex w-full max-w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-14 px-1">
                  <InternalLink
                    href="#contact"
                    className={`${buttonClassName('primaryDark', 'hero')} group`}
                  >
                    {slide.primaryCta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                  </InternalLink>
                  <InternalLink
                    href="#services"
                    className={buttonClassName('secondary', 'hero')}
                  >
                    {slide.secondaryCta}
                  </InternalLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-14 flex flex-col items-center gap-6 md:mt-16">
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'h-1.5 w-7 bg-[#df012a]'
                  : 'h-1.5 w-1.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
