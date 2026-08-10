import { useEffect, useRef } from 'react';

/* ─── Process stages ─── */
const stages = [
  {
    label: 'Business Process',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" strokeWidth="1.6" stroke="currentColor">
        <rect x="4" y="14" width="14" height="10" rx="1.5" />
        <rect x="30" y="24" width="14" height="10" rx="1.5" />
        <path d="M18 19h6m0 0v-8m0 8v8m0 0h6" strokeLinecap="round" />
        <circle cx="24" cy="19" r="1.5" fill="currentColor" />
        <circle cx="24" cy="27" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Systems',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" strokeWidth="1.6" stroke="currentColor">
        <ellipse cx="24" cy="13" rx="14" ry="5" />
        <path d="M10 13v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" />
        <path d="M10 21v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" />
      </svg>
    ),
  },
  {
    label: 'Data',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" strokeWidth="1.6" stroke="currentColor">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="8" y1="18" x2="40" y2="18" />
        <line x1="8" y1="28" x2="40" y2="28" />
        <line x1="20" y1="8" x2="20" y2="40" />
      </svg>
    ),
  },
  {
    label: 'People',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" strokeWidth="1.6" stroke="currentColor">
        <circle cx="18" cy="16" r="5" />
        <path d="M6 38c0-6.627 5.373-10 12-10" strokeLinecap="round" />
        <circle cx="32" cy="16" r="5" />
        <path d="M30 28c6.627 0 12 3.373 12 10" strokeLinecap="round" />
        <path d="M22 28c2 0 4 .5 6 1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Automation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" strokeWidth="1.6" stroke="currentColor">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4M10.1 10.1l2.83 2.83M35.07 35.07l2.83 2.83M10.1 37.9l2.83-2.83M35.07 12.93l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Line drawing hook ─── */
function useDrawLine(ref: React.RefObject<SVGLineElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const len = el.getTotalLength?.() ?? 120;
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
    el.style.transition = 'none';

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = `stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1)`;
            el.style.strokeDashoffset = '0';
          }, delay);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, delay]);
}

/* ─── Fade-in hook ─── */
function useFadeIn(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'none';

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, delay]);
}

export default function ECSPhilosophySection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // connector line refs
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const line4Ref = useRef<SVGLineElement>(null);

  useFadeIn(headlineRef as React.RefObject<HTMLElement | null>, 0);
  useFadeIn(rightColRef as React.RefObject<HTMLElement | null>, 120);
  useFadeIn(processRef as React.RefObject<HTMLElement | null>, 260);

  useDrawLine(line1Ref, 400);
  useDrawLine(line2Ref, 520);
  useDrawLine(line3Ref, 640);
  useDrawLine(line4Ref, 760);

  return (
    <section
      id="ecs-philosophy"
      className="relative w-full bg-white overflow-hidden"
      aria-label="Enterprise software philosophy"
    >
      {/* ── Background decorative layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">



        {/* Faint diagonal technical lines — right side */}
        <svg
          className="absolute top-0 right-0 w-[380px] opacity-[0.045]"
          viewBox="0 0 380 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="380" y1="60"  x2="120" y2="500" stroke="#df012a" strokeWidth="1" />
          <line x1="420" y1="60"  x2="160" y2="500" stroke="#df012a" strokeWidth="1" />
          <line x1="460" y1="60"  x2="200" y2="500" stroke="#df012a" strokeWidth="1" />
          <circle cx="370" cy="200" r="3" fill="#df012a" />
          <circle cx="350" cy="340" r="2" fill="#df012a" />
        </svg>

        {/* Subtle flowing curve — bottom left (reference has a curved arc) */}
        <svg
          className="absolute -bottom-16 -left-20 w-[420px] opacity-[0.06]"
          viewBox="0 0 420 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 280 Q140 120 420 80"  stroke="#df012a" strokeWidth="1.2" fill="none" />
          <path d="M0 300 Q150 140 420 100" stroke="#df012a" strokeWidth="1"   fill="none" />
          <path d="M0 260 Q130 100 420 60"  stroke="#df012a" strokeWidth="0.8" fill="none" />
        </svg>

        {/* Tiny dot grid — upper right quadrant */}
        <svg
          className="absolute top-8 right-16 w-[180px] opacity-[0.045]"
          viewBox="0 0 180 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 22}
                cy={row * 24}
                r="1.4"
                fill="#df012a"
              />
            ))
          )}
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-12 pt-20 md:pt-28 pb-0">

        {/* Section eyebrow — same style as "What We Engineer" in ServicesSection */}
        <p className="type-eyebrow-accent mb-10 md:mb-12">
          Enterprise Custom Software
        </p>

        {/* ── Asymmetric two-column row ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8 xl:gap-12">

          {/* LEFT — ~62% — Large editorial headline */}
          <div
            ref={headlineRef}
            className="lg:w-[62%] xl:w-[60%]"
          >
            <h2
              className="font-display font-bold leading-[1.05] tracking-[-0.035em] text-[clamp(2.5rem,6.5vw,5rem)] text-[#0a0a0a]"
            >
              Your business already has its own
              <br className="hidden md:block" /> way of working.{' '}
              <span className="text-[#df012a] block mt-1">
                Your software<br className="hidden md:block" /> should understand it.
              </span>
            </h2>
          </div>

          {/* RIGHT — ~35% — Supporting paragraph */}
          <div
            ref={rightColRef}
            className="lg:w-[35%] xl:w-[36%] lg:pt-3 xl:pt-5"
          >
            {/* Small red accent line above text */}
            <div className="w-8 h-[2px] bg-[#df012a] mb-6 opacity-80" />

            <p className="text-[0.9375rem] leading-[1.75] text-neutral-500 max-w-[360px]">
              Enterprise environments rarely start from a blank canvas. They already
              include processes, approvals, people, legacy applications, spreadsheets,
              databases, APIs, and third-party systems.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.75] text-neutral-500 max-w-[360px]">
              We design software around that reality instead of forcing operations
              into a predefined product.
            </p>
          </div>
        </div>

        {/* ── Bottom process line ── */}
        <div
          ref={processRef}
          className="mt-20 md:mt-24 border-t border-[#EAEAEA] pt-10 pb-14 md:pb-16"
        >
          {/* Connector SVG sits behind the icon row */}
          <div className="relative">
            {/* Connecting red lines drawn between stage icons */}
            <div className="hidden md:flex items-center absolute top-5 left-0 right-0 px-[10%]" aria-hidden="true">
              <svg className="w-full h-[2px] overflow-visible">
                {/* We use 4 individual lines, each drawn on scroll */}
                <line ref={line1Ref} x1="20%"  y1="1" x2="36%"  y2="1" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
                <line ref={line2Ref} x1="36%"  y1="1" x2="52%"  y2="1" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
                <line ref={line3Ref} x1="52%"  y1="1" x2="68%"  y2="1" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
                <line ref={line4Ref} x1="68%"  y1="1" x2="84%"  y2="1" stroke="#df012a" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Stage items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4 md:gap-x-0 relative z-10">
              {stages.map((stage) => (
                <div
                  key={stage.label}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  {/* Icon */}
                  <div className="text-[#0a0a0a] w-10 h-10 flex items-center justify-center">
                    {stage.icon}
                  </div>

                  {/* Label */}
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a]">
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
