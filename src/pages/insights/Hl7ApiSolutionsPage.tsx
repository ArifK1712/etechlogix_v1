import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  Activity,
  Network,
  Stethoscope,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function Hl7ApiSolutionsPage() {
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
      <SEOHead data={seoPages.hl7ApiSolutions} />

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
                HEALTHCARE & INTEGRATIONS
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span>eTechLogix Healthcare Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              API Solutions and Flawless Communication in HL7
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
                  Health Level Seven (HL7) defines the global benchmark for exchanging medical data across healthcare platforms. Integrating reliable interface engines and modern API brokers eliminates clinical data silos, ensuring safe and synchronized patient care.
                </p>
              </section>

              {/* Section 1: The Critical Need for Medical Interoperability */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Clinical Impact of HL7 Standards
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Fragmented hospital systems risk diagnostic delays, manual re-entry errors, and clinician fatigue. HL7 standardization ensures unified clinical visibility:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Stethoscope className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Reliable Care Coordination</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Instant synchronization of labs, radiology results, and encounter notes across all authorized care teams.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Interoperable Data Flow</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Seamless transformation between legacy HL7 v2 pipe formats, C-CDA structures, and modern FHIR JSON payloads.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Modern API Middleware */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Bridging Legacy Message Protocols with RESTful APIs
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  While hospital systems continue operating on MLLP and socket-based HL7 v2 feeds, modern web and mobile apps require lightweight RESTful endpoints:
                </p>

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-semibold text-base text-[#111] flex items-center gap-2">
                    <Network className="w-5 h-5 text-[#df012a]" />
                    Integration Capabilities
                  </h3>
                  <ul className="space-y-2.5 text-neutral-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>High-Throughput Routing:</strong> Scalable brokers handling thousands of ADT, ORU, and SIU messages per minute without queuing lag.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Automated Semantic Mapping:</strong> Validation and translation pipelines routing clean data into target EHR databases.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Strict HIPAA Security:</strong> End-to-end TLS 1.3 encryption, immutable audit trails, and granular RBAC.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: eTechLogix Healthcare Practice */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  eTechLogix Healthcare Interoperability Solutions
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  eTechLogix engineers high-performance middleware, custom interface engines, and FHIR API connectors that unite clinical equipment, laboratory software, and hospital EHRs. Connect with our healthcare solutions team to evaluate your integration pipeline.
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
                  HL7 Interoperability
                </h3>
                <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>Standard Protocol:</strong> Enables seamless communication between LIS, RIS, and EHRs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>FHIR & REST APIs:</strong> Bridges legacy clinical protocols with modern web applications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>HIPAA Compliant:</strong> End-to-end encrypted message brokers for sensitive patient data.</span>
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
                  Connect healthcare platforms, EHR systems, and enterprise middleware with customized API adapters and real-time data synchronization.
                </p>
                <Link
                  to="/services/enterprise-integrations"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Integrations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Need HL7 / EHR Integration?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Consult with a healthcare interoperability specialist to review your message formats and clinical data pipelines.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Consult an Integration Lead
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
                HEALTHCARE & INTEGRATIONS
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Unified Healthcare Communication: The Future of Healthcare
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Explore how unified clinical communication reduces administrative overhead by up to 60% and accelerates patient response times.
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

            {/* Related 2 */}
            <article className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 hover:border-[#df012a]/40 transition-all hover:shadow-sm">
              <span className="font-mono text-xs font-semibold text-[#df012a] uppercase tracking-wider">
                ENTERPRISE SOFTWARE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#111]">
                Enterprise Custom Software Solutions
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Learn how bespoke software architectures deliver quantifiable ROI and full data sovereignty for high-compliance industries.
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
          </div>
        </div>
      </section>
    </div>
  );
}
