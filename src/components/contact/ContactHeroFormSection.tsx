import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from 'lucide-react';

const contactWaveOffsets = [-48, -40, -32, -24, -16, -8, 0, 8, 16, 24, 32, 40, 48];

const fieldClassName =
  'h-14 w-full rounded-lg border border-neutral-200 bg-white px-4 text-[15px] text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07]';

function RequiredMark() {
  return <span className="text-[#df012a]" aria-hidden="true"> *</span>;
}

export default function ContactHeroFormSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

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
          <form
            action="mailto:contact@etechlogix.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-[0_20px_60px_rgba(72,18,29,0.055)] sm:p-8 lg:p-10"
          >
            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Full Name<RequiredMark /></span>
                <span className="relative block">
                  <UserRound className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                  <input className={`${fieldClassName} pl-12`} type="text" name="fullName" placeholder="Enter your full name" autoComplete="name" required />
                </span>
              </label>

              <label className="block">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Work Email<RequiredMark /></span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                  <input className={`${fieldClassName} pl-12`} type="email" name="workEmail" placeholder="name@company.com" autoComplete="email" required />
                </span>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Company</span>
                <span className="relative block">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                  <input className={`${fieldClassName} pl-12`} type="text" name="company" placeholder="Enter your company name" autoComplete="organization" />
                </span>
              </label>

              <label className="block">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Phone</span>
                <span className="relative block">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
                  <input className={`${fieldClassName} pl-12`} type="tel" name="phone" placeholder="Enter your phone number" autoComplete="tel" />
                </span>
              </label>

              <label className="block">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">How can we help?<RequiredMark /></span>
                <span className="relative block">
                  <select className={`${fieldClassName} appearance-none pr-12`} name="service" defaultValue="" required>
                    <option value="" disabled>Select an option</option>
                    <option>Enterprise Software</option>
                    <option>AI &amp; Automation</option>
                    <option>System Integrations</option>
                    <option>Legacy Modernization</option>
                    <option>Product Development</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#171717]" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2.5 block text-sm font-semibold text-[#171717]">Tell us about your project or requirement<RequiredMark /></span>
                <textarea
                  className="min-h-[138px] w-full resize-y rounded-lg border border-neutral-200 bg-white px-4 py-4 text-[15px] leading-6 text-[#171717] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-[#df012a] focus:ring-4 focus:ring-[#df012a]/[0.07]"
                  name="projectRequirement"
                  placeholder="Describe your project, goals or any specific requirements..."
                  required
                />
              </label>
            </div>

            <button type="submit" className="btn-etech btn-etech--primary-dark btn-etech--section group mt-7 w-full justify-center sm:w-full">
              <span>Send Enquiry</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
            </button>
          </form>

          <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm leading-6 text-neutral-500">
            <LockKeyhole className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />
            <span>Your information is safe with us. We respect your privacy.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
