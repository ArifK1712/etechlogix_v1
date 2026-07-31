import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

const ManifestoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const statement = "Your technology should accelerate your business not anchor it to the past.";
  const words = statement.split(' ');

  useGSAP(() => {
    if (!textRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: true,
      },
    });

    const wordElements = gsap.utils.toArray('.manifesto-word', textRef.current);
    
    tl.to(wordElements, {
      opacity: 1,
      color: '#f1f5f9', // text-text-primary
      stagger: 0.1,
      duration: 1,
    })
    .to(imageRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 2,
      ease: 'power2.inOut'
    }, '+=0.5');

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-bg-primary min-h-screen flex items-center py-16 lg:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center">
        <div 
          ref={textRef}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
        >
          {words.map((word, index) => (
            <span 
              key={index} 
              className="manifesto-word inline-block mr-[0.35em] opacity-15 text-text-dim"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="w-full mt-20 relative">
          <div 
            ref={imageRef} 
            className="w-full rounded-lg overflow-hidden aspect-video"
            style={{ clipPath: 'inset(0 50% 0 50%)' }}
          >
            <img 
              src="/images/workspace-panoramic.jpg" 
              alt="Panoramic workspace" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-text-secondary text-center mt-8 text-lg italic">
            We build the systems that set enterprises free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
