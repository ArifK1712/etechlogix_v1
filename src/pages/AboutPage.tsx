import AboutHero from '../components/about/AboutHero';
import WhoWeAreSection from '../components/about/WhoWeAreSection';
import EnterpriseByDesignSection from '../components/about/EnterpriseByDesignSection';
import OurPeopleSection from '../components/about/OurPeopleSection';
import AboutFinalCTASection from '../components/about/AboutFinalCTASection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <SEOHead data={seoPages.about} />
      <AboutHero />
      <WhoWeAreSection />
      <EnterpriseByDesignSection />
      <OurPeopleSection />
      <AboutFinalCTASection />
    </main>
  );
}
