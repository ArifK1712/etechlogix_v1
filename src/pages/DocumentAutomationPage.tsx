import DocumentAutomationHero from '../components/document-automation/DocumentAutomationHero';
import AIExtractionSection from '../components/document-automation/AIExtractionSection';
import DocumentOperationsSection from '../components/document-automation/DocumentOperationsSection';
import BuiltForRealDocumentsSection from '../components/document-automation/BuiltForRealDocumentsSection';
import DocumentAutomationCTASection from '../components/document-automation/DocumentAutomationCTASection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function DocumentAutomationPage() {
  return (
    <div className="overflow-x-clip bg-white font-body text-[#0a0a0a] selection:bg-[#df012a] selection:text-white">
      <SEOHead data={seoPages.documentAutomation} />
      <main>
        <DocumentAutomationHero />
        <AIExtractionSection />
        <BuiltForRealDocumentsSection />
        <DocumentOperationsSection />
        <DocumentAutomationCTASection />
      </main>
    </div>
  );
}
