import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  LockKeyhole,
  Mail,
  RefreshCw,
  UserRound,
} from 'lucide-react';
import ContactPhoneInput from './ContactPhoneInput';
import { sendEnquiry } from '../../services/contactService';

const contactWaveOffsets = [-48, -40, -32, -24, -16, -8, 0, 8, 16, 24, 32, 40, 48];

const fieldClassName =
  'h-14 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[15px] text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07] disabled:bg-neutral-50 disabled:text-neutral-400';

function RequiredMark() {
  return <span className="text-[#df012a]" aria-hidden="true"> *</span>;
}

export default function ContactHeroFormSection() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    service: '',
    projectRequirement: '',
  });

  const [phone, setPhone] = useState('');

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const result = await sendEnquiry({
      formType: 'contact',
      fullName: formData.fullName,
      workEmail: formData.workEmail,
      company: formData.company || 'Not provided',
      phone: phone || 'Not provided',
      service: formData.service,
      projectRequirement: formData.projectRequirement,
    });

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to send message. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      company: '',
      service: '',
      projectRequirement: '',
    });
    setPhone('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section
      className="contact-hero relative isolate overflow-hidden pb-16 pt-32 text-[#0a0a0a] md:pb-20 md:pt-36"
      data-ready={ready ? 'true' : 'false'}
      aria-labelledby="contact-hero-title"
    >
      <svg
        className="contact-hero-wave pointer-events-none absolute"
        viewBox="0 0 1600 360"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="contact-hero-wave__flow">
          {contactWaveOffsets.map((offset, index) => (
            <path
              key={offset}
              className="contact-hero-wave__line"
              d="M-220 214 C 90 378 342 82 646 208 C 936 330 1215 282 1820 28"
              transform={`translate(0 ${offset})`}
              style={{ opacity: 0.1 + index * 0.012 }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-5 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-center lg:gap-14 xl:gap-20">
        <div className="contact-reveal contact-reveal--copy max-w-[590px]">
          <div className="mb-8 inline-flex items-center gap-2.5">
            <span className="block h-px w-5 bg-[#df012a]" aria-hidden="true" />
            <span className="type-eyebrow-accent tracking-[0.2em]">Contact eTechLogix</span>
            <span className="block h-px w-5 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h1 id="contact-hero-title" className="type-hero-heading text-balance">
            Let&apos;s build what your business needs next<span className="text-[#df012a]">.</span>
          </h1>

          <p className="type-hero-lead mt-6 max-w-[550px] text-neutral-500">
            Tell us about your challenge, project or technology requirement. We&apos;ll connect you with the right team.
          </p>
        </div>

        <div className="contact-reveal contact-reveal--form">
          {status === 'success' ? (
            <div className="rounded-2xl border border-neutral-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(72,18,29,0.055)] text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#df012a]/10 text-[#df012a]">
                <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0a0a0a] mb-3">
                Enquiry Sent Successfully<span className="text-[#df012a]">.</span>
              </h3>
              <p className="type-body text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-[#0a0a0a]">{formData.fullName}</span>. An engineering lead will review your requirement and follow up with you at <span className="font-semibold text-[#0a0a0a]">{formData.workEmail}</span> within 1 business day.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn-etech btn-etech--primary-dark btn-etech--section group inline-flex items-center justify-center"
              >
                <span>Send Another Message</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-[0_20px_60px_rgba(72,18,29,0.055)] sm:p-8 lg:p-10"
            >
              {status === 'error' && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50/80 p-4 text-sm text-red-700">
                  <p className="font-medium">{errorMessage}</p>
                  <p className="mt-1 text-xs text-red-600">
                    You can also reach us directly at <a href="mailto:contact@etechlogix.com" className="underline font-semibold">contact@etechlogix.com</a>.
                  </p>
                </div>
              )}

              <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Full Name<RequiredMark /></span>
                  <span className="relative block">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                    <input
                      className={`${fieldClassName} pl-12`}
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      disabled={status === 'submitting'}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Work Email<RequiredMark /></span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                    <input
                      className={`${fieldClassName} pl-12`}
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      autoComplete="email"
                      required
                      disabled={status === 'submitting'}
                    />
                  </span>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Company</span>
                  <span className="relative block">
                    <Building2 className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                    <input
                      className={`${fieldClassName} pl-12`}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      autoComplete="organization"
                      disabled={status === 'submitting'}
                    />
                  </span>
                </label>

                <div className="block">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Phone</span>
                  <ContactPhoneInput
                    name="phone"
                    onChange={(fullE164) => setPhone(fullE164)}
                  />
                </div>

                <label className="block">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">How can we help?<RequiredMark /></span>
                  <span className="relative block">
                    <select
                      className={`${fieldClassName} appearance-none pr-12`}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Enterprise Custom Software">Enterprise Software</option>
                      <option value="AI & Automation">AI &amp; Automation</option>
                      <option value="System Integrations">System Integrations</option>
                      <option value="Legacy Modernization">Legacy Modernization</option>
                      <option value="Product Development">Product Development</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#171717]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Tell us about your project or requirement<RequiredMark /></span>
                  <textarea
                    className="min-h-[138px] w-full resize-y rounded-lg border border-neutral-200 bg-white px-4 py-4 text-[15px] leading-6 text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07] disabled:bg-neutral-50 disabled:text-neutral-400"
                    name="projectRequirement"
                    value={formData.projectRequirement}
                    onChange={handleChange}
                    placeholder="Describe your project, goals or any specific requirements..."
                    required
                    disabled={status === 'submitting'}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-etech btn-etech--primary-dark btn-etech--section group mt-7 w-full justify-center sm:w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin text-white" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm leading-6 text-neutral-500">
            <LockKeyhole className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
            <span>Your information is safe with us. We respect your privacy.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
