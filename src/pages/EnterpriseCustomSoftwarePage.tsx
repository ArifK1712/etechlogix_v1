import EnterpriseCustomSoftwareHero from '../components/enterprise-custom-software/EnterpriseCustomSoftwareHero';
import ECSCapabilitiesSection from '../components/enterprise-custom-software/ECSCapabilitiesSection';
import ECSWhatWeEngineerSection from '../components/enterprise-custom-software/ECSWhatWeEngineerSection';
import ECSHowWeEngineerSection from '../components/enterprise-custom-software/ECSHowWeEngineerSection';
import ECSBuiltToConnectSection from '../components/enterprise-custom-software/ECSBuiltToConnectSection';

export default function EnterpriseCustomSoftwarePage() {
  return (
    <div className="bg-white text-[#0a0a0a] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <main className="overflow-x-clip">
        <EnterpriseCustomSoftwareHero />
        <ECSCapabilitiesSection />
        <ECSWhatWeEngineerSection />
        <ECSHowWeEngineerSection />
        <ECSBuiltToConnectSection />
      </main>
    </div>
  );
}

