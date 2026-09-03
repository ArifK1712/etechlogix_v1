import {
  Flag,
  Headphones,
  Mail,
  Phone,
  Search,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

const processSteps: Array<{
  title: [string, string];
  Icon: LucideIcon;
}> = [
  {
    title: ['Understand', 'your requirement'],
    Icon: Search,
  },
  {
    title: ['Connect', 'with the right team'],
    Icon: UsersRound,
  },
  {
    title: ['Define', 'the next step'],
    Icon: Flag,
  },
];

export default function ContactProcessSection() {
  return (
    <section className="bg-white py-16 text-[#0a0a0a] lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-6">
        <div className="w-full overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-50">
          <iframe
            title="eTechLogix Phoenix office location"
            src="https://www.google.com/maps?q=2224%20W%20Desert%20Cove%20Ave%20%23206%2C%20Phoenix%2C%20AZ%2085029%2C%20USA&output=embed"
            className="block h-[240px] w-full border-0 sm:h-[280px] lg:h-[320px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-14 md:mt-16">
          <div className="relative grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            <span className="absolute left-1/3 top-[35px] z-[1] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#df012a] md:block" aria-hidden="true" />
            <span className="absolute left-2/3 top-[35px] z-[1] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#df012a] md:block" aria-hidden="true" />

            {processSteps.map(({ title, Icon }) => (
              <article key={title.join(' ')} className="relative grid grid-cols-[64px_1fr] items-center gap-5 md:block md:text-center">
                <span className="relative z-[2] flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#171717] md:mx-auto md:h-20 md:w-20">
                  <span className="absolute -inset-px rotate-[-20deg] rounded-full border border-transparent border-l-[#df012a] border-t-[#df012a]" aria-hidden="true" />
                  <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.45} aria-hidden="true" />
                </span>

                <div className="md:mt-6">
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.025em] text-[#171717] md:text-2xl">
                    <span className="block">{title[0]}</span>
                    <span className="block">{title[1]}</span>
                  </h3>
                  <span className="mt-4 block h-px w-8 bg-[#df012a] md:mx-auto" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-contact-strip mt-14 overflow-hidden rounded-xl border border-neutral-200/80 bg-[#fafaf8] md:min-h-[96px] lg:mt-16">
          <div className="flex min-w-0 items-center gap-5 px-6 py-5 md:px-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#df012a] text-white">
              <Headphones className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-[#171717] md:text-lg">Prefer to talk now?</p>
              <p className="mt-1 text-sm text-neutral-500 md:text-base">Our team is ready to help.</p>
            </div>
          </div>

          <a
            href="mailto:contact@etechlogix.com"
            className="flex min-w-0 items-center gap-3 border-t border-neutral-200 px-6 py-5 text-[#171717] transition-colors duration-300 hover:text-[#df012a] md:border-l md:border-t-0 md:px-8"
          >
            <Mail className="h-5 w-5 shrink-0 text-[#df012a]" strokeWidth={1.5} aria-hidden="true" />
            <span className="whitespace-nowrap font-display text-base font-medium lg:text-lg">contact@etechlogix.com</span>
          </a>

          <a
            href="tel:+14805270786"
            className="flex min-w-0 items-center gap-3 border-t border-neutral-200 px-6 py-5 text-[#171717] transition-colors duration-300 hover:text-[#df012a] md:border-l md:border-t-0 md:px-8"
          >
            <Phone className="h-5 w-5 shrink-0 text-[#df012a]" strokeWidth={1.5} aria-hidden="true" />
            <span className="whitespace-nowrap font-display text-base font-medium lg:text-lg">+1 (480) 527-0786</span>
          </a>
        </div>
      </div>
    </section>
  );
}
