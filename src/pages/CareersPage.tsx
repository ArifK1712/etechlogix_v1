import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function CareersPage() {
  return (
    <div className="relative min-h-[72vh] w-full bg-white text-[#0a0a0a] font-body flex flex-col justify-center overflow-x-clip">
      <SEOHead data={seoPages.careers} />

      <section
        aria-labelledby="careers-heading"
        className="py-16 sm:py-20 md:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8">
          {/* ── 2-Column Balanced Editorial Composition ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
            
            {/* ── LEFT COLUMN: Editorial Message ── */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
                <span className="type-eyebrow-accent tracking-[0.2em] text-[#df012a]">
                  CAREERS
                </span>
                <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
              </div>

              {/* Main Heading */}
              <h1
                id="careers-heading"
                className="type-section-heading-xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#0a0a0a] leading-[1.12] mb-6 text-balance"
              >
                Build what matters with us<span className="text-[#df012a]">.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="type-body text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 text-pretty">
                We’re preparing a new careers experience to showcase opportunities to work with eTechLogix across engineering, product, technology, and delivery.
              </p>

              {/* Status Badge & Secondary Notice */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-neutral-200 bg-[#fafaf8]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#df012a]" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-neutral-800">
                    CAREERS PAGE IN DEVELOPMENT
                  </span>
                </div>
                <p className="font-mono text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                  Open roles and application details will be available here soon.
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Minimal Typography & Line Development Status Visual ── */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              {/* Offset decorative dashed red accent border */}
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-3.5 sm:-right-3.5 w-full h-full rounded-2xl border border-dashed border-[#df012a]/30 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Editorial Status Card */}
              <div className="relative z-10 rounded-2xl border border-neutral-200/90 bg-[#fafaf8] p-8 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.24em] text-[#0a0a0a] uppercase">
                    CAREERS EXPERIENCE
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-neutral-400">
                    ETL // 2026
                  </span>
                </div>

                {/* Divider with node */}
                <div className="relative my-7 h-px w-full bg-neutral-200">
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#df012a]"
                    aria-hidden="true"
                  />
                </div>

                {/* Center Status */}
                <div className="py-2">
                  <p className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-400 mb-1.5">
                    STATUS
                  </p>
                  <p className="text-2xl sm:text-[1.65rem] font-bold tracking-tight text-[#0a0a0a] leading-tight">
                    Currently in development<span className="text-[#df012a]">.</span>
                  </p>
                </div>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-neutral-200" aria-hidden="true" />

                {/* Bottom Coming Soon note */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-neutral-500">
                    Opportunities coming soon
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden="true" />
                </div>
              </div>
            </div>

          </div>

          {/* ── Optional Bottom Message ── */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-200/80">
            <p className="font-mono text-xs sm:text-[13px] text-neutral-500 leading-relaxed flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
              <span>
                Interested in joining eTechLogix? Career opportunities will be published here shortly.
              </span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
