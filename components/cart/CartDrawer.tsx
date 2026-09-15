'use client';

import React from 'react';
import { useCart } from '@/lib/store/useCart';
import { X, Plus, Minus, Trash2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  const handleWhatsAppCheckout = () => {
    const summary = items
      .map((i) => `• ${i.quantity}x ${i.product.name} ($${i.product.price} USD)`)
      .join('\n');
    const message = encodeURIComponent(
      `¡Hola Veviva! Me gustaría ordenar las siguientes carteras artesanales:\n\n${summary}\n\nTotal: $${totalPrice} USD\n¿Podrían indicarme los datos de pago y envío?`
    );
    window.open(`https://wa.me/51900000000?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Slide-in glass panel */}
      <aside
        className="relative z-10 w-full max-w-md h-full bg-[#08121e]/85 border-l border-white/20 backdrop-blur-2xl p-6 flex flex-col justify-between text-white shadow-[-10px_0_40px_rgba(0,0,0,0.6)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Bolsa de compra"
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h2 className="text-xl font-medium tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Tu Selección Veviva
            </h2>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white/70 hover:text-white"
              aria-label="Cerrar bolsa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="mt-4 space-y-4 max-h-[52vh] overflow-y-auto pr-1">
            {items.length === 0 ? (
              <div className="text-center py-16 text-white/60 space-y-3">
                <p className="text-sm font-light">Tu bolsa está vacía.</p>
                <p className="text-xs text-white/40">
                  Selecciona uno de los modelos en el controlador principal para añadirlo.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-black/40 flex-shrink-0 border border-white/10">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-white/60 mb-2">
                      ${item.product.price} {item.product.currency}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-white/20 rounded-lg bg-black/30">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2 py-0.5 text-white/70 hover:text-white cursor-pointer"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2 py-0.5 text-white/70 hover:text-white cursor-pointer"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-white/40 hover:text-rose-400 transition-colors ml-auto cursor-pointer"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/60">Subtotal</span>
              <span className="text-lg font-semibold tracking-tight">
                ${totalPrice} USD
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/60">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Confeccionado artesanalmente bajo pedido (3–5 días).</span>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 px-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Ordenar por WhatsApp</span>
              </button>

              <button
                onClick={() =>
                  alert('Integración de Stripe / Pasarela de pago lista para vincular claves API.')
                }
                className="w-full py-2.5 px-4 rounded-full border border-white/30 text-white/80 font-medium text-xs hover:border-white hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pago Seguro con Tarjeta / Apple Pay</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
