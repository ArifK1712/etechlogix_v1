import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight, Menu, X, Layers, Cpu, Building2 } from 'lucide-react';
import { toInternalTo } from './InternalLink';
import { Button, buttonClassName } from './ui/Button';

export { Button, buttonClassName };
export type { ButtonProps, ButtonVariant, ButtonSize } from './ui/Button';

const LOGO_SRC = '/images/etechlogix-logo.png';

interface ServiceItem {
  title: string;
  href: string;
  description: string;
}

const servicesItems: ServiceItem[] = [
  {
    title: 'Enterprise Custom Software',
    href: '/services/enterprise-custom-software',
    description: 'Custom platforms built around complex business operations.',
  },
  {
    title: 'Enterprise Integrations',
    href: '/services/enterprise-integrations',
    description: 'Connect ERP, CRM, cloud platforms, and custom systems.',
  },
  {
    title: 'Legacy System Modernization',
    href: '/services/legacy-modernization',
    description: 'Modernize aging applications without disrupting operations.',
  },
  {
    title: 'Product Prototyping',
    href: '/services/product-prototyping',
    description: 'Working prototypes for validation, demonstrations, and investment.',
  },
  {
    title: 'Dedicated Engineering Teams',
    href: '/services/dedicated-engineering-teams',
    description: 'Experienced engineers who extend your team and take ownership of delivery.',
  },
];

const aiItems: ServiceItem[] = [
  {
    title: 'Agentic AI & Workflow Automation',
    href: '/ai-automation/agentic-ai-workflow-automation',
    description: 'AI agents that execute and coordinate operational workflows.',
  },
  {
    title: 'Document Automation',
    href: '/ai-automation/document-automation',
    description: 'Intelligent parsing and extraction for complex enterprise documents.',
  },
  {
    title: 'Intelligent Process Automation',
    href: '/ai-automation/intelligent-process-automation',
    description: 'Automated policy checks, approvals, and system notifications.',
  },
];

const industryItems: ServiceItem[] = [
  {
    title: 'Events & Conferences',
    href: '/industries/events-conferences',
    description: 'Registration, attendee check-in, venue ops, and real-time reporting.',
  },
  {
    title: 'Healthcare',
    href: '/industries/healthcare',
    description: 'HIPAA-compliant records synchronization and care pathway coordination.',
  },
  {
    title: 'ERP, Distribution & Supply Chain',
    href: '/industries/erp-distribution-supply-chain',
    description: 'Multi-warehouse inventory sync, order routing, and supply chain automation.',
  },
  {
    title: 'Enterprise Operations',
    href: '/industries/enterprise-operations',
    description: 'Operational telemetry dashboards and decision support systems.',
  },
];

const companyItems: ServiceItem[] = [
  {
    title: 'About eTechLogix',
    href: '/company/about',
    description: 'Our story, engineering philosophy, and long-term partnership approach.',
  },
  {
    title: 'How We Deliver',
    href: '/company/how-we-deliver',
    description: 'From complex challenge to production-ready, dependable solutions.',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Discuss operational challenges, integrations, modernization, and AI automation.',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape Key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
      if (headerRef.current) {
        gsap.set(headerRef.current, { yPercent: 0, clearProps: 'transform' });
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [mobileMenuOpen]);

  const navLinkTone = 'text-neutral-600 hover:text-[#0a0a0a]';
  const navLinkActive = 'text-[#df012a]';
  const mobileMenuTopClass = 'top-16';

  return (
    <header
      ref={headerRef}
      className="pointer-events-none top-5 fixed inset-x-0 top-0 z-50 overflow-x-clip max-w-[1400px] mx-auto rounded-3xl"
    >
      <div
        ref={(node) => {
          shellRef.current = node;
          dropdownContainerRef.current = node;
        }}
        className={`pointer-events-auto rounded-3xl w-full border border-[#e5e7eb] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          isScrolled
            ? 'bg-white/80  backdrop-blur-md'
            : 'bg-white'
        }`}
      >
        <div className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between overflow-visible px-6 lg:px-10 xl:px-4">
        {/* Left Column: Official Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            aria-label="eTechLogix Homepage"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md py-1"
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }}
          >
            <img
              src={LOGO_SRC}
              alt="eTechLogix"
              width={168}
              height={48}
              className={
                'h-9 w-auto object-contain object-left sm:h-10 transition-opacity duration-300'
              }
              decoding="async"
            />
          </Link>
        </div>

        {/* Center Column: TRUE VISUAL CENTER NAVIGATION (Anchored at 50% center axis) */}
        <nav
          aria-label="Main Navigation"
          className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-7 xl:gap-10 h-full overflow-visible"
        >
          {/* Services Link with Dropdown */}
          <div
            className="relative h-full flex items-center overflow-visible"
            onMouseEnter={() => setActiveDropdown('Services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={activeDropdown === 'Services'}
              aria-controls="services-dropdown"
              onClick={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
              className={`group type-nav nav-link-premium whitespace-nowrap transition-colors duration-200 flex items-center gap-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Services' ? navLinkActive : navLinkTone
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'Services'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-neutral-700'
                }`}
              />
            </button>

            {/* Services Dropdown */}
            {activeDropdown === 'Services' && (
              <div
                id="services-dropdown"
                role="menu"
                aria-label="Services Dropdown"
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[680px] max-w-[calc(100vw-48px)] bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
              >
                <div className="px-3 pt-2 pb-3 mb-2 border-b border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-normal text-[#df012a] uppercase tracking-wider block">
                      WHAT WE BUILD
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Enterprise software and engineering services designed around complex business operations.
                    </p>
                  </div>
                  <Layers className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {servicesItems.slice(0, 4).map((item) => (
                    <Link
                      key={item.title}
                      to={toInternalTo(item.href)}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:bg-neutral-50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-normal text-[#111111] group-hover:text-[#df012a] transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#df012a]" />
                      </div>
                      <p className="text-[12px] text-neutral-600 mt-1 leading-[1.45] line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="mx-3 mt-3 border-t border-neutral-200 pt-3">
                  <span className="mb-2 block text-[10px] font-mono font-normal uppercase tracking-wider text-[#df012a]">
                    HOW WE WORK WITH YOU
                  </span>
                  <Link
                    to={toInternalTo(servicesItems[4].href)}
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="group flex flex-col justify-center rounded-xl bg-neutral-50 p-3 transition-colors duration-150 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-normal text-[#111111] transition-colors group-hover:text-[#df012a]">
                        {servicesItems[4].title}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#df012a] transition-transform duration-150 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-1 text-[12px] leading-[1.45] text-neutral-600">
                      {servicesItems[4].description}
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* AI & Automation Link with Dropdown */}
          <div
            className="relative h-full flex items-center overflow-visible"
            onMouseEnter={() => setActiveDropdown('AI & Automation')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={activeDropdown === 'AI & Automation'}
              aria-controls="ai-dropdown"
              onClick={() =>
                setActiveDropdown(activeDropdown === 'AI & Automation' ? null : 'AI & Automation')
              }
              className={`group type-nav nav-link-premium whitespace-nowrap transition-colors duration-200 flex items-center gap-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'AI & Automation' ? navLinkActive : navLinkTone
              }`}
            >
              <span>AI & Automation</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'AI & Automation'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-neutral-700'
                }`}
              />
            </button>

            {/* AI & Automation Dropdown */}
            {activeDropdown === 'AI & Automation' && (
              <div
                id="ai-dropdown"
                role="menu"
                aria-label="AI and Automation Dropdown"
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[480px] max-w-[calc(100vw-48px)] bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
              >
                <div className="px-3 pt-2 pb-3 mb-2 border-b border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-normal text-[#df012a] uppercase tracking-wider block">
                      OPERATIONAL AI
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      AI agents and automation systems that execute real business workflows.
                    </p>
                  </div>
                  <Cpu className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="space-y-1">
                  {aiItems.map((item) => (
                    <Link
                      key={item.title}
                      to={toInternalTo(item.href)}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:bg-neutral-50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-normal text-[#111111] group-hover:text-[#df012a] transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#df012a]" />
                      </div>
                      <p className="text-[12px] text-neutral-600 mt-1 leading-[1.45]">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Link with Dropdown */}
          <div
            className="relative h-full flex items-center overflow-visible"
            onMouseEnter={() => setActiveDropdown('Industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={activeDropdown === 'Industries'}
              aria-controls="industries-dropdown"
              onClick={() => setActiveDropdown(activeDropdown === 'Industries' ? null : 'Industries')}
              className={`group type-nav nav-link-premium whitespace-nowrap transition-colors duration-200 flex items-center gap-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Industries' ? navLinkActive : navLinkTone
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'Industries'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-neutral-700'
                }`}
              />
            </button>

            {/* Industries Dropdown */}
            {activeDropdown === 'Industries' && (
              <div
                id="industries-dropdown"
                role="menu"
                aria-label="Industries Dropdown"
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[460px] max-w-[calc(100vw-48px)] bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
              >
                <div className="px-3 pt-2 pb-3 mb-2 border-b border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-normal text-[#df012a] uppercase tracking-wider block">
                      INDUSTRY EXPERIENCE
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Enterprise technology designed for operationally complex environments.
                    </p>
                  </div>
                  <Building2 className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="space-y-1">
                  {industryItems.map((item) => (
                    <Link
                      key={item.title}
                      to={toInternalTo(item.href)}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:bg-neutral-50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-normal text-[#111111] group-hover:text-[#df012a] transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#df012a]" />
                      </div>
                      <p className="text-[12px] text-neutral-600 mt-1 leading-[1.45]">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct Work Link */}
          <Link
            to="/work"
            className={`type-nav nav-link-premium whitespace-nowrap transition-colors duration-200 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${navLinkTone}`}
          >
            Work
          </Link>

          {/* Company Link with Dropdown */}
          <div
            className="relative h-full flex items-center overflow-visible"
            onMouseEnter={() => setActiveDropdown('Company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={activeDropdown === 'Company'}
              aria-controls="company-dropdown"
              onClick={() => setActiveDropdown(activeDropdown === 'Company' ? null : 'Company')}
              className={`group type-nav nav-link-premium whitespace-nowrap transition-colors duration-200 flex items-center gap-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Company' ? navLinkActive : navLinkTone
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'Company'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-neutral-700'
                }`}
              />
            </button>

            {activeDropdown === 'Company' && (
              <div
                id="company-dropdown"
                role="menu"
                aria-label="Company Dropdown"
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[460px] max-w-[calc(100vw-48px)] bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
              >
                <div className="px-3 pt-2 pb-3 mb-2 border-b border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-normal text-[#df012a] uppercase tracking-wider block">
                      ABOUT ETECHLOGIX
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Learn about our company, delivery approach, and long-term engineering partnerships.
                    </p>
                  </div>
                  <Building2 className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="space-y-1">
                  {companyItems.map((item) => (
                    <Link
                      key={item.title}
                      to={toInternalTo(item.href)}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:bg-neutral-50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-normal text-[#111111] group-hover:text-[#df012a] transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#df012a]" />
                      </div>
                      <p className="text-[12px] text-neutral-600 mt-1 leading-[1.45]">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Column: Premium Modular Brand Button (Ghost Variant filling with Red on Hover) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <Button href="/contact" variant="primaryDark" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen((open) => !open);
            }}
            className="relative z-[60] lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </div>

      {mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className={`lg:hidden fixed inset-x-0 bottom-0 z-[45] flex flex-col justify-between overflow-y-auto border-t border-[#e5e7eb] bg-white text-[#0a0a0a] ${mobileMenuTopClass}`}
            data-lenis-prevent
          >
            <div className="px-6 py-6 space-y-4">
              {/* Services Mobile Category */}
              <div className="border-b border-[#e5e7eb] pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(expandedMobileCategory === 'Services' ? null : 'Services')
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-normal text-lg text-[#0a0a0a]"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedMobileCategory === 'Services' ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>
                {expandedMobileCategory === 'Services' && (
                  <div className="mt-3 pl-3 space-y-3 border-l-2 border-[#df012a]">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.title}
                        to={toInternalTo(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-600 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* AI & Automation Mobile Category */}
              <div className="border-b border-[#e5e7eb] pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === 'AI & Automation' ? null : 'AI & Automation',
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-normal text-lg text-[#0a0a0a]"
                >
                  <span>AI & Automation</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedMobileCategory === 'AI & Automation' ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>
                {expandedMobileCategory === 'AI & Automation' && (
                  <div className="mt-3 pl-3 space-y-3 border-l-2 border-[#df012a]">
                    {aiItems.map((item) => (
                      <Link
                        key={item.title}
                        to={toInternalTo(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-600 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Mobile Category */}
              <div className="border-b border-[#e5e7eb] pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === 'Industries' ? null : 'Industries',
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-normal text-lg text-[#0a0a0a]"
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedMobileCategory === 'Industries' ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>
                {expandedMobileCategory === 'Industries' && (
                  <div className="mt-3 pl-3 space-y-3 border-l-2 border-[#df012a]">
                    {industryItems.map((item) => (
                      <Link
                        key={item.title}
                        to={toInternalTo(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-600 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Work Link */}
              <div className="border-b border-[#e5e7eb] pb-4">
                <Link
                  to="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 font-display font-normal text-lg text-[#0a0a0a] hover:text-[#df012a]"
                >
                  Work
                </Link>
              </div>

              {/* Company Mobile Category */}
              <div className="border-b border-[#e5e7eb] pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(expandedMobileCategory === 'Company' ? null : 'Company')
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-normal text-lg text-[#0a0a0a]"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedMobileCategory === 'Company' ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>
                {expandedMobileCategory === 'Company' && (
                  <div className="mt-3 pl-3 space-y-3 border-l-2 border-[#df012a]">
                    {companyItems.map((item) => (
                      <Link
                        key={item.title}
                        to={toInternalTo(item.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-600 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="mt-auto border-t border-[#e5e7eb] bg-[#fafafa] p-6">
              <Button
                href="/contact"
                variant="primaryDark"
                size="lg"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
