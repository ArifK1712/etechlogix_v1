import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SlideData {
  image: string;
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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'ENTERPRISE AI & CUSTOM SOFTWARE',
    headlineLine1: 'Enterprise software',
    headlineLine2Prefix: 'built for ',
    headlineLine2Highlight: 'complex operations.',
    paragraph: 'We design and engineer custom software, AI-powered workflows, and enterprise integrations for critical business environments.',
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'Explore Our Capabilities',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'AGENTIC AI & WORKFLOW AUTOMATION',
    headlineLine1: 'AI agents that move',
    headlineLine2Prefix: 'business ',
    headlineLine2Highlight: 'workflows forward.',
    paragraph: 'We build AI-powered workflow systems that process information, apply business rules, trigger actions, and support human approvals.',
    primaryCta: 'Explore Agentic AI',
    secondaryCta: 'Talk to Our Team',
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'ENTERPRISE INTEGRATIONS',
    headlineLine1: 'Connect the systems',
    headlineLine2Prefix: 'your ',
    headlineLine2Highlight: 'business depends on.',
    paragraph: 'We integrate ERP, CRM, payment, document, and operational platforms into one connected digital ecosystem.',
    primaryCta: 'View Integration Services',
    secondaryCta: 'Discuss Integration Needs',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'DIGITAL PLATFORMS FOR INDUSTRY',
    headlineLine1: 'Software tailored to',
    headlineLine2Prefix: 'the way your ',
    headlineLine2Highlight: 'industry works.',
    paragraph: 'From events and conferences to healthcare, ERP, distribution, and operations, we build platforms around real business processes.',
    primaryCta: 'Explore Industries',
    secondaryCta: 'See Our Work',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Background Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#030712] text-white flex flex-col justify-between items-center px-5 pt-28 pb-12 overflow-hidden select-none"
    >
      {/* Background Autoplay Image Crossfade Slider */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        ))}
        {/* Dark Overlays for Optimal Text Contrast */}
        <div className="absolute inset-0 bg-[#030712]/50 backdrop-brightness-[0.9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/45 to-[#030712]/75" />
        {/* Red ambient glow — minimalist-ui: soft radial accents, low opacity */}
        <div className="hero-red-glow-base absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="hero-red-glow-drift absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[min(420px,55vh)] w-[min(720px,92vw)] rounded-full pointer-events-none opacity-90 blur-[100px] md:blur-[120px]"
          style={{ background: 'rgba(223, 1, 42, 0.09)' }}
          aria-hidden="true"
        />
      </div>

      {/* Top Balance Spacer */}
      <div className="w-full h-2 z-10" />

      {/* Main Content Container with CSS Grid for Overlapping Slides */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 grid-rows-1">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`col-start-1 row-start-1 flex flex-col items-center text-center transition-all duration-1000 ease-in-out gap-10 ${
              index === currentSlide
                ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                : 'opacity-0 translate-y-8 pointer-events-none z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#df012a] animate-pulse" />
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.2em] text-neutral-300 uppercase">
                {slide.eyebrow}
              </span>
            </div>

            {/* Headline Typography */}
            <div className="w-full flex flex-col gap-3 md:gap-4 font-display font-extrabold tracking-tight text-[#f5f3ef]">
              <h1 className="text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.75rem] xl:text-[7.5rem] leading-[0.95] text-center self-center text-[#f5f3ef]">
                {slide.headlineLine1}
              </h1>
              <h1 className="text-[2.75rem] sm:text-[4.25rem] md:text-[5.75rem] lg:text-[7.25rem] xl:text-[8rem] leading-[0.95] text-center self-center text-[#f5f3ef]">
                {slide.headlineLine2Prefix}
                <span className="text-[#df012a]">{slide.headlineLine2Highlight}</span>
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed text-center">
              {slide.paragraph}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <a
                href="#contact"
                style={{ paddingLeft: '24px', paddingRight: '8px' }}
                className="group relative inline-flex items-center justify-between gap-4 bg-[#df012a] hover:bg-[#b80122] text-white font-semibold text-[15px] h-[52px] rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(223,1,42,0.3)] hover:shadow-[0_15px_40px_rgba(223,1,42,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
              >
                <span className="whitespace-nowrap pl-2">{slide.primaryCta}</span>
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/30">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 h-[52px] rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-neutral-200 hover:text-white font-medium text-[15px] transition-all duration-300 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {slide.secondaryCta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation Dots & Scroll Indicator Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 mt-12 md:mt-16 opacity-80 hover:opacity-100 transition-opacity">
        
        {/* Slider Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-1.5 bg-[#df012a]'
                  : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
            SCROLL
          </span>
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#df012a] via-[#df012a]/50 to-transparent animate-pulse rounded-full" />
        </div>
      </div>
    </section>
  );
}
