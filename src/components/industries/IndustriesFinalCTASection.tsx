import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesFinalCTASection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-16 text-[#0a0a0a] md:py-20"
      aria-labelledby="industries-final-cta-title"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
          LET&apos;S BUILD FOR YOUR INDUSTRY
        </p>
        <div className="mb-8 h-px w-10 bg-[#df012a]" aria-hidden="true" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] md:gap-0">
          <div className="md:pr-12 lg:pr-16 xl:pr-20">
            <h2
              id="industries-final-cta-title"
              className="type-section-heading-lg max-w-[760px] text-balance sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem]"
            >
              Your industry has its own complexity.
              <br />
              Your technology should be built for it<span className="text-[#df012a]">.</span>
            </h2>
          </div>

          <div className="border-neutral-200/90 md:border-l md:pl-12 lg:pl-16 xl:pl-20">
            <p className="type-body max-w-[510px] text-[#555555]">
              From industry-specific workflows to complex enterprise systems, we help
              organizations build technology around the way their business actually operates.
            </p>

            <Link
              to="/contact"
              className="btn-etech btn-etech--primary btn-etech--section group mt-8 inline-flex"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative mt-0 h-[180px] w-full md:h-[230px]" aria-hidden="true">
        <svg
          className="absolute inset-x-0 top-0 h-[105px] w-full"
          viewBox="0 0 1400 105"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 18 C 300 92, 760 104, 1180 42 C 1270 29, 1340 17, 1406 4"
            stroke="#df012a"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="1392" cy="6.5" r="4" fill="#df012a" />
        </svg>

        <p className="absolute -bottom-[0.18em] left-1/2 w-max -translate-x-1/2 whitespace-nowrap font-display text-[clamp(4.5rem,11vw,10rem)] font-semibold leading-none tracking-[-0.055em] text-neutral-200/45">
          INDUSTRY / TECHNOLOGY
        </p>
      </div>
    </section>
  );
}
