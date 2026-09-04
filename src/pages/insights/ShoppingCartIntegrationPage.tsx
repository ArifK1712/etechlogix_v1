import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  CreditCard,
  Boxes,
  Layers,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function ShoppingCartIntegrationPage() {
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
      <SEOHead data={seoPages.shoppingCartIntegration} />

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
              <span>eTechLogix Retail & E-Commerce Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Shopping Cart Systems and Enterprise Integration
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
                  A digital shopping cart is far more than a simple checkout basket—it is the mission-critical transactional engine of modern e-commerce. Seamless integration coordinates payment gateways, ERP backends, and live inventory sync to deliver flawless conversions at scale.
                </p>
              </section>

              {/* Section 1: The Role of Shopping Cart Integration */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Mission-Critical Transactional Engine
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Integrating cart architecture directly with core operational tools eliminates order leakage and improves shopper retention:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <CreditCard className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Multi-Currency & Gateways</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Coordinates global payment processors (Stripe, Adyen, PayPal), currency conversion, and localized checkout flows without friction.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Boxes className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Real-Time Inventory Sync</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Dynamic stock reservations prevent overselling during high-velocity promotions and flash sale surges.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Enterprise Integration Layers */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Wired to Core Business Pipelines
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  An isolated shopping cart creates logistical delays. Robust enterprise retail synchronizes the cart directly into back-office infrastructure:
                </p>

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-semibold text-base text-[#111] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#df012a]" />
                    Enterprise Synchronization
                  </h3>
                  <ul className="space-y-2.5 text-neutral-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>ERP & Ledger Reconciliation:</strong> Automated order ingestion into NetSuite, SAP, or Microsoft Dynamics for real-time ledger updates.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Automated Tax & Compliance:</strong> Real-time API connections with Avalara or Vertex for geo-precise tax and duty rates.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Fulfillment & 3PL Logistics:</strong> Automatic shipping label creation and carrier dispatch across major 3PL logistics networks.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Partner with eTechLogix */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  High-Volume E-Commerce Engineering
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  At eTechLogix, we engineer headless commerce architectures, custom checkout workflows, and resilient transaction pipelines capable of scaling under high-concurrency traffic. Contact our retail engineering leads to modernize your cart architecture.
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
                  Cart Integration Keys
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Unified Checkout:</strong> Orchestrates payment, tax, and courier selection in seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>ERP Integration:</strong> Instant two-way synchronization with back-office inventory.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Conversion Boost:</strong> Reduces checkout latency and cart abandonment rates.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Enterprise System Integrations
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Connect e-commerce storefronts to ERP, CRM, payment middleware, and 3PL warehouses with resilient APIs.
                </p>
                <Link
                  to="/services/enterprise-integrations"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore E-Commerce Integration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Optimize Your Cart Architecture
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Speak with our retail systems architect to evaluate your checkout workflows and middleware integrations.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Speak with an Architect
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
                Discover how bespoke software platforms eliminate recurring SaaS overhead and deliver true operational leverage.
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
