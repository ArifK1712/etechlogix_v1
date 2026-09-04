import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  HeartHandshake,
  TrendingDown,
  ShieldCheck,
  Stethoscope,
  Activity,
  PhoneCall,
  Lock,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapConfig';
import { SEOHead } from '../../components/seo/SEOHead';
import { seoPages } from '../../components/seo/seoConfig';
import { Button } from '../../components/ui/Button';

export default function UnifiedHealthcarePage() {
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
      <SEOHead data={seoPages.unifiedHealthcare} />

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
                4 min read
              </span>
              <span className="text-neutral-400">•</span>
              <span>eTechLogix Healthcare Technology Practice</span>
            </div>

            {/* Main Article Title */}
            <h1 className="type-hero-heading text-[#0a0a0a] text-balance">
              Unified Healthcare Communication: The Future of Healthcare
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
                  In modern medicine, real-time collaboration saves lives. Unified healthcare communication replaces fragmented legacy channels—pagers, disjointed phone lines, and physical charts—with encrypted, centralized workflows that accelerate clinical decisions and elevate patient outcomes.
                </p>
              </section>

              {/* Section 1: Benefits for Healthcare Professionals */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Benefits for Healthcare Professionals
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Fast-paced hospital environments cannot afford communication lag. Unified digital channels provide instant synchronization across care teams:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Stethoscope className="w-5 h-5 text-[#df012a] shrink-0" />
                      <span>Accelerated Diagnosis & Care</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Instant data exchange between physicians, nurses, and labs coordinates critical diagnoses with zero turnaround delay.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
                      <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Streamlined Operations</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Centralized channels eliminate administrative bottlenecks, simplify shifts, and smooth cross-department handoffs.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-semibold text-base text-[#111] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Key Clinical Enhancements
                  </h3>
                  <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                      <span><strong>Reliable Encrypted Delivery:</strong> Authenticated end-to-end messaging throughout the medical ecosystem.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                      <span><strong>Multidisciplinary Consultation:</strong> Care teams share charts, imaging, and lab reports in one shared hub.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                      <span><strong>Automated Clinical Alerts:</strong> Critical vitals route automatically to on-call providers.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Patient Experience Benefits */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Patient Experience & Peace of Mind
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  When patients struggle to reach clinicians, anxiety rises. Unified systems bridge that gap with transparent, direct access:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-2.5 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#df012a]/10 text-[#df012a]">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-base text-[#111]">
                      Elevated Patient Satisfaction
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Transparent follow-ups, automated reminders, and instant access to medical advice via secure patient portals.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-2.5 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-base text-[#111]">
                      Continuous Connection
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Clinicians and patients stay connected through secure channels, fostering reassurance across the continuum of care.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Cost-Savings & IBM Study */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Quantifiable Cost Savings
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Eliminating paper handoffs, repetitive documentation, and missed phone tags yields immediate ROI for clinical networks:
                </p>

                {/* IBM Study Metrics Box */}
                <div className="rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-[#fafaf8] to-neutral-50 p-6 sm:p-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#df012a]/10 text-[#df012a]">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#df012a] font-semibold uppercase tracking-wider">
                        INDUSTRY BENCHMARK
                      </p>
                      <h3 className="font-semibold text-base text-[#111]">
                        IBM Healthcare Study Findings
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-neutral-200/80 bg-white p-5 space-y-1.5">
                      <div className="font-display font-bold text-3xl text-[#df012a]">
                        Up to 60%
                      </div>
                      <h4 className="font-semibold text-sm text-[#111]">
                        Admin Cost Savings
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        Via automated data-sharing, centralized electronic routing, and paperwork elimination.
                      </p>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-white p-5 space-y-1.5">
                      <div className="font-display font-bold text-3xl text-neutral-900">
                        64%
                      </div>
                      <h4 className="font-semibold text-sm text-[#111]">
                        Faster Query Response
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        Drastic reduction in response latency for patient inquiries and clinical scheduling.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: HIPAA Compliance & Modern Telehealth */}
              <section className="space-y-5">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  HIPAA Compliance & Telehealth
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  Unified platforms ensure every clinician interaction complies with strict HIPAA safeguards while broadening care reach:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="p-5 rounded-xl border border-neutral-200 bg-white space-y-2">
                    <Lock className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-[#111] text-sm">End-to-End Encryption</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Protected Health Information (PHI) encrypted in transit and at rest across voice, video, and messaging.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-neutral-200 bg-white space-y-2">
                    <PhoneCall className="w-5 h-5 text-[#df012a]" />
                    <h4 className="font-semibold text-[#111] text-sm">Direct Telehealth Access</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Patients consult physicians via secure video visits, removing travel hurdles and reducing in-clinic wait times.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: The Strategic Role of Modern IT */}
              <section className="space-y-4">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Modern IT: The Interoperability Engine
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  By pairing unified communications with modern API standards like HL7 and FHIR, healthcare organizations dismantle legacy data silos. Clinical staff spend less time wrestling with disparate software systems and more time delivering attentive patient care.
                </p>
              </section>

              {/* Section 6: Conclusion */}
              <section className="space-y-4 pt-4 border-t border-neutral-200/80">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Conclusion: Transforming Healthcare Delivery Together
                </h2>
                <div className="w-10 h-0.5 bg-[#df012a] mb-4" />
                <p className="type-body text-neutral-700 text-base sm:text-lg leading-relaxed">
                  At eTechLogix, we architect secure, resilient healthcare software systems—from HL7/FHIR message brokers to custom clinical portals. We help medical networks lower overhead, safeguard compliance, and deliver exceptional patient care.
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
                    <span><strong>60% Cost Reduction:</strong> Unified communication drastically cuts administrative expense.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>64% Faster Response:</strong> Accelerates patient inquiries, complaint handling, and triage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] mt-2 shrink-0" />
                    <span><strong>HIPAA Compliant:</strong> Safeguards clinical collaboration and patient video visits.</span>
                  </li>
                </ul>
              </div>

              {/* Related Service Highlight */}
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  OUR CAPABILITY
                </p>
                <h3 className="font-display font-semibold text-xl text-[#111]">
                  Healthcare & HL7 Integrations
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We engineer secure healthcare middleware, HL7/FHIR message brokers, and EHR/EMR integrations that connect clinics, labs, and care teams seamlessly.
                </p>
                <Link
                  to="/services/enterprise-integrations"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all"
                >
                  <span>Explore Healthcare Integrations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-2xl border border-[#df012a]/20 bg-[#df012a]/5 p-6 sm:p-7 space-y-3">
                <h4 className="font-semibold text-base text-[#111]">
                  Planning a Healthcare IT Upgrade?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Speak with our healthcare solutions architects to review your clinical workflows and interoperability requirements.
                </p>
                <Button href="/contact" variant="primaryDark" size="sm" className="w-full">
                  Consult with an Architect
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
                In the ever-evolving world of technology, organizations face a pivotal decision — stick with their trusted legacy systems or leap into the realm of modern systems.
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
                API Solutions and Flawless Communication in HL7
              </h3>
              <p className="type-body text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                Health Level Seven (HL7) defines the strategy to exchange health-specific communication between medical applications. Having a well-designed clinical system ensures reliability.
              </p>
              <div className="pt-2">
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111] hover:text-[#df012a] transition-colors"
                >
                  <span>Explore Topic</span>
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
