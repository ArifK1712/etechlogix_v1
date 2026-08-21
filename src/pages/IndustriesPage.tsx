import IndustriesHero from '../components/industries/IndustriesHero';
import IndustriesCarouselSection from '../components/industries/IndustriesCarouselSection';
import IndustriesCapabilitiesSection from '../components/industries/IndustriesCapabilitiesSection';
import IndustriesFinalCTASection from '../components/industries/IndustriesFinalCTASection';

export default function IndustriesPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <IndustriesHero />
      <IndustriesCarouselSection />
      <IndustriesCapabilitiesSection />
      <IndustriesFinalCTASection />
    </main>
  );
}
