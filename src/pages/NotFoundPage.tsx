import { ArrowRight, Home, Layers, Briefcase, Mail } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoPages } from '../components/seo/seoConfig';
import { InternalLink } from '../components/InternalLink';

export default function NotFoundPage() {
  return (
    <div className="bg-white text-[#0a0a0a] min-h-[75vh] flex items-center justify-center py-20 px-6 font-body">
      <SEOHead data={seoPages.notFound} noindex={true} />
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df012a]/10 text-[#df012a] text-xs font-mono font-semibold tracking-widest uppercase mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="type-section-heading-lg text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] mb-4">
          Page Not Found<span className="text-[#df012a]">.</span>
        </h1>

        <p className="type-body text-neutral-600 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore our key sections below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
          <InternalLink
            href="/"
            className="group flex items-center justify-between p-4 rounded-xl border border-neutral-200/90 bg-[#fafaf8] hover:border-[#df012a]/40 hover:bg-white transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#df012a] group-hover:bg-[#df012a] group-hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">Homepage</p>
                <p className="text-xs text-neutral-500">Return to main overview</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#df012a] group-hover:translate-x-0.5 transition-all" />
          </InternalLink>

          <InternalLink
            href="/services/enterprise-custom-software"
            className="group flex items-center justify-between p-4 rounded-xl border border-neutral-200/90 bg-[#fafaf8] hover:border-[#df012a]/40 hover:bg-white transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#df012a] group-hover:bg-[#df012a] group-hover:text-white transition-colors">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">Engineering Services</p>
                <p className="text-xs text-neutral-500">Custom software & platforms</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#df012a] group-hover:translate-x-0.5 transition-all" />
          </InternalLink>

          <InternalLink
            href="/work"
            className="group flex items-center justify-between p-4 rounded-xl border border-neutral-200/90 bg-[#fafaf8] hover:border-[#df012a]/40 hover:bg-white transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#df012a] group-hover:bg-[#df012a] group-hover:text-white transition-colors">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">Our Work</p>
                <p className="text-xs text-neutral-500">Proven client case studies</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#df012a] group-hover:translate-x-0.5 transition-all" />
          </InternalLink>

          <InternalLink
            href="/contact"
            className="group flex items-center justify-between p-4 rounded-xl border border-neutral-200/90 bg-[#fafaf8] hover:border-[#df012a]/40 hover:bg-white transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#df012a] group-hover:bg-[#df012a] group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0a0a0a]">Contact Us</p>
                <p className="text-xs text-neutral-500">Start an engineering dialogue</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#df012a] group-hover:translate-x-0.5 transition-all" />
          </InternalLink>
        </div>

        <InternalLink
          href="/"
          className="btn-etech btn-etech--primary-dark inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#df012a] transition-all duration-300 shadow-sm"
        >
          <span>Go to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </InternalLink>
      </div>
    </div>
  );
}
