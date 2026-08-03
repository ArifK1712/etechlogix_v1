import { useLenis } from '../hooks/useLenis';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import HowWeDeliverSection from '../components/HowWeDeliverSection';
import ProvenBusinessImpactSection from '../components/ProvenBusinessImpactSection';
import IndustriesWeUnderstandSection from '../components/IndustriesWeUnderstandSection';
import SelectedClientOutcomesSection from '../components/SelectedClientOutcomesSection';
import StartConversationSection from '../components/StartConversationSection';
import WhyEtechLogixSection from '../components/WhyEtechLogixSection';
import Footer from '../components/Footer';

export default function HomePage() {
  useLenis();

  return (
    <div className="bg-[#ffffff] text-[#171717] min-h-screen font-body selection:bg-[#df012a] selection:text-[#ffffff] overflow-x-clip">
      <Header />
      <main className="overflow-x-clip">
        <HeroSection />
        <ServicesSection />
        <ProvenBusinessImpactSection />
        <IndustriesWeUnderstandSection />
        <SelectedClientOutcomesSection />
        <HowWeDeliverSection />
        <WhyEtechLogixSection />
        <StartConversationSection />
      </main>
      <Footer />
    </div>
  );
}
