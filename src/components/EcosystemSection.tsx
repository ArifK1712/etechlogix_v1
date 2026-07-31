import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';
import { Server } from 'lucide-react';

interface Node {
  id: string;
  name: string;
  protocol: string;
  x: string;
  y: string;
}

const nodes: Node[] = [
  { id: 'salesforce', name: 'Salesforce', protocol: 'REST API', x: '10%', y: '20%' },
  { id: 'mulesoft', name: 'MuleSoft', protocol: 'GraphQL', x: '80%', y: '15%' },
  { id: 'descartes', name: 'Descartes', protocol: 'EDI', x: '15%', y: '50%' },
  { id: 'avalara', name: 'Avalara', protocol: 'REST API', x: '85%', y: '45%' },
  { id: 'erp', name: 'ERP Systems', protocol: 'SOAP', x: '25%', y: '80%' },
  { id: 'crm', name: 'CRM Platforms', protocol: 'Webhook', x: '75%', y: '80%' },
  { id: 'payment', name: 'Payment Gateways', protocol: 'gRPC', x: '50%', y: '10%' },
  { id: 'custom', name: 'Custom APIs', protocol: 'REST API', x: '50%', y: '85%' },
];

export default function EcosystemSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useGSAP(() => {
    // Pulse animation for center node
    gsap.to('.core-pulse', {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
      stagger: 0.5
    });
    
    // Float animation for nodes
    gsap.to('.floating-node', {
      y: 'random(-10, 10)',
      x: 'random(-10, 10)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Reveal elements
    gsap.from('.eco-reveal', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f7f7f5] text-[#000000] py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="eco-reveal text-center flex flex-col items-center mb-16">
          <p className="text-[#df012a] text-xs font-semibold uppercase tracking-widest mb-3">SYSTEM INTEGRATIONS</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl max-w-4xl text-center mb-6">
            Your technology does not operate in isolation. Neither should your software partner.
          </h2>
          <p className="text-gray-600 max-w-2xl text-center text-lg">
            We build resilient middleware, custom adapters, and event-driven architectures that sync data across legacy and modern platforms.
          </p>
        </div>

        {/* Interactive Architecture Ecosystem Map */}
        <div className="relative w-full h-[600px] md:h-[700px] bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden eco-reveal">
          
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id || hoveredNode === 'core';
              const opacity = hoveredNode ? (isHovered ? 1 : 0.1) : 0.3;
              const strokeColor = isHovered ? '#df012a' : '#d1d5db';
              
              return (
                <g key={`line-${node.id}`}>
                  {/* Base Line */}
                  <line 
                    x1="50%" y1="50%" 
                    x2={node.x} y2={node.y} 
                    stroke={strokeColor} 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    opacity={opacity}
                    className="transition-all duration-300"
                  />
                  {/* Animated Data Pulse */}
                  {isHovered && (
                    <circle cx="0" cy="0" r="3" fill="#df012a">
                      <animateMotion 
                        path={`M 50%,50% L ${node.x} ${node.y}`}
                        dur="1.5s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  {/* Fallback CSS animation for lines */}
                  <line 
                    x1="50%" y1="50%" 
                    x2={node.x} y2={node.y} 
                    stroke="#df012a" 
                    strokeWidth="3" 
                    opacity={isHovered ? 0.6 : 0}
                    className="transition-all duration-300 stroke-dash-flow"
                    style={{ strokeDasharray: '10 20', animation: 'dash 1s linear infinite' }}
                  />
                </g>
              );
            })}
          </svg>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash {
              to {
                stroke-dashoffset: -30;
              }
            }
            .stroke-dash-flow {
              animation: dash 1s linear infinite;
            }
          `}} />

          {/* Center Hub */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
            onMouseEnter={() => setHoveredNode('core')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#df012a] core-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#df012a] core-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#df012a] core-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="bg-[#111111] text-white w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-red-900/20 border border-red-500/30 relative z-10 transition-transform duration-300 hover:scale-105">
                <Server className="w-8 h-8 text-[#df012a] mb-2" />
                <span className="font-bold text-center text-sm md:text-base leading-tight">eTechLogix<br/>Core</span>
              </div>
            </div>
          </div>

          {/* Floating Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isFaded = hoveredNode && hoveredNode !== node.id && hoveredNode !== 'core';
            
            return (
              <div 
                key={node.id}
                className={`floating-node absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${isFaded ? 'opacity-30 scale-95' : 'opacity-100'} ${isHovered ? 'scale-110' : ''}`}
                style={{ left: node.x, top: node.y }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`bg-white border ${isHovered ? 'border-[#df012a] shadow-lg shadow-red-900/10' : 'border-gray-200 shadow-sm'} px-4 py-3 rounded-xl flex flex-col items-center gap-1 transition-colors duration-300`}>
                  <span className="font-semibold text-gray-900 whitespace-nowrap text-sm md:text-base">{node.name}</span>
                  <div className={`text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-gray-100 ${isHovered ? 'text-[#df012a] bg-red-50' : 'text-gray-500'}`}>
                    {node.protocol}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
