import LegacyModernizationHero from '../components/legacy-modernization/LegacyModernizationHero';
import LMModernizeWithoutDisruptionSection from '../components/legacy-modernization/LMModernizeWithoutDisruptionSection';
import LMModernizationCapabilitiesSection from '../components/legacy-modernization/LMModernizationCapabilitiesSection';
import LMBusinessImpactSection from '../components/legacy-modernization/LMBusinessImpactSection';
import LMFinalCTASection from '../components/legacy-modernization/LMFinalCTASection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function LegacyModernizationPage() {
  return (
    <div className="bg-white text-[#0a0a0a] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <SEOHead data={seoPages.legacyModernization} />
      <main className="overflow-x-clip">
        <LegacyModernizationHero />
        <LMModernizeWithoutDisruptionSection />
        <LMModernizationCapabilitiesSection />
        <LMBusinessImpactSection />
        <LMFinalCTASection />
      </main>
    </div>
  );
}
