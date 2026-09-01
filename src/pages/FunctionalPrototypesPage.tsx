import FunctionalPrototypesHero from '../components/functional-prototypes/FunctionalPrototypesHero';
import ProductPrototypingSections from '../components/functional-prototypes/ProductPrototypingSections';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function FunctionalPrototypesPage() {
  return (
    <div className="bg-white text-[#0a0a0a] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <SEOHead data={seoPages.productPrototyping} />
      <main className="overflow-x-clip">
        <FunctionalPrototypesHero />
        <ProductPrototypingSections />
      </main>
    </div>
  );
}
