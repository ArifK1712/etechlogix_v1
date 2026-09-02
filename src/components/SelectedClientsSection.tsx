import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
  id: string;
  name: string;
  alt: string;
  src?: string;
  isText?: boolean;
  imageClass?: string;
  wrapperClass?: string;
}

const clients: ClientLogo[] = [
  {
    id: 'blue-yonder',
    name: 'Blue Yonder',
    alt: 'Blue Yonder',
    src: '/images/clients/blue-yonder.png',
    // Blue Yonder is 965x137; scaled by height to preserve exact proportions without stretching
    imageClass: 'h-6 sm:h-7 md:h-[28px] lg:h-[32px] max-w-[150px] sm:max-w-[170px] lg:max-w-[190px]',
  },
  {
    id: 'fast-dms',
    name: 'Fast DMS',
    alt: 'Fast DMS',
    src: '/images/clients/fast-dms.png',
    // Fast DMS is 400x156; kept proportional so both the mark and arrow are clearly recognizable
    imageClass: 'h-7 sm:h-8 md:h-9 lg:h-10 max-w-[115px] sm:max-w-[130px] lg:max-w-[145px]',
  },
  {
    id: 'dollar-days',
    name: 'Dollar Days',
    alt: 'Dollar Days',
    src: '/images/clients/dollar-days.png',
    // Dollar Days is 1024x148; scaled primarily by height so it balances naturally in the row
    imageClass: 'h-5 sm:h-6 md:h-[25px] lg:h-[28px] max-w-[150px] sm:max-w-[170px] lg:max-w-[190px]',
  },
  {
    id: 'rwc',
    name: 'RWC Building Products',
    alt: 'RWC Building Products',
    src: '/images/clients/rwc-building-products.png',
    // RWC is 1024x579; scaled primarily by height to balance with other marks
    imageClass: 'h-8 sm:h-9 md:h-10 lg:h-11 max-w-[125px] sm:max-w-[140px] lg:max-w-[155px]',
  },
  {
    id: 'al-rowad',
    name: 'Al-Rowad Exhibitions & Conferences Organizing Company',
    alt: 'Al-Rowad Exhibitions & Conferences Organizing Company',
    src: '/images/clients/al-rowad.png',
    // Al-Rowad is a wide horizontal outline logo (840x293). [filter:brightness(0)] ensures the white outline renders as crisp charcoal on light background.
    imageClass: 'h-7 sm:h-8 md:h-9 lg:h-10 max-w-[140px] sm:max-w-[160px] lg:max-w-[175px] [filter:brightness(0)]',
  },
  {
    id: 'emr',
    name: 'EMR',
    alt: 'EMR',
    isText: true,
  },
];

export default function SelectedClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const ctx = gsap.context(() => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (logosRef.current) {
          gsap.fromTo(
            logosRef.current.children,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: logosRef.current,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Trusted Partners"
      className="relative w-full bg-[#fbfbfc] border-y border-neutral-200/70 py-8"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5">
        {/* Intro Header — Intentionally Understated */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-6 md:mb-7">
          <p className="type-eyebrow-accent mb-2">
            TRUSTED PARTNERS
          </p>
          <p className="type-body text-neutral-600 max-w-xl text-center text-sm md:text-base leading-relaxed">
            Trusted by organizations across enterprise technology, operations and digital transformation.
          </p>
        </div>

        {/* Client Logos Row — 6 in a row on Desktop, responsive wrap on Mobile/Tablet */}
        <div
          ref={logosRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-7 lg:gap-8 xl:gap-10 items-center justify-items-center"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className={`w-full flex items-center justify-center p-2 transition-opacity duration-300 ease-out opacity-80 hover:opacity-100 ${client.wrapperClass || ''}`}
            >
              {client.isText ? (
                <span className="font-display font-bold text-2xl lg:text-[1.75rem] tracking-tight text-[#00A3E0] select-none">
                  {client.name}
                </span>
              ) : (
                <img
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-auto object-contain select-none pointer-events-auto ${client.imageClass || ''}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
