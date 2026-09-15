'use client';

import React from 'react';
import { CATALOG } from '@/components/cinematic/CinematicHero';
import { useCart } from '@/lib/store/useCart';
import { BagProduct } from '@/types/shop';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function CollectionEditorial() {
  const { addItem, openCart } = useCart();

  const handleSelectProduct = (product: BagProduct) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="relative w-full py-28 md:py-36 px-[5vw] bg-[#F7F5F0] text-[#1a1816] border-t border-[#e8e3da]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
        <div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8a847d] font-medium mb-3 block">
            Serie 01 · Catálogo de Autor
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#121316] leading-[0.95]">
            Esculturas Portables <br />
            <span className="font-editorial italic font-normal text-[#4a4744]">
              en crochet contemporáneo
            </span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-xs md:text-sm font-light text-[#5c5751] leading-relaxed">
            Rechazamos la uniformidad industrial. Cuatro siluetas construidas mediante lazadas calculadas, diseñadas para sostener su arquitectura sin vencerse con el paso de los años.
          </p>
        </div>
      </div>

      {/* Row 1: The First Pair (Plisada & Mini Noir) with Generous Whitespace */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
        {/* Product 01: Plisada Bordeaux */}
        <div className="group flex flex-col">
          {/* Framed Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#ebe7e0] border border-[#e4dfd6] shadow-[0_12px_36px_rgba(0,0,0,0.06)] mb-6">
            <img
              src="/images/poster_bordeaux.jpg"
              alt={CATALOG.bordeaux.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
            {/* Minimalist Floating Quick Buy Button on Hover */}
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
              <button
                onClick={() => handleSelectProduct(CATALOG.bordeaux)}
                className="px-5 py-2.5 rounded-full bg-[#121316] hover:bg-black text-[#F7F5F0] text-[12px] uppercase tracking-wider font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Añadir a la Bolsa</span>
              </button>
            </div>
          </div>

          {/* Discreet Luxury Typography Below Image */}
          <div className="flex items-baseline justify-between pt-2 border-b border-[#e4dfd6] pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a847d] block mb-1 font-mono">
                Pieza N° 01 · Edición Limitada
              </span>
              <h3 className="text-2xl font-light text-[#121316] tracking-tight">
                {CATALOG.bordeaux.name}
              </h3>
            </div>
            <span className="text-base font-light text-[#121316] font-mono">
              ${CATALOG.bordeaux.price} {CATALOG.bordeaux.currency}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 text-[12px] text-[#6e6861] font-light">
            <span>{CATALOG.bordeaux.details.material}</span>
            <span className="font-mono text-[11px] text-[#8a847d]">{CATALOG.bordeaux.details.craftTime}</span>
          </div>
        </div>

        {/* Product 02: Mini Crossbody Noir (Offset for Editorial Rhythm) */}
        <div className="group flex flex-col md:mt-16">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#ebe7e0] border border-[#e4dfd6] shadow-[0_12px_36px_rgba(0,0,0,0.06)] mb-6">
            <img
              src="/images/bag_noir.png"
              alt={CATALOG.noir.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
              <button
                onClick={() => handleSelectProduct(CATALOG.noir)}
                className="px-5 py-2.5 rounded-full bg-[#121316] hover:bg-black text-[#F7F5F0] text-[12px] uppercase tracking-wider font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Añadir a la Bolsa</span>
              </button>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-2 border-b border-[#e4dfd6] pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a847d] block mb-1 font-mono">
                Pieza N° 02 · Crossbody
              </span>
              <h3 className="text-2xl font-light text-[#121316] tracking-tight">
                {CATALOG.noir.name}
              </h3>
            </div>
            <span className="text-base font-light text-[#121316] font-mono">
              ${CATALOG.noir.price} {CATALOG.noir.currency}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 text-[12px] text-[#6e6861] font-light">
            <span>{CATALOG.noir.details.technique}</span>
            <span className="font-mono text-[11px] text-[#8a847d]">{CATALOG.noir.details.craftTime}</span>
          </div>
        </div>
      </div>

      {/* Editorial Interlude: Macro Texture Manifesto (Artistic Break) */}
      <div className="max-w-7xl mx-auto my-28 md:my-36 py-16 md:py-24 border-y border-[#e2dcd3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] rounded-[2px] overflow-hidden border border-[#e2dcd3] shadow-md">
            <img
              src="/images/texture_macro.png"
              alt="Macro del punto de crochet de autor"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8a847d] font-mono block">
              Manifiesto de Tensión Manual
            </span>
            <blockquote className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] text-[#121316] italic">
              “Una puntada floja se deforma con el peso; una excesivamente tensa pierde su caída orgánica. Encontrar el equilibrio exacto toma años de disciplina.”
            </blockquote>
            <p className="text-xs md:text-sm font-light text-[#5c5751] max-w-xl leading-relaxed">
              Todas nuestras piezas se confeccionan sin aditivos químicos, aprestos ni entretelas sintéticas. La rigidez y el porte de cada cartera derivan enteramente de la densidad milimétrica del hilo peinado.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: The Second Pair (Milano Ivory & Estructurada Wine) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Product 03: Milano Ivory */}
        <div className="group flex flex-col">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#ebe7e0] border border-[#e4dfd6] shadow-[0_12px_36px_rgba(0,0,0,0.06)] mb-6">
            <img
              src="/images/bag_white.png"
              alt={CATALOG.white.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
              <button
                onClick={() => handleSelectProduct(CATALOG.white)}
                className="px-5 py-2.5 rounded-full bg-[#121316] hover:bg-black text-[#F7F5F0] text-[12px] uppercase tracking-wider font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Añadir a la Bolsa</span>
              </button>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-2 border-b border-[#e4dfd6] pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a847d] block mb-1 font-mono">
                Pieza N° 03 · Estructura Rígida
              </span>
              <h3 className="text-2xl font-light text-[#121316] tracking-tight">
                {CATALOG.white.name}
              </h3>
            </div>
            <span className="text-base font-light text-[#121316] font-mono">
              ${CATALOG.white.price} {CATALOG.white.currency}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 text-[12px] text-[#6e6861] font-light">
            <span>{CATALOG.white.details.material}</span>
            <span className="font-mono text-[11px] text-[#8a847d]">{CATALOG.white.details.craftTime}</span>
          </div>
        </div>

        {/* Product 04: Estructurada Wine */}
        <div className="group flex flex-col md:mt-16">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#ebe7e0] border border-[#e4dfd6] shadow-[0_12px_36px_rgba(0,0,0,0.06)] mb-6">
            <img
              src="/images/bag_structured.png"
              alt={CATALOG.structured.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
              <button
                onClick={() => handleSelectProduct(CATALOG.structured)}
                className="px-5 py-2.5 rounded-full bg-[#121316] hover:bg-black text-[#F7F5F0] text-[12px] uppercase tracking-wider font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Añadir a la Bolsa</span>
              </button>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-2 border-b border-[#e4dfd6] pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a847d] block mb-1 font-mono">
                Pieza N° 04 · Doble Asa
              </span>
              <h3 className="text-2xl font-light text-[#121316] tracking-tight">
                {CATALOG.structured.name}
              </h3>
            </div>
            <span className="text-base font-light text-[#121316] font-mono">
              ${CATALOG.structured.price} {CATALOG.structured.currency}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 text-[12px] text-[#6e6861] font-light">
            <span>{CATALOG.structured.details.technique}</span>
            <span className="font-mono text-[11px] text-[#8a847d]">{CATALOG.structured.details.craftTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
