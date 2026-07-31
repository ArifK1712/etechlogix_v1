import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

interface PanelData {
  title: string;
  description: string;
  image: string;
}

const panels: PanelData[] = [
  {
    title: 'Deep Technical Expertise',
    description: 'Our engineers don\'t just write code. They architect systems designed to evolve.',
    image: '/images/architecture-whiteboard.jpg',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From initial architecture to deployment and monitoring we own every layer.',
    image: '/images/service-cloud.jpg',
  },
  {
    title: 'Business-First Thinking',
    description: 'Technology decisions driven by business outcomes not technical trends.',
    image: '/images/team-strategy.jpg',
  },
];

export default function WhyUsSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.from('.section-header-line', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
    });

    const panelElements = gsap.utils.toArray<HTMLElement>('.why-us-panel');
    panelElements.forEach((panel, index) => {
      const xOffset = index % 2 === 0 ? -80 : 80;
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top 85%',
          end: 'bottom center',
          scrub: true,
        },
        x: xOffset,
        opacity: 0,
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-16 lg:py-20 min-h-screen bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-header">
          <h2 className="section-header-line font-display text-4xl md:text-6xl lg:text-7xl font-black text-text-primary">
            Not a Vendor.
          </h2>
          <h2 className="section-header-line font-display text-4xl md:text-6xl lg:text-7xl font-black text-accent-gold">
            A Technology Partner.
          </h2>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row md:items-start md:justify-start">
          {panels.map((panel, index) => {
            const mlClass = index === 0 ? 'md:ml-0' : index === 1 ? 'md:-ml-12 md:mt-12' : 'md:-ml-6 md:mt-24';
            const borderClass = index === 1 ? 'border-accent-gold' : 'border-accent-cyan';
            
            return (
              <div 
                key={index}
                className={`why-us-panel w-full md:w-[45%] rounded-xl overflow-hidden bg-bg-elevated border border-white/5 shadow-2xl mb-8 md:mb-0 relative z-${10 + index} ${mlClass}`}
              >
                <img src={panel.image} alt={panel.title} className="h-56 md:h-64 w-full object-cover" />
                <div className={`p-6 md:p-8 border-l-2 ${borderClass}`}>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    {panel.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base mt-3 leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
