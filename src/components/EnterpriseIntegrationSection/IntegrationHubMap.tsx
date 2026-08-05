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
export const NODE_CARD = { halfW: 70, halfH: 38 };
export const NODE_CARD_W = NODE_CARD.halfW * 2;
export const NODE_CARD_H = NODE_CARD.halfH * 2;

export const COL_LEFT_X = 100;
export const COL_RIGHT_X = 580;

/** Equal spacing on both sides of the vertical center */
const ROW_TOP_Y = 90;
const ROW_MID_Y = ENGINE.cy;
const ROW_BOTTOM_Y = 430;

type NodeSide = 'left' | 'right';
type NodeSlot = 'top' | 'mid' | 'bottom';

export type MapNode = {
  id: string;
  label: string;
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

/** Three equally spaced cards on each side of the centered integration engine */
export const mapNodes: MapNode[] = [
  {
    id: 'salesforce',
    label: 'Salesforce',
    logoSrc: '/images/logos/salesforce.png',
    x: COL_LEFT_X,
    y: ROW_TOP_Y,
    side: 'left',
    slot: 'top',
    logoScale: 1.1,
  },
  {
    id: 'mulesoft',
    label: 'MuleSoft',
    logoSrc: '/images/logos/mulesoft.png',
    x: COL_RIGHT_X,
    y: ROW_TOP_Y,
    side: 'right',
    slot: 'top',
  },
  {
    id: 'descartes',
    label: 'Descartes',
    logoSrc: '/images/logos/descartes.png',
    x: COL_LEFT_X,
    y: ROW_MID_Y,
    side: 'left',
    slot: 'mid',
    logoScale: 1.15,
  },
  {
    id: 'avalara',
    label: 'Avalara',
    logoSrc: '/images/logos/avalara.png',
    x: COL_RIGHT_X,
    y: ROW_MID_Y,
    side: 'right',
    slot: 'mid',
  },
  {
    id: 'dmsi',
    label: 'DMSi Agility',
    logoSrc: '/images/logos/dmsi-agility.png',
    x: COL_LEFT_X,
    y: ROW_BOTTOM_Y,
    side: 'left',
    slot: 'bottom',
    logoScale: 1.15,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    logoSrc: '/images/logos/healthcare.png',
    x: COL_RIGHT_X,
    y: ROW_BOTTOM_Y,
    side: 'right',
    slot: 'bottom',
    logoScale: 1.1,
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

function cardEdgePoint(
  nx: number,
  ny: number,
  towardX: number,
  towardY: number,
  halfW: number,
  halfH: number,
) {
  const dx = towardX - nx;
  const dy = towardY - ny;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const t = Math.min(halfW / (Math.abs(ux) || 1e-6), halfH / (Math.abs(uy) || 1e-6));
  return { x: nx + ux * t, y: ny + uy * t };
}

/** L-shaped path with one rounded corner (vertical segment first) */
function elbowPathVerticalFirst(
  enginePt: { x: number; y: number },
  cardPt: { x: number; y: number },
  cornerR = 12,
) {
  const { x: ex, y: ey } = enginePt;
  const { x: cx, y: cy } = cardPt;
  const dirX = Math.sign(cx - ex) || -1;
  const vertSign = Math.sign(cy - ey) || 1;
  const r = Math.min(cornerR, Math.abs(cy - ey) / 2 - 0.5, Math.abs(cx - ex) / 2 - 0.5);
  if (r <= 0 || Math.abs(cy - ey) < 1) {
    return `M ${ex} ${ey} H ${cx}`;
  }
  const vy = cy - vertSign * r;
  return `M ${ex} ${ey} V ${vy} Q ${ex} ${cy} ${ex + dirX * r} ${cy} H ${cx}`;
}

export function connectorPathMid(enginePt: { x: number; y: number }, cardPt: { x: number; y: number }) {
  return `M ${enginePt.x} ${enginePt.y} H ${cardPt.x}`;
}

function pathForNode(node: MapNode) {
  const rect = engineRect();
  const { w } = ENGINE;

  if (node.slot === 'mid') {
    const enginePt =
      node.side === 'left'
        ? { x: rect.left, y: rect.cy }
        : { x: rect.right, y: rect.cy };
    const cardPt = cardEdgePoint(
      node.x,
      node.y,
      enginePt.x,
      enginePt.y,
      NODE_CARD.halfW,
      NODE_CARD.halfH,
    );
    return {
      d: connectorPathMid(enginePt, cardPt),
      enginePt,
      cardPt,
    };
  }

  const enginePt = {
    x: node.side === 'left' ? rect.cx - w * 0.14 : rect.cx + w * 0.14,
    y: node.slot === 'top' ? rect.top : rect.bottom,
  };
  const cardPt = cardEdgePoint(
    node.x,
    node.y,
    enginePt.x,
    enginePt.y,
    NODE_CARD.halfW,
    NODE_CARD.halfH,
  );
  return {
    d: elbowPathVerticalFirst(enginePt, cardPt),
    enginePt,
    cardPt,
  };
}

function BrandLogo({
  src,
  alt,
  label,
  scale = 1,
}: {
  src: string;
  alt: string;
  label: string;
  scale?: number;
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
      className="max-h-[80%] w-auto max-w-[80%] object-contain object-center"
      style={scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: 'center' } : undefined}
      loading="lazy"
      decoding="async"
      onError={onError}
    />
  );
}

export function IntegrationHubMap({
  pathRefs,
  nodeRefs,
  engineRef,
}: {
  pathRefs: MutableRefObject<(SVGPathElement | null)[]>;
  nodeRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  engineRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const patternId = 'integration-dot-grid-ref';

  return (
    <div className="relative mx-auto aspect-[680/520] w-full max-w-[860px] min-h-[540px] sm:min-h-[400px]">
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
              <circle cx={enginePt.x} cy={enginePt.y} r="3" fill="#a8a8a1" />
              <circle cx={cardPt.x} cy={cardPt.y} r="3" fill="#a8a8a1" />
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
        <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0a0a0a] px-[10%] ">
          <img
            src="/images/etechlogix-logo.png"
            alt="eTechLogix"
            className="h-auto w-[70%] max-w-[180px] object-contain"
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
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-neutral-200/80 bg-white px-[8%] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <BrandLogo
                src={node.logoSrc}
                alt={`${node.label} logo`}
                label={node.label}
                scale={node.logoScale}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
