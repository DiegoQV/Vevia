'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { CATALOG } from '@/components/cinematic/CinematicHero';
import { useCart } from '@/lib/store/useCart';
import { BagProduct } from '@/types/shop';

interface Silhouette {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  scale: string;
  image: string;
  product: BagProduct;
  activePosition: string;
  inactivePosition: string;
}

// 4 Silhouettes featuring the EXACT SAME MODEL with bag clearly visible
const SILHOUETTES: Silhouette[] = [
  {
    id: 's-1',
    roman: 'I',
    title: 'Estructurada Wine',
    subtitle: 'Sastrería & Diurno',
    scale: '24cm · Cadena metálica',
    image: '/images/look_1_structured.png',
    product: CATALOG.structured,
    activePosition: 'object-[center_20%]',
    inactivePosition: 'object-[46%_50%]',
  },
  {
    id: 's-2',
    roman: 'II',
    title: 'Mini Noir',
    subtitle: 'Contraste Nocturno',
    scale: '14cm x 20cm · Celular y llaves',
    image: '/images/look_2_noir.png',
    product: CATALOG.noir,
    activePosition: 'object-[center_25%]',
    inactivePosition: 'object-[48%_50%]',
  },
  {
    id: 's-3',
    roman: 'III',
    title: 'Plisada Bordeaux',
    subtitle: 'Atelier & Noche',
    scale: '26cm · Cadena dorada',
    image: '/images/look_3_plisada.png',
    product: CATALOG.bordeaux,
    activePosition: 'object-[center_25%]',
    inactivePosition: 'object-[42%_55%]',
  },
  {
    id: 's-4',
    roman: 'IV',
    title: 'Milano Ivory',
    subtitle: 'Verano & Lino Natural',
    scale: '22cm x 19cm · Bandolera',
    image: '/images/look_4_milano.png',
    product: CATALOG.white,
    activePosition: 'object-[center_22%]',
    inactivePosition: 'object-[44%_48%]',
  },
];

export default function SilhouettesLookbook() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Default to Mini Noir

  const { addItem, openCart } = useCart();

  // Trigger fanning animation when entering Section 02
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledIntoView) {
          setHasScrolledIntoView(true);
          setTimeout(() => {
            setIsSpread(true);
          }, 300);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasScrolledIntoView]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SILHOUETTES.length) % SILHOUETTES.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SILHOUETTES.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const activeSilhouette = SILHOUETTES[activeIndex];

  const handleQuickAdd = (e: React.MouseEvent, product: BagProduct) => {
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  // Clustered initial fanning offsets
  const getClusterTransform = (idx: number) => {
    if (isSpread) return 'translate-x-0 rotate-0 scale-100';
    switch (idx) {
      case 0:
        return 'translate-x-[110px] lg:translate-x-[160px] rotate-[-4deg] scale-[0.9]';
      case 1:
        return 'translate-x-[35px] lg:translate-x-[50px] rotate-[-1deg] scale-[0.95]';
      case 2:
        return 'translate-x-[-35px] lg:translate-x-[-50px] rotate-[1deg] scale-[0.95]';
      case 3:
        return 'translate-x-[-110px] lg:translate-x-[-160px] rotate-[4deg] scale-[0.9]';
      default:
        return 'translate-x-0 rotate-0 scale-100';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="siluetas"
      className="relative w-full py-28 md:py-36 px-[5vw] bg-[#07080a] text-[#e8e2d9] border-t border-white/[0.06] overflow-hidden select-none"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[0.95]">
            El Porte Real <br />
            <span className="font-editorial italic font-normal text-[#e8e2d9]/85">
              y escala cotidiana
            </span>
          </h2>
        </div>

        {/* Counter and Roman Navigation */}
        <div className="flex items-center gap-6 text-sm font-mono">
          <span className="text-white/40 text-xs">
            Silueta 0{activeIndex + 1} / 0{SILHOUETTES.length}
          </span>
          <div className="flex items-center gap-4">
            {SILHOUETTES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer pb-1 border-b text-xs font-mono ${
                  activeIndex === idx
                    ? 'text-white border-white scale-110 font-bold'
                    : 'text-white/30 border-transparent hover:text-white/70'
                }`}
              >
                {s.roman}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Stage with Floating Side Navigation Arrows */}
      <div className="relative max-w-7xl mx-auto">
        {/* Floating Side Arrow: Left */}
        <button
          onClick={handlePrev}
          aria-label="Silueta anterior"
          className="absolute -left-3 md:-left-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.9)] cursor-pointer active:scale-90 focus-visible:outline-none"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Floating Side Arrow: Right */}
        <button
          onClick={handleNext}
          aria-label="Siguiente silueta"
          className="absolute -right-3 md:-right-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.9)] cursor-pointer active:scale-90 focus-visible:outline-none"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Desktop Fanning Accordion Gallery */}
        <div className="hidden md:flex gap-4 lg:gap-6 h-[640px] lg:h-[720px] w-full items-stretch justify-center relative">
          {SILHOUETTES.map((s, idx) => {
            const isActive = activeIndex === idx;
            const transformClass = getClusterTransform(idx);

            return (
              <div
                key={s.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[8px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between ${transformClass} ${
                  isActive
                    ? 'flex-[3.8] lg:flex-[4.2] z-20 border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.9)]'
                    : 'flex-[1] z-10 bg-[#111215] opacity-70 hover:opacity-95 border border-white/[0.08]'
                }`}
              >
                {/* Full-bleed Portrait Image: Anchored to show the entire model AND handbag */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full h-full filter transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? `object-cover ${s.activePosition} brightness-100 scale-[1.01]`
                        : `object-cover ${s.inactivePosition} brightness-[0.8] hover:brightness-100`
                    }`}
                  />
                  {/* Gentle right-hand vignette only; zero darkening on the handbag on the left */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Inactive Vertical Label positioned at top so it NEVER covers the handbag */}
                {!isActive && (
                  <div className="relative z-10 p-4 pt-6 flex flex-col items-center justify-start h-full pointer-events-none">
                    <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] uppercase tracking-[0.25em] text-white/90 font-light whitespace-nowrap bg-black/65 backdrop-blur-md px-2 py-4 rounded-full border border-white/15 shadow-md">
                      {s.title}
                    </span>
                  </div>
                )}

                {/* Inactive top minimal spacer */}
                {isActive && <div className="relative z-10 p-4" />}

                {/* Active Card Details: Compact luxury capsule placed tightly in bottom-right corner away from the bag */}
                {isActive && (
                  <div className="relative z-10 p-4 lg:p-5 flex justify-end items-end w-full animate-in fade-in duration-500 pointer-events-none">
                    <div className="pointer-events-auto w-full max-w-[195px] space-y-2 bg-[#0c0d10]/90 backdrop-blur-2xl p-3 rounded-[14px] border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.8)]">
                      {/* Title + Price in the same card */}
                      <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-2">
                        <h3 className="text-sm lg:text-base font-medium text-white tracking-tight leading-none">
                          {s.title}
                        </h3>
                        <span className="font-mono text-xs text-amber-200 font-semibold whitespace-nowrap">
                          ${s.product.price} {s.product.currency}
                        </span>
                      </div>

                      <div className="pt-0.5">
                        <button
                          onClick={(e) => handleQuickAdd(e, s.product)}
                          className="w-full py-2 px-3 rounded-full bg-white text-black text-[10px] uppercase tracking-wider font-semibold shadow hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Añadir a la Bolsa</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile View: Slide Cards with clean layout */}
        <div className="md:hidden flex flex-col">
          <div className="relative w-full aspect-[3/4] rounded-[8px] overflow-hidden luxury-glass mb-4 shadow-2xl">
            <img
              key={activeSilhouette.id}
              src={activeSilhouette.image}
              alt={activeSilhouette.title}
              className={`w-full h-full object-cover ${activeSilhouette.activePosition} animate-in fade-in duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[14px] bg-[#0c0d10]/90 backdrop-blur-xl border border-white/15 shadow-2xl space-y-2">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-1.5">
                <h3 className="text-base font-light text-white">
                  {activeSilhouette.title}
                </h3>
                <span className="font-mono text-xs text-amber-200 font-semibold">
                  ${activeSilhouette.product.price} USD
                </span>
              </div>
              <button
                onClick={(e) => handleQuickAdd(e, activeSilhouette.product)}
                className="w-full py-2.5 rounded-full bg-white text-black text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Añadir a la Bolsa</span>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-2">
            {SILHOUETTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
