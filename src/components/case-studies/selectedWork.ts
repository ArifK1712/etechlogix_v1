export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string | null;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare',
    industry: 'HEALTHCARE',
    title: 'Improving patient and operational workflows with connected systems.',
    description:
      'A unified platform that streamlines patient journeys, staff coordination and operational reporting across departments.',
    image: '/images/case-studies/healthcare-case-study.jpg',
    imageAlt: 'Healthcare professionals and medical team collaborating with connected patient systems',
    href: null,
  },
  {
    id: 'hospitality',
    industry: 'HOSPITALITY',
    title: 'Enhancing guest experiences and hospitality operations.',
    description:
      'Connected digital solutions that improve guest journeys, staff coordination, bookings, and day-to-day operational efficiency.',
    image: '/images/case-studies/hospitality-case-study.jpg',
    imageAlt: 'Hotel concierge assisting guests with digital booking and service requests at reception',
    href: null,
  },
  {
    id: 'finance',
    industry: 'FINANCE',
    title: 'Modernizing business workflows, compliance and internal systems.',
    description:
      'Secure, scalable and compliant solutions that simplify processes and drive better financial outcomes.',
    image: '/images/case-studies/finance-case-study.jpg',
    imageAlt: 'Financial operations analyst monitoring enterprise transaction dashboards',
    href: null,
  },
  {
    id: 'events',
    industry: 'EVENTS',
    title: 'Transforming event operations into a connected digital ecosystem.',
    description:
      'End-to-end platform for registration, engagements, logistics, badge management and real-time reporting.',
    image: '/images/case-studies/events-case-study.jpg',
    imageAlt: 'Large enterprise conference and keynote hall with synchronized digital displays',
    href: null,
  },
  {
    id: 'retail',
    industry: 'RETAIL',
    title: 'Improving customer experience and backend process efficiency.',
    description:
      'Integrated solutions that connect sales, inventory, operations and customer touchpoints seamlessly.',
    image: '/images/case-studies/retail-case-study.jpg',
    imageAlt: 'Modern retail store environment with integrated point-of-sale inventory tablet',
    href: null,
  },
  {
    id: 'logistics',
    industry: 'LOGISTICS',
    title: 'Optimizing supply chain visibility and logistics operations.',
    description:
      'Smart systems that enable real-time tracking, route optimization and operational excellence.',
    image: '/images/case-studies/logistics-case-study.jpg',
    imageAlt: 'Logistics coordinator with digital inventory tablet in modern distribution center',
    href: null,
  },
];
