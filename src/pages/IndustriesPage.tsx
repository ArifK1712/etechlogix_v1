import IndustriesHero from '../components/industries/IndustriesHero';
import IndustriesCarouselSection from '../components/industries/IndustriesCarouselSection';
import IndustriesCapabilitiesSection from '../components/industries/IndustriesCapabilitiesSection';
import IndustriesFinalCTASection from '../components/industries/IndustriesFinalCTASection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function IndustriesPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <SEOHead data={seoPages.industries} />
      <IndustriesHero />
      <IndustriesCarouselSection />
      <IndustriesCapabilitiesSection />
      <IndustriesFinalCTASection />
    </main>
  );
}
