import { useState, useRef, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────
   Highlight component
──────────────────────────────────────────── */
function H({ c }: { c: string }) {
  return (
    <mark className="bg-[rgba(223,1,42,0.09)] text-inherit rounded-[2px] px-[2px] -mx-[2px] not-italic font-inherit">
      {c}
    </mark>
  );
}

/* ────────────────────────────────────────────
   Category icons (15 × 15, stroke="currentColor")
──────────────────────────────────────────── */
const CatContracts = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-[15px] h-[15px] shrink-0" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="1" width="9" height="12" rx="1" />
    <path d="M11 3.5h1.5a.8.8 0 0 1 .6.2l.9.9a.8.8 0 0 1 .2.6V15a.8.8 0 0 1-.8.8H5.5a.8.8 0 0 1-.8-.8v-.8" strokeLinecap="round" />
    <line x1="4.5" y1="5" x2="9" y2="5" strokeLinecap="round" />
    <line x1="4.5" y1="7.5" x2="9" y2="7.5" strokeLinecap="round" />
    <line x1="4.5" y1="10" x2="7" y2="10" strokeLinecap="round" />
  </svg>
);
const CatInvoices = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-[15px] h-[15px] shrink-0" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1" />
    <line x1="1.5" y1="5.5" x2="14.5" y2="5.5" />
    <line x1="1.5" y1="9.5" x2="14.5" y2="9.5" />
    <line x1="6.5" y1="1.5" x2="6.5" y2="14.5" />
  </svg>
);
const CatForms = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-[15px] h-[15px] shrink-0" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1" />
    <line x1="4" y1="5.5" x2="12" y2="5.5" strokeLinecap="round" />
    <rect x="4" y="7.5" width="8" height="1.8" rx="0.4" />
    <line x1="4" y1="11.5" x2="9" y2="11.5" strokeLinecap="round" />
  </svg>
);
const CatCompliance = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-[15px] h-[15px] shrink-0" stroke="currentColor" strokeWidth="1.2">
    <path d="M8 1.2 1.5 4v4.6C1.5 12.1 4.4 15 8 16c3.6-1 6.5-3.9 6.5-7.4V4L8 1.2z" />
    <polyline points="4.8,8.2 6.6,10.2 11.2,5.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CatReports = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-[15px] h-[15px] shrink-0" stroke="currentColor" strokeWidth="1.2">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1" />
    <line x1="4.5" y1="10.5" x2="4.5" y2="12.5" strokeLinecap="round" strokeWidth="1.6" />
    <line x1="7.5" y1="7.5" x2="7.5" y2="12.5" strokeLinecap="round" strokeWidth="1.6" />
    <line x1="10.5" y1="9" x2="10.5" y2="12.5" strokeLinecap="round" strokeWidth="1.6" />
    <polyline points="4,10 7,7 10,8.5 12.5,5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" />
  </svg>
);

/* ────────────────────────────────────────────
   Capability icons (13 × 13, stroke="#df012a")
──────────────────────────────────────────── */
const CapSearch = () => (
  <svg viewBox="0 0 13 13" fill="none" className="w-[12px] h-[12px]" stroke="#df012a" strokeWidth="1.25">
    <circle cx="5.5" cy="5.5" r="4" />
    <line x1="8.5" y1="8.5" x2="12" y2="12" strokeLinecap="round" />
  </svg>
);
const CapEye = () => (
  <svg viewBox="0 0 13 13" fill="none" className="w-[12px] h-[12px]" stroke="#df012a" strokeWidth="1.25">
    <path d="M1 6.5S3 3 6.5 3s5.5 3.5 5.5 3.5S10 10 6.5 10 1 6.5 1 6.5z" />
    <circle cx="6.5" cy="6.5" r="1.4" fill="#df012a" />
  </svg>
);
const CapFlag = () => (
  <svg viewBox="0 0 13 13" fill="none" className="w-[12px] h-[12px]" stroke="#df012a" strokeWidth="1.25">
    <line x1="3" y1="1.5" x2="3" y2="11.5" strokeLinecap="round" />
    <path d="M3 2.5h7L8.2 5.5 10 8.5H3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CapGrid = () => (
  <svg viewBox="0 0 13 13" fill="none" className="w-[12px] h-[12px]" stroke="#df012a" strokeWidth="1.25">
    <rect x="1" y="1" width="11" height="11" rx="1" />
    <line x1="1" y1="5" x2="12" y2="5" />
    <line x1="1" y1="8.5" x2="12" y2="8.5" />
    <line x1="5" y1="1" x2="5" y2="12" />
  </svg>
);

/* ────────────────────────────────────────────
   Types & data
──────────────────────────────────────────── */
interface Cap { title: string; desc: string; icon: React.ReactNode }
interface Cat { id: string; label: string; sublabel: string; icon: React.ReactNode; docLabel: string; caps: Cap[] }

const CATS: Cat[] = [
  {
    id: 'contracts', label: 'Contracts &', sublabel: 'Agreements', icon: <CatContracts />,
    docLabel: 'CONTRACT EXAMPLE',
    caps: [
      { title: 'Extract critical terms', desc: 'Identify renewal dates, notice periods, obligations, and commercial terms.', icon: <CapSearch /> },
      { title: 'Identify obligations', desc: 'Detect responsibilities, commitments, confidentiality clauses, and key conditions.', icon: <CapEye /> },
      { title: 'Flag missing information', desc: 'Highlight incomplete clauses, missing information, or inconsistent contract details.', icon: <CapFlag /> },
      { title: 'Structure contract data', desc: 'Convert unstructured content into clean, usable business data.', icon: <CapGrid /> },
    ],
  },
  {
    id: 'invoices', label: 'Invoices &', sublabel: 'Purchase Orders', icon: <CatInvoices />,
    docLabel: 'INVOICE EXAMPLE',
    caps: [
      { title: 'Capture invoice information', desc: 'Extract vendor, invoice, payment, tax, and line-item information.', icon: <CapSearch /> },
      { title: 'Validate against purchase orders', desc: 'Compare invoice details with purchase-order information.', icon: <CapEye /> },
      { title: 'Identify discrepancies', desc: 'Detect mismatched amounts, missing fields, duplicate records, or exceptions.', icon: <CapFlag /> },
      { title: 'Prepare finance-ready data', desc: 'Structure validated document information for downstream finance processing.', icon: <CapGrid /> },
    ],
  },
  {
    id: 'forms', label: 'Forms &', sublabel: 'Applications', icon: <CatForms />,
    docLabel: 'FORM EXAMPLE',
    caps: [
      { title: 'Capture submitted information', desc: 'Understand information across different form layouts.', icon: <CapSearch /> },
      { title: 'Validate completeness', desc: 'Identify missing or incomplete required information.', icon: <CapEye /> },
      { title: 'Classify applications', desc: 'Categorize documents based on content and business rules.', icon: <CapFlag /> },
      { title: 'Prepare structured records', desc: 'Turn submitted forms into usable data for enterprise applications.', icon: <CapGrid /> },
    ],
  },
  {
    id: 'compliance', label: 'Compliance &', sublabel: 'Business Docs', icon: <CatCompliance />,
    docLabel: 'COMPLIANCE EXAMPLE',
    caps: [
      { title: 'Identify required information', desc: 'Locate critical compliance fields and document details.', icon: <CapSearch /> },
      { title: 'Check document completeness', desc: 'Detect missing information or supporting documentation.', icon: <CapEye /> },
      { title: 'Apply business rules', desc: 'Validate content against defined enterprise requirements.', icon: <CapFlag /> },
      { title: 'Surface exceptions', desc: 'Flag records that require additional review.', icon: <CapGrid /> },
    ],
  },
  {
    id: 'reports', label: 'Reports &', sublabel: 'Operational Records', icon: <CatReports />,
    docLabel: 'REPORT EXAMPLE',
    caps: [
      { title: 'Extract important information', desc: 'Identify recurring operational values, events, and metrics.', icon: <CapSearch /> },
      { title: 'Structure report content', desc: 'Convert unstructured report information into standardized records.', icon: <CapGrid /> },
      { title: 'Identify exceptions', desc: 'Surface unusual values or conditions for review.', icon: <CapFlag /> },
      { title: 'Make information usable', desc: 'Prepare structured outputs for applications, analysis, or downstream systems.', icon: <CapEye /> },
    ],
  },
];

/* ────────────────────────────────────────────
   Document content – one component per category
──────────────────────────────────────────── */
function ContractsDoc() {
  return (
    <div className="text-[0.775rem] leading-[1.72]">
      <p className="font-semibold text-[0.72rem] tracking-[0.07em] text-center text-[#0a0a0a] mb-3 uppercase">
        Master Services Agreement
      </p>
      <div className="border-b border-neutral-100 mb-4" />
      <p className="font-semibold text-[0.68rem] uppercase tracking-[0.1em] text-[#0a0a0a] mb-1.5">3. Term and Renewal</p>
      <p className="text-neutral-600 mb-4">
        This Agreement shall commence on the Effective Date and continue for a period of three (3) years, unless earlier
        terminated. The Agreement shall automatically{' '}
        <H c="renew for successive one-year periods" />{' '}
        unless either party provides written notice of non-renewal at least{' '}
        <H c="sixty (60) days" />{' '}
        prior to the end of the then-current term.
      </p>
      <p className="font-semibold text-[0.68rem] uppercase tracking-[0.1em] text-[#0a0a0a] mb-1.5">7. Obligations</p>
      <p className="text-neutral-600 mb-4">
        Provider shall deliver the services in accordance with the Statement of Work and applicable Service Level
        Agreement. Provider shall{' '}
        <H c="maintain confidentiality of all Client data" />{' '}
        and use it solely for the purpose of performing the Services.
      </p>
      <p className="font-semibold text-[0.68rem] uppercase tracking-[0.1em] text-[#0a0a0a] mb-1.5">9. Payment Terms</p>
      <p className="text-neutral-600">
        Client shall pay Provider within <H c="thirty (30) days" /> of receipt of a valid invoice.
      </p>
    </div>
  );
}

function InvoicesDoc() {
  return (
    <div className="text-[0.775rem] leading-[1.72]">
      <p className="font-semibold text-[0.72rem] tracking-[0.07em] text-center text-[#0a0a0a] mb-3 uppercase">Invoice</p>
      <div className="border-b border-neutral-100 mb-4" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4 text-[0.72rem]">
        {[['Vendor', 'Meridian Technologies Inc.'], ['Invoice No.', 'INV-2024-0847'], ['PO Reference', 'PO-48291'], ['Issue Date', 'September 14, 2024']].map(([l, v]) => (
          <div key={l} className="flex flex-col">
            <span className="text-neutral-400 text-[0.64rem] uppercase tracking-[0.08em]">{l}</span>
            <span className="text-[#0a0a0a] font-medium">{v}</span>
          </div>
        ))}
      </div>
      <div className="border border-neutral-100 rounded-md overflow-hidden mb-4">
        <div className="bg-neutral-50 border-b border-neutral-100 grid grid-cols-[1fr_auto] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-neutral-400">
          <span>Description</span><span>Amount</span>
        </div>
        {[['Cloud Infrastructure Services', '$24,500.00'], ['Professional Services', '$8,750.00']].map(([d, a]) => (
          <div key={d} className="grid grid-cols-[1fr_auto] px-3 py-2 text-[0.72rem] border-b border-neutral-100 last:border-0 text-neutral-600">
            <span>{d}</span><span className="font-medium text-[#0a0a0a]">{a}</span>
          </div>
        ))}
        <div className="grid grid-cols-[1fr_auto] px-3 py-2 text-[0.72rem] border-b border-neutral-100 text-neutral-500">
          <span>Tax (8%)</span><span>$2,660.00</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] px-3 py-2 text-[0.72rem] bg-neutral-50/60">
          <span className="font-semibold text-[#0a0a0a]">Total Due</span>
          <span className="font-bold text-[#0a0a0a]"><H c="$35,910.00" /></span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[0.72rem]">
        <span className="text-neutral-500">Payment Terms: <span className="font-medium text-[#0a0a0a]"><H c="Net 30" /></span></span>
        <span className="text-neutral-500">Due: <span className="font-medium text-[#0a0a0a]"><H c="October 14, 2024" /></span></span>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[0.68rem] bg-[rgba(223,1,42,0.05)] border border-[#df012a]/15 rounded px-2.5 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#df012a] shrink-0" />
        <span className="text-neutral-600"><H c="PO amount $32,500 — Invoice total $35,910 — Variance $3,410" /></span>
      </div>
    </div>
  );
}

function FormsDoc() {
  const fields = [
    { label: 'Legal Entity Name', value: 'Meridian Technologies Inc.', hl: true },
    { label: 'Registration No.', value: 'TXC-2019-48271', hl: true },
    { label: 'Tax ID (EIN)', value: '45-1234567', hl: false },
    { label: 'Primary Contact', value: 'Sarah Okonkwo', hl: false },
    { label: 'Email Address', value: 's.okonkwo@meridiantech.com', hl: false },
    { label: 'Bank / Account No.', value: 'First National Bank / ••••4821', hl: false },
  ];
  const docs = [
    { label: 'Certificate of Incorporation', ok: true },
    { label: 'Tax Registration Certificate', ok: true },
    { label: 'Proof of Insurance', ok: false },
    { label: 'Signed Terms & Conditions', ok: true },
  ];
  return (
    <div className="text-[0.775rem] leading-[1.72]">
      <p className="font-semibold text-[0.72rem] tracking-[0.07em] text-center text-[#0a0a0a] mb-3 uppercase">
        Vendor Onboarding Application
      </p>
      <div className="border-b border-neutral-100 mb-4" />
      <p className="font-semibold text-[0.64rem] uppercase tracking-[0.1em] text-neutral-400 mb-2">Company & Contact Information</p>
      <div className="space-y-1.5 mb-4">
        {fields.map(f => (
          <div key={f.label} className="flex items-baseline gap-2 text-[0.72rem]">
            <span className="w-32 shrink-0 text-neutral-400 text-[0.64rem]">{f.label}</span>
            <span className="text-[#0a0a0a] font-medium">{f.hl ? <H c={f.value} /> : f.value}</span>
          </div>
        ))}
      </div>
      <p className="font-semibold text-[0.64rem] uppercase tracking-[0.1em] text-neutral-400 mb-2">Document Submission Status</p>
      <div className="space-y-1.5">
        {docs.map(d => (
          <div key={d.label} className="flex items-center gap-2 text-[0.72rem]">
            <span className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-[0.6rem] font-bold ${d.ok ? 'bg-neutral-100 text-neutral-500' : 'bg-[rgba(223,1,42,0.1)] text-[#df012a]'}`}>
              {d.ok ? '✓' : '✗'}
            </span>
            <span className={d.ok ? 'text-neutral-600' : ''}>{d.ok ? d.label : <H c={d.label + ' — Not Submitted'} />}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceDoc() {
  const items = [
    { label: 'Audit Report (March 2024)', ok: true },
    { label: 'Certificate of Conformity', ok: true },
    { label: 'Corrective Action Evidence', ok: false },
    { label: 'Risk Assessment Summary', ok: true },
  ];
  return (
    <div className="text-[0.775rem] leading-[1.72]">
      <p className="font-semibold text-[0.72rem] tracking-[0.07em] text-center text-[#0a0a0a] mb-3 uppercase">
        Compliance Review Document
      </p>
      <div className="border-b border-neutral-100 mb-4" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-[0.72rem]">
        {[
          ['Certificate', 'ISO 27001 — Information Security'],
          ['Issued To', 'Meridian Technologies Inc.'],
          ['Valid Through', <H key="v" c="December 31, 2025" />],
          ['Last Audit', 'March 18, 2024'],
        ].map(([l, v]) => (
          <div key={String(l)} className="flex flex-col gap-0.5">
            <span className="text-[0.64rem] uppercase tracking-[0.08em] text-neutral-400">{l}</span>
            <span className="font-medium text-[#0a0a0a]">{v}</span>
          </div>
        ))}
      </div>
      <div className="bg-[rgba(223,1,42,0.05)] border border-[#df012a]/12 rounded-md px-3 py-2 mb-4 text-[0.72rem]">
        <span className="text-neutral-500">Review Status: </span>
        <H c="Additional documentation required" />
      </div>
      <p className="font-semibold text-[0.64rem] uppercase tracking-[0.1em] text-neutral-400 mb-2">Required Evidence</p>
      <div className="space-y-1.5">
        {items.map(d => (
          <div key={d.label} className="flex items-center gap-2 text-[0.72rem]">
            <span className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-[0.6rem] font-bold ${d.ok ? 'bg-neutral-100 text-neutral-500' : 'bg-[rgba(223,1,42,0.1)] text-[#df012a]'}`}>
              {d.ok ? '✓' : '!'}
            </span>
            <span className={d.ok ? 'text-neutral-600' : ''}>{d.ok ? d.label : <H c={d.label + ' — Pending'} />}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsDoc() {
  const kpis = [
    { label: 'Service Availability', value: '96.8%', target: 'SLA: 99.5%', flag: true },
    { label: 'Incidents Resolved', value: '43 / 51', target: '8 open', flag: true },
    { label: 'Avg Resolution Time', value: '5.2 hrs', target: 'Target: < 4.0 hrs', flag: true },
    { label: 'Customer Satisfaction', value: '4.2 / 5.0', target: 'Target: 4.5', flag: false },
  ];
  const incidents = [
    { id: 'INC-2934', desc: 'Storage Capacity', status: 'Open', flag: true },
    { id: 'INC-2891', desc: 'API Latency Spike', status: '22 hrs (exceeded SLA)', flag: true },
  ];
  return (
    <div className="text-[0.775rem] leading-[1.72]">
      <p className="font-semibold text-[0.72rem] tracking-[0.07em] text-center text-[#0a0a0a] mb-3 uppercase">
        Monthly Operations Report — September 2024
      </p>
      <div className="border-b border-neutral-100 mb-4" />
      <p className="font-semibold text-[0.64rem] uppercase tracking-[0.1em] text-neutral-400 mb-2">KPI Summary</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {kpis.map(k => (
          <div key={k.label} className={`rounded-md px-2.5 py-2 text-[0.72rem] border ${k.flag ? 'border-[#df012a]/15 bg-[rgba(223,1,42,0.04)]' : 'border-neutral-100 bg-neutral-50/60'}`}>
            <p className="text-[0.62rem] text-neutral-400 uppercase tracking-[0.08em] mb-0.5">{k.label}</p>
            <p className={`font-bold ${k.flag ? 'text-[#df012a]' : 'text-[#0a0a0a]'}`}>{k.flag ? <H c={k.value} /> : k.value}</p>
            <p className="text-[0.6rem] text-neutral-400">{k.target}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold text-[0.64rem] uppercase tracking-[0.1em] text-neutral-400 mb-2">Exception Summary</p>
      <div className="space-y-1.5">
        {incidents.map(inc => (
          <div key={inc.id} className="flex items-start gap-2 text-[0.72rem]">
            <span className="w-4 h-4 rounded bg-[rgba(223,1,42,0.1)] flex items-center justify-center shrink-0 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-[#df012a]" />
            </span>
            <span className="text-neutral-600">{inc.id} — <H c={inc.desc} /> — {inc.status}</span>
          </div>
        ))}
        <div className="flex items-start gap-2 text-[0.72rem]">
          <span className="w-4 h-4 rounded bg-[rgba(223,1,42,0.1)] flex items-center justify-center shrink-0 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-[#df012a]" />
          </span>
          <span className="text-neutral-600">Recurring: Storage warnings — <H c="3rd consecutive month" /></span>
        </div>
      </div>
    </div>
  );
}

function DocContent({ idx }: { idx: number }) {
  switch (idx) {
    case 0: return <ContractsDoc />;
    case 1: return <InvoicesDoc />;
    case 2: return <FormsDoc />;
    case 3: return <ComplianceDoc />;
    case 4: return <ReportsDoc />;
    default: return <ContractsDoc />;
  }
}

/* ────────────────────────────────────────────
   Main section
──────────────────────────────────────────── */
export default function DocumentAutomationInPracticeSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const isAnimating = useRef(false);
  const isFirst = useRef(true);

  /* ── Refs for GSAP ── */
  const sectionRef   = useRef<HTMLElement>(null);
  const eyebrowRef   = useRef<HTMLParagraphElement>(null);
  const lineRef      = useRef<HTMLSpanElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const bodyRef      = useRef<HTMLParagraphElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);  // wraps doc + caps (transitions on category change)
  const bottomRef    = useRef<HTMLDivElement>(null);
  const docCardRef   = useRef<HTMLDivElement>(null);

  /* ── Section-entry ScrollTrigger animation ── */
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Left column — staggered entries */
    gsap.fromTo(
      [eyebrowRef.current, headingRef.current, bodyRef.current],
      { opacity: 0, y: reduced ? 0 : 14 },
      {
        opacity: 1, y: 0, duration: reduced ? 0.1 : 0.75,
        ease: 'power2.out', stagger: reduced ? 0 : 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
      }
    );

    /* Red underline scale-in */
    if (!reduced && lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 0.5, ease: 'power2.out', delay: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
        }
      );
    }

    /* Workspace — fade + scale */
    gsap.fromTo(workspaceRef.current,
      { opacity: 0, y: reduced ? 0 : 22, scale: reduced ? 1 : 0.985 },
      {
        opacity: 1, y: 0, scale: 1, duration: reduced ? 0.1 : 0.85,
        ease: 'power2.out', delay: reduced ? 0 : 0.18,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      }
    );

    /* Category items — stagger */
    gsap.fromTo('[data-cat-item]',
      { opacity: 0, y: reduced ? 0 : 7 },
      {
        opacity: 1, y: 0, duration: reduced ? 0.1 : 0.5,
        ease: 'power2.out', stagger: reduced ? 0 : 0.07, delay: reduced ? 0 : 0.32,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      }
    );
  }, { scope: sectionRef, dependencies: [] });

  /* ── Category transition: fade in after state change ── */
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    const el = contentRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.fromTo(el,
      { opacity: 0, y: reduced ? 0 : 8 },
      { opacity: 1, y: 0, duration: reduced ? 0.1 : 0.45, ease: 'power2.out',
        onComplete: () => { isAnimating.current = false; } }
    );
  }, [activeIdx]);

  /* ── Bottom statement IntersectionObserver ── */
  useEffect(() => {
    const el = bottomRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── Cursor micro-parallax on document card (desktop only) ── */
  useEffect(() => {
    const card = docCardRef.current;
    if (!card) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!mq.matches || reduced) return;

    let raf: number;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top - r.height / 2) / r.height) * -1.2;
        const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 1.2;
        gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.8, ease: 'power2.out' });
      });
    };
    const handleLeave = () => {
      cancelAnimationFrame(raf);
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power2.out' });
    };
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleCategorySelect = useCallback((idx: number) => {
    if (idx === activeIdx || isAnimating.current) return;
    isAnimating.current = true;
    const el = contentRef.current;
    if (!el) { setActiveIdx(idx); return; }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setActiveIdx(idx); return; }
    gsap.to(el, {
      opacity: 0, y: -8, duration: 0.28, ease: 'power2.in',
      onComplete: () => { setActiveIdx(idx); },
    });
  }, [activeIdx]);

  const cat = CATS[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="da-in-practice"
      className="relative w-full bg-[#fafaf8] overflow-hidden border-t border-neutral-200/80 py-16 lg:py-20"
      aria-labelledby="da-practice-title"
    >
      {/* ── Very faint background texture ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute bottom-0 left-0 w-[260px] opacity-[0.035]" viewBox="0 0 260 200" fill="none">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 36} cy={r * 36} r="1.4" fill="#df012a" />
            ))
          )}
        </svg>
        <svg className="absolute bottom-0 right-0 w-[260px] opacity-[0.035]" viewBox="0 0 260 200" fill="none">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={260 - c * 36} cy={r * 36} r="1.4" fill="#df012a" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5">

        {/* ══════════════════════════════════════════════════
            TOP ASYMMETRIC LAYOUT
            Left ~32% · Right ~66%
        ══════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8 xl:gap-14">

          {/* ── LEFT COLUMN ── */}
          <div className="w-full lg:w-[32%] xl:w-[31%] lg:sticky lg:top-28 lg:pb-8">
            <p ref={eyebrowRef} className="type-eyebrow-accent mb-3 tracking-[0.22em]">
              Document Automation in Practice
            </p>
            <span ref={lineRef} className="block h-px w-10 bg-[#df012a] mb-9" aria-hidden="true" />

            <h2
              ref={headingRef}
              id="da-practice-title"
              className="type-section-heading-lg text-balance mb-6 text-[#0a0a0a]"
            >
              From document-heavy<br />
              work to intelligent<br />
              operations<span className="text-[#df012a]">.</span>
            </h2>

            <p ref={bodyRef} className="type-body text-[#555555] max-w-[420px] lg:max-w-none">
              We design document automation around the way your business actually works—from incoming documents and complex business rules to validation, exceptions, and downstream systems.
            </p>
          </div>

          {/* ── RIGHT COLUMN — Interactive workspace ── */}
          <div ref={workspaceRef} className="w-full lg:w-[66%] xl:w-[67%]">

            {/* Mobile: horizontal category strip */}
            <div className="flex overflow-x-auto gap-2 pb-2 mb-5 lg:hidden scrollbar-none snap-x snap-mandatory">
              {CATS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleCategorySelect(i)}
                  aria-pressed={i === activeIdx}
                  className={[
                    'flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[0.72rem] font-medium whitespace-nowrap shrink-0 snap-start transition-all duration-200',
                    i === activeIdx
                      ? 'border-[#df012a]/30 bg-[rgba(223,1,42,0.06)] text-[#df012a]'
                      : 'border-neutral-200 bg-white text-neutral-500 hover:text-neutral-700',
                  ].join(' ')}
                >
                  <span className={i === activeIdx ? 'text-[#df012a]' : 'text-neutral-400'}>{c.icon}</span>
                  {c.label.replace(' &', '')} {c.sublabel.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Desktop: full three-panel workspace */}
            <div className="flex gap-0 bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">

              {/* ── Panel A: Category selector ── */}
              <div className="hidden lg:flex flex-col border-r border-neutral-100 w-[148px] xl:w-[158px] shrink-0 py-3">
                {CATS.map((c, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={c.id}
                      data-cat-item
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleCategorySelect(i)}
                      className={[
                        'group relative flex items-start gap-2.5 px-3.5 py-3 text-left transition-colors duration-200',
                        isActive ? 'bg-[rgba(223,1,42,0.05)]' : 'hover:bg-neutral-50',
                      ].join(' ')}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <span
                          className="absolute left-0 top-2 bottom-2 w-[2.5px] rounded-r-full bg-[#df012a]"
                          aria-hidden="true"
                        />
                      )}
                      <span className={`mt-[1px] transition-colors duration-200 ${isActive ? 'text-[#df012a]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
                        {c.icon}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-[0.72rem] font-medium leading-snug transition-colors duration-200 ${isActive ? 'text-[#0a0a0a]' : 'text-neutral-500 group-hover:text-neutral-700'}`}>
                          {c.label}
                        </span>
                        <span className={`block text-[0.72rem] leading-snug transition-colors duration-200 ${isActive ? 'text-[#0a0a0a]' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                          {c.sublabel}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ── Panel B + C: Document + Capabilities (transition target) ── */}
              <div ref={contentRef} className="flex flex-col md:flex-row flex-1 min-w-0">

                {/* Panel B: Document card */}
                <div className="flex-1 min-w-0 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-neutral-100">
                  {/* Doc label */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-neutral-100">
                    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-neutral-300" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                      <rect x="1.5" y="1" width="8" height="11" rx="0.8" />
                      <path d="M9.5 3h1.5a.6.6 0 0 1 .4.2l1 .9a.6.6 0 0 1 .1.4V13a.6.6 0 0 1-.6.6H4a.6.6 0 0 1-.6-.6V12" strokeLinecap="round" />
                    </svg>
                    <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-neutral-400">
                      {cat.docLabel}
                    </span>
                  </div>

                  {/* Document content with perspective for subtle micro-motion */}
                  <div style={{ perspective: '800px', perspectiveOrigin: 'center center' }}>
                    <div ref={docCardRef} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
                      <DocContent idx={activeIdx} />
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-[0.68rem] text-neutral-400">
                    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 shrink-0" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                      <circle cx="6" cy="6" r="4.5" />
                      <line x1="9.2" y1="9.2" x2="12.5" y2="12.5" strokeLinecap="round" />
                    </svg>
                    AI identifies and understands key information
                  </div>
                </div>

                {/* Panel C: Capabilities */}
                <div className="shrink-0 w-full md:w-[195px] xl:w-[210px] p-4 sm:p-5">
                  <p className="font-display font-semibold text-[0.9rem] leading-snug tracking-[-0.015em] text-[#0a0a0a] mb-0.5">
                    What eTechLogix
                  </p>
                  <p className="font-display font-semibold text-[0.9rem] leading-snug tracking-[-0.015em] text-[#df012a] mb-2">
                    can automate
                  </p>
                  <div className="w-5 h-px bg-[#df012a] mb-4" aria-hidden="true" />

                  <div className="space-y-4">
                    {cat.caps.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-[rgba(223,1,42,0.07)] border border-[#df012a]/12 flex items-center justify-center shrink-0 mt-[1px]">
                          {cap.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.75rem] font-semibold text-[#0a0a0a] leading-snug mb-0.5 tracking-[-0.01em]">
                            {cap.title}
                          </p>
                          <p className="text-[0.7rem] text-neutral-500 leading-[1.55]">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            CLOSING STATEMENT
        ══════════════════════════════════════════════════ */}
        <div ref={bottomRef} className="mt-16 lg:mt-20 text-center" aria-label="Section conclusion">
          {/* Small icon */}
          <div className="flex justify-center mb-5" aria-hidden="true">
            <div className="w-10 h-10 rounded-xl bg-[rgba(223,1,42,0.07)] border border-[#df012a]/15 flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#df012a" strokeWidth="1.4">
                <rect x="3" y="2" width="10" height="13" rx="1.2" />
                <path d="M13 5h2a1 1 0 0 1 .7.3l1.3 1.3a1 1 0 0 1 .3.7V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1" strokeLinecap="round" />
                <line x1="5.5" y1="7" x2="10.5" y2="7" strokeLinecap="round" />
                <line x1="5.5" y1="9.5" x2="10.5" y2="9.5" strokeLinecap="round" />
                <circle cx="15" cy="15" r="3.5" />
                <line x1="15" y1="13.5" x2="15" y2="16.5" strokeLinecap="round" />
                <line x1="15" y1="16.8" x2="15" y2="17.2" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </div>
          </div>

          <p className="font-display font-bold text-[1.15rem] sm:text-[1.3rem] leading-snug tracking-[-0.025em] text-[#0a0a0a] mb-3">
            Your documents are only one part of the process.
          </p>
          <p className="text-[0.9375rem] text-neutral-500 leading-[1.7] max-w-[580px] mx-auto">
            We engineer the{' '}
            <span className="text-[#df012a] font-medium">
              intelligence, business rules, integrations, and application workflows
            </span>
            {' '}around them.
          </p>
        </div>

      </div>
    </section>
  );
}
