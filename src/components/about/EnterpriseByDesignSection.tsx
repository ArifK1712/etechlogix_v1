import { useEffect, useRef } from 'react';

const enterprisePrinciples = [
  {
    title: 'Security by Design',
  },
  {
    title: 'Built to Scale',
  },
  {
    title: 'Engineered for Continuity',
  },
];

export default function EnterpriseByDesignSection() {
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
      className="about-enterprise-section surface-subtle py-16 lg:py-20"
      aria-labelledby="about-enterprise-title"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        <div className="about-enterprise-card grid overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-[0_20px_60px_rgba(23,23,23,0.08)] md:p-8 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-10 xl:gap-14">
          <div className="flex flex-col py-2 lg:py-8">
            <header className="about-enterprise-reveal about-enterprise-reveal--intro">
              <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">Enterprise by Design</p>
              <span className="mb-6 block h-px w-10 bg-[#df012a]" aria-hidden="true" />

              <h2 id="about-enterprise-title" className="type-section-heading-xl max-w-[560px] text-balance">
                Built for environments where reliability is essential<span className="text-[#df012a]">.</span>
              </h2>

              <p className="type-body mt-7 max-w-[540px] text-[#555555]">
                Secure, scalable technology engineered for complex operations.
              </p>
            </header>

            <div className="mt-9 md:mt-11 lg:mt-auto lg:pt-10">
              {enterprisePrinciples.map((principle, index) => (
                <article
                  key={principle.title}
                  className={`about-enterprise-reveal about-enterprise-reveal--principle group py-6 first:pt-0 ${
                    index > 0 ? 'border-t border-neutral-200' : ''
                  }`}
                  style={{ transitionDelay: `${150 + index * 55}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="type-caption w-7 shrink-0 font-semibold tracking-[0.12em] text-[#df012a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-5 shrink-0 bg-[#df012a] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-7" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-[#171717] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 md:text-xl">
                      {principle.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <figure className="about-enterprise-image relative mt-6 min-h-[390px] overflow-hidden rounded-xl bg-neutral-100 md:min-h-[520px] lg:mt-0 lg:min-h-[620px]">
            <img
              src="/images/about-enterprise-by-design.png"
              alt="Modern glass-and-steel enterprise architecture with an integrated red structural plane"
              className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
