import HeroSection from '../components/HeroSection';
import SelectedClientsSection from '../components/SelectedClientsSection';
import ServicesSection from '../components/ServicesSection';
import EnterpriseIntegrationSection from '../components/EnterpriseIntegrationSection/EnterpriseIntegrationSection';
import HowWeDeliverSection from '../components/HowWeDeliverSection';
import ProvenBusinessImpactSection from '../components/ProvenBusinessImpactSection';
import IndustriesWeUnderstandSection from '../components/IndustriesWeUnderstandSection';
import StartConversationSection from '../components/StartConversationSection';
import WhyEtechLogixSection from '../components/WhyEtechLogixSection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function HomePage() {
  return (
    <div className="bg-[#ffffff] text-[#171717] min-h-screen font-body selection:bg-[#df012a] selection:text-[#ffffff] overflow-x-clip">
      <SEOHead data={seoPages.home} />
      <main className="overflow-x-clip">
        <HeroSection />
        <SelectedClientsSection />
        <ServicesSection />
        <EnterpriseIntegrationSection />
        <ProvenBusinessImpactSection />
        <IndustriesWeUnderstandSection />
        <HowWeDeliverSection />
        <WhyEtechLogixSection />
        <StartConversationSection />
      </main>
    </div>
  );
}
