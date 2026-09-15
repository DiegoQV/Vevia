'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Clock, ShieldCheck, Gem } from 'lucide-react';

interface Swatch {
  name: string;
  code: string;
  borderLight?: boolean;
}

const SWATCHES: Swatch[] = [
  { name: 'Bordeaux Impérial', code: '#561925' },
  { name: 'Noir Profond', code: '#141416' },
  { name: 'Ivoire Crème', code: '#ede6db', borderLight: true },
  { name: 'Vert Sauge', code: '#8b9c87' },
  { name: 'Terracotta Brûlée', code: '#9e533d' },
];

const DROPS = [
  { id: 'mano', label: 'Mano / Asa Corta', length: '38–42 cm' },
  { id: 'hombro', label: 'Hombro Escultural', length: '68–72 cm' },
  { id: 'crossbody', label: 'Bandolera Cruzada', length: '105–110 cm' },
];

export default function AtelierBespoke() {
  const [selectedColor, setSelectedColor] = useState<Swatch>(SWATCHES[0]);
  const [selectedDrop, setSelectedDrop] = useState(DROPS[1]);
  const [monogram, setMonogram] = useState('V · M');

  const handleWhatsAppBespoke = () => {
    const text = encodeURIComponent(
      `¡Hola VEVIVA Atelier! Deseo iniciar la consulta para un encargo privado Bespoke:\n` +
      `• Hilado seleccionado: ${selectedColor.name}\n` +
      `• Caída de correa: ${selectedDrop.label} (${selectedDrop.length})\n` +
      `• Grabado en corazón: ${monogram || 'Por definir'}\n\n` +
      `¿Tienen disponibilidad de cupo para el ciclo actual? Muchas gracias.`
    );
    return `https://wa.me/51900000000?text=${text}`;
  };

  return (
    <section
      id="atelier"
      className="relative w-full py-28 md:py-40 px-[5vw] bg-[#08090c] text-[#e8e2d9] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Intimate Luxury Radial Amber Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/[0.06] via-amber-900/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[0.98] mb-6">
            Piezas concebidas <br />
            <span className="font-editorial italic font-normal text-[#e8e2d9]/85">
              para trascender generaciones.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-light text-[#e8e2d9]/65 leading-relaxed max-w-xl mx-auto">
            Cada encargo privado nace de un diálogo directo con el atelier. Un proceso artesanal donde seleccionas hilados de archivo, ajustas la caída a tu estatura y sellas tu identidad sobre el herraje.
          </p>
        </div>

        {/* The 3 Bespoke Pillars: Interactive Luxury Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20 items-stretch">
          {/* Pilar I: Hilados de Archivo */}
          <div className="p-7 md:p-8 rounded-[12px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#e8e2d9]/40 font-mono block mb-2">
                01 / Cromática
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-2">
                Hilado de Archivo
              </h3>
              <p className="text-xs font-light text-[#e8e2d9]/60 leading-relaxed mb-6">
                Elige entre nuestras fórmulas de teñido artesanal y tonos reservados de archivo.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                {SWATCHES.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedColor(s)}
                    title={s.name}
                    style={{ backgroundColor: s.code }}
                    className={`w-8 h-8 rounded-full transition-all duration-200 cursor-pointer relative flex items-center justify-center ${
                      selectedColor.name === s.name
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-[#08090c] scale-110'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    } ${s.borderLight ? 'border border-black/20' : ''}`}
                  >
                    {selectedColor.name === s.name && (
                      <Check className={`w-3.5 h-3.5 ${s.borderLight ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-[11px] font-mono text-amber-200/85">
                Tono: <span className="text-white">{selectedColor.name}</span>
              </p>
            </div>
          </div>

          {/* Pilar II: Caída & Ergonomía */}
          <div className="p-7 md:p-8 rounded-[12px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#e8e2d9]/40 font-mono block mb-2">
                02 / Ergonomía
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-2">
                Caída a Medida
              </h3>
              <p className="text-xs font-light text-[#e8e2d9]/60 leading-relaxed mb-6">
                Calibramos la longitud de la correa punto a punto según tu estatura y modo de porte.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.06]">
              {DROPS.map((drop) => {
                const isSelected = selectedDrop.id === drop.id;
                return (
                  <button
                    key={drop.id}
                    onClick={() => setSelectedDrop(drop)}
                    className={`w-full py-2 px-3 rounded-[6px] text-left text-xs font-light flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-[#e8e2d9]/60 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{drop.label}</span>
                    <span className="font-mono text-[10px] text-white/50">{drop.length}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pilar III: Grabado en Joyería */}
          <div className="p-7 md:p-8 rounded-[12px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#e8e2d9]/40 font-mono block mb-2">
                03 / Sello de Autor
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-2">
                Grabado en Oro 18K
              </h3>
              <p className="text-xs font-light text-[#e8e2d9]/60 leading-relaxed mb-6">
                Inmortaliza tus iniciales o una fecha grabadas en bajo relieve sobre el corazón VEVIVA.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {/* Monogram Live Visual Badge */}
              <div className="flex items-center justify-center p-3 rounded-[8px] bg-gradient-to-br from-amber-500/10 via-amber-900/5 to-transparent border border-amber-400/20">
                <div className="text-center">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-amber-200/60 font-mono block mb-0.5">
                    Previsualización Herraje
                  </span>
                  <span className="font-editorial text-xl italic font-normal text-amber-200 tracking-wider">
                    ♥ {monogram || '—'}
                  </span>
                </div>
              </div>

              <input
                type="text"
                maxLength={7}
                value={monogram}
                onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                placeholder="Ej. A · M"
                className="w-full bg-white/[0.05] border border-white/15 focus:border-white/40 rounded-[6px] py-1.5 px-3 text-xs text-center font-mono text-white tracking-widest outline-none transition-colors placeholder:text-white/20"
              />
            </div>
          </div>
        </div>

        {/* Grand Finale Action: Luxury WhatsApp Concierge */}
        <div className="text-center flex flex-col items-center max-w-xl mx-auto">
          <a
            href={handleWhatsAppBespoke()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-[0_12px_40px_rgba(255,255,255,0.12)] active:scale-95 group cursor-pointer mb-8"
          >
            <span>Iniciar Encargo Privado por WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Luxury Guarantees Triad */}
          <div className="grid grid-cols-3 gap-4 text-center w-full pt-8 border-t border-white/[0.08]">
            <div className="space-y-1">
              <Clock className="w-4 h-4 text-amber-200/80 mx-auto mb-1.5" />
              <p className="text-[11px] font-mono text-white/90">3 a 5 Semanas</p>
              <span className="text-[10px] text-white/40 block">Tiempo de confección</span>
            </div>
            <div className="space-y-1">
              <Gem className="w-4 h-4 text-amber-200/80 mx-auto mb-1.5" />
              <p className="text-[11px] font-mono text-white/90">Pieza Única</p>
              <span className="text-[10px] text-white/40 block">Certificado y foliado</span>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-4 h-4 text-amber-200/80 mx-auto mb-1.5" />
              <p className="text-[11px] font-mono text-white/90">De Por Vida</p>
              <span className="text-[10px] text-white/40 block">Garantía estructural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
