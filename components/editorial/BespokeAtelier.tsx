'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Award } from 'lucide-react';

export default function BespokeAtelier() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  }, []);

  const handleWhatsAppBespoke = () => {
    const text = encodeURIComponent(
      '¡Hola Veviva Atelier! Me gustaría solicitar información sobre el servicio de piezas por encargo y personalización exclusiva de hilados y herrajes.'
    );
    return `https://wa.me/593900000000?text=${text}`;
  };

  return (
    <section className="relative w-full py-[clamp(80px,12vh,160px)] px-[5vw] bg-[#0b0c0e] text-[#e8e2d9] border-t border-white/[0.07]">
      {/* Dark Polished Glass Container with Reflective Rim Accent */}
      <div className="relative max-w-5xl mx-auto rounded-[40px] overflow-hidden luxury-glass p-8 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center shadow-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/80">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Kicker */}
        <div className="luxury-glass px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8">
          <Award className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-white/90">
            04 / Bespoke Atelier
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[clamp(34px,5.5vw,72px)] font-medium leading-[0.95] tracking-[-0.04em] text-white max-w-3xl mb-6">
          Tejidas una a una. <br />
          <span className="italic font-light text-[#e8e2d9]/85">Hechas para trascender.</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl text-sm md:text-base font-light text-[#e8e2d9]/70 leading-relaxed mb-10">
          Admitimos únicamente un número estricto de cupos por ciclo mensual. Esto asegura que la tensión del hilado, el montaje de herrajes y el acabado manual se ejecuten sin prisas industriales.
        </p>

        {/* Glass Capsule Action Button with Cursor Highlight */}
        <a
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          href={handleWhatsAppBespoke()}
          target="_blank"
          rel="noopener noreferrer"
          style={
            {
              '--btn-x': `${coords.x}%`,
              '--btn-y': `${coords.y}%`,
            } as React.CSSProperties
          }
          className="relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-medium tracking-tight text-white border border-white/30 backdrop-blur-xl transition-all duration-300 hover:border-white hover:scale-105 active:scale-95 cursor-pointer shadow-2xl overflow-hidden group"
        >
          {/* Reactive highlight pseudo-effect */}
          <span
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(80px circle at var(--btn-x, 50%) var(--btn-y, 50%), rgba(255,255,255,0.25), transparent 70%)`,
            }}
          />

          <MessageCircle className="w-5 h-5 text-emerald-400 relative z-10" />
          <span className="relative z-10">Solicitar Asesoría de Atelier</span>
          <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform relative z-10" />
        </a>

        {/* Small reassurance note */}
        <span className="text-[11px] text-[#e8e2d9]/40 font-light mt-4 block">
          Consulta personalizada sobre paleta de hilados, medidas y herrajes a medida.
        </span>
      </div>
    </section>
  );
}
