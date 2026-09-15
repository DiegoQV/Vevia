'use client';

import React, { useState } from 'react';
import { Sparkles, Shield, Clock, Compass } from 'lucide-react';

interface Hotspot {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  tag: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    title: 'El Punto & Hilado Peinado',
    subtitle: 'Tensión milimétrica continua',
    description:
      'Hilado de algodón 100% torsal peinado. Cada lazada se teje con calibrador manual de tensión, garantizando que el bolso mantenga su arquitectura intacta sin deformarse con el peso cotidiano.',
    x: 48,
    y: 65,
    tag: 'Torsal Premium',
  },
  {
    id: 2,
    title: 'El Herraje & Cierre Giratorio',
    subtitle: 'Aleación maciza anti-desgaste',
    description:
      'Herrajes de precisión en aleación de zinc y latón con triple baño galvánico de oro 18k y laca protectora electroforética. Cero oxidación, cero pérdida de brillo por fricción.',
    x: 44,
    y: 78,
    tag: 'Baño 18K',
  },
  {
    id: 3,
    title: 'La Correa & Interior Reforzado',
    subtitle: 'Ergonomía de soporte oculto',
    description:
      'Correa ancha tejida en punto tubular espiga que distribuye la carga sobre el hombro. Anclajes con argollas tipo mosquetón de apertura suave y remate reforzado con hilo encerado.',
    x: 52,
    y: 35,
    tag: 'Ergonomía',
  },
];

export default function AnatomySection() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section className="relative w-full py-[clamp(80px,12vh,160px)] px-[5vw] bg-[#0b0c0e] text-[#e8e2d9] border-t border-white/[0.07]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Editorial Info & Metrics */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <div>
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#e8e2d9]/60 font-semibold mb-3 block">
              02 / Savoir-Faire & Anatomía
            </span>
            <h2 className="text-[clamp(34px,4.5vw,60px)] font-medium leading-[0.95] tracking-[-0.04em] text-white">
              Anatomía de una <br />
              <span className="italic font-light text-[#e8e2d9]/80">pieza VEVIVA</span>
            </h2>
          </div>

          <p className="text-sm md:text-base font-light text-[#e8e2d9]/75 leading-relaxed">
            Rechazamos la producción acelerada. Una cartera VEVIVA no es un simple tejido decorativo; es una estructura de ingeniería manual donde cada unión soporta hasta 15 kg de tracción sin distorsionar el diseño original.
          </p>

          {/* Author Metrics Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>32h</span>
              </div>
              <p className="text-xs font-medium text-white">Confección</p>
              <p className="text-[11px] text-[#e8e2d9]/50 font-light">Tensión manual</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>100%</span>
              </div>
              <p className="text-xs font-medium text-white">Regenerado</p>
              <p className="text-[11px] text-[#e8e2d9]/50 font-light">Algodón puro</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>18K</span>
              </div>
              <p className="text-xs font-medium text-white">Protección</p>
              <p className="text-[11px] text-[#e8e2d9]/50 font-light">Baño electroforético</p>
            </div>
          </div>

          {/* Hotspot Indicator Guide */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#e8e2d9]/50 font-light">
            <Compass className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Haz clic en los puntos interactivos del modelo para inspeccionar los detalles.</span>
          </div>
        </div>

        {/* Right Column: Interactive Image Viewer with Hotspots */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] max-h-[720px] rounded-[36px] overflow-hidden luxury-glass border border-white/10 group shadow-2xl">
            {/* Visual Base (Model with White Bag in Profile) */}
            <img
              src="/images/bag_white.png"
              alt="Inspección anatómica de cartera de crochet Veviva"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            {/* Pulsating Hotspot Pins */}
            {HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin cursor-pointer focus-visible:outline-none"
                  aria-label={`Ver detalle: ${spot.title}`}
                >
                  {/* Pulse ring */}
                  <span
                    className={`absolute inset-0 rounded-full bg-white/40 animate-ping duration-1000 ${
                      isSelected ? 'opacity-100' : 'opacity-40'
                    }`}
                  />
                  {/* Button core */}
                  <span
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-md transition-all duration-300 ${
                      isSelected
                        ? 'bg-white text-black scale-110 shadow-lg'
                        : 'bg-black/60 border border-white/40 text-white hover:scale-110 hover:border-white'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold">{spot.id}</span>
                  </span>
                </button>
              );
            })}

            {/* Floating Glass Micro-Ficha */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="luxury-glass p-5 md:p-6 rounded-[24px] backdrop-blur-2xl border border-white/15 animate-in fade-in slide-in-from-bottom-3 duration-500 shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
                      {activeHotspot.tag}
                    </span>
                    <span className="text-xs text-white/50">
                      Punto 0{activeHotspot.id} de 03
                    </span>
                  </div>
                  <span className="text-xs font-light text-white/40 italic">
                    Inspección activa
                  </span>
                </div>

                <h4 className="text-lg md:text-xl font-medium tracking-tight text-white mb-1">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs md:text-sm font-light text-[#e8e2d9]/80 leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
