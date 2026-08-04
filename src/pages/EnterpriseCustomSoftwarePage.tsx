import { useLenis } from '../hooks/useLenis';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnterpriseCustomSoftwareHero from '../components/enterprise-custom-software/EnterpriseCustomSoftwareHero';

export default function EnterpriseCustomSoftwarePage() {
  useLenis();

  return (
    <div className="bg-[#030712] text-[#f5f3ef] font-body selection:bg-[#df012a] selection:text-[#ffffff] overflow-x-clip">
      <Header />
      <main className="overflow-x-clip">
        <EnterpriseCustomSoftwareHero />
      </main>
      <Footer />
    </div>
  );
}
