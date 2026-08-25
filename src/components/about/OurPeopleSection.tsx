import { useEffect, useRef } from 'react';

const expertiseAreas = ['Engineering', 'Product', 'Automation', 'Delivery'];

export default function OurPeopleSection() {
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
      { threshold: 0.16 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="our-people-section bg-white py-16 lg:py-20"
      aria-labelledby="our-people-title"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="our-people-shell">
          <header className="our-people-reveal our-people-reveal--header">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Our People</p>
            <span className="mb-6 block h-px w-10 bg-[#df012a]" aria-hidden="true" />

            <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)] md:items-start md:gap-12 lg:gap-20">
              <h2 id="our-people-title" className="type-section-heading-xl max-w-[760px] text-balance">
                Expertise that turns complexity into progress<span className="text-[#df012a]">.</span>
              </h2>

              <p className="type-body max-w-[470px] text-[#555555] md:justify-self-end md:pt-1">
                Our teams bring together business insight, engineering depth and delivery experience to solve demanding technology challenges.
              </p>
            </div>
          </header>

          <div className="our-people-media mt-10 overflow-hidden rounded-xl border border-neutral-200/90 md:mt-12">
            <figure className="our-people-image overflow-hidden bg-neutral-100">
              <img
                src="/images/about-our-people.png"
                alt="Enterprise technology and business professionals collaborating in a modern workplace"
                className="aspect-[16/8] w-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] md:aspect-[3.25/1]"
              />
            </figure>

            <div className="grid grid-cols-2 bg-white md:grid-cols-4" aria-label="Team expertise areas">
              {expertiseAreas.map((area, index) => (
                <p
                  key={area}
                  className={`relative flex min-h-[76px] items-center justify-center px-4 py-5 text-center font-display text-lg font-semibold uppercase leading-snug tracking-[-0.02em] text-[#171717] md:min-h-[84px] md:text-xl ${
                    index % 2 === 1 ? 'border-l border-neutral-200' : ''
                  } ${index >= 2 ? 'border-t border-neutral-200 md:border-t-0' : ''} ${
                    index === 2 ? 'md:border-l' : ''
                  }`}
                >
                  {index > 0 && <span className="absolute left-0 top-1/2 hidden h-7 w-px -translate-y-1/2 bg-[#df012a] md:block" aria-hidden="true" />}
                  {area}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
