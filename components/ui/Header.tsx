'use client';

import React from 'react';
import { useCart } from '@/lib/store/useCart';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="absolute top-0 left-0 w-full z-30 grid grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 pt-[calc(24px+env(safe-area-inset-top))] md:pt-[calc(58px+env(safe-area-inset-top))] pb-6 md:pb-10 [text-shadow:0_1px_6px_rgba(0,0,0,0.18)]">
      {/* Brand Wordmark SVG */}
      <a
        href="#"
        aria-label="Veviva Inicio"
        className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 110 28"
          fill="currentColor"
          className="h-6 md:h-7 w-auto text-white transition-opacity duration-300 group-hover:opacity-85"
        >
          {/* Custom refined VEVIVA typography mark */}
          <text
            x="0"
            y="22"
            fontFamily="var(--font-manrope), sans-serif"
            fontWeight="700"
            letterSpacing="0.22em"
            fontSize="22"
            fill="white"
          >
            VEVIVA
          </text>
        </svg>
      </a>

      {/* Meta Labels */}
      <div className="hidden sm:flex items-center ml-[clamp(32px,5vw,70px)] gap-[clamp(20px,3vw,44px)] text-[14px] md:text-[18px] leading-[1.2] tracking-[-0.04em] text-white/90">
        <span className="font-medium">Colección de Autor</span>
        <span className="text-white/60 hidden md:inline">·</span>
        <span className="hidden md:inline font-normal text-white/75">
          100% Crochet Artesanal
        </span>
      </div>

      {/* Conversion / Cart CTA */}
      <div className="flex justify-end">
        <button
          onClick={toggleCart}
          aria-label={`Abrir carrito de compras, ${totalItems} artículos`}
          className="relative inline-flex items-center justify-center gap-2 w-[120px] sm:w-[152px] h-[36px] sm:h-[38px] rounded-full border border-white/75 bg-transparent text-[14px] sm:text-[16px] md:text-[18px] font-medium tracking-[-0.03em] text-white transition-all duration-300 hover:bg-white hover:text-[#0b1a26] focus-visible:bg-white focus-visible:text-[#0b1a26] active:scale-95 cursor-pointer backdrop-blur-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Bolsa</span>
          {totalItems > 0 && (
            <span className="ml-1 px-1.5 py-0.2 bg-white text-black text-[12px] font-bold rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
