'use client';

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';

interface Look {
  id: string;
  tag: string;
  title: string;
  styling: string;
  dimensions: string;
  image: string;
}

const LOOKS: Look[] = [
  {
    id: 'look-1',
    tag: 'Look 01 / Diurno Casual',
    title: 'Estructurada Wine sobre Sastrería',
    styling: 'Pantalón pinzado negro, sweater cuello cisne crudo y sandalias minimalistas.',
    dimensions: 'Escala 24cm x 18cm · Cruce diagonal con cadena',
    image: '/images/look_editorial_1.png',
  },
  {
    id: 'look-2',
    tag: 'Look 02 / Nocturno Urbano',
    title: 'Mini Noir con Correa Gruesa',
    styling: 'Top sin mangas en punto canalé negro y falda geométrica texturizada.',
    dimensions: 'Escala 14cm x 20cm · Celular, llaves y tarjetero',
    image: '/images/look_editorial_2.png',
  },
  {
    id: 'look-3',
    tag: 'Look 03 / Estudio & Atelier',
    title: 'Plisada Bordeaux Bajo el Brazo',
    styling: 'Crop top minimal blanco y falda estampada de tiro alto. Cadena recogida.',
    dimensions: 'Escala 26cm x 22cm · Volumen drapeado adaptable',
    image: '/images/look_editorial_3.png',
  },
  {
    id: 'look-4',
    tag: 'Look 04 / Lino & Verano',
    title: 'Milano Ivory en Cruzado',
    styling: 'Blusa en lino verde salvia y pantalón crudo de corte amplio.',
    dimensions: 'Escala 22cm x 19cm · Correa ergonómica de punto espiga',
    image: '/images/bag_white.png',
  },
];

export default function LookbookCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-[clamp(80px,12vh,160px)] bg-[#0b0c0e] text-[#e8e2d9] border-t border-white/[0.07] overflow-hidden">
      {/* Header with Navigation Controls */}
      <div className="px-[5vw] flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#e8e2d9]/60 font-semibold mb-3 block">
            03 / Proporción & Estilismo
          </span>
          <h2 className="text-[clamp(36px,5vw,68px)] font-medium leading-[0.95] tracking-[-0.04em] text-white">
            En Movimiento <br />
            <span className="italic font-light text-[#e8e2d9]/80">& Vida Real</span>
          </h2>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full luxury-glass flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all cursor-pointer active:scale-90"
            aria-label="Anterior look"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full luxury-glass flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all cursor-pointer active:scale-90"
            aria-label="Siguiente look"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-[5vw] scroll-smooth snap-x snap-mandatory pb-6"
      >
        {LOOKS.map((look) => (
          <div
            key={look.id}
            className="snap-start flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] group relative rounded-[32px] overflow-hidden luxury-glass luxury-glass-interactive flex flex-col justify-between"
          >
            {/* Image Aspect Ratio 4:5 */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e]/90 via-transparent to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-5 left-5 luxury-glass px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium text-white/90">
                {look.tag}
              </div>
            </div>

            {/* Description & Styling Footnote */}
            <div className="p-6 md:p-7 space-y-2 relative z-10 bg-[#0b0c0e]/60 backdrop-blur-md">
              <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-amber-200 transition-colors">
                {look.title}
              </h3>
              <p className="text-xs text-[#e8e2d9]/70 font-light leading-relaxed">
                {look.styling}
              </p>
              <div className="pt-2 text-[11px] font-mono text-white/45 tracking-tight border-t border-white/[0.08]">
                {look.dimensions}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
