import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  MapPin,
  Building2,
  Code,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function SoftwareCompanyArizonaPage() {
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
      <SEOHead data={seoPages.softwareCompanyArizona} />

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
                3 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#df012a]" />
                Phoenix, Arizona
              </span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Best Custom Software Development Company in Arizona
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
                  Headquartered in Phoenix, Arizona, eTechLogix delivers full-lifecycle software development, intuitive UX engineering, and resilient cloud architectures. We transform mission-critical operational processes into high-performance web platforms and bespoke enterprise systems.
                </p>
              </section>

              {/* Section 1: Proven Track Record */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Years of Proven Engineering Excellence
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  We partner with enterprise leaders and fast-growing innovators across the Southwest and nationwide. With transparent sprint milestones and senior technical leadership, we ensure accountability across every deployment.
                </p>
              </section>

              {/* Section 2: Technology Stack & Vertical Expertise */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Frontier Technologies & Core Competencies
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Our engineering teams bring deep technical depth across complex stacks:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Code className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-base text-[#111]">Enterprise Java & Cloud Architecture</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Resilient backends, microservices architectures, and auto-scaling cloud deployments on AWS and Azure.
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-base text-[#111]">AI & Applied Machine Learning</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Predictive analytics, automated document parsing, and custom conversational agents built for operations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Layers className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-base text-[#111]">Data Migration & Middleware</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Zero-downtime ETL pipelines, database migrations, and bi-directional API integration layers.
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-base text-[#111]">Vertical Domain Solutions</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Deep domain software for Healthcare (HL7/FHIR), E-Commerce, ERP, and Fintech systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Flexible Engagement Models */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Flexible Engagement Models
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Dedicated Engineering Squads:</strong> Full-time senior engineers and architects dedicated exclusively to your platform.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Fixed-Scope Project Delivery:</strong> Turnkey delivery from discovery and UI/UX design to production deployment under strict SLAs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>On-Demand Capacity Scaling:</strong> Flexibly ramp development capacity up or down to match roadmap priorities.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Conclusion */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Build Your Digital Foundation
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Choosing the right software partner in Arizona comes down to proven enterprise experience and disciplined engineering. Reach out to our Phoenix office today to discuss your technical challenges and architect a tailored roadmap.
                </p>
              </section>

            </article>

            {/* ── RIGHT: STICKY SIDEBAR (4 cols) ── */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Executive Summary Card */}
              <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 sm:p-7 space-y-4">
                <p className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                  ARIZONA HEADQUARTERS
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Phoenix Tech Center
                </h3>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#df012a] shrink-0 mt-0.5" />
                    <span>2224 W Desert Cove Ave, UNIT 206, Phoenix, AZ 85029</span>
                  </p>
                  <p className="text-xs text-neutral-500">
                    On-site architectural consulting & global engineering delivery.
                  </p>
                </div>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Dedicated Engineering Teams
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Hire senior developers, architects, and QA engineers dedicated exclusively to your platform with flexible contracts and fast onboarding.
                </p>
                <Link
                  to="/services/dedicated-engineering-teams"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Dedicated Teams</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Connect with Arizona Team
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Discuss your upcoming software initiative with our Phoenix-based technical directors.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Schedule a Consultation
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
                ENTERPRISE SOFTWARE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Custom Software Solution — Know Its Benefits for Business Growth
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Discover how custom software development drives enterprise growth, reduces expenses, and delivers superior security and scalability.
              </p>
              <div className="pt-2">
                <Link
                  to="/insights/custom-software-solution-benefits"
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
                SYSTEMS ARCHITECTURE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Navigating Legacy Systems vs Modern Systems in Software Development
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Examine the critical trade-offs between legacy stability and modern cloud agility for enterprise organizations.
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
          </div>
        </div>
      </section>
    </div>
  );
}
