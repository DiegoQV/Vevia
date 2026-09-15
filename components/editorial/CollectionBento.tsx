'use client';

import React, { useState } from 'react';
import { CATALOG } from '@/components/cinematic/CinematicHero';
import { useCart } from '@/lib/store/useCart';
import { BagProduct } from '@/types/shop';
import { ShoppingBag, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function CollectionBento() {
  const { addItem, openCart } = useCart();
  const [activePillId, setActivePillId] = useState<string | null>(null);

  const handleSelectProduct = (product: BagProduct) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="relative w-full py-[clamp(80px,12vh,140px)] px-[5vw] bg-[#0b0c0e] text-[#e8e2d9] border-t border-white/[0.07]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#e8e2d9]/60 font-semibold mb-3 block">
            01 / Colección Permanente
          </span>
          <h2 className="text-[clamp(36px,5vw,68px)] font-medium leading-[0.95] tracking-[-0.04em] text-white">
            Objetos de Crochet <br />
            <span className="font-light italic text-[#e8e2d9]/80">& Arquitectura Textil</span>
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base font-light text-[#e8e2d9]/70 leading-relaxed">
          Cada diseño responde a un estudio geométrico de tensión. Hilados peinados de alta tenacidad que conservan su volumen indefinidamente sin vencerse con el peso.
        </p>
      </div>

      {/* Editorial Bento Grid: Proporciones 3:4 Perfectas para Modelo y Cartera */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* TARJETA 01: Plisada Bordeaux */}
        <div className="group rounded-[32px] luxury-glass luxury-glass-interactive p-4 sm:p-5 flex flex-col justify-between transition-all duration-500">
          {/* Contenedor de Imagen en proporción 3:4 con encuadre superior */}
          <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900/40 border border-white/[0.08]">
            <img
              src="/images/poster_bordeaux.jpg"
              alt={CATALOG.bordeaux.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Badges superiores flotantes */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-white/90 backdrop-blur-md">
                Edición Limitada
              </span>
              <span className="luxury-glass px-3 py-1.5 rounded-full text-xs font-mono text-white/90 backdrop-blur-md">
                ${CATALOG.bordeaux.price} {CATALOG.bordeaux.currency}
              </span>
            </div>
          </div>

          {/* Información y Acción debajo de la imagen (Sin tapar la cartera) */}
          <div className="pt-5 pb-2 px-2 flex flex-col justify-between flex-1">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {CATALOG.bordeaux.name}
                </h3>
                <span className="text-[11px] text-[#e8e2d9]/50 font-mono">
                  {CATALOG.bordeaux.details.craftTime}
                </span>
              </div>
              <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
                {CATALOG.bordeaux.subtitle} · {CATALOG.bordeaux.details.material}
              </p>
            </div>

            <button
              onClick={() => handleSelectProduct(CATALOG.bordeaux)}
              className="w-full py-3 px-4 rounded-full luxury-glass border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Añadir a la Bolsa</span>
            </button>
          </div>
        </div>

        {/* TARJETA 02: Mini Crossbody Noir */}
        <div className="group rounded-[32px] luxury-glass luxury-glass-interactive p-4 sm:p-5 flex flex-col justify-between transition-all duration-500">
          <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900/40 border border-white/[0.08]">
            <img
              src="/images/bag_noir.png"
              alt={CATALOG.noir.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-white/90 backdrop-blur-md">
                Crossbody
              </span>
              <span className="luxury-glass px-3 py-1.5 rounded-full text-xs font-mono text-white/90 backdrop-blur-md">
                ${CATALOG.noir.price} {CATALOG.noir.currency}
              </span>
            </div>
          </div>

          <div className="pt-5 pb-2 px-2 flex flex-col justify-between flex-1">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {CATALOG.noir.name}
                </h3>
                <span className="text-[11px] text-[#e8e2d9]/50 font-mono">
                  {CATALOG.noir.details.craftTime}
                </span>
              </div>
              <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
                {CATALOG.noir.details.technique} · {CATALOG.noir.details.hardware}
              </p>
            </div>

            <button
              onClick={() => handleSelectProduct(CATALOG.noir)}
              className="w-full py-3 px-4 rounded-full luxury-glass border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Añadir a la Bolsa</span>
            </button>
          </div>
        </div>

        {/* CELDA 03: Macro Textura ("El Punto: Cero Nudos, 100% Tensión Manual") */}
        <div className="rounded-[32px] luxury-glass p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/90 border border-white/10">
          {/* Fondo de macro textura de crochet con iluminación dramática */}
          <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden border border-white/10 shadow-inner">
            <img
              src="/images/texture_macro.png"
              alt="Detalle macro del tejido de crochet artesanal"
              className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-amber-200 backdrop-blur-md">
                Macro Textura
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold mb-1 block">
                Manifiesto Técnico
              </span>
              <h4 className="text-xl sm:text-2xl font-light tracking-tight text-white leading-snug">
                “Cero Nudos. <br />
                <span className="italic font-normal text-amber-200">100% Tensión Manual.”</span>
              </h4>
            </div>
          </div>

          <div className="pt-5 pb-2 px-2 space-y-3">
            <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
              Sin forros rígidos de cartón ni químicos de endurecimiento. La firmeza dimensional proviene exclusivamente del cálculo de puntada y la torsión del hilado.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-200/90 pt-1 border-t border-white/[0.08]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garantía de memoria elástica de por vida</span>
            </div>
          </div>
        </div>

        {/* TARJETA 04: Milano Ivory */}
        <div className="group rounded-[32px] luxury-glass luxury-glass-interactive p-4 sm:p-5 flex flex-col justify-between transition-all duration-500">
          <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900/40 border border-white/[0.08]">
            <img
              src="/images/bag_white.png"
              alt={CATALOG.white.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-white/90 backdrop-blur-md">
                Estructura Rígida
              </span>
              <span className="luxury-glass px-3 py-1.5 rounded-full text-xs font-mono text-white/90 backdrop-blur-md">
                ${CATALOG.white.price} {CATALOG.white.currency}
              </span>
            </div>
          </div>

          <div className="pt-5 pb-2 px-2 flex flex-col justify-between flex-1">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {CATALOG.white.name}
                </h3>
                <span className="text-[11px] text-[#e8e2d9]/50 font-mono">
                  {CATALOG.white.details.craftTime}
                </span>
              </div>
              <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
                {CATALOG.white.subtitle} · {CATALOG.white.details.material}
              </p>
            </div>

            <button
              onClick={() => handleSelectProduct(CATALOG.white)}
              className="w-full py-3 px-4 rounded-full luxury-glass border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Añadir a la Bolsa</span>
            </button>
          </div>
        </div>

        {/* TARJETA 05: Estructurada Wine */}
        <div className="group rounded-[32px] luxury-glass luxury-glass-interactive p-4 sm:p-5 flex flex-col justify-between transition-all duration-500">
          <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900/40 border border-white/[0.08]">
            <img
              src="/images/bag_structured.png"
              alt={CATALOG.structured.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-white/90 backdrop-blur-md">
                Doble Asa
              </span>
              <span className="luxury-glass px-3 py-1.5 rounded-full text-xs font-mono text-white/90 backdrop-blur-md">
                ${CATALOG.structured.price} {CATALOG.structured.currency}
              </span>
            </div>
          </div>

          <div className="pt-5 pb-2 px-2 flex flex-col justify-between flex-1">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {CATALOG.structured.name}
                </h3>
                <span className="text-[11px] text-[#e8e2d9]/50 font-mono">
                  {CATALOG.structured.details.craftTime}
                </span>
              </div>
              <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
                {CATALOG.structured.subtitle} · {CATALOG.structured.details.material}
              </p>
            </div>

            <button
              onClick={() => handleSelectProduct(CATALOG.structured)}
              className="w-full py-3 px-4 rounded-full luxury-glass border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Añadir a la Bolsa</span>
            </button>
          </div>
        </div>

        {/* TARJETA 06: Compromiso de Atelier (Cierra la cuadrícula de 3 columnas de manera impecable) */}
        <div className="rounded-[32px] luxury-glass p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-[#07080a] border border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#e8e2d9]/60 font-semibold mb-4 block">
              Sello de Autenticidad
            </span>
            <h4 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-snug mb-3">
              Cada cartera lleva el <br />
              <span className="italic font-medium text-amber-200">corazón dorado VEVIVA</span>
            </h4>
            <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
              Fundido en latón macizo y pulido a mano. Graba el número de serie de tu pieza y certifica la autoría artesanal única de su creadora.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-2 text-xs text-[#e8e2d9]/70 font-light">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Funda de conservación en lino natural incluida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Certificado de origen y trazabilidad de hilado</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
