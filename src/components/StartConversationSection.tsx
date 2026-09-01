import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { buttonClassName } from './ui/Button';
import { InternalLink } from './InternalLink';

gsap.registerPlugin(ScrollTrigger);

export default function StartConversationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const card = cardRef.current;
      if (!section || !card) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const contentItems = [
        eyebrowRef.current,
        headingRef.current,
        descriptionRef.current,
        buttonsRowRef.current,
      ].filter(Boolean);

      if (reducedMotion) {
        gsap.set([card, ...contentItems], {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: 'inset(0 0% 0 0% round 16px)',
        });
        return;
      }

      gsap.set(card, {
        clipPath: 'inset(0 0 0 100% round 16px)',
        opacity: 0.88,
        x: 50,
      });
      gsap.set(contentItems, { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        card,
        {
          clipPath: 'inset(0 0 0 100% round 16px)',
          opacity: 0.88,
          x: 50,
        },
        {
          clipPath: 'inset(0 0 0 0% round 16px)',
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: 'power2.inOut',
        },
      ).fromTo(
        contentItems,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.62, stagger: 0.09 },
        '-=0.42',
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (inView && (tl.scrollTrigger?.progress ?? 0) === 0) {
          tl.play();
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="start-conversation-heading"
      className="relative w-full bg-[#ffffff] py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#f7f6f2] shadow-[0_24px_64px_rgba(0,0,0,0.06)]"
        >
          <div className="relative z-[1] flex flex-col items-center px-6 py-12 text-center sm:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="mx-auto w-full max-w-3xl">
              <p
                ref={eyebrowRef}
                className="type-eyebrow-accent mb-5 tracking-[0.22em]"
              >
                START A CONVERSATION
              </p>

              <h2
                id="start-conversation-heading"
                ref={headingRef}
                className="type-section-heading-panel text-balance sm:text-4xl md:text-[2.35rem] lg:text-[2.55rem]"
              >
                Bring us the complex challenge. We&apos;ll help engineer the{' '}
                <span className="text-[#df012a]">path forward.</span>
              </h2>

              <p
                ref={descriptionRef}
                className="type-body mx-auto mt-6 max-w-2xl text-neutral-600"
              >
                Whether you need enterprise software, Agentic AI workflow automation, system
                integration, modernization, or a functional product prototype, let&apos;s discuss what
                your business needs next.
              </p>

              <div
                ref={buttonsRowRef}
                className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center"
              >
                <InternalLink
                  href="/work#contact"
                  className={`${buttonClassName('primaryDark', 'section')} group`}
                >
                  Start a Conversation
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </InternalLink>
                <InternalLink
                  href="/work"
                  className={`${buttonClassName('secondary', 'section')} group`}
                >
                  View Our Work
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </InternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
