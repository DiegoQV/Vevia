'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function LuxeFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <div className="w-full select-none">
      {/* ========================================================================= */}
      {/* 01. SECCIÓN NOCTURNA: AVISOS PRIORITARIOS (CONCISO Y DIRECTO) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#08090c] text-[#e8e2d9] py-20 md:py-28 px-[5vw] border-t border-white/[0.08] overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            
            {/* Texto directo y conciso */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.05]">
                Avisos prioritarios antes de la apertura <br className="hidden sm:inline" />
                <span className="font-editorial italic font-normal text-[#e8e2d9]/85">
                  de cada ciclo de confección.
                </span>
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#a8a196] max-w-lg leading-relaxed">
                Acceso preferencial para la reserva de series limitadas y piezas únicas de taller.
              </p>
            </div>

            {/* Formulario minimalista de alta gama */}
            <div className="lg:col-span-5 pb-2">
              <form onSubmit={handleSubmit} className="relative flex items-center border-b border-white/25 pb-3 focus-within:border-white transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo electrónico"
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none font-light pr-28"
                />
                <button
                  type="submit"
                  aria-label="Unirse"
                  className="absolute right-0 pb-0.5 text-white hover:opacity-75 transition-opacity cursor-pointer flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold"
                >
                  {submitted ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5" /> Registrado
                    </span>
                  ) : (
                    <>
                      <span>Unirse</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. FOOTER CLARO ARCHIVÍSTICO: NAVEGACIÓN Y COLOFÓN */}
      {/* ========================================================================= */}
      <footer className="relative w-full bg-[#F6F4EE] text-[#121316] border-t border-[#e2ddd4] pt-16 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5vw]">

          {/* Maison Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-[#e2ddd4] text-[11px] font-mono text-[#78726a]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-[#121316] font-sans font-medium">
                VEVIVA · Maison de Crochet Contemporain
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <span>Taller Central: Lima, Perú</span>
              <span>Envíos Globales DHL</span>
              <span className="text-[#121316] font-medium">USD ($)</span>
            </div>
          </div>

          {/* 4 Architectural Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 text-xs text-[#6e6861] font-light border-b border-[#e2ddd4]">
            
            {/* Columna 1: Siluetas */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#121316]">
                Siluetas
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#siluetas" className="hover:text-[#121316] transition-colors">
                    Plisada Bordeaux
                  </a>
                </li>
                <li>
                  <a href="#siluetas" className="hover:text-[#121316] transition-colors">
                    Mini Crossbody Noir
                  </a>
                </li>
                <li>
                  <a href="#siluetas" className="hover:text-[#121316] transition-colors">
                    Milano Ivory
                  </a>
                </li>
                <li>
                  <a href="#siluetas" className="hover:text-[#121316] transition-colors">
                    Estructurada Wine
                  </a>
                </li>
                <li>
                  <a href="#atelier" className="hover:text-[#121316] font-medium text-[#121316] transition-colors flex items-center gap-1">
                    <span>Encargos Bespoke</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Savoir-Faire */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#121316]">
                Savoir-Faire
              </p>
              <ul className="space-y-2.5">
                <li>Algodón Puro Regenerado</li>
                <li>Tensión Manual Milimétrica</li>
                <li>Herrajes en Oro 18K</li>
                <li>Foliado y Serie de Archivo</li>
              </ul>
            </div>

            {/* Columna 3: Compromisos */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#121316]">
                Compromisos
              </p>
              <ul className="space-y-2.5">
                <li>Garantía Estructural Vitalicia</li>
                <li>Funda de Lino Orgánico</li>
                <li>Producción Limitada y Ética</li>
                <li>Servicio de Mantenimiento</li>
              </ul>
            </div>

            {/* Columna 4: Atelier Concierge */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#121316]">
                Concierge
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://wa.me/51900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#121316] font-medium hover:underline flex items-center gap-1.5"
                  >
                    <span>WhatsApp Atelier</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </li>
                <li>Lun – Vie / 10:00 – 18:00</li>
                <li>Prensa: <span className="font-mono text-[#121316]">atelier@veviva.com</span></li>
              </ul>
            </div>

          </div>

          {/* Monumental Sculptural Typography (Watermark VEVIVA) */}
          <div className="pt-10 pb-2 overflow-hidden flex justify-center items-center">
            <span className="text-[19vw] font-light tracking-[0.16em] text-[#e8e2d8] select-none pointer-events-none text-center leading-[0.75] translate-y-[8%] block font-sans">
              VEVIVA
            </span>
          </div>

          {/* Legal Bar / Colofón */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-[11px] text-[#8a847d] gap-4 border-t border-[#e2ddd4]">
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-[0.2em] text-[#121316] text-xs">VEVIVA</span>
              <span>© 2026 VEVIVA Atelier. Todos los derechos reservados.</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-mono text-[10px]">
              <a href="#" className="hover:text-[#121316] transition-colors">Términos</a>
              <a href="#" className="hover:text-[#121316] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#121316] transition-colors">Autenticidad</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
