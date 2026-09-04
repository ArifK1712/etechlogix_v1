import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  XCircle,
  Building2,
  Cloud,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function LegacyVsModernSystemsPage() {
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
      <SEOHead data={seoPages.legacyVsModern} />

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
                SYSTEMS ARCHITECTURE
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                4 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span>eTechLogix Architecture Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Navigating Legacy Systems vs Modern Systems in Software Development
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
                  Organizations face a continuous decision: maintain trusted legacy systems or modernize to cloud-native platforms. While legacy architectures offer baseline reliability, outdated systems rapidly constrain agility and elevate maintenance liabilities.
                </p>
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Navigating this transition successfully requires balancing existing operational dependencies against the compounding advantages of modular, API-driven architectures.
                </p>
              </section>

              {/* Section 1: Pros & Cons Comparison */}
              <section className="space-y-6">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Pros and Cons: Legacy vs Modern Platforms
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Pros Box */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Legacy Advantages</span>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                      <li>• Proven operational track record and predictable baseline stability.</li>
                      <li>• Deep familiarity among existing long-term staff.</li>
                      <li>• Fully amortized upfront capital expenditures.</li>
                    </ul>
                  </div>

                  {/* Cons Box */}
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#df012a] font-semibold text-base">
                      <XCircle className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Legacy Liabilities</span>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                      <li>• Inflexible monolithic architecture resisting rapid business changes.</li>
                      <li>• Lack of interoperability with modern APIs and cloud infrastructure.</li>
                      <li>• Escalating security vulnerabilities and scarce developer talent.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2: Comparison Matrix */}
              <section className="space-y-6">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Architectural Comparison Matrix
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="overflow-x-auto rounded-2xl border border-neutral-200/90 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-[#fafaf8]">
                        <th className="py-3.5 px-5 font-semibold text-[#111]">Dimension</th>
                        <th className="py-3.5 px-5 font-semibold text-neutral-600">Legacy Systems</th>
                        <th className="py-3.5 px-5 font-semibold text-[#df012a]">Modern Systems</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr>
                        <td className="py-3.5 px-5 font-medium text-[#111]">Flexibility</td>
                        <td className="py-3.5 px-5 text-neutral-600">Tightly coupled monoliths</td>
                        <td className="py-3.5 px-5 font-medium text-emerald-700">Modular, microservices, API-driven</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium text-[#111]">Integration</td>
                        <td className="py-3.5 px-5 text-neutral-600">Brittle batch scripts & flat files</td>
                        <td className="py-3.5 px-5 font-medium text-emerald-700">Real-time REST/GraphQL & event streams</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium text-[#111]">Scalability</td>
                        <td className="py-3.5 px-5 text-neutral-600">Constrained on-prem hardware</td>
                        <td className="py-3.5 px-5 font-medium text-emerald-700">Elastic, auto-scaling cloud clusters</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium text-[#111]">Security</td>
                        <td className="py-3.5 px-5 text-neutral-600">Perimeter security with legacy gaps</td>
                        <td className="py-3.5 px-5 font-medium text-emerald-700">Zero Trust, automated compliance, TLS</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-5 font-medium text-[#111]">Maintenance</td>
                        <td className="py-3.5 px-5 text-neutral-600">Compounding technical debt</td>
                        <td className="py-3.5 px-5 font-medium text-emerald-700">Predictable CI/CD and standardized stacks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Transition Case Studies */}
              <section className="space-y-6">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Real-World Transition Case Studies
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Building2 className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Company A (Manufacturing ERP)</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Migrated from a fragmented legacy inventory database to a modern, integrated ERP. Achieved instant order processing, reduced clerical error rates by 70%, and enabled real-time supply chain visibility.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Cloud className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Company B (Cloud Migration)</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Transitioned high-traffic web applications to auto-scaling serverless infrastructure. Eliminated peak-load downtime, reduced hosting costs by 35%, and enabled rapid bi-weekly feature deployments.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Conclusion */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Strategic Recommendation: Phased Modernization
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  A successful transition rarely requires a risky "rip-and-replace." By adopting an incremental, phased modernization roadmap—wrapping legacy assets with modern API layers and migrating services in stages—enterprises capture modern agility with zero downtime risk.
                </p>
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Partnering with experienced software architects ensures your modernization roadmap preserves business continuity while unlocking long-term competitive advantages.
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
                  Key Strategic Takeaways
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span>Legacy software offers familiarity, but compounds technical debt and security risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span>Modern cloud architectures deliver agility, interoperability, and automated security.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span>Incremental modernization reduces downtime risk compared to rip-and-replace approaches.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Legacy Modernization Services
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We specialize in migrating aging systems, building API layers, and modernizing business-critical platforms without disrupting day-to-day operations.
                </p>
                <Link
                  to="/services/legacy-modernization"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Modernization Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Need an Architecture Audit?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Our software architects can evaluate your existing systems and map out a risk-free modernization plan.
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
                AI & AUTOMATION
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                ChatGPT in the Era of Conversational AI
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Conversational AI is an emerging technology redefining enterprise workflows. Understanding how modern language models integrate into operational systems accelerates productivity.
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

            {/* Related 2 */}
            <article className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 hover:border-[#df012a]/40 transition-all hover:shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                HEALTHCARE & INTEGRATIONS
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Unified Healthcare Communication: The Future of Healthcare
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                In an age of rapidly advancing technology, unified healthcare communication has the potential to revolutionize clinical collaboration and care delivery ecosystems.
              </p>
              <div className="pt-2">
                <Link
                  to="/insights/unified-healthcare-communication"
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
