import ContactHeroFormSection from '../components/contact/ContactHeroFormSection';
import ContactProcessSection from '../components/contact/ContactProcessSection';

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-white font-body text-[#0a0a0a]">
      <ContactHeroFormSection />
      <ContactProcessSection />
    </main>
  );
}
