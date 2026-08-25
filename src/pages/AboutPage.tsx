import AboutHero from '../components/about/AboutHero';
import WhoWeAreSection from '../components/about/WhoWeAreSection';
import EnterpriseByDesignSection from '../components/about/EnterpriseByDesignSection';
import OurPeopleSection from '../components/about/OurPeopleSection';
import AboutFinalCTASection from '../components/about/AboutFinalCTASection';

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <AboutHero />
      <WhoWeAreSection />
      <EnterpriseByDesignSection />
      <OurPeopleSection />
      <AboutFinalCTASection />
    </main>
  );
}
