import { ArrowRight } from 'lucide-react';
import { InternalLink } from './InternalLink';

const LOGO_SRC = '/images/etechlogix-logo.png';

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 9.5V18M6.5 6.75V6.775M10.25 18V13.25C10.25 11.593 11.593 10.25 13.25 10.25C14.907 10.25 16.25 11.593 16.25 13.25V18M10.25 18H16.25M16.25 18H18"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.5 18.25C6.5 17.25 4.75 15 4.75 12.25C4.75 8.5 7.75 5.5 11.5 5.5C15.25 5.5 18.25 8.5 18.25 12.25C18.25 15 16.5 17.25 13.5 18.25M9.75 20.5C10.5 20.75 11.25 20.875 12 20.875C12.75 20.875 13.5 20.75 14.25 20.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18.25C9 17 9.25 15.5 11.5 15.5C13.75 15.5 14 17 14 18.25"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

const exploreLinks = [
  { label: 'Services', href: '#services' },
  { label: 'AI Solutions', href: '#business-impact' },
  { label: 'Industries', href: '#industries' },
  { label: 'Work', href: '#services' },
  { label: 'Company', href: '#why-etechlogix' },
  { label: 'Careers', href: '#contact' },
] as const;

const capabilityLinks = [
  { label: 'Custom Software Development', href: '#services' },
  { label: 'Agentic AI & Workflow Automation', href: '#business-impact' },
  { label: 'Enterprise Integrations', href: '#services' },
  { label: 'Functional Product Prototypes', href: '#services' },
  { label: 'Legacy Modernization', href: '#services' },
] as const;

const linkClass =
  'text-base leading-relaxed text-neutral-600 transition-[color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]';

const headingClass = 'type-eyebrow-accent mb-5 tracking-[0.18em]';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/90 bg-white text-[#0a0a0a]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 md:px-6 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <div className="lg:col-span-4">
            <InternalLink
              href="/"
              className="inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
              aria-label="eTechLogix home"
            >
              <img
                src={LOGO_SRC}
                alt="eTechLogix"
                className="h-9 w-auto md:h-10"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </InternalLink>
            <p className="type-body mt-5 max-w-sm text-neutral-600">
              Enterprise software, Agentic AI, integrations, and modernization for complex business
              operations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/etechlogix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-[color,border-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#df012a]/40 hover:text-[#df012a] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
                aria-label="eTechLogix on LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/etechlogix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-[color,border-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#df012a]/40 hover:text-[#df012a] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
                aria-label="eTechLogix on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:col-span-5 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className={headingClass}>Explore</h2>
              <ul className="flex flex-col gap-3.5">
                {exploreLinks.map((item) => (
                  <li key={item.label}>
                    <InternalLink href={item.href} className={linkClass}>
                      {item.label}
                    </InternalLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={headingClass}>Key Capabilities</h2>
              <ul className="flex flex-col gap-3.5">
                {capabilityLinks.map((item) => (
                  <li key={item.label}>
                    <InternalLink href={item.href} className={`${linkClass} text-[0.9375rem] md:text-base`}>
                      {item.label}
                    </InternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200/90 pt-10 lg:col-span-3 lg:border-t-0 lg:border-l lg:border-neutral-200/90 lg:pl-10 lg:pt-0 xl:pl-12">
            <h2 className={headingClass}>Contact</h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@etechlogix.com"
                className="type-body font-medium text-[#0a0a0a] transition-colors duration-300 hover:text-[#df012a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
              >
                hello@etechlogix.com
              </a>
              <InternalLink href="#contact" className={linkClass}>
                Contact Us
              </InternalLink>
              <InternalLink
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] transition-[gap,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-2.5 hover:text-[#b80122] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
              >
                Let&apos;s Talk
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </InternalLink>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-neutral-200/90 pt-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="type-caption text-neutral-500 !text-xs normal-case tracking-normal">
            © {year} eTechLogix. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <InternalLink
              href="#privacy-policy"
              className="type-caption text-neutral-500 transition-colors duration-300 hover:text-neutral-700 !text-xs normal-case tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
            >
              Privacy Policy
            </InternalLink>
            <InternalLink
              href="#terms-of-use"
              className="type-caption text-neutral-500 transition-colors duration-300 hover:text-neutral-700 !text-xs normal-case tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df012a]"
            >
              Terms of Use
            </InternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
