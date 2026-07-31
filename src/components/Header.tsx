import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight, Menu, X, Layers, Cpu, Building2 } from 'lucide-react';

/* ─── Reusable Modular Button Component Architecture ─── */
export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
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
  ...props
}: ButtonProps) {
  return (
    <a
      style={{ paddingLeft: '24px', paddingRight: '24px' }}
      className={`group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] shrink-0 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {icon && (
        <span className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
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
    href: '#services',
    description: 'Custom platforms built around complex business operations.',
  },
  {
    title: 'Legacy System Modernization',
    href: '#modernization',
    description: 'Modernize aging applications without disrupting operations.',
  },
  {
    title: 'Agentic AI & Workflow Automation',
    href: '#ai-solutions',
    description: 'AI agents that execute and coordinate operational workflows.',
  },
  {
    title: 'Product Prototyping',
    href: '#prototyping',
    description: 'Working prototypes for validation, demonstrations, and investment.',
  },
  {
    title: 'Enterprise Integrations',
    href: '#integrations',
    description: 'Connect ERP, CRM, cloud platforms, and custom systems.',
  },
  {
    title: 'Dedicated Engineering Teams',
    href: '#teams',
    description: 'Experienced engineers who take product and delivery ownership.',
  },
];

const aiItems: ServiceItem[] = [
  {
    title: 'Agentic AI',
    href: '#agentic-ai',
    description: 'Autonomous agents that process data, route tasks, and execute logic.',
  },
  {
    title: 'Document Automation',
    href: '#doc-automation',
    description: 'Intelligent parsing and extraction for complex enterprise documents.',
  },
  {
    title: 'Intelligent Workflow Automation',
    href: '#workflow-automation',
    description: 'Automated policy checks, approvals, and system notifications.',
  },
  {
    title: 'AI-Powered Enterprise Applications',
    href: '#ai-apps',
    description: 'Custom applications integrated with enterprise LLMs & RAG engines.',
  },
];

const industryItems: ServiceItem[] = [
  {
    title: 'Events & Conferences',
    href: '#events',
    description: 'Registration, attendee check-in, venue ops, and real-time reporting.',
  },
  {
    title: 'Healthcare',
    href: '#healthcare',
    description: 'HIPAA-compliant records synchronization and care pathway coordination.',
  },
  {
    title: 'ERP & Distribution',
    href: '#erp',
    description: 'Multi-warehouse inventory sync, order routing, and supply chain automation.',
  },
  {
    title: 'Enterprise Operations',
    href: '#operations',
    description: 'Operational telemetry dashboards and decision support systems.',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // GSAP Smart Scroll Behavior
  useGSAP(
    () => {
      let lastScrollY = window.scrollY;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
          gsap.to(headerRef.current, {
            yPercent: -100,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else if (currentScrollY < lastScrollY) {
          gsap.to(headerRef.current, {
            yPercent: 0,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        lastScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    },
    { scope: headerRef, dependencies: [mobileMenuOpen] }
  );

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
        gsap.set(headerRef.current, { yPercent: 0 });
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

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full flex justify-center items-center z-50 transition-all duration-300 overflow-visible ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 py-0'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      {/* Centered Maximum-Width Container */}
      <div
        ref={dropdownContainerRef}
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        className="relative w-full max-w-[1400px] mx-auto px-5 h-20 flex items-center justify-between overflow-visible"
      >
        {/* Left Column: Official Brand Logo */}
        <div className="flex items-center shrink-0">
          <a
            href="/"
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
              className="h-9 sm:h-10 md:h-11 w-auto object-contain object-left"
              decoding="async"
            />
          </a>
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
                activeDropdown === 'Services' ? 'text-[#df012a]' : 'text-neutral-200 hover:text-[#df012a]'
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
                      Enterprise software and AI solutions designed around real operations.
                    </p>
                  </div>
                  <Layers className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {servicesItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
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
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AI Solutions Link with Dropdown */}
          <div
            className="relative h-full flex items-center overflow-visible"
            onMouseEnter={() => setActiveDropdown('AI Solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              aria-expanded={activeDropdown === 'AI Solutions'}
              aria-controls="ai-dropdown"
              onClick={() => setActiveDropdown(activeDropdown === 'AI Solutions' ? null : 'AI Solutions')}
              className={`group relative whitespace-nowrap text-[15px] font-medium transition-colors duration-200 flex items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md ${
                activeDropdown === 'AI Solutions' ? 'text-[#df012a]' : 'text-neutral-200 hover:text-[#df012a]'
              }`}
            >
              <span>AI Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'AI Solutions'
                    ? 'rotate-180 text-[#df012a]'
                    : 'text-neutral-400 group-hover:text-[#df012a]'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#df012a] transition-all duration-300 ${
                  activeDropdown === 'AI Solutions' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* AI Solutions Dropdown */}
            {activeDropdown === 'AI Solutions' && (
              <div
                id="ai-dropdown"
                role="menu"
                aria-label="AI Solutions Dropdown"
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[480px] max-w-[calc(100vw-48px)] bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-150 before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
              >
                <div className="px-3 pt-2 pb-3 mb-2 border-b border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#df012a] uppercase tracking-wider block">
                      WORKFLOW AUTOMATION
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Autonomous agents that do the work — not just generate answers.
                    </p>
                  </div>
                  <Cpu className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="space-y-1">
                  {aiItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
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
                    </a>
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
                activeDropdown === 'Industries' ? 'text-[#df012a]' : 'text-neutral-200 hover:text-[#df012a]'
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
                      INDUSTRY DEPLOYMENTS
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Software engineered for high operational complexity.
                    </p>
                  </div>
                  <Building2 className="w-4 h-4 text-[#df012a]" />
                </div>

                <div className="space-y-1">
                  {industryItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
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
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <a
            href="#work"
            className="group relative whitespace-nowrap text-[15px] font-medium text-neutral-200 hover:text-[#df012a] transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md"
          >
            <span>Work</span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-[#df012a] w-0 group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="#company"
            className="group relative whitespace-nowrap text-[15px] font-medium text-neutral-200 hover:text-[#df012a] transition-colors duration-200 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-md"
          >
            <span>Company</span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-[#df012a] w-0 group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        {/* Right Column: Premium Modular Brand Button (Ghost Variant filling with Red on Hover) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <Button href="#contact" variant="ghost" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Get Started
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
            className="relative z-[60] lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
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
            className="lg:hidden fixed inset-x-0 bottom-0 top-20 z-[45] bg-[#030712]/98 backdrop-blur-2xl text-white flex flex-col justify-between overflow-y-auto border-t border-white/10"
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
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* AI Solutions Mobile Category */}
              <div className="border-b border-white/10 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileCategory(
                      expandedMobileCategory === 'AI Solutions' ? null : 'AI Solutions',
                    )
                  }
                  className="w-full flex items-center justify-between py-2 text-left font-display font-semibold text-lg text-white"
                >
                  <span>AI Solutions</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedMobileCategory === 'AI Solutions' ? 'rotate-180 text-[#df012a]' : ''
                    }`}
                  />
                </button>
                {expandedMobileCategory === 'AI Solutions' && (
                  <div className="mt-3 pl-3 space-y-3 border-l-2 border-[#df012a]">
                    {aiItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </a>
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
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-neutral-300 hover:text-[#df012a] transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Work & Company Links */}
              <div className="border-b border-white/10 pb-4">
                <a
                  href="#work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 font-display font-semibold text-lg text-white hover:text-[#df012a]"
                >
                  Work
                </a>
              </div>

              <div className="border-b border-white/10 pb-4">
                <a
                  href="#company"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 font-display font-semibold text-lg text-white hover:text-[#df012a]"
                >
                  Company
                </a>
              </div>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="p-6 bg-[#060b17] border-t border-white/10 mt-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
