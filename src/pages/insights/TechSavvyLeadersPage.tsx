import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  Cpu,
  Workflow,
  Radio,
  Lightbulb,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function TechSavvyLeadersPage() {
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
      <SEOHead data={seoPages.techSavvyLeaders} />

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
                AI & AUTOMATION
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                4 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span>eTechLogix Applied Strategy Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Tech-Savvy Leaders Changing Equations in Every Industry
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
                  In today's fast-moving economy, competitive advantage belongs to leaders who eliminate manual operational friction with automated intelligence. Visionary executives achieve lasting scale by pairing sound leadership with high-leverage engineering practices.
                </p>
              </section>

              {/* Section 1: The New IT Equation */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  The New Equation: Automation + Data + Connectivity
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Three converging technical pillars are redefining modern market leadership:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Workflow className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-base text-[#111]">1. Automation</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Replaces manual clerical tasks with 24/7 rule-based and agentic execution pipelines.
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Cpu className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-base text-[#111]">2. Actionable Data</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Extracts predictive foresight from operational logs, customer touchpoints, and financial flows.
                    </p>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-[#fafaf8] p-5 space-y-2">
                    <Radio className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-base text-[#111]">3. Connectivity</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Bridges edge IoT sensors, logistics telemetry, and cloud backends into a unified mesh.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Leadership Impact */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Strategic Traits of Modern Industry Leaders
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-semibold text-base text-[#111] flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#df012a]" />
                    Core Execution Principles
                  </h3>
                  <ul className="space-y-2.5 text-neutral-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Predictive Over Reactive:</strong> Deploying machine learning models that forecast inventory bottlenecks and customer churn before they escalate.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Human Augmentation:</strong> Using cognitive automation to empower staff to concentrate on high-margin strategic initiatives.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Unified Architecture:</strong> Eliminating departmental silos so verified business data flows seamlessly across systems.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: eTechLogix Strategic Partnership */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Strategic Engineering with eTechLogix
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  eTechLogix collaborates with forward-looking executives to design intelligent software architectures, automate business workflows, and scale high-concurrency cloud systems. Contact our strategy team to evaluate your transformation roadmap.
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
                  Leadership Takeaways
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Compound Leverage:</strong> Automation eliminates operational bottlenecks permanently.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Connected Ecosystems:</strong> Integrates IoT, telemetry, and enterprise cloud data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Agile Execution:</strong> External engineering partners accelerate digital roadmaps.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Agentic AI & Automation
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Engineer multi-agent workflows, intelligent document processors, and cognitive automation pipelines that scale operations.
                </p>
                <Link
                  to="/ai-automation/agentic-ai-workflow-automation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Agentic AI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Ready to Automate Operations?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Schedule an executive technology briefing with our enterprise transformation directors.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Request Strategy Session
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

            {/* Related 2 */}
            <article className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 hover:border-[#df012a]/40 transition-all hover:shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                SYSTEMS ARCHITECTURE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Navigating Legacy Systems vs Modern Systems in Software Development
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Examine the architectural trade-offs between legacy monolithic systems and scalable cloud platforms.
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
