import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { SITE_URL } from '../components/seo/seoConfig';

export default function ComingSoonPage() {
  return (
    <section className="relative w-full bg-[#fafaf8] overflow-hidden min-h-[75vh] flex flex-col items-center justify-center py-20 px-5 text-center">
      <SEOHead
        data={{
          title: "Coming Soon | eTechLogix",
          description: "We are expanding the eTechLogix website. This page will be available soon.",
          canonical: `${SITE_URL}/`,
          ogType: 'website',
          schemaType: 'WebPage',
        }}
        noindex={true}
      />
      {/* Corner dotted textures matching standard page design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute top-10 left-10 w-[200px] opacity-[0.03]" viewBox="0 0 200 150" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 10} cy={r * 36 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
        <svg className="absolute bottom-10 right-10 w-[200px] opacity-[0.03]" viewBox="0 0 200 150" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={190 - c * 40} cy={r * 36 + 10} r="1.2" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">
          COMING SOON
        </p>
        <span className="block h-px w-10 bg-[#df012a] mb-8" aria-hidden="true" />

        {/* Heading */}
        <h1 className="type-section-heading-lg text-balance mb-6 text-[#0a0a0a]">
          This page is on its way<span className="text-[#df012a]">.</span>
        </h1>

        {/* Copy */}
        <p className="type-body text-[#555555] max-w-[620px] mb-10 leading-[1.65]">
          We’re continuing to expand the eTechLogix website. This page will be available soon. In the meantime, explore our services or talk with our team about what you’re looking to build.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/#services" variant="primaryDark" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Explore Our Services
          </Button>
          <Button href="/contact" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Let’s Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
