import { useEffect, useRef, useState } from 'react';

const touches = [
  { number: '01', label: 'Review', explanation: 'Information is manually checked against business rules or another document.' },
  { number: '02', label: 'Re-enter', explanation: 'Existing document data is typed into another system.' },
  { number: '03', label: 'Approve', explanation: 'A person reviews the information before the process can continue.' },
] as const;

export default function DocumentProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTouch, setActiveTouch] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.dataset.visible = 'true';
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="document-problem document-problem--simple overflow-hidden bg-[#fcfbfa]" aria-labelledby="document-problem-title">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 py-16 lg:py-20 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-10">
        <div className="document-problem-copy md:pr-6">
          <div className="mb-9">
            <p className="type-eyebrow-accent mb-3 tracking-[0.22em]">The Document Problem</p>
            <span className="block h-px w-10 bg-[#df012a]" aria-hidden="true" />
          </div>

          <h2 id="document-problem-title" className="type-section-heading-lg max-w-[540px] text-balance text-[#0a0a0a]">
            The document is digital.<br />The work around it isn’t<span className="text-[#df012a]">.</span>
          </h2>

          <p className="type-body mt-8 max-w-[500px] text-neutral-500">
            Documents may already be digital, but people still spend time reviewing, comparing, re-entering, and approving the information inside them.
          </p>
        </div>

        <div className="simple-document-workspace relative min-h-[650px]" data-active-touch={activeTouch} aria-label="Invoice with three manual processing touchpoints">
          <article className="problem-invoice" aria-label="Invoice INV-74218">
            <header><h3>Invoice</h3><dl><div><dt>Invoice No.</dt><dd>INV-74218</dd></div><div><dt>Date</dt><dd>May 14, 2026</dd></div></dl></header>
            <div className="problem-invoice-parties">
              <div><strong>From</strong><p>Global Supplies Co.<br />12 Industrial Way,<br />Houston, TX 77001, USA</p></div>
              <div><strong>Bill To</strong><p>Acme Manufacturing Ltd.<br />500 Business Park,<br />Houston, TX 77002, USA</p></div>
            </div>
            <table>
              <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount (USD)</th></tr></thead>
              <tbody><tr><td>Consulting Services</td><td>1</td><td>$18,500.00</td><td>$18,500.00</td></tr></tbody>
            </table>
            <div className="problem-invoice-total"><span>Subtotal</span><b>$18,500.00</b><span>Tax (0%)</span><b>$0.00</b><strong>Total Due</strong><strong>$18,500.00</strong></div>
            <div className="problem-invoice-terms"><strong>Payment Terms</strong><p>Net 30 days from date of invoice.</p></div>
            <p className="problem-invoice-thanks">Thank you for your business.</p>
          </article>

          {touches.map(({ number, label, explanation }, index) => (
            <button
              type="button"
              className={`simple-touch simple-touch--${index + 1}${activeTouch === index + 1 ? ' is-active' : ''}`}
              style={{ '--touch-delay': `${650 + index * 170}ms` } as React.CSSProperties}
              onMouseEnter={() => setActiveTouch(index + 1)}
              onFocus={() => setActiveTouch(index + 1)}
              onClick={() => setActiveTouch(index + 1)}
              aria-expanded={activeTouch === index + 1}
              key={number}
            >
              <span className="simple-touch-heading"><b>{number}</b><strong>{label}</strong></span>
              <i aria-hidden="true" />
              <span className="simple-touch-copy">{explanation}</span>
            </button>
          ))}

          <div className="document-problem-conclusion">
            <span aria-hidden="true" />
            <p>One document.<br /><strong>Multiple manual touches.</strong></p>
          </div>
        </div>

        <ol className="simple-touch-list" aria-label="Three manual invoice touchpoints">
          {touches.map(({ number, label, explanation }, index) => (
            <li key={number}>
              <button type="button" onClick={() => setActiveTouch(index + 1)} aria-expanded={activeTouch === index + 1}>
                <span>{number}</span><strong>{label}</strong>
              </button>
              {activeTouch === index + 1 && <p>{explanation}</p>}
            </li>
          ))}
          <li className="simple-mobile-conclusion"><span aria-hidden="true" /><p>One document.<br /><strong>Multiple manual touches.</strong></p></li>
        </ol>
      </div>
    </section>
  );
}
