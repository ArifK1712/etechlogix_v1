import { useEffect } from 'react';
import IntelligentWorkflowAutomationHero from '../components/intelligent-workflow-automation/IntelligentWorkflowAutomationHero';
import BuiltAroundRealOperationsSection from '../components/intelligent-workflow-automation/BuiltAroundRealOperationsSection';

export default function IntelligentWorkflowAutomationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-clip bg-white font-body text-[#0a0a0a] selection:bg-[#df012a] selection:text-white">
      <main>
        <IntelligentWorkflowAutomationHero />
        <BuiltAroundRealOperationsSection />
      </main>
    </div>
  );
}
