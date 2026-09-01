import ContactHeroFormSection from '../components/contact/ContactHeroFormSection';
import ContactProcessSection from '../components/contact/ContactProcessSection';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <SEOHead data={seoPages.contact} />
      <ContactHeroFormSection />
      <ContactProcessSection />
    </main>
  );
}
