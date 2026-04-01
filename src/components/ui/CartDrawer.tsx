"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, X, Trash2, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();
  const WHATSAPP_NUMBER = "5493446123456";

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const productList = cart
      .map((item) => `• ${item.title} [${item.id}] - ${item.price}`)
      .join("\n");

    const message = `*ORDEN DE COMPRA - TECHSTORE* 🛒\n\n${productList}\n\n*TOTAL:* $${totalPrice.toLocaleString()}\n\n_Consultar disponibilidad._`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      {/* TRIGGER: Icono en el Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center justify-center p-2 text-foreground/60 hover:text-primary transition-colors"
      >
        <ShoppingBag className="size-5" strokeWidth={1.5} />
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-0.5 -right-0.5 size-4 bg-primary text-[8px] text-white flex items-center justify-center rounded-full font-bold shadow-lg shadow-primary/20"
            >
              {cart.length}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* OVERLAY & DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[120] bg-background/60 backdrop-blur-sm"
            />

            {/* Panel Lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md z-[130] bg-background border-l border-border shadow-2xl flex flex-col"
            >
              {/* Header del Carrito */}
              <div className="p-8 border-b border-border flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    Mi Selección
                  </span>
                  <h2 className="text-xl font-bold tracking-tighter uppercase">
                    Carrito
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                >
                  <X className="size-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Lista de Productos */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4 opacity-30">
                    <ShoppingBag className="size-12" strokeWidth={1} />
                    <p className="text-xs uppercase tracking-widest font-bold">
                      El carrito está vacío
                    </p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group flex justify-between items-start border-b border-border/50 pb-6"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-bold text-primary uppercase tracking-widest">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-medium tracking-tight">
                          {item.title}
                        </h4>
                        <span className="text-xs font-bold mt-1">
                          {item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-foreground/20 hover:text-destructive transition-colors"
                      >
                        <Trash2 className="size-4" strokeWidth={1.5} />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer / Checkout */}
              {cart.length > 0 && (
                <div className="p-8 bg-card border-t border-border space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                      Subtotal Estimado
                    </span>
                    <span className="text-2xl font-bold tracking-tighter">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <Button
                      onClick={handleCheckout}
                      className="w-full h-16 bg-primary text-background rounded-none font-bold uppercase text-[10px] tracking-[0.2em] group relative overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center gap-2">
                        Finalizar en WhatsApp{" "}
                        <Zap className="size-3 fill-current" />
                      </div>
                    </Button>

                    <button
                      onClick={clearCart}
                      className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 hover:text-destructive transition-colors py-2"
                    >
                      Vaciar Carrito
                    </button>
                  </div>

                  <p className="text-[9px] text-center text-foreground/30 uppercase tracking-tight leading-relaxed">
                    Al finalizar, serás redirigido a WhatsApp para coordinar el
                    pago y envío con un asesor técnico.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
