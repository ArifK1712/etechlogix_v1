import { useState, useRef, type ChangeEvent, type DragEvent } from 'react';
import { ArrowRight, ChevronDown, Upload, FileText, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fieldClassName =
  'h-13 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[15px] text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07]';

function RequiredMark() {
  return <span className="text-[#df012a]" aria-hidden="true"> *</span>;
}

const steps = [
  {
    number: '1',
    title: 'We review your enquiry',
    description: 'We review your enquiry and understand your business requirement.',
  },
  {
    number: '2',
    title: 'We evaluate and plan',
    description:
      'Our team evaluates the scope, expected outcome, and the right engagement approach.',
  },
  {
    number: '3',
    title: 'We connect with you',
    description:
      'We connect with you to discuss the project in more detail and align on next steps.',
  },
  {
    number: '4',
    title: 'We propose and begin',
    description:
      'We propose the right solution approach and begin moving toward execution.',
  },
];

export default function WorkEnquirySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).filter(
      (file) => file.size <= 10 * 1024 * 1024 // 10MB limit
    );
    setAttachedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  useGSAP(
    () => {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!isReducedMotion && sectionRef.current) {
        gsap.fromTo(
          '.enquiry-header',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          '.enquiry-left-col',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          '.enquiry-right-col',
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="talk-to-us"
      aria-labelledby="enquiry-heading"
      className="relative scroll-mt-24 bg-[#fafaf8] py-16 lg:py-20 overflow-hidden border-t border-neutral-200/80"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8">
        
        {/* ── Section Header (Single-line Heading Left, Paragraph Right) ── */}
        <div className="enquiry-header mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em] text-[#df012a]">
              TALK TO US
            </span>
            <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-end justify-between gap-6 lg:gap-14">
            <h2
              id="enquiry-heading"
              className="type-section-heading-lg sm:text-4xl md:text-[2.65rem] lg:text-[2.75rem] font-bold tracking-tight text-[#0a0a0a]"
            >
              Let&apos;s build your next success story<span className="text-[#df012a]">.</span>
            </h2>

            <p className="type-body text-neutral-500 max-w-lg lg:justify-self-end text-pretty lg:pb-1">
              Share your project requirements and our team will get back to you with the right next steps.
            </p>
          </div>
        </div>

        {/* ── 2-Column Content Grid: Form (Left) & What Happens Next (Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* ── LEFT COLUMN: Project Enquiry Form (approx 57%) ── */}
          <div className="enquiry-left-col lg:col-span-7">
            <form
              action="mailto:contact@etechlogix.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#171717]">
                    Name<RequiredMark />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className={fieldClassName}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#171717]">
                    Company<RequiredMark />
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    autoComplete="organization"
                    required
                    className={fieldClassName}
                  />
                </label>
              </div>

              {/* Row 2: Corporate email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#171717]">
                    Corporate email<RequiredMark />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                    className={fieldClassName}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#171717]">
                    Phone<RequiredMark />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    className={fieldClassName}
                  />
                </label>
              </div>

              {/* Row 3: Project budget */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#171717]">
                  Project budget
                </span>
                <div className="relative">
                  <select
                    name="budget"
                    defaultValue=""
                    className={`${fieldClassName} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Select your budget range
                    </option>
                    <option value="under-25k">&lt; $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="not-sure">To be determined</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-neutral-500"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
              </label>

              {/* Row 4: Describe your needs in detail */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#171717]">
                  Describe your needs in detail<RequiredMark />
                </span>
                <textarea
                  name="needs"
                  rows={4}
                  placeholder="Tell us more about your project, goals and expectations..."
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white p-4 text-[15px] leading-6 text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07] min-h-[120px] resize-y"
                />
              </label>

              {/* Row 5: Attach documents (Drag & Drop zone) */}
              <div>
                <span className="mb-2 block text-sm font-semibold text-[#171717]">
                  Attach documents
                </span>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
                    isDragging
                      ? 'border-[#df012a] bg-[#df012a]/[0.03]'
                      : 'border-neutral-300 bg-white hover:border-[#df012a]/60 hover:bg-neutral-50/60'
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-50 text-[#df012a] border border-neutral-200/60">
                    <Upload className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0a0a0a]">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      PDF, DOC, DOCX, PPT, XLS (Max. 10MB)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>

                {/* Uploaded Files List */}
                {attachedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {attachedFiles.map((file, idx) => (
                      <div
                        key={`${file.name}-${idx}`}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-700"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-[#df012a] flex-shrink-0" />
                          <span className="truncate">{file.name}</span>
                          <span className="text-neutral-400 flex-shrink-0">
                            ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="text-neutral-400 hover:text-[#df012a] p-1 transition-colors"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 6: Consent checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  checked={agreedToPolicy}
                  onChange={(e) => setAgreedToPolicy(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#df012a] focus:ring-[#df012a]"
                />
                <label htmlFor="privacy-consent" className="text-xs text-neutral-500 leading-relaxed cursor-pointer">
                  By clicking Send Enquiry, you agree to our{' '}
                  <a href="#privacy-policy" className="text-[#df012a] underline hover:text-[#b80122]">
                    Privacy Policy
                  </a>{' '}
                  and allow us to use your information to respond to your inquiry.
                </label>
              </div>

              {/* Row 7: CTA + Direct Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#df012a] transition-all duration-300 shadow-sm"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>

                <p className="text-xs sm:text-sm text-neutral-500">
                  Or email us directly at{' '}
                  <a
                    href="mailto:contact@etechlogix.com"
                    className="font-medium text-[#df012a] underline hover:text-[#b80122] transition-colors"
                  >
                    contact@etechlogix.com
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* ── RIGHT COLUMN: “What happens next?” Process Panel (approx 43%) ── */}
          <div className="enquiry-right-col lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Offset decorative dashed red border accent */}
            <div
              className="absolute -bottom-3.5 -right-3.5 sm:-bottom-4 sm:-right-4 w-full h-full rounded-3xl border border-dashed border-[#df012a]/35 pointer-events-none -z-0"
              aria-hidden="true"
            />

            {/* Main Process Box */}
            <div className="relative z-10 bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-9 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl sm:text-[1.65rem] font-bold text-[#0a0a0a] tracking-tight mb-8">
                What happens next?
              </h3>

              <div className="relative flex flex-col gap-8 sm:gap-9">
                {/* Vertical dashed red connector line */}
                <div
                  className="absolute left-[20px] top-6 bottom-8 w-px border-l border-dashed border-[#df012a]/40"
                  aria-hidden="true"
                />

                {steps.map((step) => (
                  <div key={step.number} className="relative flex items-start gap-4 sm:gap-5 z-10">
                    {/* Numbered circular badge */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white border border-neutral-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center font-bold text-lg text-[#df012a]">
                      {step.number}
                    </div>

                    <div className="pt-1 flex-1">
                      <h4 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0a0a0a] mb-2">
                        {step.title}
                      </h4>
                      <p className="type-body text-neutral-500 text-pretty">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
