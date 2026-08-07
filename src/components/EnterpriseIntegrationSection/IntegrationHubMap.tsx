import { useState, useCallback, type MutableRefObject } from 'react';

export const VIEW_W = 680;
export const VIEW_H = 520;

/** Large centered integration engine panel (reduced ~32% from 220×200) */
export const ENGINE = { cx: 340, cy: 260, w: 150, h: 136 };

/**
 * Logo card half-extents in viewBox units. These ALSO drive the card's
 * on-screen box size (see NODE_CARD_W / NODE_CARD_H below) so the connector
 * lines and the visible card edges can never fall out of sync at any
 * viewport width.
 */
export const NODE_CARD = { halfW: 84, halfH: 44 };
export const NODE_CARD_W = NODE_CARD.halfW * 2;
export const NODE_CARD_H = NODE_CARD.halfH * 2;

export const COL_LEFT_X = 100;
export const COL_RIGHT_X = 580;

/** Equal spacing on both sides of the vertical center */
const ROW_TOP_Y = 90;
const ROW_MID_Y = ENGINE.cy;
const ROW_BOTTOM_Y = 430;

type NodeSide = 'left' | 'right' | 'center';
type NodeSlot = 'top' | 'mid' | 'bottom';

export type MapNode = {
  id: string;
  label: string;
  description: string;
  logoSrc: string;
  x: number;
  y: number;
  side: NodeSide;
  slot: NodeSlot;
  /**
   * Optional per-logo scale multiplier (on top of the shared base size).
   * Some source marks (thin wordmarks, icon+label combos) read visually
   * smaller than others at the same bounding box — this compensates so
   * every logo feels optically balanced without touching card dimensions.
   */
  logoScale?: number;
};

/** Five partner nodes: two per side (top/mid) + one centered on the bottom row */
export const mapNodes: MapNode[] = [
  {
    id: 'salesforce',
    label: 'Salesforce',
    description: 'Synchronize CRM data, customer records, and revenue workflows across connected systems.',
    logoSrc: '/images/logos/salesforce.png',
    x: COL_LEFT_X,
    y: ROW_TOP_Y,
    side: 'left',
    slot: 'top',
    logoScale: 1.22,
  },
  {
    id: 'mulesoft',
    label: 'MuleSoft',
    description: 'Orchestrate APIs and integration flows that keep enterprise platforms in sync.',
    logoSrc: '/images/logos/mulesoft.png',
    x: COL_RIGHT_X,
    y: ROW_TOP_Y,
    side: 'right',
    slot: 'top',
    logoScale: 1.2,
  },
  {
    id: 'descartes',
    label: 'Descartes',
    description: 'Connect logistics, shipping, and supply chain operations with dependable data exchange.',
    logoSrc: '/images/logos/descartes.png',
    x: COL_LEFT_X,
    y: ROW_MID_Y,
    side: 'left',
    slot: 'mid',
    logoScale: 1.24,
  },
  {
    id: 'avalara',
    label: 'Avalara',
    description: 'Automate tax calculation, compliance, and reporting across transactional workflows.',
    logoSrc: '/images/logos/avalara.png',
    x: COL_RIGHT_X,
    y: ROW_MID_Y,
    side: 'right',
    slot: 'mid',
    logoScale: 1.18,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description: 'Integrate healthcare and operational data with secure, compliance-aware connectivity.',
    logoSrc: '/images/logos/healthcare.png',
    x: ENGINE.cx,
    y: ROW_BOTTOM_Y,
    side: 'center',
    slot: 'bottom',
    logoScale: 1.2,
  },
];

function engineRect() {
  const { cx, cy, w, h } = ENGINE;
  return {
    left: cx - w / 2,
    right: cx + w / 2,
    top: cy - h / 2,
    bottom: cy + h / 2,
    cx,
    cy,
  };
}

function cardAnchorPoint(node: MapNode): { x: number; y: number } {
  const { halfW, halfH } = NODE_CARD;
  if (node.side === 'left') {
    return { x: node.x + halfW, y: node.y };
  }
  if (node.side === 'right') {
    return { x: node.x - halfW, y: node.y };
  }
  return { x: node.x, y: node.y - halfH };
}

export function connectorPathMid(enginePt: { x: number; y: number }, cardPt: { x: number; y: number }) {
  return `M ${enginePt.x} ${enginePt.y} H ${cardPt.x}`;
}

/** Reference layout: horizontal from card, then vertical down to hub top corner. */
function connectorPathTopRow(enginePt: { x: number; y: number }, cardPt: { x: number; y: number }) {
  return `M ${cardPt.x} ${cardPt.y} H ${enginePt.x} V ${enginePt.y}`;
}

function pathForNode(node: MapNode) {
  const rect = engineRect();

  if (node.side === 'center' && node.slot === 'bottom') {
    const enginePt = { x: rect.cx, y: rect.bottom };
    const cardPt = cardAnchorPoint(node);
    return {
      d: `M ${enginePt.x} ${enginePt.y} V ${cardPt.y}`,
      enginePt,
      cardPt,
    };
  }

  if (node.side === 'left' || node.side === 'right') {
    const cardPt = cardAnchorPoint(node);
    const isTopRow = node.slot === 'top';
    const enginePt = isTopRow
      ? node.side === 'left'
        ? { x: rect.left, y: rect.top }
        : { x: rect.right, y: rect.top }
      : node.side === 'left'
        ? { x: rect.left, y: node.y }
        : { x: rect.right, y: node.y };

    return {
      d: isTopRow
        ? connectorPathTopRow(enginePt, cardPt)
        : connectorPathMid(enginePt, cardPt),
      enginePt,
      cardPt,
    };
  }

  return {
    d: '',
    enginePt: { x: rect.cx, y: rect.cy },
    cardPt: { x: node.x, y: node.y },
  };
}

function BrandLogo({
  src,
  alt,
  label,
  scale = 1,
  className = 'max-h-[90%] w-auto max-w-[90%] object-contain object-center',
}: {
  src: string;
  alt: string;
  label: string;
  scale?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (failed || !src) {
    return (
      <span className="font-display text-xs font-semibold tracking-[-0.02em] text-[#0a0a0a]">{label}</span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: 'center' } : undefined}
      loading="lazy"
      decoding="async"
      onError={onError}
    />
  );
}

function MobileFlowConnector() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <div className="h-4 w-px border-l border-dashed border-neutral-400/90" />
      <span className="relative my-0.5 flex h-3 w-3 items-center justify-center">
        <span className="absolute h-7 w-7 rounded-full bg-[#df012a]/10" />
        <span className="relative h-2 w-2 rounded-full bg-[#df012a] ring-2 ring-[#df012a]/20" />
      </span>
      <div className="h-4 w-px border-l border-dashed border-neutral-400/90" />
    </div>
  );
}

function IntegrationHubMobileFlow({
  mobileNodeRefs,
}: {
  mobileNodeRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] md:hidden">
      <ul className="relative flex flex-col gap-0">
        {mapNodes.map((node, index) => (
          <li key={node.id} className="flex flex-col">
            <div
              ref={(el) => {
                mobileNodeRefs.current[index] = el;
              }}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.05)] opacity-0"
            >
              <div className="flex h-[4.25rem] w-[5.5rem] shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-[#fafaf8] px-2">
                <BrandLogo
                  src={node.logoSrc}
                  alt={`${node.label} logo`}
                  label={node.label}
                  scale={node.logoScale ?? 1.28}
                  className="max-h-[94%] max-w-[94%]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-bold tracking-[-0.02em] text-[#0a0a0a]">
                  {node.label}
                </p>
                <p className="type-body-sm mt-1.5 text-[#555555] leading-snug">{node.description}</p>
              </div>
            </div>
            {index < mapNodes.length - 1 ? <MobileFlowConnector /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IntegrationHubMap({
  pathRefs,
  nodeRefs,
  mobileNodeRefs,
  engineRef,
}: {
  pathRefs: MutableRefObject<(SVGPathElement | null)[]>;
  nodeRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  mobileNodeRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  engineRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const patternId = 'integration-dot-grid-ref';

  return (
    <>
      <IntegrationHubMobileFlow mobileNodeRefs={mobileNodeRefs} />

      <div className="relative mx-auto hidden aspect-[680/520] w-full max-w-[860px] min-h-[400px] md:block md:min-h-[540px]">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 z-[1] h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id={patternId} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#d4d4cf" />
          </pattern>
        </defs>
        <rect width={VIEW_W} height={VIEW_H} fill={`url(#${patternId})`} opacity="0.45" />

        {mapNodes.map((node, index) => {
          const { d, enginePt, cardPt } = pathForNode(node);
          if (!d) return null;
          const flowReverse = index % 2 === 1;
          const flowDelay = index * 0.45;
          const flowDuration = 3.1 + (index % 3) * 0.35;
          return (
            <g key={`connector-${node.id}`}>
              <path
                ref={(el) => {
                  pathRefs.current[index] = el;
                }}
                d={d}
                fill="none"
                stroke="#bcbcb4"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={d}
                fill="none"
                stroke="#5a5a54"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={100}
                strokeDasharray="8 92"
                className={`integration-connector-flow${flowReverse ? ' integration-connector-flow--reverse' : ''}`}
                style={{
                  animationDuration: `${flowDuration}s`,
                  animationDelay: `${flowDelay}s`,
                }}
              />
              <circle cx={enginePt.x} cy={enginePt.y} r="3.25" fill="#9a9a94" />
              <circle cx={cardPt.x} cy={cardPt.y} r="3.25" fill="#9a9a94" />
            </g>
          );
        })}
      </svg>

      {/*
        Engine + card boxes are sized as a PERCENTAGE of the viewBox width and
        given an aspect-ratio equal to their viewBox dimensions. This keeps
        their rendered edges perfectly aligned with the SVG connector
        endpoints (computed in the same viewBox units) at every screen size —
        fixed pixel widths would drift out of sync and swallow the lines.
      */}
      <div
        ref={engineRef}
        className="absolute z-[3] -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          left: `${(ENGINE.cx / VIEW_W) * 100}%`,
          top: `${(ENGINE.cy / VIEW_H) * 100}%`,
          width: `${(ENGINE.w / VIEW_W) * 100}%`,
          aspectRatio: `${ENGINE.w} / ${ENGINE.h}`,
        }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-2xl border border-neutral-200/90 bg-white px-[7%] shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
          <img
            src="/images/etechlogix-logo.png"
            alt="eTechLogix"
            className="h-auto w-[74%] max-w-[180px] object-contain"
            width={168}
            height={48}
          />
        </div>
      </div>

      {mapNodes.map((node, index) => {
        const left = `${(node.x / VIEW_W) * 100}%`;
        const top = `${(node.y / VIEW_H) * 100}%`;
        return (
          <div
            key={node.id}
            ref={(el) => {
              nodeRefs.current[index] = el;
            }}
            className="absolute z-[2] -translate-x-1/2 -translate-y-1/2 opacity-0"
            style={{
              left,
              top,
              width: `${(NODE_CARD_W / VIEW_W) * 100}%`,
              aspectRatio: `${NODE_CARD_W} / ${NODE_CARD_H}`,
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-neutral-200/80 bg-white px-[8%] py-[8%] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <BrandLogo
                src={node.logoSrc}
                alt={`${node.label} logo`}
                label={node.label}
                scale={node.logoScale ?? 1.28}
              />
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
