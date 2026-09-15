'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { BagId } from '@/types/shop';

interface ControllerProps {
  selectedIndex: number;
  onSelect: (index: number, bagId: BagId) => void;
  isCollapsed: boolean;
  onReset: () => void;
  disabled?: boolean;
}

const BAG_OPTIONS: { label: string; id: BagId }[] = [
  { label: 'Plisada', id: 'bordeaux' },
  { label: 'Mini Noir', id: 'noir' },
  { label: 'Milano', id: 'white' },
  { label: 'Estructurada', id: 'structured' },
];

export default function GlassController({
  selectedIndex,
  onSelect,
  isCollapsed,
  onReset,
  disabled = false,
}: ControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // RAF throttled mousemove for GPU-isolated specular highlight
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (window.matchMedia('(hover: none)').matches) return; // Touch guard

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--glass-x', `${x.toFixed(1)}%`);
        containerRef.current.style.setProperty('--glass-y', `${y.toFixed(1)}%`);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Compute CSS custom properties for capsule position
  const activePositionIndex = isCollapsed ? -1 : hoveredIndex !== null ? hoveredIndex : selectedIndex;

  const getCapsuleStyles = () => {
    if (isCollapsed) {
      return {
        left: 'calc(50% - 100px)',
        width: '200px',
        backgroundColor: 'rgba(246, 251, 255, 0.14)',
        transition: 'all 980ms var(--retake-slow-ease)',
      };
    }

    switch (activePositionIndex) {
      case 1:
        return { left: '20%', width: '20%' };
      case 2:
        return { left: '40%', width: '20%' };
      case 3:
        return { left: '60%', width: '20%' };
      case 4:
        return { left: '80%', width: 'calc(20% + 5px)' };
      default:
        return { left: '-5px', width: 'calc(20% + 5px)' };
    }
  };

  const getTrackStyles = () => {
    if (isCollapsed) {
      return {
        left: 'calc(50% - 96px)',
        width: '192px',
        opacity: 0,
        transition: 'width 980ms var(--retake-slow-ease), left 980ms var(--retake-slow-ease), opacity 400ms linear 650ms',
      };
    }
    return {
      left: '0',
      width: '100%',
      opacity: 1,
      transition: 'width 760ms var(--retake-ease), left 760ms var(--retake-ease), opacity 300ms linear',
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      role="group"
      aria-label="Selector de carteras de la colección"
      className={`relative w-[min(880px,calc(100vw-48px))] h-[72px] z-20 mx-auto select-none transition-all duration-700 ${
        isCollapsed ? 'is-collapsed' : ''
      }`}
    >
      {/* Rear Track */}
      <div
        style={getTrackStyles()}
        className="glass-track absolute top-[4px] h-[64px] rounded-full pointer-events-none"
      />

      {/* Foreground Sliding Capsule */}
      <div
        style={getCapsuleStyles()}
        className="glass-capsule top-[-1px] h-[72px] rounded-full transition-all duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10"
      />

      {/* Cells Grid */}
      <div className="absolute inset-0 grid grid-cols-5 items-center z-20">
        {/* Cell 0: Header prompt label */}
        <div
          className={`flex items-center justify-center h-full px-3 text-[17px] md:text-[20px] lg:text-[22px] font-normal leading-[1.2] tracking-[-0.04em] whitespace-nowrap transition-all duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isCollapsed
              ? 'opacity-0 scale-90 pointer-events-none blur-[8px]'
              : hoveredIndex && hoveredIndex > 0
              ? 'opacity-50 text-white/60'
              : 'opacity-100 text-white'
          }`}
        >
          Elegir Modelo →
        </div>

        {/* Cells 1 to 4: Bag options */}
        {BAG_OPTIONS.map((opt, i) => {
          const cellIndex = i + 1;
          const isThisSelected = isCollapsed && selectedIndex === cellIndex;

          if (isCollapsed) {
            if (!isThisSelected) {
              return (
                <div
                  key={opt.id}
                  className="opacity-0 blur-[10px] scale-95 pointer-events-none transition-all duration-420"
                />
              );
            }

            return (
              <div
                key={opt.id}
                className="col-span-5 absolute inset-0 flex items-center justify-center z-30"
              >
                <button
                  onClick={onReset}
                  disabled={disabled}
                  className="px-6 py-2 text-[20px] md:text-[23px] font-medium tracking-[-0.04em] text-white hover:text-amber-200 transition-colors cursor-pointer underline underline-offset-4 decoration-1 focus-visible:outline-none"
                  aria-label="Volver a la vista principal"
                >
                  Reiniciar
                </button>
              </div>
            );
          }

          return (
            <button
              key={opt.id}
              onClick={() => onSelect(cellIndex, opt.id)}
              onMouseEnter={() => setHoveredIndex(cellIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(cellIndex)}
              onBlur={() => setHoveredIndex(null)}
              disabled={disabled}
              className="flex items-center justify-center h-full px-2 md:px-3 text-[18px] md:text-[21px] lg:text-[23px] font-normal leading-[1.2] tracking-[-0.04em] whitespace-nowrap text-white/95 hover:text-white transition-all duration-300 cursor-pointer bg-transparent border-none rounded-full focus-visible:outline-none"
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
