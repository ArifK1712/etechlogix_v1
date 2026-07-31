import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

interface IndustryItem {
  title: string;
  description: string;
  image: string;
}

const industries: IndustryItem[] = [
  {
    title: 'Healthcare',
    description: 'Optimizing patient care through intelligent health-tech systems.',
    image: '/images/industry-healthcare.jpg',
  },
  {
    title: 'ERP Systems',
    description: 'Streamlining enterprise operations with integrated platforms.',
    image: '/images/service-data.jpg',
  },
  {
    title: 'Retail',
    description: 'Powering next-generation retail with connected digital experiences.',
    image: '/images/industry-retail.jpg',
  },
  {
    title: 'IT Infrastructure',
    description: 'Building resilient scalable infrastructure for the modern enterprise.',
    image: '/images/industry-infrastructure.jpg',
  },
  {
    title: 'Event Management',
    description: 'Delivering seamless conference and event technology solutions.',
    image: '/images/team-strategy.jpg',
  },
];

export default function IndustriesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.industry-header-line', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from('.mosaic-item', {
      scrollTrigger: {
        trigger: '.mosaic-grid',
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.12,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="industry-header-line font-display text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Transforming Industries
          </h2>
          <h2 className="industry-header-line font-display text-3xl md:text-5xl lg:text-6xl font-bold text-accent-cyan">
            Where Complexity Is the Standard
          </h2>
        </div>

        <div className="mosaic-grid">
          {industries.map((item, index) => (
            <div key={index} className="mosaic-item relative rounded-xl overflow-hidden cursor-pointer group h-64 md:h-auto">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-5 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display text-lg font-bold text-text-primary">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-bg-primary/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <h3 className="font-display text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2">
                  {item.description}
                </p>
                <div className="mt-4 text-accent-cyan text-sm font-medium flex items-center gap-2">
                  Explore <span className="inline-block">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
