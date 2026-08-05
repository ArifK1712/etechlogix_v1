import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import EnterpriseIntegrationSection from '../components/EnterpriseIntegrationSection/EnterpriseIntegrationSection';
import HowWeDeliverSection from '../components/HowWeDeliverSection';
import ProvenBusinessImpactSection from '../components/ProvenBusinessImpactSection';
import IndustriesWeUnderstandSection from '../components/IndustriesWeUnderstandSection';
import SelectedClientOutcomesSection from '../components/SelectedClientOutcomesSection';
import StartConversationSection from '../components/StartConversationSection';
import WhyEtechLogixSection from '../components/WhyEtechLogixSection';

export default function HomePage() {
  return (
    <div className="bg-[#ffffff] text-[#171717] min-h-screen font-body selection:bg-[#df012a] selection:text-[#ffffff] overflow-x-clip">
      <main className="overflow-x-clip">
        <HeroSection />
        <ServicesSection />
        <EnterpriseIntegrationSection />
        <ProvenBusinessImpactSection />
        <IndustriesWeUnderstandSection />
        <SelectedClientOutcomesSection />
        <HowWeDeliverSection />
        <WhyEtechLogixSection />
        <StartConversationSection />
      </main>
    </div>
  );
}
