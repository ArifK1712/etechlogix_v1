import FunctionalPrototypesHero from '../components/functional-prototypes/FunctionalPrototypesHero';
import ProductPrototypingSections from '../components/functional-prototypes/ProductPrototypingSections';

export default function FunctionalPrototypesPage() {
  return (
    <div className="bg-white text-[#0a0a0a] font-body selection:bg-[#df012a] selection:text-white overflow-x-clip">
      <main className="overflow-x-clip">
        <FunctionalPrototypesHero />
        <ProductPrototypingSections />
      </main>
    </div>
  );
}
