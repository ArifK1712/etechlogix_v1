import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { ArrowRight } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
  description: string;
  challenge: string;
  image: string;
}

const chapters: Chapter[] = [
  { id: '01', title: 'Events & Conferences', description: 'Platforms that coordinate registration, mobile experiences, venue operations, check-in, payments, and live reporting.', challenge: 'Handling 100k+ concurrent attendees with zero downtime.', image: '/images/industry-retail.jpg' },
  { id: '02', title: 'ERP & Distribution', description: 'Unified inventory, order fulfillment, multi-warehouse sync, and automated supply chain routing.', challenge: 'Eliminating manual data re-entry across logistics providers.', image: '/images/service-data.jpg' },
  { id: '03', title: 'Healthcare Operations', description: 'Patient care pathways, compliance-ready records management, and real-time medical workflow coordination.', challenge: 'HIPAA-compliant data sync across legacy EMRs.', image: '/images/industry-healthcare.jpg' },
  { id: '04', title: 'Enterprise Operations', description: 'Custom dashboards, executive decision support, and cross-departmental task orchestration.', challenge: 'Replacing fragmented spreadsheets with live operational telemetry.', image: '/images/executive-meeting.jpg' },
  { id: '05', title: 'Integration-Heavy Businesses', description: 'Connecting disparate platforms into a high-throughput API mesh.', challenge: 'High-volume transaction throughput with fail-safe rollback.', image: '/images/industry-infrastructure.jpg' }
];

export default function IndustryChapters() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal header
    gsap.from('.header-reveal', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Reveal chapters
    gsap.utils.toArray('.chapter-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#090909] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="header-reveal mb-12">
          <p className="text-[#df012a] text-xs uppercase tracking-widest mb-2">INDUSTRY DEPLOYMENTS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">Software built for industries where operational complexity matters.</h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="chapter-card relative rounded-2xl overflow-hidden min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end p-8 md:p-16">
              {/* Background Image & Overlays */}
              <div className="absolute inset-0 z-0">
                <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl">
                <div className="inline-block bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full text-sm font-mono mb-6">
                  Chapter {chapter.id}
                </div>
                <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">{chapter.title}</h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">{chapter.description}</p>
                
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-auto">
                  <div className="bg-[#df012a]/10 text-[#df012a] border border-[#df012a]/20 px-5 py-3 rounded-lg max-w-xl">
                    <span className="block text-xs uppercase tracking-wider mb-1 font-semibold opacity-80">Operational Challenge</span>
                    <span className="text-sm md:text-base font-medium">{chapter.challenge}</span>
                  </div>
                  
                  <a href="#" className="inline-flex items-center gap-3 text-white font-semibold hover:text-[#df012a] transition-colors group">
                    Learn more
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#df012a] group-hover:bg-[#df012a]/10 transition-all">
                      <ArrowRight className="w-5 h-5 text-white group-hover:text-[#df012a]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
