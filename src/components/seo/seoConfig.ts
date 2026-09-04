export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOPageData {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: 'Organization' | 'WebSite' | 'Service' | 'AboutPage' | 'ContactPage' | 'WebPage' | 'Article';
  serviceData?: {
    name: string;
    serviceType: string;
    description: string;
  };
}

export const SITE_URL = 'https://www.etechlogix.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/etechlogix-logo.png`;
export const SITE_NAME = 'eTechLogix';

export const seoPages: Record<string, SEOPageData> = {
  home: {
    title: "eTechLogix — Enterprise Technology Solutions | Custom Software & Cloud Infrastructure",
    description: "eTechLogix engineers enterprise-grade software, cloud infrastructure, and intelligent systems. Custom solutions, AI, machine learning, and data migration for complex business challenges.",
    canonical: `${SITE_URL}/`,
    keywords: [
      "enterprise software development",
      "custom software solutions",
      "agentic AI workflow automation",
      "enterprise integrations",
      "legacy modernization",
      "dedicated engineering teams",
      "product prototyping",
      "cloud computing Arizona",
    ],
    ogType: 'website',
    schemaType: 'Organization',
  },
  enterpriseCustomSoftware: {
    title: "Enterprise Custom Software Development | eTechLogix",
    description: "Scalable, secure, cloud-native enterprise software platforms engineered around your business operations, high-volume transactions, and mission-critical workflows.",
    canonical: `${SITE_URL}/services/enterprise-custom-software`,
    keywords: [
      "enterprise custom software",
      "custom application development",
      "cloud-native platforms",
      "business process automation",
      "enterprise software engineering",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Services', item: `${SITE_URL}/#services` },
      { name: 'Enterprise Custom Software', item: `${SITE_URL}/services/enterprise-custom-software` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Enterprise Custom Software Development',
      serviceType: 'Software Development',
      description: 'Custom software platforms engineered around complex business workflows, multi-tenant architectures, and enterprise cloud operations.',
    },
  },
  enterpriseIntegrations: {
    title: "Enterprise Systems Integration & API Middleware | eTechLogix",
    description: "Connect Salesforce, MuleSoft, Descartes, Avalara, ERP, CRM, healthcare, and custom platforms through unified, resilient integration layers and data pipelines.",
    canonical: `${SITE_URL}/services/enterprise-integrations`,
    keywords: [
      "enterprise integrations",
      "API middleware",
      "Salesforce integration",
      "MuleSoft connectors",
      "ERP sync",
      "system integration services",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Services', item: `${SITE_URL}/#services` },
      { name: 'Enterprise Integrations', item: `${SITE_URL}/services/enterprise-integrations` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Enterprise System Integrations',
      serviceType: 'Systems Integration',
      description: 'Centralized integration layers, real-time data synchronization, and enterprise middleware connecting heterogeneous business platforms.',
    },
  },
  legacyModernization: {
    title: "Legacy System Modernization & Phased Migration | eTechLogix",
    description: "Modernize monolithic applications, outdated architectures, and manual workflows through zero-downtime, phased migration roadmaps that preserve business continuity.",
    canonical: `${SITE_URL}/services/legacy-modernization`,
    keywords: [
      "legacy system modernization",
      "application modernization",
      "monolith to microservices",
      "database migration",
      "system refactoring",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Services', item: `${SITE_URL}/#services` },
      { name: 'Legacy Modernization', item: `${SITE_URL}/services/legacy-modernization` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Legacy System Modernization',
      serviceType: 'Application Modernization',
      description: 'Controlled, low-risk migration and modernization of mission-critical legacy software, databases, and enterprise architecture.',
    },
  },
  productPrototyping: {
    title: "Investor-Ready Product Prototyping & MVPs | eTechLogix",
    description: "Transform complex software concepts into functional, high-fidelity prototypes and demonstrations for stakeholder validation, user testing, and fundraising.",
    canonical: `${SITE_URL}/services/product-prototyping`,
    keywords: [
      "product prototyping",
      "functional prototypes",
      "MVP development",
      "startup prototype",
      "investor demonstration software",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Services', item: `${SITE_URL}/#services` },
      { name: 'Product Prototyping', item: `${SITE_URL}/services/product-prototyping` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Product Prototyping & MVP Engineering',
      serviceType: 'Product Engineering',
      description: 'Functional, investor-grade interactive prototypes and validated software demonstrators built with production-ready architecture.',
    },
  },
  dedicatedEngineeringTeams: {
    title: "Dedicated Engineering Teams & Staff Augmentation | eTechLogix",
    description: "Embed senior full-stack, cloud, AI, and DevOps engineers who operate with true product ownership, rigorous quality standards, and shared delivery accountability.",
    canonical: `${SITE_URL}/services/dedicated-engineering-teams`,
    keywords: [
      "dedicated engineering teams",
      "software team augmentation",
      "senior developers",
      "embedded engineering team",
      "onshore software engineers",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Services', item: `${SITE_URL}/#services` },
      { name: 'Dedicated Engineering Teams', item: `${SITE_URL}/services/dedicated-engineering-teams` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Dedicated Engineering Teams',
      serviceType: 'Engineering Staffing & Augmentation',
      description: 'High-performing embedded engineering squads delivering end-to-end software development with transparent sprint cadence and ownership.',
    },
  },
  agenticAI: {
    title: "Agentic AI & Enterprise Workflow Automation | eTechLogix",
    description: "Autonomous, rule-governed AI agents that interpret unstructured data, execute complex multi-step workflows, and escalate exceptions for human judgment.",
    canonical: `${SITE_URL}/ai-automation/agentic-ai-workflow-automation`,
    keywords: [
      "agentic AI",
      "autonomous workflow automation",
      "enterprise AI agents",
      "LLM business automation",
      "intelligent workflow orchestration",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'AI Solutions', item: `${SITE_URL}/#business-impact` },
      { name: 'Agentic AI & Workflow Automation', item: `${SITE_URL}/ai-automation/agentic-ai-workflow-automation` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Agentic AI & Workflow Automation',
      serviceType: 'Artificial Intelligence Solutions',
      description: 'Deterministic, observable autonomous AI agent frameworks integrated into core enterprise systems and operational approval workflows.',
    },
  },
  documentAutomation: {
    title: "Intelligent Document Automation & Extraction | eTechLogix",
    description: "Automated document processing and structured data extraction for multi-format invoices, medical records, regulatory forms, bills of lading, and contracts.",
    canonical: `${SITE_URL}/ai-automation/document-automation`,
    keywords: [
      "intelligent document processing",
      "document automation",
      "automated invoice extraction",
      "OCR enterprise AI",
      "unstructured document extraction",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'AI Solutions', item: `${SITE_URL}/#business-impact` },
      { name: 'Document Automation', item: `${SITE_URL}/ai-automation/document-automation` },
    ],
    schemaType: 'Service',
    serviceData: {
      name: 'Intelligent Document Automation',
      serviceType: 'Document Processing Automation',
      description: 'High-accuracy OCR and LLM-driven document ingestion pipelines extracting verified structured data into ERP and database systems.',
    },
  },
  industries: {
    title: "Industry Technology Solutions | eTechLogix",
    description: "Tailored enterprise software and AI solutions for Healthcare, Real Estate, Legal, Logistics, Manufacturing, Finance, and Retail environments.",
    canonical: `${SITE_URL}/industries`,
    keywords: [
      "healthcare software solutions",
      "logistics software development",
      "fintech engineering",
      "manufacturing technology",
      "real estate platforms",
      "industry software solutions",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Industries', item: `${SITE_URL}/industries` },
    ],
    schemaType: 'WebPage',
  },
  work: {
    title: "Our Work & Enterprise Case Studies | eTechLogix",
    description: "Explore proven client engagements, enterprise integrations, agentic AI deployments, and modernization case studies engineered by eTechLogix.",
    canonical: `${SITE_URL}/work`,
    keywords: [
      "enterprise case studies",
      "software development portfolio",
      "technology client success stories",
      "AI automation case studies",
      "system integration examples",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Work', item: `${SITE_URL}/work` },
    ],
    schemaType: 'WebPage',
  },
  about: {
    title: "About eTechLogix — Engineering Philosophy & Leadership",
    description: "Discover our mission, engineering philosophy, and long-term partnership model built around precision, technical integrity, and measurable business outcomes.",
    canonical: `${SITE_URL}/company/about`,
    keywords: [
      "about eTechLogix",
      "software development company Phoenix Arizona",
      "enterprise technology team",
      "software engineering leadership",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Company', item: `${SITE_URL}/company/about` },
      { name: 'About Us', item: `${SITE_URL}/company/about` },
    ],
    schemaType: 'AboutPage',
  },
  contact: {
    title: "Contact eTechLogix — Start Your Engineering Engagement",
    description: "Connect with eTechLogix senior engineers and technology leaders to discuss your enterprise software, AI automation, integration, or modernization project.",
    canonical: `${SITE_URL}/contact`,
    keywords: [
      "contact eTechLogix",
      "hire enterprise software developers",
      "AI automation consultation",
      "software development quote",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Contact', item: `${SITE_URL}/contact` },
    ],
    schemaType: 'ContactPage',
  },
  insights: {
    title: "Insights & Articles — Enterprise Software, AI & Architecture | eTechLogix",
    description: "Read perspectives, engineering analysis, and technology insights from eTechLogix on modern systems, enterprise AI, software architecture, and digital transformation.",
    canonical: `${SITE_URL}/insights`,
    keywords: [
      "eTechLogix insights",
      "enterprise software blogs",
      "AI architecture insights",
      "legacy system modernization articles",
      "software engineering blog",
    ],
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
    ],
    schemaType: 'WebPage',
  },
  legacyVsModern: {
    title: "Navigating Legacy Systems vs Modern Systems in Software Development | eTechLogix",
    description: "Explore the trade-offs, architectures, and strategic pathways between legacy systems and modern cloud-native architectures in enterprise software development.",
    canonical: `${SITE_URL}/insights/navigating-legacy-systems-vs-modern-systems`,
    keywords: [
      "legacy systems vs modern systems",
      "legacy modernization",
      "enterprise software development",
      "ERP migration case study",
      "software architecture transition",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Legacy vs Modern Systems', item: `${SITE_URL}/insights/navigating-legacy-systems-vs-modern-systems` },
    ],
    schemaType: 'Article',
  },
  unifiedHealthcare: {
    title: "Unified Healthcare Communication: The Future of Healthcare | eTechLogix",
    description: "Explore how unified healthcare communication transforms care delivery, accelerates diagnosis, and reduces administrative overhead by up to 60%.",
    canonical: `${SITE_URL}/insights/unified-healthcare-communication`,
    keywords: [
      "unified healthcare communication",
      "healthcare IT",
      "HIPAA compliant communication",
      "telehealth communication",
      "healthcare administrative efficiency",
      "HL7 communication",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Unified Healthcare Communication', item: `${SITE_URL}/insights/unified-healthcare-communication` },
    ],
    schemaType: 'Article',
  },
  chatGptConversationalAi: {
    title: "ChatGPT in the Era of Conversational AI: Advancements & Trends | eTechLogix",
    description: "Explore the latest developments and future trends in Conversational AI with ChatGPT, transformer architectures, enterprise personalization, and multimodal integrations.",
    canonical: `${SITE_URL}/insights/chatgpt-in-the-era-of-conversational-ai`,
    keywords: [
      "ChatGPT conversational AI",
      "conversational AI trends",
      "large language models",
      "natural language processing",
      "AI chatbots enterprise",
      "machine learning automation",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'ChatGPT in the Era of Conversational AI', item: `${SITE_URL}/insights/chatgpt-in-the-era-of-conversational-ai` },
    ],
    schemaType: 'Article',
  },
  customSoftwareBenefits: {
    title: "Custom Software Solution — Know Its Benefits for Business Growth | eTechLogix",
    description: "Discover how custom software development drives small business and enterprise growth, reduces operational costs, and delivers superior security and scalability.",
    canonical: `${SITE_URL}/insights/custom-software-solution-benefits`,
    keywords: [
      "custom software benefits",
      "software development for small business",
      "custom software Phoenix",
      "bespoke software ROI",
      "business process software",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Custom Software Benefits', item: `${SITE_URL}/insights/custom-software-solution-benefits` },
    ],
    schemaType: 'Article',
  },
  softwareCompanyArizona: {
    title: "Best Custom Software Development Company in Arizona | eTechLogix",
    description: "Looking for top-tier software engineering in Arizona? eTechLogix delivers scalable cloud architectures, UX design, enterprise Java, AI, and dedicated dev teams.",
    canonical: `${SITE_URL}/insights/custom-software-development-company-arizona`,
    keywords: [
      "software development company Arizona",
      "custom software Phoenix AZ",
      "Arizona tech agency",
      "software outsourcing Arizona",
      "dedicated developer hiring",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Software Development in Arizona', item: `${SITE_URL}/insights/custom-software-development-company-arizona` },
    ],
    schemaType: 'Article',
  },
  whiteLabelDevelopment: {
    title: "White Label Development: Enhancing Enterprise Expertise | eTechLogix",
    description: "Explore the strategic advantages of white-label IT development. Deliver enterprise-grade software to your clients, accelerate time-to-market, and scale without overhead.",
    canonical: `${SITE_URL}/insights/white-label-development`,
    keywords: [
      "white label software development",
      "white label IT services",
      "outsourced software engineering",
      "agency software partner",
      "reseller software development",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'White Label Development', item: `${SITE_URL}/insights/white-label-development` },
    ],
    schemaType: 'Article',
  },
  hl7ApiSolutions: {
    title: "API Solutions and Flawless Communication in HL7 | eTechLogix",
    description: "Learn how HL7 standards and modern API middleware ensure seamless clinical data exchange, EHR/EMR interoperability, and compliant healthcare communications.",
    canonical: `${SITE_URL}/insights/hl7-api-solutions-communication`,
    keywords: [
      "HL7 API solutions",
      "HL7 communication",
      "healthcare data integration",
      "EHR interoperability",
      "health level seven middleware",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'HL7 API Solutions', item: `${SITE_URL}/insights/hl7-api-solutions-communication` },
    ],
    schemaType: 'Article',
  },
  shoppingCartIntegration: {
    title: "Shopping Cart Systems and Enterprise Integration | eTechLogix",
    description: "Master modern shopping cart integrations. Connect payment gateways, ERP systems, live inventory sync, and multi-currency transactions for seamless e-commerce.",
    canonical: `${SITE_URL}/insights/shopping-cart-enterprise-integration`,
    keywords: [
      "shopping cart integration",
      "ecommerce system integration",
      "payment gateway sync",
      "ERP ecommerce middleware",
      "retail software architecture",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Shopping Cart Integration', item: `${SITE_URL}/insights/shopping-cart-enterprise-integration` },
    ],
    schemaType: 'Article',
  },
  techSavvyLeaders: {
    title: "Tech-Savvy Leaders Changing Equations in Every Industry | eTechLogix",
    description: "How visionary leaders replace manual friction with automated intelligence, connected IoT ecosystems, and agile engineering practices to dominate modern markets.",
    canonical: `${SITE_URL}/insights/tech-savvy-leaders-changing-equations`,
    keywords: [
      "tech savvy leaders",
      "industry automation",
      "digital transformation leadership",
      "IoT enterprise connectivity",
      "intelligent workflow automation",
    ],
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Insights', item: `${SITE_URL}/insights` },
      { name: 'Tech-Savvy Leaders', item: `${SITE_URL}/insights/tech-savvy-leaders-changing-equations` },
    ],
    schemaType: 'Article',
  },
  privacyPolicy: {
    title: "Privacy Policy | eTechLogix",
    description: "Review the eTechLogix privacy policy, data collection standards, cookie handling, and commitment to client data protection and security.",
    canonical: `${SITE_URL}/privacy-policy`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
    ],
    schemaType: 'WebPage',
  },
  termsConditions: {
    title: "Terms & Conditions | eTechLogix",
    description: "Review the terms and conditions governing the use of the eTechLogix website, services, intellectual property, and mutual engagement terms.",
    canonical: `${SITE_URL}/terms-conditions`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_URL}/` },
      { name: 'Terms & Conditions', item: `${SITE_URL}/terms-conditions` },
    ],
    schemaType: 'WebPage',
  },
  notFound: {
    title: "404 — Page Not Found | eTechLogix",
    description: "The page you are looking for cannot be found. Explore our enterprise software, AI automation, and technology services.",
    canonical: `${SITE_URL}/404`,
    ogType: 'website',
    schemaType: 'WebPage',
  },
};
