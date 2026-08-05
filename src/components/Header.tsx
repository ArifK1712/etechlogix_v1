import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight, Menu, X, Layers, Cpu, Building2 } from 'lucide-react';
import { isExternalLink, toInternalTo } from './InternalLink';

/* ─── Reusable Modular Button Component Architecture ─── */
export interface ButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#df012a] hover:bg-[#b80122] text-white border border-[#df012a] shadow-sm hover:shadow-[0_8px_25px_rgba(223,1,42,0.35)] rounded-full',
  ghost:
    'bg-transparent text-white border border-white/20 hover:border-[#df012a] hover:bg-[#df012a] rounded-full shadow-sm hover:shadow-[0_8px_25px_rgba(223,1,42,0.35)]',
  outline:
    'bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/10 rounded-full',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-4 text-xs font-semibold rounded-full',
  md: 'h-11 px-6 text-[14px] font-semibold rounded-full',
  lg: 'h-12 px-7 text-[15px] font-semibold rounded-full',
};

export function Button({
  variant = 'ghost',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] shrink-0 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {icon && (
        <span className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href && !isExternalLink(href)) {
    return (
      <Link
        to={toInternalTo(href)}
        style={{ paddingLeft: '24px', paddingRight: '24px' }}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      style={{ paddingLeft: '24px', paddingRight: '24px' }}
      className={classes}
      {...props}
    >
      {content}
    </a>
  );
}

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
    description: 'Experienced engineers who take product and delivery ownership.',
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
  {
    title: 'AI-Powered Enterprise Applications',
    href: '/ai-automation/ai-powered-enterprise-applications',
    description: 'Custom applications integrated with enterprise LLMs & RAG engines.',
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

  const navLinkTone = isScrolled ? 'text-white/90 hover:text-[#df012a]' : 'text-neutral-200 hover:text-[#df012a]';
  const mobileMenuTopClass = isScrolled ? 'top-[calc(0.75rem+3.75rem)]' : 'top-[5.5rem]';

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 z-50 flex w-full max-w-[1500px] mx-auto justify-center overflow-x-clip overflow-y-visible pointer-events-none transition-[top,padding] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isScrolled ? 'top-2 sm:top-3 px-3 sm:px-4' : 'top-0 px-0 py-2'
      }`}
    >
      <div
        ref={(node) => {
          shellRef.current = node;
          dropdownContainerRef.current = node;
        }}
        className={`pointer-events-auto relative mx-auto flex w-full items-center justify-between overflow-visible transition-[max-width,height,border-radius,background-color,box-shadow,border-color,padding] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? 'max-w-[1520px] h-14 sm:h-[3.75rem] rounded-full border border-white/[0.08] bg-[#272a32]/92 px-4 sm:px-5 lg:px-8 backdrop-blur-xl'
            : 'max-w-none h-20 rounded-none border border-transparent bg-transparent px-5 shadow-none backdrop-blur-0'
        }`}
      >
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
                isScrolled
                  ? 'h-8 sm:h-9 w-auto object-contain object-left transition-[height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]'
                  : 'h-9 sm:h-10 md:h-11 w-auto object-contain object-left transition-[height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]'
              }
              decoding="async"
            />
          </Link>
        </div>

        {/* Center Column: TRUE VISUAL CENTER NAVIGATION (Anchored at 50% center axis) */}
        <nav
          aria-label="Main Navigation"
          className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6 xl:gap-9 h-full overflow-visible"
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
              className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Services' ? 'text-[#df012a]' : navLinkTone
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'Services'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-[#df012a]'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#df012a] transition-all duration-300 ${
                  activeDropdown === 'Services' ? 'w-full' : 'w-0 group-hover:w-full'
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
                    <span className="text-[10px] font-mono font-bold text-[#df012a] uppercase tracking-wider block">
                      WHAT WE BUILD
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Enterprise software and engineering services designed around complex business operations.
                    </p>
                  </div>
                  <Layers className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      to={toInternalTo(item.href)}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:bg-neutral-50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-semibold text-[#111111] group-hover:text-[#df012a] transition-colors">
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
              className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'AI & Automation' ? 'text-[#df012a]' : navLinkTone
              }`}
            >
              <span>AI & Automation</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'AI & Automation'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-[#df012a]'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#df012a] transition-all duration-300 ${
                  activeDropdown === 'AI & Automation' ? 'w-full' : 'w-0 group-hover:w-full'
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
                    <span className="text-[10px] font-mono font-bold text-[#df012a] uppercase tracking-wider block">
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
                        <span className="text-[14px] font-semibold text-[#111111] group-hover:text-[#df012a] transition-colors">
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
              className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Industries' ? 'text-[#df012a]' : navLinkTone
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'Industries'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-[#df012a]'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#df012a] transition-all duration-300 ${
                  activeDropdown === 'Industries' ? 'w-full' : 'w-0 group-hover:w-full'
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
                    <span className="text-[10px] font-mono font-bold text-[#df012a] uppercase tracking-wider block">
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
                        <span className="text-[14px] font-semibold text-[#111111] group-hover:text-[#df012a] transition-colors">
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
            className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${navLinkTone}`}
          >
            <span>Work</span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-[#df012a] w-0 group-hover:w-full transition-all duration-300" />
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
              className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'Company' ? 'text-[#df012a]' : navLinkTone
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'Company'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-[#df012a]'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#df012a] transition-all duration-300 ${
                  activeDropdown === 'Company' ? 'w-full' : 'w-0 group-hover:w-full'
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
                    <span className="text-[10px] font-mono font-bold text-[#df012a] uppercase tracking-wider block">
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
                        <span className="text-[14px] font-semibold text-[#111111] group-hover:text-[#df012a] transition-colors">
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
            <Button href="/contact" variant="ghost" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Requirements
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
            className={`relative z-[60] lg:hidden flex items-center justify-center w-10 h-10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${
              isScrolled ? 'rounded-full hover:bg-white/10 border border-white/10' : 'rounded-lg hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className={`lg:hidden fixed inset-x-0 bottom-0 z-[45] bg-[#030712]/98 backdrop-blur-2xl text-white flex flex-col justify-between overflow-y-auto border-t border-white/10 ${mobileMenuTopClass}`}
            data-lenis-prevent
          >
            <div className="px-6 py-6 space-y-4">
              {/* Services Mobile Category */}
              <div className="border-b border-white/10 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(expandedMobileCategory === 'Services' ? null : 'Services')
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-semibold text-lg text-white"
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
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* AI & Automation Mobile Category */}
              <div className="border-b border-white/10 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === 'AI & Automation' ? null : 'AI & Automation',
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-semibold text-lg text-white"
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
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Mobile Category */}
              <div className="border-b border-white/10 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === 'Industries' ? null : 'Industries',
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-semibold text-lg text-white"
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
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Work Link */}
              <div className="border-b border-white/10 pb-4">
                <Link
                  to="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 font-display font-semibold text-lg text-white hover:text-[#df012a]"
                >
                  Work
                </Link>
              </div>

              {/* Company Mobile Category */}
              <div className="border-b border-white/10 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(expandedMobileCategory === 'Company' ? null : 'Company')
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-semibold text-lg text-white"
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
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="p-6 bg-[#060b17] border-t border-white/10 mt-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
