import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'log-files', label: 'Log Files' },
  { id: 'cookies-and-web-beacons', label: 'Cookies & Web Beacons' },
  { id: 'advertising-partners', label: 'Our Advertising Partners' },
  { id: 'privacy-policies', label: 'Privacy Policies' },
  { id: 'third-party-privacy-policies', label: 'Third Party Privacy Policies' },
  { id: 'childrens-information', label: "Children's Information" },
  { id: 'online-privacy-policy-only', label: 'Online Privacy Policy Only' },
  { id: 'consent', label: 'Consent' },
  { id: 'app-privacy-policy', label: 'App Privacy Policy' },
  { id: 'information-collection-and-use', label: 'Information Collection & Use' },
  { id: 'log-data', label: 'Log Data' },
  { id: 'app-cookies', label: 'App Cookies' },
  { id: 'service-providers', label: 'Service Providers' },
  { id: 'security', label: 'Security' },
  { id: 'links-to-other-sites', label: 'Links to Other Sites' },
  { id: 'childrens-privacy', label: 'Children’s Privacy' },
  { id: 'changes-to-policy', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState<string>('overview');

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
      {/* ─── Hero / Intro Section ─── */}
      <section className="border-b border-neutral-200/80 bg-[#fafaf8] py-16 md:py-20 lg:py-24 text-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            <p className="type-eyebrow-accent mb-3 tracking-[0.2em] text-[#df012a]">
              LEGAL
            </p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h1 className="type-section-heading-xl text-[#0a0a0a] leading-[1.12] mb-5">
              Privacy Policy<span className="text-[#df012a]">.</span>
            </h1>
            <p className="type-body text-[#555555] leading-relaxed max-w-2xl text-pretty text-lg mx-auto">
              How eTechLogix collects, uses, and protects information across our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Content Section with Sticky Table of Contents ─── */}
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

            {/* Privacy Policy Main Content Column */}
            <div className="w-full max-w-[860px] prose prose-neutral max-w-none text-[#222222]">
              
              {/* Overview */}
              <div id="overview" className="scroll-mt-28 mb-12">
                <p className="type-body text-[#333333] leading-relaxed text-base sm:text-lg">
                  At eTechLogix, accessible from{' '}
                  <a
                    href="https://www.etechlogix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#df012a] underline underline-offset-4 decoration-[#df012a]/40 hover:decoration-[#df012a] transition-colors"
                  >
                    https://www.etechlogix.com/
                  </a>
                  , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by eTechLogix and how we use it.
                </p>
              </div>

              {/* Log Files */}
              <div id="log-files" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Log Files
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  eTechLogix follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
              </div>

              {/* Cookies and Web Beacons */}
              <div id="cookies-and-web-beacons" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Cookies and Web Beacons
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  Like any other website, eTechLogix uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
              </div>

              {/* Our Advertising Partners */}
              <div id="advertising-partners" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Our Advertising Partners
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                </p>
                <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 my-4">
                  <h3 className="font-display font-semibold text-base text-[#0a0a0a] mb-1">
                    Google
                  </h3>
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-[#df012a] break-all underline underline-offset-4 decoration-[#df012a]/40 hover:decoration-[#df012a] transition-colors"
                  >
                    https://policies.google.com/technologies/ads
                  </a>
                </div>
              </div>

              {/* Privacy Policies */}
              <div id="privacy-policies" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Privacy Policies
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  You may consult this list to find the Privacy Policy for each of the advertising partners of eTechLogix.
                </p>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on eTechLogix, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                <p className="type-body text-[#555555] leading-relaxed">
                  <strong className="font-semibold text-[#0a0a0a]">Note:</strong> that eTechLogix has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </div>

              {/* Third Party Privacy Policies */}
              <div id="third-party-privacy-policies" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Third Party Privacy Policies
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  eTechLogix's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p className="type-body text-[#555555] leading-relaxed">
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
                </p>
              </div>

              {/* Children's Information */}
              <div id="childrens-information" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Children's Information
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p className="type-body text-[#555555] leading-relaxed">
                  eTechLogix does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
              </div>

              {/* Online Privacy Policy Only */}
              <div id="online-privacy-policy-only" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Online Privacy Policy Only
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in eTechLogix. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>
              </div>

              {/* Consent */}
              <div id="consent" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Consent
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
              </div>

              {/* App Privacy Policy */}
              <div id="app-privacy-policy" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  App Privacy Policy
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  eTechLogix built the ConGenie app app as a Free app. This SERVICE is provided by eTechLogix at no cost and is intended for use as is.
                </p>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                </p>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
                <p className="type-body text-[#555555] leading-relaxed">
                  The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at ConGenie app unless otherwise defined in this Privacy Policy.
                </p>
              </div>

              {/* Information Collection and Use */}
              <div id="information-collection-and-use" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Information Collection and Use
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.
                </p>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  The app does use third-party services that may collect information used to identify you.
                </p>
                <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 my-4">
                  <p className="type-body-sm text-[#0a0a0a] font-medium mb-2">
                    Link to the privacy policy of third-party service providers used by the app:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#555555]">
                    <li>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#df012a] underline underline-offset-4 decoration-[#df012a]/40 hover:decoration-[#df012a] transition-colors"
                      >
                        Google Play Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Log Data */}
              <div id="log-data" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Log Data
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device ID, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                </p>
              </div>

              {/* Cookies (App) */}
              <div id="app-cookies" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Cookies
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                </p>
                <p className="type-body text-[#555555] leading-relaxed">
                  This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </p>
              </div>

              {/* Service Providers */}
              <div id="service-providers" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Service Providers
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  We may employ third-party companies and individuals due to the following reasons:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 mb-4 text-[#555555] text-base leading-relaxed">
                  <li>To facilitate our Service;</li>
                  <li>To provide the Service on our behalf;</li>
                  <li>To perform Service-related services; or</li>
                  <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <p className="type-body text-[#555555] leading-relaxed">
                  We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </p>
              </div>

              {/* Security */}
              <div id="security" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Security
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Links to Other Sites */}
              <div id="links-to-other-sites" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Links to Other Sites
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>

              {/* Children’s Privacy */}
              <div id="childrens-privacy" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Children’s Privacy
                </h2>
                <p className="type-body text-[#555555] leading-relaxed">
                  These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
                </p>
              </div>

              {/* Changes to This Privacy Policy */}
              <div id="changes-to-policy" className="scroll-mt-28 pt-8 border-t border-neutral-200 mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                <div className="inline-block rounded-md border border-neutral-200 bg-[#fafaf8] px-3.5 py-1.5 text-xs font-mono text-neutral-600">
                  This policy is effective as of 2024-01-27
                </div>
              </div>

              {/* Contact Us */}
              <div id="contact-us" className="scroll-mt-28 pt-8 border-t border-neutral-200">
                <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Contact Us
                </h2>
                <p className="type-body text-[#555555] leading-relaxed mb-6">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to{' '}
                  <Link
                    to="/contact"
                    className="text-[#df012a] font-medium underline underline-offset-4 decoration-[#df012a]/40 hover:decoration-[#df012a] transition-colors"
                  >
                    contact us
                  </Link>
                  .
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
