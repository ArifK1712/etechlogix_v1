import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { useCountUp } from '../hooks/useCountUp';

interface Metric {
  end: number;
  suffix: string;
  label: string;
  colorClass: string;
  fontSize: string;
  gridClass: string;
}

const metrics: Metric[] = [
  {
    end: 200,
    suffix: '+',
    label: 'Enterprise Projects Delivered',
    colorClass: 'text-accent-gold',
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    gridClass: 'col-span-2',
  },
  {
    end: 98,
    suffix: '%',
    label: 'Client Retention Rate',
    colorClass: 'text-accent-cyan',
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    gridClass: 'col-span-2 md:text-right',
  },
  {
    end: 15,
    suffix: '+',
    label: 'Years of Engineering Excellence',
    colorClass: 'text-text-primary',
    fontSize: 'clamp(2.5rem, 7vw, 6rem)',
    gridClass: 'col-span-1 md:col-start-2',
  },
  {
    end: 50,
    suffix: '+',
    label: 'Technology Experts',
    colorClass: 'text-accent-cyan-glow',
    fontSize: 'clamp(2rem, 6vw, 5rem)',
    gridClass: 'col-span-1 md:col-start-4',
  },
];

function MetricCounter({ metric }: { metric: Metric }) {
  const { ref, display } = useCountUp({ end: metric.end, suffix: metric.suffix });

  return (
    <div ref={ref} className={`metric-item ${metric.gridClass}`}>
      <div
        className={`font-display font-black ${metric.colorClass}`}
        style={{ fontSize: metric.fontSize }}
      >
        {display}
      </div>
      <div className="text-text-secondary text-xs md:text-sm uppercase tracking-widest mt-2">
        {metric.label}
      </div>
    </div>
  );
}

const ImpactSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.metric-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden py-16 lg:py-20">
      <img
        src="/images/team-strategy.jpg"
        alt="Team Strategy"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-bg-primary/90" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-8 items-end">
          {metrics.map((metric, index) => (
            <MetricCounter key={index} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
