'use client';

import React, { useState } from 'react';

interface CraftChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  narrative: string;
  metric: string;
  metricLabel: string;
  image: string;
}

const CHAPTERS: CraftChapter[] = [
  {
    id: 'hilado',
    number: '01',
    title: 'La Fibra Peinada',
    subtitle: 'Algodón puro de alta torsión',
    narrative: 'Hebras largas libres de impurezas. Cero fibras sintéticas, tacto sedoso y estructura indeformable.',
    metric: '100%',
    metricLabel: 'Algodón Puro Peinado',
    image: '/images/texture_macro.png',
  },
  {
    id: 'lazada',
    number: '02',
    title: 'La Lazada Escultórica',
    subtitle: 'Memoria muscular continua',
    narrative: 'Una sola maestra artesana teje la totalidad de la pieza a mano para asegurar una tensión milimétrica punto a punto.',
    metric: '32h',
    metricLabel: 'Labor Manual Continua',
    image: '/images/craft_hands_weaving.jpg',
  },
  {
    id: 'herrajes',
    number: '03',
    title: 'Herrajes Galvánicos',
    subtitle: 'Baño de oro 18K sellado',
    narrative: 'Broches macizos y corazón VEVIVA con triple recubrimiento electroforético para preservar su lustre de por vida.',
    metric: '18K',
    metricLabel: 'Triple Baño Galvánico',
    image: '/images/craft_gold_hardware.jpg',
  },
];

export default function SavoirFaire() {
  const [activeChapter, setActiveChapter] = useState<CraftChapter>(CHAPTERS[0]);

  return (
    <section className="relative w-full py-28 md:py-36 px-[5vw] bg-[#F2EFE9] text-[#1a1816] border-t border-[#e2ddd4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Direct, elegant, no redundant tags */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8a847d] font-medium mb-3 block">
              Savoir-Faire & Trazabilidad
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#121316] leading-[0.95]">
              El tiempo como <br />
              <span className="font-editorial italic font-normal text-[#4a4744]">
                materia prima
              </span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-xs md:text-sm font-light text-[#5c5751] leading-relaxed">
              Objetos concebidos bajo el ritmo de la pausa artesanal: sin moldes sintéticos, sin réplicas industriales.
            </p>
          </div>
        </div>

        {/* 2-Column Luxury Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Interactive Craft Chapters (Clean & Punchy) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="divide-y divide-[#e0dad0] border-y border-[#e0dad0]">
              {CHAPTERS.map((ch) => {
                const isActive = activeChapter.id === ch.id;
                return (
                  <div
                    key={ch.id}
                    onClick={() => setActiveChapter(ch)}
                    className={`py-6 sm:py-7 cursor-pointer transition-all duration-300 rounded-[8px] ${
                      isActive
                        ? 'bg-[#eae5dd]/70 px-5 -mx-5 shadow-sm'
                        : 'opacity-50 hover:opacity-85 hover:px-2 transition-all'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#8a847d]">
                          {ch.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-light text-[#121316] tracking-tight">
                          {ch.title}
                        </h3>
                      </div>
                      <span className={`font-mono text-sm px-3 py-1 rounded-full transition-colors ${
                        isActive
                          ? 'bg-[#121316] text-[#F2EFE9] font-medium'
                          : 'bg-[#ded8ce] text-[#4a4744]'
                      }`}>
                        {ch.metric}
                      </span>
                    </div>

                    {isActive && (
                      <div className="pl-8 pt-3 space-y-2 animate-in fade-in duration-300">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a847d] font-mono">
                          {ch.subtitle}
                        </p>
                        <p className="text-xs md:text-sm font-light text-[#5c5751] leading-relaxed max-w-md">
                          {ch.narrative}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Stage (Authentic Atelier Macro Photography) */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="relative w-full aspect-[4/5] rounded-[6px] overflow-hidden bg-[#ded8ce] border border-[#e0dad0] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                key={activeChapter.id}
                src={activeChapter.image}
                alt={activeChapter.title}
                className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-700"
              />

              {/* Minimalist Glass Card Footnote */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-[12px] bg-[#121316]/85 backdrop-blur-md border border-white/10 text-white shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 block font-mono">
                    Capítulo {activeChapter.number} · {activeChapter.title}
                  </span>
                  <p className="text-sm font-light text-white">
                    {activeChapter.subtitle}
                  </p>
                </div>
                <div className="text-right font-mono text-[10px] uppercase tracking-wider text-amber-200/90 font-medium pl-3 border-l border-white/15">
                  <span>{activeChapter.metricLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
