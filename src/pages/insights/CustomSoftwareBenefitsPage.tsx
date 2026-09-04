import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
  Code2,
  Lock,
  Headphones,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function CustomSoftwareBenefitsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#0a0a0a] font-body">
      <SEOHead data={seoPages.customSoftwareBenefits} />

      {/* ── BREADCRUMB & HERO ── */}
      <header className="border-b border-neutral-200/80 bg-gradient-to-b from-[#fafaf8] to-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          
          {/* Back Navigation */}
          <div className="mb-6 flex justify-center">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#df012a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div ref={heroRef} className="mx-auto max-w-5xl flex flex-col items-center text-center space-y-5">
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-neutral-500">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-neutral-200/90 text-[#df012a] font-semibold">
                <Tag className="w-3.5 h-3.5" />
                ENTERPRISE SOFTWARE
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                4 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span>eTechLogix Custom Solutions Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Custom Software Solution — Know Its Benefits for Business Growth
              <span className="text-[#df012a]">.</span>
            </h1>
          </div>

        </div>
      </header>

      {/* ── MAIN EDITORIAL BODY & SIDEBAR ── */}
      <main className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── LEFT: ARTICLE PROSE (8 cols) ── */}
            <article className="lg:col-span-8 space-y-10 sm:space-y-12">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Digital transformation allows modern organizations to optimize operations without expanding administrative overhead. Custom software solutions, purpose-built web portals, and native mobile apps replace generic compromises with systems mapped directly to proprietary business logic.
                </p>
              </section>

              {/* Section 1: The Strategic Need */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  The Case for Purpose-Built Architecture
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Every growing business operates with distinct compliance rules and customer journeys. In sectors like fintech, healthcare, logistics, and retail, off-the-shelf software forces teams into awkward manual workarounds. Bespoke systems eliminate operational friction and secure long-term competitive differentiation.
                </p>
              </section>

              {/* Section 2: Core Advantages */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Core Advantages of Custom Software
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  {/* Advantage 1 */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-base">
                      <Code2 className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Zero Bloat & Exact Fit</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Engineered strictly around your team's workflow, eliminating unused features and accelerating user adoption.
                    </p>
                  </div>

                  {/* Advantage 2 */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-base">
                      <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Long-Term Cost Efficiency</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Eliminates compounding per-user SaaS license fees and grants complete intellectual property ownership.
                    </p>
                  </div>

                  {/* Advantage 3 */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-base">
                      <Lock className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Data Sovereignty & Control</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Avoid multi-tenant SaaS risks with dedicated cloud infrastructure, custom encryption, and governance control.
                    </p>
                  </div>

                  {/* Advantage 4 */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-base">
                      <Headphones className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Agile Support & Maintenance</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Direct access to the core engineering team for rapid feature updates, bug fixes, and seamless scaling.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Strategic Outlook */}
              <section className="space-y-4">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Driving Measurable Growth
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Commercial off-the-shelf software keeps you at parity with competitors using identical tools. Custom software empowers organizations to out-innovate competitors, adapt rapidly to market shifts, and build scalable equity into their own technology stack.
                </p>
              </section>

              {/* Section 4: Partner with eTechLogix */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Partner with eTechLogix
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  eTechLogix designs and delivers enterprise-grade software systems tailored to your business objectives. Contact our solution architects today to review your workflow requirements and plan a scalable implementation roadmap.
                </p>
              </section>

            </article>

            {/* ── RIGHT: STICKY SIDEBAR (4 cols) ── */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Executive Summary Card */}
              <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 sm:p-7 space-y-4">
                <p className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                  EXECUTIVE SUMMARY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Why Custom Software Wins
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>100% Fit:</strong> Zero feature bloat; engineered exactly to business workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>IP Ownership:</strong> Eliminates escalating per-user monthly SaaS subscription costs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Full Control:</strong> Total sovereignty over security, hosting, and data compliance.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Enterprise Custom Software
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We engineer bespoke applications, microservices, and web platforms tailored to your business operations and scalable cloud infrastructure.
                </p>
                <Link
                  to="/services/enterprise-custom-software"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Custom Software</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Have a Software Idea?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Get a comprehensive scope evaluation and technical architecture proposal from our development leads.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Request a Custom Proposal
                </Button>
              </div>

            </aside>

          </div>
        </div>
      </main>

      {/* ── RELATED INSIGHTS SECTION ── */}
      <section className="border-t border-neutral-200/80 bg-[#fafaf8] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div>
              <p className="type-eyebrow-accent mb-1 tracking-[0.2em] text-[#df012a]">
                CONTINUE READING
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Related Perspectives
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#df012a] hover:gap-2.5 transition-all"
            >
              <span>All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Related 1 */}
            <article className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 hover:border-[#df012a]/40 transition-all hover:shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                SYSTEMS ARCHITECTURE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Navigating Legacy Systems vs Modern Systems in Software Development
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Examine the architectural pathways between monolithic legacy software and modern scalable systems.
              </p>
              <div className="pt-2">
                <Link
                  to="/insights/navigating-legacy-systems-vs-modern-systems"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111] hover:text-[#df012a] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Related 2 */}
            <article className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 hover:border-[#df012a]/40 transition-all hover:shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                AI & AUTOMATION
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                ChatGPT in the Era of Conversational AI
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Understand how foundational language models and transformer architectures integrate into enterprise workflows.
              </p>
              <div className="pt-2">
                <Link
                  to="/insights/chatgpt-in-the-era-of-conversational-ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111] hover:text-[#df012a] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
