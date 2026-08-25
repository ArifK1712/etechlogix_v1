import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const waveOffsets = [-42, -35, -28, -21, -14, -7, 0, 7, 14, 21, 28, 35, 42];

export default function AboutFinalCTASection() {
  return (
    <section
      className="about-final-cta relative isolate overflow-hidden py-16 text-[#0a0a0a] lg:py-20"
      aria-labelledby="about-final-cta-title"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
        <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">LET&apos;S BUILD WHAT&apos;S NEXT</p>
        <span className="mb-6 block h-px w-10 bg-[#df012a]" aria-hidden="true" />

        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] md:items-start md:gap-12 lg:gap-20">
          <h2
            id="about-final-cta-title"
            className="type-section-heading-xl max-w-[780px] text-balance"
          >
            Complex technology deserves the right engineering partner<span className="text-[#df012a]">.</span>
          </h2>

          <div className="max-w-[500px] md:justify-self-end md:pt-1">
            <p className="type-body text-[#555555]">
              Let&apos;s turn your next business challenge into technology built to perform, scale and evolve.
            </p>

            <Link
              to="/contact"
              className="btn-etech btn-etech--primary-dark btn-etech--section group mt-8 inline-flex"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <svg
        className="about-final-cta-wave pointer-events-none absolute"
        viewBox="0 0 1600 320"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="about-final-cta-wave__flow">
          {waveOffsets.map((offset, index) => (
            <path
              key={offset}
              className="about-final-cta-wave__line"
              d="M-220 196 C 120 132 350 38 690 154 C 1010 264 1280 238 1820 30"
              transform={`translate(0 ${offset})`}
              style={{ opacity: 0.16 + index * 0.018 }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </section>
  );
}
