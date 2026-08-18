import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import invoiceImage from '../../assets/images/enterprise_invoice_review.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function BuiltForRealDocumentsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    // STEP 1: Card reveals
    tl.fromTo('.bfr-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // STEP 2: Image scale
    if (!isReducedMotion) {
      tl.fromTo('.bfr-image',
        { scale: 1.04 },
        { scale: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.6'
      );
    } else {
      gsap.set('.bfr-image', { scale: 1 });
    }

    // STEP 3: Content reveals
    tl.fromTo('.bfr-text',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.8'
    );

    // STEP 4: Markers reveal
    tl.fromTo('.bfr-marker',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15, ease: 'power2.out' },
      '-=0.4'
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pb-16 lg:pb-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* THE SINGLE PREMIUM CARD */}
        <div className="bfr-card bg-white rounded-[2rem] border border-neutral-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[clamp(460px,34vw,520px)]">
          
          {/* LEFT: IMAGE (52-55%) */}
          <div className="w-full lg:w-[52%] xl:w-[54%] relative overflow-hidden h-[360px] lg:h-full shrink-0">
            <img 
              src={invoiceImage} 
              alt="Enterprise document processing" 
              className="bfr-image w-full h-full object-cover object-center origin-center"
            />
            
            {/* SUBTLE EXTRACTION OVERLAYS */}
            {/* Marker 1: Invoice No */}
            <div className="bfr-marker absolute top-[15%] left-[10%] lg:top-[25%] lg:left-[15%] p-2.5 flex flex-col bg-white/5 backdrop-blur-[2px]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-red"></div>
              
              <span className="text-[11px] font-medium text-brand-red mb-1 leading-none">Invoice No.</span>
              <span className="text-[13px] font-medium text-brand-red leading-none">INV-2024-0158</span>
            </div>

            {/* Marker 2: Amount */}
            <div className="bfr-marker absolute top-[45%] right-[10%] lg:top-[50%] lg:right-[15%] p-2.5 flex flex-col bg-white/5 backdrop-blur-[2px]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-red"></div>
              
              <span className="text-[11px] font-medium text-brand-red mb-1 leading-none">Amount</span>
              <span className="text-[13px] font-medium text-brand-red leading-none">$ 24,850.00</span>
            </div>

            {/* Marker 3: Reference */}
            <div className="bfr-marker absolute bottom-[15%] left-[25%] lg:bottom-[20%] lg:left-[30%] p-2.5 flex flex-col bg-white/5 backdrop-blur-[2px]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-brand-red"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-brand-red"></div>
              
              <span className="text-[11px] font-medium text-brand-red mb-1 leading-none">Reference</span>
              <span className="text-[13px] font-medium text-brand-red leading-none">PO-7845-22</span>
            </div>
          </div>

          {/* RIGHT: CONTENT (45-48%) */}
          <div className="w-full lg:flex-1 flex flex-col py-12 lg:py-0 px-8 lg:px-14 xl:px-16 justify-center">
            <p className="type-eyebrow-accent bfr-text mb-5">BUILT FOR REAL BUSINESS DOCUMENTS</p>
            <h2 className="type-section-heading-lg bfr-text mb-5">
              Built for the documents<br className="hidden xl:block" />
              your business runs on<span className="text-brand-red">.</span>
            </h2>
            <p className="type-body bfr-text text-neutral-500 max-w-md text-balance">
              From invoices and forms to spreadsheets and reports, eTechLogix transforms document information into clean, structured data ready for business use.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
