'use client';

import React, { useRef, useState, useEffect } from 'react';
import { BagId, BagProduct } from '@/types/shop';
import GlassController from './GlassController';
import { useCart } from '@/lib/store/useCart';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const CATALOG: Record<BagId, BagProduct> = {
  bordeaux: {
    id: 'bordeaux',
    name: 'Plisada Bordeaux',
    subtitle: 'Cadena dorada con corazón metálico',
    price: 185,
    currency: 'USD',
    description:
      'Cartera drapeada tejida a mano en punto relieve profundo con hilado de algodón peinado color burdeos y cadena dorada.',
    details: {
      material: '100% Algodón Peinado Premium',
      hardware: 'Acero inoxidable bañado en oro 18k',
      dimensions: '26cm x 22cm x 10cm',
      craftTime: '16 horas de tejido',
      technique: 'Punto canalé en relieve',
    },
    image: '/images/poster_bordeaux.jpg',
    videoSrc: '/videos/hero_bordeaux.mp4',
    inStock: true,
  },
  noir: {
    id: 'noir',
    name: 'Mini Crossbody Noir',
    subtitle: 'Solapa con broche y correa trenzada',
    price: 145,
    currency: 'USD',
    description:
      'Bolsa compacta para teléfono y esenciales, tejida en punto cerrado negro con correa gruesa de crochet y broche metálico.',
    details: {
      material: 'Hilado mercerizado ultra resistente',
      hardware: 'Broche plateado satinado',
      dimensions: '14cm x 20cm x 6cm',
      craftTime: '12 horas de tejido',
      technique: 'Punto bajo denso con solapa',
    },
    image: '/images/bag_noir.png',
    videoSrc: '/videos/MiniNoir.mp4',
    inStock: true,
  },
  white: {
    id: 'white',
    name: 'Milano Ivory',
    subtitle: 'Bandolera cuadrada con correa ancha',
    price: 195,
    currency: 'USD',
    description:
      'Estructura geométrica en blanco marfil con correa ergonómica de punto espiga y broche central giratorio.',
    details: {
      material: 'Algodón orgánico crudo sin blanquear',
      hardware: 'Broche giratorio dorado vintage',
      dimensions: '22cm x 19cm x 8cm',
      craftTime: '18 horas de tejido',
      technique: 'Estructura rígida en crochet fino',
    },
    image: '/images/bag_white.png',
    videoSrc: '/videos/Milano.mp4',
    inStock: true,
  },
  structured: {
    id: 'structured',
    name: 'Estructurada Wine',
    subtitle: 'Asa corta de mano y cadena cruzada',
    price: 210,
    currency: 'USD',
    description:
      'Pieza versátil para llevar de mano o al hombro. Textura de relieve continuo y remates reforzados.',
    details: {
      material: 'Hilado de lino y algodón color vino',
      hardware: 'Herrajes niquelados alta durabilidad',
      dimensions: '24cm x 18cm x 9cm',
      craftTime: '20 horas de tejido',
      technique: 'Punto bodoque y base armada',
    },
    image: '/images/bag_structured.png',
    videoSrc: '/videos/Estructurada.mp4',
    inStock: true,
  },
};

export default function CinematicHero() {
  const videoBordeauxRef = useRef<HTMLVideoElement>(null);
  const videoNoirRef = useRef<HTMLVideoElement>(null);
  const videoWhiteRef = useRef<HTMLVideoElement>(null);
  const videoStructuredRef = useRef<HTMLVideoElement>(null);

  const [activeBagId, setActiveBagId] = useState<BagId>('bordeaux');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTitleHidden, setIsTitleHidden] = useState(false);
  const [baseVideoReady, setBaseVideoReady] = useState(false);

  const { addItem, openCart } = useCart();
  const currentProduct = CATALOG[activeBagId];

  // Initialize base video with safe rVFC / rAF fallback & poster optimization
  useEffect(() => {
    const video = videoBordeauxRef.current;
    if (!video) return;

    let isSubscribed = true;

    const onFrameDecoded = () => {
      if (isSubscribed) {
        setBaseVideoReady(true);
      }
    };

    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
      video.requestVideoFrameCallback((now, metadata) => {
        if (metadata.mediaTime <= 0.5 && video.readyState >= 2) {
          onFrameDecoded();
        } else {
          onFrameDecoded();
        }
      });
    } else {
      const checkFrame = () => {
        if (video.readyState >= 2) {
          onFrameDecoded();
        } else {
          requestAnimationFrame(checkFrame);
        }
      };
      requestAnimationFrame(checkFrame);
    }

    video
      .play()
      .then(() => {
        if (isSubscribed) setBaseVideoReady(true);
      })
      .catch((err) => {
        console.warn('AutoPlay prevenido por el navegador, fallback a poster activo:', err);
        setBaseVideoReady(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, []);

  const handleSelect = (index: number, bagId: BagId) => {
    setActiveBagId(bagId);
    setSelectedIndex(index);
    setIsCollapsed(true);
    setIsTitleHidden(true);

    const bordeauxVid = videoBordeauxRef.current;
    const noirVid = videoNoirRef.current;
    const whiteVid = videoWhiteRef.current;
    const structuredVid = videoStructuredRef.current;

    // Pause all other videos and trigger active one
    const videoMap: Record<BagId, HTMLVideoElement | null> = {
      bordeaux: bordeauxVid,
      noir: noirVid,
      white: whiteVid,
      structured: structuredVid,
    };

    Object.entries(videoMap).forEach(([id, vid]) => {
      if (!vid) return;
      if (id === bagId) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  };

  const handleReset = () => {
    setIsCollapsed(false);
    setIsTitleHidden(false);
    setSelectedIndex(0);
    setActiveBagId('bordeaux');

    videoNoirRef.current?.pause();
    videoWhiteRef.current?.pause();
    videoStructuredRef.current?.pause();

    if (videoBordeauxRef.current) {
      videoBordeauxRef.current.currentTime = 0;
      videoBordeauxRef.current.play().catch(() => {});
    }
  };

  const handleQuickBuy = () => {
    addItem(currentProduct);
    openCart();
  };

  return (
    <section className="relative w-full h-[100vh] h-[100dvh] overflow-hidden bg-black isolation-isolate select-none">
      {/* 1. LAYER 0: Media Layer (4 Persistent Video Layers + LCP Poster) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* High-res LCP poster image layer (base fallback) */}
        <img
          src="/images/poster_bordeaux.jpg"
          alt="Cartera artesanal de crochet Veviva"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            baseVideoReady ? 'opacity-0' : 'opacity-100'
          }`}
          fetchPriority="high"
          decoding="async"
        />

        {/* Video 1: Bordeaux (Base) */}
        <video
          ref={videoBordeauxRef}
          src="/videos/hero_bordeaux.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden={activeBagId !== 'bordeaux'}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeBagId === 'bordeaux' && baseVideoReady ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />

        {/* Video 2: Mini Noir */}
        <video
          ref={videoNoirRef}
          src="/videos/MiniNoir.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden={activeBagId !== 'noir'}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeBagId === 'noir' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />

        {/* Video 3: Milano (White) */}
        <video
          ref={videoWhiteRef}
          src="/videos/Milano.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden={activeBagId !== 'white'}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeBagId === 'white' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />

        {/* Video 4: Estructurada (Wine) */}
        <video
          ref={videoStructuredRef}
          src="/videos/Estructurada.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden={activeBagId !== 'structured'}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeBagId === 'structured' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />

        {/* Ambient Vignette & Text Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75 pointer-events-none z-20" />
      </div>

      {/* 2. LAYER 10: Hero Copy */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between items-center px-6">
        {/* Dynamic Title (staggered fade & blur) */}
        <div className="w-full text-center mt-[28vh] md:mt-[30vh]">
          <h1 className="w-[min(920px,calc(100vw-48px))] mx-auto text-[clamp(44px,6.5vw,94px)] font-medium leading-[0.88] tracking-[-0.04em] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            <span
              className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isTitleHidden
                  ? 'opacity-0 blur-[12px] -translate-y-[10px]'
                  : 'opacity-100 blur-0 translate-y-0'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Arte
            </span>{' '}
            <span
              className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isTitleHidden
                  ? 'opacity-0 blur-[12px] -translate-y-[10px]'
                  : 'opacity-100 blur-0 translate-y-0'
              }`}
              style={{ transitionDelay: '90ms' }}
            >
              en Cada
            </span>{' '}
            <span
              className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isTitleHidden
                  ? 'opacity-0 blur-[12px] -translate-y-[10px]'
                  : 'opacity-100 blur-0 translate-y-0'
              }`}
              style={{ transitionDelay: '180ms' }}
            >
              Puntada
            </span>
          </h1>
        </div>

        {/* Selected State: Quick Buy Pill */}
        {isCollapsed && (
          <div className="pointer-events-auto mb-3 flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-center shadow-2xl">
              <span className="text-sm font-light text-white/80">Modelo Activo: </span>
              <span className="text-sm font-semibold text-amber-200">
                {currentProduct.name}
              </span>
              <span className="mx-2 text-white/40">·</span>
              <span className="text-sm font-mono font-bold">
                ${currentProduct.price} {currentProduct.currency}
              </span>
            </div>

            <button
              onClick={handleQuickBuy}
              className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Añadir a la Bolsa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Permanent Subtitle Paragraph */}
        <p className="w-[min(734px,calc(100vw-48px))] text-center text-[clamp(14px,1.2vw,17px)] font-normal leading-[1.3] tracking-[-0.03em] text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] mb-[4vh] md:mb-[5vh]">
          {isCollapsed
            ? currentProduct.description
            : 'Veviva diseña piezas de autor que fusionan el crochet tradicional con estructuras de alta costura, hilados seleccionados y herrajes de precisión.'}
        </p>
      </div>

      {/* 3. LAYER 20: Glass Capsule Controller */}
      <div className="absolute top-[48%] md:top-[50%] left-1/2 -translate-x-1/2 z-20">
        <GlassController
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          isCollapsed={isCollapsed}
          onReset={handleReset}
        />
      </div>
    </section>
  );
}
