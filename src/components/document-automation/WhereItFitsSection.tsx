import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    number: '01',
    category: 'Finance & commercial',
    description: 'Invoices, purchase documents and financial records.',
    fields: ['Invoice Number', 'Vendor', 'Date', 'Amount']
  },
  {
    number: '02',
    category: 'Forms & operational records',
    description: 'Applications, submitted forms and internal business documents.',
    fields: ['Name', 'Contact', 'Category', 'Date', 'Submitted Information']
  },
  {
    number: '03',
    category: 'Reports & business files',
    description: 'Reports, DOC / DOCX files, spreadsheets and existing records.',
    fields: ['Title', 'Reference', 'Date', 'Key Fields', 'Document Data']
  }
];

export default function WhereItFitsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    // STEP 1: Left text
    tl.fromTo('.wif-header',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    // STEP 2: Rows reveal
    tl.fromTo('.wif-row',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
      '-=0.2'
    );

    // STEP 3: Fields stagger
    if (!isReducedMotion) {
      tl.fromTo('.wif-field',
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
        '-=0.4'
      );
    } else {
      tl.fromTo('.wif-field', { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.4');
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-white overflow-hidden border-t border-neutral-200/70">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* LEFT CONTENT (approx 38-40%) */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <p className="type-eyebrow-accent wif-header mb-4">WHERE IT FITS</p>
            <h2 className="type-section-heading-lg wif-header mb-6">
              One extraction capability.<br className="hidden lg:block" />
              Across the documents<br className="hidden lg:block" />
              your teams already<br className="hidden lg:block" />
              handle<span className="text-brand-red">.</span>
            </h2>
            <p className="type-body wif-header text-neutral-500 max-w-md text-balance">
              Apply intelligent extraction across the documents your business already processes to turn important information into clean, structured data.
            </p>
          </div>

          {/* RIGHT CONTENT (approx 60-62%) */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
            <div className="flex flex-col">
              {rows.map((row, index) => (
                <div 
                  key={row.number} 
                  className={`wif-row flex flex-col md:flex-row items-start gap-6 lg:gap-8 pb-10 ${index !== rows.length - 1 ? 'border-b border-neutral-200/70 mb-10' : ''}`}
                >
                  
                  {/* NUMBER: ~8-10% */}
                  <div className="flex items-start gap-4 md:w-[15%] lg:w-[12%] shrink-0 pt-0.5">
                    <span className="font-display text-2xl lg:text-3xl font-bold text-brand-red tracking-tight leading-none">{row.number}</span>
                    <div className="w-[1px] h-12 bg-brand-red/20 hidden md:block mt-1"></div>
                  </div>
                  
                  {/* BUSINESS CONTEXT: ~50-55% */}
                  <div className="flex flex-col flex-1 pt-0.5">
                    <h3 className="font-display text-lg font-semibold leading-[1.25] tracking-[-0.015em] text-[#111111] md:text-xl mb-2">
                      {row.category}
                    </h3>
                    <p className="type-body text-neutral-500 max-w-[280px]">
                      {row.description}
                    </p>
                  </div>
                  
                  {/* FIELD LIST: ~35-40% */}
                  <div className="flex flex-col gap-3 w-full md:w-[35%] lg:w-[40%] pt-1">
                    {row.fields.map((field) => (
                      <div key={field} className="wif-field flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></div>
                        <span className="type-body text-[#111111] whitespace-nowrap">{field}</span>
                        <div className="h-[1px] w-full bg-neutral-200/50"></div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
