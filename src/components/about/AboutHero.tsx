import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companyMetrics = [
  { value: '35+', label: 'Years of engineering experience' },
  { value: '200+', label: 'Enterprise clients worldwide' },
  { value: '500+', label: 'Digital and AI transformation projects' },
  { value: '10+', label: 'Industries covered' },
];

export default function AboutHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true);
      return;
    }

    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="about-hero relative isolate overflow-hidden bg-white pt-32 text-[#0a0a0a] md:pt-36"
      data-ready={ready ? 'true' : 'false'}
      aria-labelledby="about-hero-title"
    >
      <div className="about-hero-wash pointer-events-none absolute inset-x-0 bottom-0 h-[58%]" aria-hidden="true" />
      <div className="about-hero-ribbon pointer-events-none absolute inset-x-0 z-0" aria-hidden="true">
        <svg className="about-hero-ribbon-svg h-full w-full" viewBox="0 0 1600 520" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="aboutRibbonFill" x1="104" y1="139" x2="1428" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="0.28" stopColor="#fff7f7" stopOpacity="0.72" />
              <stop offset="0.57" stopColor="#ffffff" stopOpacity="0.88" />
              <stop offset="0.82" stopColor="#fceced" stopOpacity="0.56" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="aboutRibbonRed" x1="0" y1="344" x2="1600" y2="177" gradientUnits="userSpaceOnUse">
              <stop stopColor="#df012a" stopOpacity="0.12" />
              <stop offset="0.24" stopColor="#df012a" stopOpacity="0.52" />
              <stop offset="0.52" stopColor="#df012a" stopOpacity="0.08" />
              <stop offset="0.78" stopColor="#df012a" stopOpacity="0.58" />
              <stop offset="1" stopColor="#df012a" stopOpacity="0.05" />
            </linearGradient>
            <filter id="aboutRibbonBlur" x="-12%" y="-30%" width="124%" height="160%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="aboutRibbonSoft" x="-8%" y="-20%" width="116%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          <g className="about-hero-ribbon-flow">
            <path
              d="M-100 350C126 183 250 190 402 346C531 478 715 460 845 380C993 289 1043 54 1200 36C1365 17 1424 166 1700 232L1700 456C1455 370 1315 225 1190 286C1057 350 1042 493 862 506C670 520 564 414 409 441C235 472 112 391-100 503V350Z"
              fill="url(#aboutRibbonFill)"
              stroke="#ffffff"
              strokeOpacity="0.76"
              strokeWidth="2"
            />
            <path
              d="M-80 391C142 211 263 236 407 371C553 508 700 457 846 388C1013 309 1057 96 1212 76C1382 54 1440 209 1680 261"
              stroke="url(#aboutRibbonRed)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#aboutRibbonBlur)"
            />
            <path
              d="M-80 373C135 212 260 218 414 357C553 482 701 442 843 369C1001 288 1050 75 1207 53C1370 30 1440 185 1680 244"
              stroke="url(#aboutRibbonRed)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              className="about-hero-ribbon-reflection"
              d="M-80 373C135 212 260 218 414 357C553 482 701 442 843 369C1001 288 1050 75 1207 53C1370 30 1440 185 1680 244"
              pathLength="1"
              stroke="#df012a"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#aboutRibbonSoft)"
            />
            <path
              d="M-60 327C143 194 263 190 418 332C567 468 705 425 833 346C982 254 1038 50 1196 27C1374 0 1430 145 1660 213"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#aboutRibbonSoft)"
            />
            <path
              d="M-70 420C125 284 271 274 402 393C554 531 720 486 860 415C1006 341 1085 157 1225 130C1383 99 1488 239 1660 280"
              stroke="#df012a"
              strokeOpacity="0.12"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 md:pb-20">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
          <div className="about-hero-reveal about-hero-reveal--1 mb-8 inline-flex items-center gap-2.5">
            <span className="block h-px w-5 bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em]">About eTechLogix</span>
            <span className="block h-px w-5 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h1
            id="about-hero-title"
            className="about-hero-reveal about-hero-reveal--2 type-hero-heading text-balance"
          >
            Engineering technology that<br className="hidden sm:block" /> powers modern business<span className="text-[#df012a]">.</span>
          </h1>

          <p className="about-hero-reveal about-hero-reveal--3 type-hero-lead mt-6 max-w-[680px] text-neutral-500">
            We build enterprise software, intelligent automation and connected digital systems designed around complex business operations.
          </p>

          <div className="about-hero-reveal about-hero-reveal--4 mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/company/about#who-we-are"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('who-we-are')?.scrollIntoView({
                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                  block: 'start',
                });
              }}
              className="btn-etech btn-etech--primary-dark btn-etech--hero group"
            >
              <span>Explore eTechLogix</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-etech btn-etech--secondary btn-etech--hero group">
              <span>Talk to Us</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="about-hero-panel about-hero-reveal about-hero-reveal--5 mx-auto mt-12 max-w-[1060px] overflow-hidden rounded-2xl border border-white/90 bg-white/75 shadow-[0_22px_70px_rgba(72,18,29,0.08)] backdrop-blur-xl md:mt-14">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {companyMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex min-h-[138px] flex-col items-center justify-start px-5 py-7 text-center md:min-h-[148px] md:px-7 ${
                  index % 2 === 1 ? 'border-l border-neutral-200/80' : ''
                } ${index >= 2 ? 'border-t border-neutral-200/80 lg:border-t-0' : ''} ${
                  index === 2 ? 'lg:border-l' : ''
                }`}
              >
                <dt className="order-2 mt-2 max-w-[190px] text-sm leading-5 text-neutral-500 md:text-[15px]">
                  {metric.label}
                </dt>
                <dd
                  className="order-1 inline-flex items-start font-display text-4xl font-semibold leading-none tracking-[-0.035em] text-[#0a0a0a] md:text-5xl"
                  aria-label={metric.value}
                >
                  <span>{metric.value.slice(0, -1)}</span>
                  <span className="ml-[0.04em] -translate-y-[0.12em] text-[0.5em] leading-none tracking-normal text-[#df012a]" aria-hidden="true">
                    +
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
