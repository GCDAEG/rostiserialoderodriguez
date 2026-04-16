"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Flame, ChevronRight } from "lucide-react";
import { useLenis } from "lenis/react";
import Section from "../Section";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-white"
    >
      <div className="container mx-auto max-w-xl flex flex-col gap-5 justify-center h-fit">
        {/* HEADER DE BIENVENIDA */}
        <div className="space-y-1 ">
          <p className="text-[13px] text-slate-500 font-medium">
            Hola, ¡qué bueno verte!
          </p>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            ¿Qué comemos hoy? 👋
          </h1>
        </div>

        {/* UBICACIÓN RÁPIDA */}
        <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer active:scale-[0.98] transition-transform ">
          <MapPin className="size-4 text-orange-500" />
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none">
              Entregando en
            </span>
            <span className="text-[13px] font-bold text-slate-900 mt-0.5">
              Gualeguaychú, Centro
            </span>
          </div>
          <ChevronRight className="size-4 text-slate-400 ml-auto" />
        </div>

        {/* CARD DESTACADA (Banner Promocional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50"
        >
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500&auto=format&fit=crop"
            alt="Promo destacada"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay gradiente para texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-5">
            <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md w-max mb-2">
              Destacado
            </span>
            <h2 className="text-white text-xl font-bold leading-tight mb-1">
              ¡Hoy sale la Double Lab con fritas!
            </h2>
            <p className="text-white/80 text-[13px] font-medium line-clamp-2 mb-3">
              Sabor 100% casero. Armá tu pedido y te lo enviamos en minutos.
            </p>
            <button
              onClick={() => lenis?.scrollTo("#catalog", { offset: -80 })}
              className="bg-white text-slate-900 w-full py-3.5 rounded-xl font-bold text-[13px] active:scale-95 transition-transform shadow-sm"
            >
              Pedir ahora
            </button>
          </div>
        </motion.div>

        {/* DATOS DE SERVICIO (Pills compactos de App) */}
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 pt-2 ">
          <div className="flex-none flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3.5 py-2 rounded-full border border-orange-100">
            <Star className="size-3.5 fill-orange-500 text-orange-500" />
            <span className="text-[13px] font-bold">4.8</span>
            <span className="text-[12px] font-medium opacity-70">(120+)</span>
          </div>
          <div className="flex-none flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3.5 py-2 rounded-full border border-slate-200/60">
            <Clock className="size-3.5 text-slate-500" />
            <span className="text-[13px] font-bold">30-40 min</span>
          </div>
          {/* <div className="flex-none flex items-center gap-1.5 bg-green-50 text-green-700 px-3.5 py-2 rounded-full border border-green-100">
            <Flame className="size-3.5 text-green-600" />
            <span className="text-[13px] font-bold">Envío $150</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
