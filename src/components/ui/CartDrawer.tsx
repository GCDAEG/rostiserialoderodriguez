"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  X,
  Trash2,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Flame,
  Truck,
  Store,
  ChevronLeft,
  ArrowRight,
  MapPin,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site/siteConfig";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  title: string;
  price: string | number;
  quantity: number;
  image?: string;
}

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [showWSModal, setShowWSModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery",
  );
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const WHATSAPP_NUMBER = "5493446123456";
  const DELIVERY_FEE = 1500;

  const finalTotal =
    deliveryType === "delivery" ? totalPrice + DELIVERY_FEE : totalPrice;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ==================== EFECTOS ====================

  // 1. Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // 2. Cerrar automáticamente el drawer cuando el carrito queda vacío
  useEffect(() => {
    const isEmpty = () => {
      if (cart.length === 0 && isOpen) {
        setIsOpen(false);
      }
    };
    isEmpty();
  }, [cart.length]); // Solo depende de cart.length

  // 3. Resetear paso, dirección y notas cuando se cierra el drawer
  useEffect(() => {
    const resetStep = () => {
      if (!isOpen) {
        setStep(1);
        setAddress("");
        setNotes("");
      }
    };

    resetStep();
  }, [isOpen]);

  // ==================== FUNCIONES ====================

  const generateWSMessage = (): string => {
    const productList = cart
      .map(
        (item) =>
          `▪ ${item.quantity}x ${item.title} - $${(Number(item.price) * item.quantity).toLocaleString("es-AR")}`,
      )
      .join("\n");

    const deliveryInfo =
      deliveryType === "delivery"
        ? `🛵 *ENVÍO A:* ${address || "No especificada"}`
        : `🏪 *RETIRO EN LOCAL*`;

    const notesInfo = notes ? `\n\n📝 *NOTAS:* ${notes}` : "";

    return `🍔 *NUEVO PEDIDO - ${siteConfig.brand.name}*\n\n${deliveryInfo}\n\n*PRODUCTOS:*\n${productList}${notesInfo}\n\n*SUBTOTAL:* $${totalPrice.toLocaleString("es-AR")}\n${deliveryType === "delivery" ? `*ENVÍO:* $${DELIVERY_FEE.toLocaleString("es-AR")}\n` : ""}*TOTAL FINAL: $${finalTotal.toLocaleString("es-AR")}*`;
  };

  const handleFinalSend = () => {
    const message = generateWSMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setShowWSModal(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Barra flotante inferior */}
      <AnimatePresence>
        {totalItems > 0 && !isOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-md z-[110]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-slate-900 text-white p-4 rounded-[1.5rem] flex items-center justify-between shadow-2xl active:scale-95 transition-all"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  key={totalItems}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="relative size-10 bg-orange-500 rounded-xl flex items-center justify-center"
                >
                  <ShoppingBag className="size-5" />
                  <span className="absolute -top-2 -right-2 size-5 bg-white text-slate-900 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-slate-900">
                    {totalItems}
                  </span>
                </motion.div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                    Ver mi pedido
                  </span>
                  <p className="text-sm font-bold">¡Todo listo!</p>
                </div>
              </div>
              <span className="text-base font-black">
                ${finalTotal.toLocaleString("es-AR")}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer Principal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[130] bg-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                <h2 className="text-lg font-bold text-slate-900">
                  {step === 1 ? "Revisá tu pedido" : "Datos de entrega"}
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="size-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} strokeWidth={3} />
              </button>
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4">
              {step === 1 && (
                <div className="space-y-3">
                  {cart.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className="relative flex gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                    >
                      {/* Botón Borrar: Área de toque mejorada y fondo blanco sutil para no chocar con el texto */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-2 text-slate-300 hover:text-red-500 active:scale-90 transition-all z-10"
                      >
                        <Trash2 size={18} strokeWidth={2.5} />
                      </button>

                      {/* Imagen: Aumenté a size-20 para que luzca más tentadora */}
                      <div className="relative size-20 rounded-2xl overflow-hidden shrink-0 bg-slate-50 border border-slate-100/50">
                        <Image
                          src={
                            item.image ||
                            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200"
                          }
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Contenido: Flex column con altura completa para empujar los elementos */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
                        {/* Título: padding-right (pr-8) para que un texto largo JAMÁS pise el botón de borrar */}
                        <div className="pr-8">
                          <h4 className="font-bold text-slate-900 text-[15px] leading-tight truncate">
                            {item.title}
                          </h4>
                        </div>

                        {/* Alineación Horizontal: Precio a la izquierda, Selector a la derecha */}
                        <div className="flex items-center justify-between w-full mt-auto">
                          <p className="text-orange-500 font-black text-[15px]">
                            ${Number(item.price).toLocaleString("es-AR")}
                          </p>

                          {/* Selector de Cantidad: Ultra compacto y elegante */}
                          <div className="flex items-center gap-1 bg-slate-100/80 rounded-xl p-1 border border-slate-200/50">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="size-7 flex items-center justify-center text-slate-600 disabled:opacity-30 active:bg-white active:rounded-lg transition-all"
                            >
                              <Minus size={14} strokeWidth={2.5} />
                            </button>

                            <span className="font-bold text-slate-900 text-[13px] w-6 text-center">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="size-7 flex items-center justify-center bg-white shadow-sm rounded-lg text-slate-900 active:scale-95 transition-all"
                            >
                              <Plus size={14} strokeWidth={2.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 p-2">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDeliveryType("delivery")}
                      className={cn(
                        "flex flex-col items-center gap-2 py-5 rounded-2xl border transition-all",
                        deliveryType === "delivery"
                          ? "border-orange-500 bg-orange-50 text-orange-600"
                          : "border-slate-200 hover:border-slate-300",
                      )}
                    >
                      <Truck size={24} />
                      <span className="text-sm font-bold">
                        Envío a domicilio
                      </span>
                    </button>

                    <button
                      onClick={() => setDeliveryType("pickup")}
                      className={cn(
                        "flex flex-col items-center gap-2 py-5 rounded-2xl border transition-all",
                        deliveryType === "pickup"
                          ? "border-orange-500 bg-orange-50 text-orange-600"
                          : "border-slate-200 hover:border-slate-300",
                      )}
                    >
                      <Store size={24} />
                      <span className="text-sm font-bold">Retiro en local</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {deliveryType === "delivery" && (
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                          <MapPin size={18} className="text-orange-500" />
                          Dirección de envío
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ej: Av. San Martín 1234, Depto 2B"
                          className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <FileText size={18} className="text-orange-500" />
                        Aclaraciones / Notas
                      </label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ej: Sin cebolla, agregar extra de queso..."
                        className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-slate-100">
              {deliveryType === "delivery" ? (
                <div className="w-full h-5 flex justify-end italic text-xs font-semibold">
                  Envío: {"$" + DELIVERY_FEE.toLocaleString("es-AR")}
                </div>
              ) : null}
              <div className="flex justify-between items-center mb-5">
                <span className="text-slate-600">Total</span>
                <span className="text-2xl font-black">
                  ${finalTotal.toLocaleString("es-AR")}
                </span>
              </div>

              {step === 1 ? (
                <button
                  onClick={() => setStep(2)}
                  className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  Continuar <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={() => setShowWSModal(true)}
                  disabled={deliveryType === "delivery" && !address.trim()}
                  className="w-full h-14 bg-orange-500 disabled:bg-slate-300 disabled:text-slate-500 text-white rounded-2xl font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  Enviar por WhatsApp <MessageCircle size={20} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal WhatsApp Preview */}
      <AnimatePresence>
        {showWSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="bg-[#075E54] p-4 text-white flex items-center gap-3">
                <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Flame size={22} />
                </div>
                <div>
                  <p className="font-bold">{siteConfig.brand.name}</p>
                  <p className="text-xs opacity-75">en línea</p>
                </div>
              </div>

              <div className="bg-[#E5DDD5] p-6 min-h-[320px] flex items-end">
                <div className="bg-[#DCF8C6] p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed whitespace-pre-wrap">
                  {generateWSMessage()}
                </div>
              </div>

              <div className="p-4 flex gap-3">
                <button
                  onClick={() => setShowWSModal(false)}
                  className="flex-1 py-4 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-2xl transition-colors"
                >
                  Volver
                </button>
                <button
                  onClick={handleFinalSend}
                  className="flex-[2] py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Check size={20} strokeWidth={3} />
                  Enviar Pedido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
