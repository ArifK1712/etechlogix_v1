import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntelligentWorkflowAutomationHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.dataset.ready = 'true';
  }, []);

  return (
    <section
      ref={heroRef}
      className="workflow-hero relative overflow-hidden bg-white pt-[100px]"
      aria-labelledby="intelligent-workflow-title"
    >
      <div
        className="workflow-photo"
        role="img"
        aria-label="Intelligent workflow orchestration and connected business processes"
      />

      <div className="workflow-main relative z-10 mx-auto grid min-h-[670px] w-full max-w-[1400px] px-5">
        <div className="workflow-copy self-center pb-10 pt-12 lg:pb-4 lg:pt-0">
          <div className="workflow-reveal mb-7">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              Intelligent Workflow Automation
            </p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h1
            id="intelligent-workflow-title"
            className="service-hero-heading workflow-reveal type-hero-heading mb-6 max-w-[920px] text-[#0a0a0a]"
          >
            Complex workflows.<br />Intelligently automated<span className="service-hero-dot">.</span>
          </h1>

          <p className="workflow-reveal type-hero-lead mb-10 max-w-[540px] text-neutral-500">
            Automate approvals, routing, decisions, handoffs, and system actions across your operations—helping work move faster, more accurately, and with greater control.
          </p>

          <Link
            to="/contact"
            className="workflow-reveal btn-etech btn-etech--primary-dark btn-etech--hero group"
          >
            <span>Explore Workflow Automation</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div
          className="workflow-mobile-photo"
          role="img"
          aria-label="Intelligent workflow orchestration and connected business processes"
        />
      </div>
    </section>
  );
}
