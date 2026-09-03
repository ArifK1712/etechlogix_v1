import { useState, useRef, type ChangeEvent, type DragEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Upload, FileText, RefreshCw, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactPhoneInput from '../contact/ContactPhoneInput';
import { sendEnquiry } from '../../services/contactService';

gsap.registerPlugin(ScrollTrigger);

const fieldClassName =
  'h-13 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[15px] text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07] disabled:bg-neutral-50 disabled:text-neutral-400';

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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    needs: '',
  });

  const [phone, setPhone] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPolicy) return;

    setStatus('submitting');
    setErrorMessage('');

    const result = await sendEnquiry({
      formType: 'work',
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: phone || 'Not provided',
      budget: formData.budget,
      requirements: formData.needs,
      files: attachedFiles,
    });

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to submit enquiry. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      budget: '',
      needs: '',
    });
    setPhone('');
    setAttachedFiles([]);
    setAgreedToPolicy(false);
    setStatus('idle');
    setErrorMessage('');
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
      id="contact"
      aria-labelledby="enquiry-heading"
      className="relative bg-[#fafaf8] text-[#0a0a0a] py-16 md:py-20 lg:py-24 border-t border-neutral-200/80 overflow-hidden scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5">
        
        {/* ── Section Header ── */}
        <div className="enquiry-header mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#df012a]" aria-hidden="true" />
            <p className="type-eyebrow-accent tracking-[0.2em] uppercase text-xs font-semibold">
              START A PROJECT
            </p>
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
            {status === 'success' ? (
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-8 sm:p-10 lg:p-12 text-center shadow-sm animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#df012a]/10 text-[#df012a]">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0a0a0a] mb-3">
                  Enquiry Received<span className="text-[#df012a]">.</span>
                </h3>
                <p className="type-body text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0a0a0a]">{formData.name}</span>. We have received your project details for <span className="font-semibold text-[#0a0a0a]">{formData.company}</span> and will follow up with you at <span className="font-semibold text-[#0a0a0a]">{formData.email}</span> within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#df012a] transition-all duration-300 shadow-sm"
                >
                  <span>Submit Another Enquiry</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {status === 'error' && (
                  <div className="rounded-lg border border-red-200 bg-red-50/80 p-4 text-sm text-red-700">
                    <p className="font-medium">{errorMessage}</p>
                    <p className="mt-1 text-xs text-red-600">
                      You can also email us directly at <a href="mailto:contact@etechlogix.com" className="underline font-semibold">contact@etechlogix.com</a>.
                    </p>
                  </div>
                )}

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#171717]">
                      Name<RequiredMark />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                      disabled={status === 'submitting'}
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
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      autoComplete="organization"
                      required
                      disabled={status === 'submitting'}
                      className={fieldClassName}
                    />
                  </label>
                </div>

                {/* Row 2: Corporate email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#171717]">
                      Email address<RequiredMark />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      autoComplete="email"
                      required
                      disabled={status === 'submitting'}
                      className={fieldClassName}
                    />
                  </label>

                  <div className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#171717]">
                      Phone<RequiredMark />
                    </span>
                    <ContactPhoneInput
                      name="phone"
                      heightClass="h-13"
                      required
                      onChange={(fullE164) => setPhone(fullE164)}
                    />
                  </div>
                </div>

                {/* Row 3: Project budget */}
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#171717]">
                    Project budget
                  </span>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
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
                    value={formData.needs}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your project, goals and expectations..."
                    required
                    disabled={status === 'submitting'}
                    className="w-full rounded-lg border border-neutral-200 bg-white p-4 text-[15px] leading-6 text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07] min-h-[120px] resize-y disabled:bg-neutral-50 disabled:text-neutral-400"
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
                      disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#df012a] focus:ring-[#df012a]"
                  />
                  <div className="text-xs text-neutral-500 leading-relaxed">
                    <label htmlFor="privacy-consent" className="cursor-pointer select-none">
                      By clicking Send Enquiry, you agree to our{' '}
                    </label>
                    <Link
                      to="/privacy-policy"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#df012a] underline underline-offset-2 hover:text-[#b80122] transition-colors font-medium cursor-pointer"
                    >
                      Privacy Policy
                    </Link>{' '}
                    <label htmlFor="privacy-consent" className="cursor-pointer select-none">
                      and allow us to use your information to respond to your inquiry.
                    </label>
                  </div>
                </div>

                {/* Row 7: CTA + Direct Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#df012a] transition-all duration-300 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin text-white" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </>
                    )}
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
            )}
          </div>

          {/* ── RIGHT COLUMN: “What happens next?” Process Panel (approx 43%) ── */}
          <div className="enquiry-right-col lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Offset decorative dashed red border accent */}
            <div
              className="absolute -bottom-3.5 -right-3.5 sm:-bottom-4 sm:-right-4 w-full h-full rounded-3xl border border-dashed border-[#df012a]/35 pointer-events-none -z-0"
              aria-hidden="true"
            />

            {/* Main Panel Box */}
            <div className="relative z-10 rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(72,18,29,0.04)]">
              <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-[#0a0a0a] mb-8">
                What happens next?
              </h3>

              {/* Numbered Steps */}
              <div className="space-y-5 sm:space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#df012a]/10 text-xs font-bold text-[#df012a]">
                      {step.number}
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
                      {step.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* NDA Notice */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80">
                <p className="font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-600 flex items-start gap-2.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#df012a] shrink-0 mt-1" />
                  <span>All enquiries and project materials are treated with strict confidentiality. Mutual NDAs available upon request.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
