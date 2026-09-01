import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

const tocItems = [
  { id: 'eligibility', label: '1. Eligibility' },
  { id: 'service-description', label: '2. Service Description' },
  { id: 'privacy', label: '3. Privacy' },
  { id: 'opt-out', label: '4. Opt-Out' },
  { id: 'liability', label: 'Liability' },
  { id: 'changes-to-terms', label: '6. Changes to Terms' },
];

export default function TermsConditionsPage() {
  const [activeId, setActiveId] = useState<string>('eligibility');

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0,
      }
    );

    const sectionElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div className="relative w-full bg-white text-[#0a0a0a]">
      <SEOHead data={seoPages.termsConditions} />
      {/* ─── Hero / Intro Section (Exact match to Privacy Policy) ─── */}
      <section className="border-b border-neutral-200/80 bg-[#fafaf8] py-16 md:py-20 lg:py-24 text-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            <p className="type-eyebrow-accent mb-3 tracking-[0.2em] text-[#df012a]">
              LEGAL
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h1 className="type-section-heading-xl text-[#0a0a0a] leading-[1.12] mb-5">
              Terms & Conditions<span className="text-[#df012a]">.</span>
            </h1>
            <p className="type-body text-[#555555] leading-relaxed max-w-2xl text-pretty text-lg mx-auto">
              Terms governing the use of eTechLogix SMS communications and related services.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Content Section with Sticky Navigation (2-Column) ─── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Sticky Navigation (Desktop) */}
            <aside className="hidden lg:block sticky top-28 self-start">
              <div className="rounded-xl border border-neutral-200/90 bg-[#fafaf8] p-4 shadow-2xs">
                <nav className="flex flex-col space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto pr-1 text-sm">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`block py-1 px-2.5 rounded-md transition-all duration-200 text-[13px] leading-snug ${
                          isActive
                            ? 'bg-white font-medium text-[#df012a] border-l-2 border-[#df012a] shadow-2xs'
                            : 'text-neutral-600 hover:text-[#0a0a0a] hover:bg-neutral-100/70'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Terms & Conditions Main Content Column */}
            <div className="w-full max-w-[860px] text-[#222222]">
              
              {/* Introductory Paragraph */}
              <div className="mb-12">
                <p className="type-body text-[#333333] leading-relaxed text-base sm:text-lg">
                  eTechLogix SMS service to stay informed about our products, services, and promotions. Please read our terms and conditions carefully before opting in, and remember that standard message and data rates may apply
                </p>
              </div>

              {/* 1. Eligibility */}
              <div id="eligibility" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  1. Eligibility:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  This service is available only to individuals who are at least 18 years of age or older, reside in the United States, and have a valid mobile number. By agreeing to the terms, you certify that you meet these requirements.
                </p>
              </div>

              {/* 2. Service Description */}
              <div id="service-description" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  2. Service Description:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  This service allows users to receive text messages, alerts, and promotions from the service provider. Standard message and data rates may apply. The service provider does not guarantee the accuracy or completeness of any information provided through the service.
                </p>
              </div>

              {/* 3. Privacy */}
              <div id="privacy" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  3. Privacy:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  Your privacy is important to us. We will not share your personal information with third parties without your consent, except as required by law. Review our{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-[#df012a] underline underline-offset-4 decoration-[#df012a]/40 hover:decoration-[#df012a] transition-colors"
                  >
                    Privacy Policy
                  </Link>{' '}
                  for more details.
                </p>
              </div>

              {/* 4. Opt-Out */}
              <div id="opt-out" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  4. Opt-Out:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  You may opt-out of the service at any time by replying STOP to any message received. After opting out, you will not receive any further messages, alerts, or promotions.
                </p>
              </div>

              {/* Liability */}
              <div id="liability" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Liability:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  The service provider shall not be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of the use or inability to use the service.
                </p>
              </div>

              {/* 6. Changes to Terms */}
              <div id="changes-to-terms" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  6. Changes to Terms:
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  The service provider may change these terms at any time. It is your responsibility to review the terms and conditions regularly.
                </p>
              </div>

              {/* Closing Consent Statement (Styled as a clean legal paragraph with subtle divider) */}
              <div className="scroll-mt-28 pt-8 border-t border-neutral-200">
                <p className="type-body font-medium text-[#222222] leading-relaxed">
                  By using this service, you agree to the terms and conditions set forth above. If you do not agree, please do not use this service.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
