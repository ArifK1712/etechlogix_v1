import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';
import { Button } from '../components/ui/Button';

interface Article {
  id: string;
  title: string;
  category: 'Systems Architecture' | 'AI & Automation' | 'Enterprise Software' | 'Healthcare & Integrations';
  readTime: string;
  summary: string;
  slug: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'legacy-vs-modern',
    title: 'Navigating Legacy Systems vs Modern Systems in Software Development',
    category: 'Systems Architecture',
    readTime: '5 min read',
    summary:
      'In the ever-evolving world of technology, organizations face a pivotal decision — stick with their trusted legacy systems or leap into the realm of modern systems. This choice is particularly critical in software development, where outdated technologies can hamper progress and hinder business growth. At eTechLogix, we comprehend the significance of selecting the right path.',
    slug: 'navigating-legacy-systems-vs-modern-systems',
    featured: true,
  },
  {
    id: 'unified-healthcare',
    title: 'Unified Healthcare Communication: The Future of Healthcare',
    category: 'Healthcare & Integrations',
    readTime: '4 min read',
    summary:
      'In an age of rapidly advancing technology, unified healthcare communication has the potential to revolutionize the way healthcare is delivered, streamlining operations and clinical collaboration across modern care ecosystems.',
    slug: 'unified-healthcare-communication',
  },
  {
    id: 'chatgpt-conversational-ai',
    title: 'ChatGPT in the Era of Conversational AI',
    category: 'AI & Automation',
    readTime: '4 min read',
    summary:
      'Conversational AI is an emerging technology that has gained significant attention in recent years. Understanding how modern language models integrate into operational systems is redefining enterprise customer and employee experiences.',
    slug: 'chatgpt-in-the-era-of-conversational-ai',
  },
  {
    id: 'custom-software-benefits',
    title: 'Custom Software Solution — Know Its Benefits for Business Growth',
    category: 'Enterprise Software',
    readTime: '4 min read',
    summary:
      "Digital solutions enable businesses small, medium, or large to ramp down expenses associated with processing and scrutinizing clients' information, thereby making it simpler to conduct business activities in a cost-effective and timely manner.",
    slug: 'custom-software-solution-know-its-benefits-for-your-business-growth',
  },
  {
    id: 'software-company-arizona',
    title: 'Best Custom Software Development Company in Arizona',
    category: 'Enterprise Software',
    readTime: '3 min read',
    summary:
      'If you want the most experienced team that knows how to transform ideas into reality, eTechLogix delivers full-lifecycle engineering tailored to business operations, scalable cloud architectures, and virtually appealing UX designs.',
    slug: 'best-custom-software-development-company-in-arizona',
  },
  {
    id: 'white-label-development',
    title: 'White Label Development: Enhancing Enterprise Expertise',
    category: 'Systems Architecture',
    readTime: '3 min read',
    summary:
      'White-label IT software can enhance business expertise and market reputation. Considering the growing era of digitization, white-labeled IT software and engineering solutions offer considerable strategic advantages.',
    slug: 'white-label-dovelopment',
  },
  {
    id: 'hl7-api-solutions',
    title: 'API Solutions and Flawless Communication in HL7',
    category: 'Healthcare & Integrations',
    readTime: '5 min read',
    summary:
      'Health Level Seven (HL7) defines the strategy to exchange health-specific communication between medical applications. Having a well-designed and integrated clinical system ensures smooth, compliant, and reliable clinical workflows.',
    slug: 'api-solutions-and-flawless-communication-in-hl7',
  },
  {
    id: 'shopping-cart-integrations',
    title: 'Shopping Cart Systems and Enterprise Integration',
    category: 'Enterprise Software',
    readTime: '4 min read',
    summary:
      'Online shopping cart systems require planning and development expertise. Modern integration coordinates payment gateways, ERP backends, and live inventory sync to deliver flawless transactions at scale.',
    slug: 'shoppingcart-and-integration',
  },
  {
    id: 'tech-savvy-leaders',
    title: 'Tech-Savvy Leaders Changing Equations in Every Industry',
    category: 'AI & Automation',
    readTime: '4 min read',
    summary:
      'Businesses remain competitive by replacing manual friction with automated intelligence. Although leading human tasks toward automation requires thoughtful change management, the right engineering practices drive unmatched success.',
    slug: 'tech-savvy-leaders-changing-equations-in-every-industry',
  },
];

const categories = [
  'All',
  'Systems Architecture',
  'AI & Automation',
  'Enterprise Software',
  'Healthcare & Integrations',
] as const;

type Category = (typeof categories)[number];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const filteredArticles = articles.filter(
    (article) => selectedCategory === 'All' || article.category === selectedCategory
  );

  const featuredArticle = articles.find((a) => a.featured);
  const gridArticles = filteredArticles.filter(
    (article) => selectedCategory !== 'All' || !article.featured
  );

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#0a0a0a] font-body">
      <SEOHead data={seoPages.insights} />

      {/* ── HERO HEADER ── */}
      <section
        aria-labelledby="insights-heading"
        className="relative border-b border-neutral-200/80 bg-gradient-to-b from-[#fafaf8] to-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div ref={heroRef} className="mx-auto max-w-5xl flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
              <p className="type-eyebrow-accent tracking-[0.22em] text-[#df012a]">
                INSIGHTS & PERSPECTIVES
              </p>
              <span className="block w-5 h-px bg-[#df012a]" aria-hidden="true" />
            </div>

            {/* Main Heading */}
            <h1
              id="insights-heading"
              className="type-hero-heading text-[#0a0a0a] text-balance mb-6 max-w-4xl"
            >
              Perspectives on software<br className="hidden sm:block" /> and modern systems<span className="text-[#df012a]">.</span>
            </h1>

            {/* Subtitle */}
            <p className="type-hero-lead text-neutral-600 max-w-2xl text-center">
              Engineering analyses, architectural strategies, and operational technology perspectives
              from the eTechLogix team.
            </p>
          </div>

          {/* ── CATEGORY FILTER PILLS ── */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? articles.length
                  : articles.filter((a) => a.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${
                    isActive
                      ? 'bg-[#df012a] text-white shadow-sm'
                      : 'bg-neutral-100/90 text-neutral-700 hover:bg-neutral-200/80 hover:text-black'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white text-neutral-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARTICLES CONTENT AREA ── */}
      <section className="py-14 sm:py-16 lg:py-20" aria-label="Articles Feed">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          
          {/* ── FEATURED ARTICLE (Shown when 'All' is selected) ── */}
          {selectedCategory === 'All' && featuredArticle && (
            <div className="mb-12 lg:mb-16">
              <span className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#df012a] mb-4">
                FEATURED PERSPECTIVE
              </span>

              <article className="group relative rounded-3xl border border-neutral-200/90 bg-[#fafaf8] p-7 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[#df012a]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Content */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-neutral-200/80 text-[#df012a] font-semibold">
                        <Tag className="w-3 h-3" />
                        {featuredArticle.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <Link to={`/insights/${featuredArticle.slug}`}>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.025em] group-hover:text-[#df012a] transition-colors">
                        {featuredArticle.title}
                      </h2>
                    </Link>

                    <p className="type-body text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                      {featuredArticle.summary}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/insights/${featuredArticle.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] transition-all group-hover:gap-3"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Accent Panel */}
                  <div className="lg:col-span-4 relative flex items-center justify-center p-8 rounded-2xl bg-white border border-neutral-200/70 shadow-sm">
                    <div className="text-center space-y-3">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#df012a]/10 text-[#df012a]">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                        ARCHITECTURAL ANALYSIS
                      </p>
                      <p className="text-sm font-semibold text-[#111]">
                        Legacy vs Modern Systems
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            </div>
          )}

          {/* ── ARTICLES GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {gridArticles.map((article) => {
              const hasInnerPage = true;
              const linkTarget = `/insights/${article.slug}`;

              return (
                <article
                  key={article.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-[#df012a]/40 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                >
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-neutral-500 mb-4">
                      <span className="text-[#df012a] font-semibold uppercase tracking-wider text-[11px]">
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    {hasInnerPage ? (
                      <Link to={linkTarget} className="block">
                        <h3 className="font-display font-semibold text-xl sm:text-[1.35rem] leading-snug tracking-[-0.02em] text-[#111111] group-hover:text-[#df012a] transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-display font-semibold text-xl sm:text-[1.35rem] leading-snug tracking-[-0.02em] text-[#111111] group-hover:text-[#df012a] transition-colors">
                        {article.title}
                      </h3>
                    )}

                    {/* Summary */}
                    <p className="type-body text-neutral-600 text-base sm:text-lg leading-relaxed mt-3.5 line-clamp-4">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  {hasInnerPage ? (
                    <Link
                      to={linkTarget}
                      className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between group/link"
                    >
                      <span className="text-xs font-semibold text-[#111111] transition-colors group-hover/link:text-[#df012a]">
                        Read Article
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover/link:bg-[#df012a] group-hover/link:text-white group-hover/link:translate-x-1">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ) : (
                    <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#111111] transition-colors group-hover:text-[#df012a]">
                        Read Article
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover:bg-[#df012a] group-hover:text-white group-hover:translate-x-1">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── BOTTOM DISCUSSION CTA ── */}
      <section className="border-t border-neutral-200/80 bg-[#fafaf8] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10">
            <div className="max-w-xl">
              <p className="type-eyebrow-accent mb-2 tracking-[0.2em] text-[#df012a]">
                DISCUSS A CHALLENGE
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Facing legacy modernization, integrations, or operational AI challenges?
              </h2>
            </div>
            <Button
              href="/contact"
              variant="primaryDark"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
