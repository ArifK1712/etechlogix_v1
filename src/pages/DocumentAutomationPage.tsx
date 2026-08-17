import DocumentAutomationHero from '../components/document-automation/DocumentAutomationHero';
import DAValueSection from '../components/document-automation/DAValueSection';

export default function DocumentAutomationPage() {
  return (
    <div className="overflow-x-clip bg-white font-body text-[#0a0a0a] selection:bg-[#df012a] selection:text-white">
      <main>
        <DocumentAutomationHero />
        <DAValueSection />
      </main>
    </div>
  );
}
