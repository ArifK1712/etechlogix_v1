import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import { Button } from '../ui/Button';

const industries = [
  {
    name: 'Healthcare',
    description: 'Secure platforms',
    image: '/images/industries/healthcare.jpg',
  },
  {
    name: 'Financial Services',
    description: 'Trusted transactions',
    image: '/images/industries/financial-services.jpg',
  },
  {
    name: 'Manufacturing',
    description: 'Intelligent operations',
    image: '/images/industries/manufacturing.jpg',
  },
  {
    name: 'Retail & Commerce',
    description: 'Connected experiences',
    image: '/images/industries/retail-commerce.jpg',
  },
  {
    name: 'Logistics & Supply Chain',
    description: 'Connected operations',
    image: '/images/industries/logistics.jpg',
  },
  {
    name: 'Public Sector',
    description: 'Secure digital services',
    image: '/images/industries/public-sector.jpg',
  },
  {
    name: 'Real Estate & Infrastructure',
    description: 'Smarter environments',
    image: '/images/industries/real-estate.jpg',
  },
  {
    name: 'Education',
    description: 'Connected learning systems',
    image: '/images/industries/education-connected-learning.png',
  },
] as const;

export default function IndustriesCarouselSection() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncControls = (instance: SwiperInstance) => {
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  };

  return (
    <section id="etechlogix-industries" className="industries-showcase-shell relative w-full scroll-mt-6 overflow-hidden bg-white pb-16 text-[#0a0a0a] md:scroll-mt-8 md:pb-20" aria-labelledby="industries-showcase-title">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">
      <div className="industries-showcase overflow-hidden rounded-2xl border border-neutral-200/80 bg-[#fafaf8] p-8 md:p-12 lg:p-14">
        <div className="industries-showcase-header">
          <div>
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">INDUSTRIES WE SERVE</p>
            <div className="mb-6 h-px w-10 bg-[#df012a]" aria-hidden="true" />
            <h2 id="industries-showcase-title" className="type-section-heading-lg">
              Technology shaped around real<br />industry needs
            </h2>
          </div>

          <p className="type-body industries-showcase-copy">
            From regulated sectors to operationally complex businesses, we build software, integrations and automation around how each industry works.
          </p>
        </div>

        <div id="industries-carousel" className="industries-carousel-wrap">
          <Swiper
            className="industries-carousel"
            slidesPerView={1.1}
            spaceBetween={14}
            speed={500}
            grabCursor
            watchOverflow
            breakpoints={{
              640: { slidesPerView: 1.65, spaceBetween: 18 },
              768: { slidesPerView: 2.35, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 22 },
            }}
            onSwiper={(instance) => {
              setSwiper(instance);
              syncControls(instance);
            }}
            onSlideChange={syncControls}
            onResize={syncControls}
          >
            {industries.map(({ name, description, image }) => (
              <SwiperSlide key={name} className="industries-carousel-slide">
                <article className="industries-showcase-card">
                  <div className="industries-showcase-image">
                    <img src={image} alt={`${name} industry environment`} loading="lazy" />
                  </div>
                  <div className="industries-showcase-card-content">
                    <div className="industries-showcase-card-copy">
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="industries-showcase-footer">
          <Button
            href="#industries-carousel"
            variant="primaryDark"
            size="section"
            icon={<ArrowRight className="h-4 w-4 text-[#df012a]" aria-hidden="true" />}
          >
            View all industries
          </Button>

          <div className="industries-carousel-controls" aria-label="Industry carousel controls">
            <button
              type="button"
              aria-label="Previous industry"
              disabled={atStart}
              onClick={() => swiper?.slidePrev()}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next industry"
              disabled={atEnd}
              onClick={() => swiper?.slideNext()}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
