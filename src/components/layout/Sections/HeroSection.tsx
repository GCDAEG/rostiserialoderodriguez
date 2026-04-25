"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Utensils, Clock, ShoppingBag, Star } from "lucide-react";
import { useLenis } from "lenis/react";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section id="hero" className="px-4 py-8 bg-[var(--background)]">
      <div className="container mx-auto max-w-2xl flex flex-col gap-6">
        {/* BRANDING CASERO */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20">
            <Utensils className="size-3 text-[var(--primary)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Desde el corazón de la cocina
            </span>
          </div>
          <h1 className="text-4xl font-serif font-black text-[var(--primary)] leading-tight">
            Lo de Rodriguez
          </h1>
          <p className="text-[var(--muted)] font-medium italic">
            `&quot;`Sabor casero, como en casa.`&quot;`
          </p>
        </div>

        {/* UBICACIÓN CARD */}
        <div className="bg-white p-4 rounded-[var(--radius)] border-2 border-[var(--border)] flex items-center gap-4 shadow-sm">
          <div className="bg-[var(--accent)]/10 p-3 rounded-full">
            <MapPin className="size-5 text-[var(--accent)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest">
              Retiro en local
            </span>
            <span className="text-sm font-bold text-[var(--card-foreground)]">
              Ubicación exacta de la Roti
            </span>
          </div>
        </div>

        {/* BANNER PRINCIPAL (Milanesas/Pollo/Empanadas) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000" // Imagen de comida casera
            alt="Comida de Rotisería"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-serif font-bold mb-2 leading-tight">
              ¡Hoy tenemos <br /> Pollo al Horno!
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Pedí ahora y retirá calentito.
            </p>
            <button
              onClick={() => lenis?.scrollTo("#catalog", { offset: -80 })}
              className="btn-primary w-full shadow-none bg-[var(--accent)]"
            >
              <ShoppingBag className="size-5" />
              VER MENÚ DEL DÍA
            </button>
          </div>
        </motion.div>

        {/* STATS RÚSTICOS */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-2">
          <div className="bg-white px-4 py-2 rounded-xl border border-[var(--border)] flex items-center gap-2 shrink-0">
            <Clock className="size-4 text-[var(--primary)]" />
            <span className="text-xs font-bold">15-30 min de espera</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-[var(--border)] flex items-center gap-2 shrink-0">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-bold">Excelente calidad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
