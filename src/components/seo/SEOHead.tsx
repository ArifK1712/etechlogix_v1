import { useEffect } from 'react';
import {
  type SEOPageData,
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from './seoConfig';

interface SEOHeadProps {
  data: SEOPageData;
  noindex?: boolean;
}

function updateOrCreateMeta(
  attrName: 'name' | 'property',
  attrValue: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attrName}="${attrValue}"]`
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateOrCreateCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function isPreviewOrLocal(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  return (
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.endsWith('.vercel.app') ||
    host.endsWith('.local')
  );
}

export function SEOHead({ data, noindex = false }: SEOHeadProps) {
  useEffect(() => {
    // 1. Document Title
    document.title = data.title;

    // 2. Meta Description
    updateOrCreateMeta('name', 'description', data.description);

    // 3. Meta Keywords
    if (data.keywords && data.keywords.length > 0) {
      updateOrCreateMeta('name', 'keywords', data.keywords.join(', '));
    }

    // 4. Canonical URL (Always production URL)
    updateOrCreateCanonical(data.canonical);

    // 5. Robots Meta Directive
    // Automatic protection: if preview or localhost or explicitly requested, apply noindex
    const shouldNoIndex = noindex || isPreviewOrLocal();
    const robotsDirective = shouldNoIndex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    updateOrCreateMeta('name', 'robots', robotsDirective);
    updateOrCreateMeta('name', 'googlebot', robotsDirective);

    // 6. Open Graph Tags
    updateOrCreateMeta('property', 'og:title', data.title);
    updateOrCreateMeta('property', 'og:description', data.description);
    updateOrCreateMeta('property', 'og:url', data.canonical);
    updateOrCreateMeta('property', 'og:type', data.ogType || 'website');
    updateOrCreateMeta('property', 'og:site_name', SITE_NAME);
    updateOrCreateMeta('property', 'og:image', data.ogImage || DEFAULT_OG_IMAGE);
    updateOrCreateMeta('property', 'og:locale', 'en_US');

    // 7. Twitter Card Tags
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:site', '@eTechLogix');
    updateOrCreateMeta('name', 'twitter:creator', '@eTechLogix');
    updateOrCreateMeta('name', 'twitter:title', data.title);
    updateOrCreateMeta('name', 'twitter:description', data.description);
    updateOrCreateMeta('name', 'twitter:image', data.ogImage || DEFAULT_OG_IMAGE);

    // 8. JSON-LD Structured Data
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'eTechLogix Inc.',
        legalName: 'eTechLogix Inc.',
        url: SITE_URL,
        logo: `${SITE_URL}/images/etechlogix-logo.png`,
        telephone: '+1-480-527-0786',
        email: 'contact@etechlogix.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2224 W Desert Cove Ave, UNIT 206',
          addressLocality: 'Phoenix',
          addressRegion: 'AZ',
          postalCode: '85029',
          addressCountry: 'US',
        },
        sameAs: [
          'https://www.linkedin.com/company/etechlogix-inc',
          'https://twitter.com/eTechLogix',
          'https://www.facebook.com/eTechLogix-102971575858841',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    ];

    // Breadcrumbs Schema if available
    if (data.breadcrumbs && data.breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${data.canonical}#breadcrumb`,
        itemListElement: data.breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.item,
        })),
      });
    }

    // Page-specific Schema
    if (data.schemaType === 'Service' && data.serviceData) {
      graph.push({
        '@type': 'Service',
        '@id': `${data.canonical}#service`,
        name: data.serviceData.name,
        serviceType: data.serviceData.serviceType,
        description: data.serviceData.description,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        areaServed: 'Worldwide',
        url: data.canonical,
      });
    } else if (data.schemaType === 'AboutPage') {
      graph.push({
        '@type': 'AboutPage',
        '@id': `${data.canonical}#webpage`,
        url: data.canonical,
        name: data.title,
        description: data.description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      });
    } else if (data.schemaType === 'ContactPage') {
      graph.push({
        '@type': 'ContactPage',
        '@id': `${data.canonical}#webpage`,
        url: data.canonical,
        name: data.title,
        description: data.description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      });
    } else if (data.schemaType === 'Article') {
      graph.push({
        '@type': 'Article',
        '@id': `${data.canonical}#article`,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        headline: data.title,
        description: data.description,
        mainEntityOfPage: data.canonical,
        url: data.canonical,
        image: data.ogImage || DEFAULT_OG_IMAGE,
        author: {
          '@type': 'Organization',
          name: 'eTechLogix',
          url: SITE_URL,
        },
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-US',
      });
    } else {
      graph.push({
        '@type': 'WebPage',
        '@id': `${data.canonical}#webpage`,
        url: data.canonical,
        name: data.title,
        description: data.description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      });
    }

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let scriptTag = document.head.querySelector<HTMLScriptElement>(
      'script#structured-data-jsonld'
    );
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'structured-data-jsonld');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);
  }, [data, noindex]);

  return null;
}
