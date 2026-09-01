import CaseStudiesHero from '../components/case-studies/CaseStudiesHero';
import SelectedWorkSection from '../components/case-studies/SelectedWorkSection';
import WorkEnquirySection from '../components/case-studies/WorkEnquirySection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function WorkPage() {
  return (
    <div className="bg-white text-[#171717] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <SEOHead data={seoPages.work} />
      <main className="overflow-x-clip">
        <CaseStudiesHero />
        <SelectedWorkSection />
        <WorkEnquirySection />
      </main>
    </div>
  );
}
