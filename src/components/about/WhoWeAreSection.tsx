import { useEffect, useRef } from 'react';

const principles = [
  'Built around business.',
  'Engineered for scale.',
  'Committed to impact.',
];

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="who-we-are-section relative isolate scroll-mt-24 overflow-hidden bg-white py-16 lg:py-20"
      aria-labelledby="who-we-are-title"
    >
      <div className="who-we-are-architecture pointer-events-none absolute bottom-0 right-0 hidden h-[82%] w-[42%] md:block" aria-hidden="true">
        <img
          src="/images/industries/real-estate.jpg"
          alt=""
          className="h-full w-full object-cover object-center grayscale"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/15" />
        <span className="absolute inset-0 bg-gradient-to-b from-white via-white/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <header className="who-we-are-reveal who-we-are-reveal--eyebrow mb-6">
          <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Who We Are</p>
          <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,49%)_1px_minmax(0,43%)] lg:items-start lg:gap-12 xl:gap-16">
          <h2
            id="who-we-are-title"
            className="who-we-are-reveal who-we-are-reveal--heading type-section-heading-xl max-w-[650px] text-balance"
          >
            We build technology for businesses that cannot afford complexity to get in the way<span className="text-[#df012a]">.</span>
          </h2>

          <span className="who-we-are-reveal who-we-are-reveal--rule hidden h-full min-h-[330px] w-px bg-[#df012a] lg:block" aria-hidden="true" />

          <div className="who-we-are-reveal who-we-are-reveal--copy max-w-[590px] space-y-7 lg:pt-1">
            <p className="type-body text-[#333333]">
              eTechLogix is an enterprise technology company focused on building, modernizing and connecting the systems businesses depend on every day.
            </p>
            <p className="type-body text-[#333333]">
              From enterprise software and integrations to automation and AI, our work begins with understanding how the business operates.
            </p>
            <p className="type-body text-[#333333]">
              We combine business understanding, engineering depth and long-term thinking to create technology that is practical, scalable and built for what’s next.
            </p>
          </div>
        </div>

        <div className="who-we-are-reveal who-we-are-reveal--principles mx-auto mt-14 border-y border-neutral-300/90 md:mt-16">
          <div className="grid md:grid-cols-3">
            {principles.map((principle, index) => (
              <p
                key={principle}
                className={`flex min-h-[92px] items-center justify-center px-5 py-6 text-center font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#171717] md:text-xl ${
                  index > 0 ? 'border-t border-neutral-200 md:border-t-0' : ''
                }`}
              >
                <span className={index > 0 ? 'md:border-l-2 md:border-[#df012a] md:pl-10' : ''}>{principle}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
