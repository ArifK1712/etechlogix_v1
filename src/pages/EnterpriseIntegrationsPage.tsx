import EnterpriseIntegrationsHero from '../components/enterprise-integrations/EnterpriseIntegrationsHero';
import EIBuiltToConnectSection from '../components/enterprise-integrations/EIBuiltToConnectSection';
import EIIntegrationLogicSection from '../components/enterprise-integrations/EIIntegrationLogicSection';
import EIBusinessOutcomeSection from '../components/enterprise-integrations/EIBusinessOutcomeSection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function EnterpriseIntegrationsPage() {
  return (
    <div className="bg-white text-[#0a0a0a] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <SEOHead data={seoPages.enterpriseIntegrations} />
      <main className="overflow-x-clip">
        <EnterpriseIntegrationsHero />
        <EIBuiltToConnectSection />
        <EIIntegrationLogicSection />
        <EIBusinessOutcomeSection />
      </main>
    </div>
  );
}
