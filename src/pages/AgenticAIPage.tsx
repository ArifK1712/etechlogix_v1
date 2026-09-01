import AgenticAIHero from '../components/agentic-ai/AgenticAIHero';
import BeyondTraditionalAutomationSection from '../components/agentic-ai/BeyondTraditionalAutomationSection';
import EnterpriseValueSection from '../components/agentic-ai/EnterpriseValueSection';
import EnterpriseByDesignSection from '../components/agentic-ai/EnterpriseByDesignSection';
import ControlWithoutCompromiseSection from '../components/agentic-ai/ControlWithoutCompromiseSection';
import AgenticAIServicesSection from '../components/agentic-ai/AgenticAIServicesSection';
import BuiltToDeliverSection from '../components/agentic-ai/BuiltToDeliverSection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function AgenticAIPage() {
  return (
    <div className="overflow-x-clip bg-white font-body text-[#0a0a0a] selection:bg-[#df012a] selection:text-white">
      <SEOHead data={seoPages.agenticAI} />
      <main>
        <AgenticAIHero />
        <BeyondTraditionalAutomationSection />
        <EnterpriseValueSection />
        <EnterpriseByDesignSection />
        <ControlWithoutCompromiseSection />
        <AgenticAIServicesSection />
        <BuiltToDeliverSection />
      </main>
    </div>
  );
}
