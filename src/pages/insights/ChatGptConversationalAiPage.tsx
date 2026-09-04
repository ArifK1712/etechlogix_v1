import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Sparkles,
  Cpu,
  Layers,
  Code,
  Headphones,
  Sliders,
  Globe,
  Lock,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function ChatGptConversationalAiPage() {
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
      <SEOHead data={seoPages.chatGptConversationalAi} />

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
              <span>eTechLogix Applied Intelligence Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              ChatGPT in the Era of Conversational AI: Latest Advancements and Future Trends
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
                  Conversational AI has transitioned from brittle, rule-based chatbots to versatile foundation models. Understanding the transformer architecture, multimodal integrations, and enterprise fine-tuning is now essential for organizations scaling automated operations.
                </p>
              </section>

              {/* Section 1: Foundations & Transformer Architecture */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Architectural Foundations
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  ChatGPT leverages self-attention transformer layers trained on vast corpora, enabling context retention and natural dialogue flow across multi-turn interactions:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Cpu className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Contextual Memory</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Maintains conversational thread references and technical terminology over extended dialogue sessions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Fluent Synthesis</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Produces grammatically precise, logically structured prose and code snippets ready for production use.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Integration with Frontier Technologies */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Frontier Integrations: Multimodal & Spatial Tech
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Language models are breaking out of isolated text boxes into multi-sensory computing environments:
                </p>

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3.5 shadow-sm">
                  <ul className="space-y-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-[#df012a] mt-0.5 shrink-0" />
                      <span><strong>Multilingual Intelligence:</strong> Real-time translation and localized support across global markets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-[#df012a] mt-0.5 shrink-0" />
                      <span><strong>Spatial & VR Environments:</strong> Conversational avatars powering immersive employee onboarding and training simulations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Headphones className="w-5 h-5 text-[#df012a] mt-0.5 shrink-0" />
                      <span><strong>Vision & Voice Synthesis:</strong> Direct document analysis and vocal interaction running with minimal latency.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Expanding to Complex Cognitive Tasks */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Execution of Complex Cognitive Tasks
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                
                <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-3">
                  <div className="flex items-center gap-3 text-neutral-900 font-semibold text-base">
                    <Code className="w-5 h-5 text-[#df012a]" />
                    <span>Autonomous Code & Logic Generation</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    By translating plain-English intent into executable SQL, API connectors, and unit tests, conversational models serve as cognitive accelerators for engineering teams, drastically shortening development cycles.
                  </p>
                </div>
              </section>

              {/* Section 4: Enterprise Personalization & Fine-Tuning */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Personalization & Domain Fine-Tuning
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Off-the-shelf models are generic. High-performing enterprises use fine-tuning and retrieval-augmented generation (RAG) to tailor responses to proprietary datasets:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-2">
                    <Sliders className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-sm text-[#111]">Healthcare</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Symptom assessment, patient appointment triage, and clinical notes within strict HIPAA boundaries.
                    </p>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-2">
                    <Sliders className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-sm text-[#111]">Finance & Banking</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Automated invoice matching, fraud screening summaries, and policy inquiry responses.
                    </p>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-2">
                    <Sliders className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-sm text-[#111]">E-Commerce</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Real-time shipment resolution, tailored catalog recommendations, and checkout assistance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Future Horizons & Ethical Governance */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Future Horizons & Ethical Governance
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                
                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#df012a] font-semibold text-base">
                    <Lock className="w-5 h-5" />
                    <span>Data Privacy and Intellectual Property Safeguards</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Deploying conversational models in enterprise environments requires zero-data-leakage architectures, role-based access control, and human-in-the-loop review to guarantee compliance and protect proprietary intelligence.
                  </p>
                </div>
              </section>

              {/* Section 6: eTechLogix Custom Solutions */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Elevate Operations with Custom AI Engineering
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  eTechLogix integrates custom LLM pipelines and autonomous agents directly into your ERP, CRM, and customer channels. Contact our engineering team to architect high-performance, private AI workflows tailored to your business goals.
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
                  Key Article Takeaways
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Transformer Foundations:</strong> Massive datasets and attention layers drive fluent, contextual dialogue.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Multimodal Integration:</strong> Voice, vision, and VR merge with language intelligence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Enterprise Personalization:</strong> Domain fine-tuning unlocks tailored finance, health, and retail bots.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Privacy Guardrails:</strong> Production deployments require enterprise-grade data isolation.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Agentic AI & Custom Solutions
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We build custom conversational architectures, multi-agent automated workflows, and document intelligence pipelines tailored to your enterprise systems.
                </p>
                <Link
                  to="/ai-automation/agentic-ai-workflow-automation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Agentic AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Ready to Deploy Custom AI?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Consult with an applied AI engineer to evaluate your enterprise use cases and architectural prerequisites.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Consult with an AI Architect
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
                In the ever-evolving world of technology, organizations face a pivotal decision — stick with their trusted legacy systems or leap into modern cloud-native architectures.
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
                HEALTHCARE & INTEGRATIONS
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Unified Healthcare Communication: The Future of Healthcare
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Unified healthcare communication has the potential to revolutionize care delivery, streamlining operations and clinical collaboration across modern care ecosystems.
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
