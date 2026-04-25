"use client";
import React from "react";
import Section from "@/components/layout/Section";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Navigation,
  UtensilsCrossed,
  Info,
  CheckCircle2,
  ChefHat,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LocationSection() {
  // Datos para Lo de Rodriguez
  const ADDRESS = "Ubicación del Local";
  const CITY = "Ciudad, Entre Ríos";
  const MAPS_URL = "https://www.google.com/maps";

  return (
    <Section
      id="ubicacion"
      className="bg-[var(--background)] py-16"
      height="content"
    >
      <div className="container mx-auto max-w-2xl lg:max-w-3xl flex flex-col gap-8">
        {/* HEADER ESTILO BODEGÓN */}
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-[0.3em] mb-1">
              ¿Dónde buscás tu pedido?
            </span>
            <h2 className="text-3xl font-serif font-black text-[var(--primary)] tracking-tight italic">
              Nuestra Cocina
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-[var(--border)] shadow-sm">
            <div className="size-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-[var(--card-foreground)] uppercase">
              Abierto ahora
            </span>
          </div>
        </div>

        {/* MAPA CARD RÚSTICA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] border-2 border-[var(--border)] overflow-hidden shadow-xl"
        >
          {/* MOCK DE MAPA */}
          <div
            onClick={() => window.open(MAPS_URL, "_blank")}
            className="relative aspect-video bg-slate-100 cursor-pointer group overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1000"
              alt="Ubicación Lo de Rodriguez"
              fill
              className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Marcador Estilo Chef */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-[var(--primary)] p-5 rounded-full shadow-[0_0_40px_rgba(45,90,39,0.4)] text-white relative z-10"
              >
                <ChefHat className="size-8" />
              </motion.div>
              <div className="absolute size-20 bg-[var(--primary)]/20 rounded-full animate-ping" />
            </div>
          </div>

          {/* DATOS DIRECCIÓN */}
          <div className="p-8 flex flex-col gap-6 bg-white">
            <div className="flex items-center gap-5">
              <div className="bg-[var(--background)] p-4 rounded-2xl border-2 border-[var(--border)] text-[var(--primary)]">
                <MapPin className="size-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-serif font-bold text-[var(--card-foreground)] leading-none">
                  {ADDRESS}
                </p>
                <p className="text-sm font-bold text-[var(--muted)] mt-1 tracking-wide">
                  {CITY}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="btn-primary w-full text-base font-serif"
            >
              Cómo llegar a lo de Rodriguez{" "}
              <Navigation className="size-4 fill-white ml-2" />
            </button>
          </div>
        </motion.div>

        {/* INFO DE SERVICIO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border-2 border-[var(--border)] p-6 flex items-center gap-5"
          >
            <div className="size-14 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center shrink-0 text-[var(--primary)]">
              <Clock className="size-7" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[var(--muted)] uppercase tracking-widest mb-1">
                Horarios
              </span>
              <span className="text-base font-bold text-[var(--card-foreground)] leading-tight">
                Mediodía y Noche <br />
                <span className="text-[var(--accent)] italic">
                  11:30 - 14:30 | 19:30 - 23:30
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border-2 border-[var(--border)] p-6 flex items-center gap-5"
          >
            <div className="size-14 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center shrink-0 text-[var(--accent)]">
              <UtensilsCrossed className="size-7" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[var(--muted)] uppercase tracking-widest mb-1">
                El Servicio
              </span>
              <span className="text-base font-bold text-[var(--card-foreground)] leading-tight">
                Porciones para compartir y sabor 100% casero.
              </span>
            </div>
          </motion.div>
        </div>

        {/* SELLO DE LA CASA */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-[var(--primary)] font-serif font-black italic">
            <CheckCircle2 className="size-5" />
            <span>Rotisería de Familia</span>
          </div>
          <p className="text-[11px] text-[var(--muted)] font-bold text-center px-10 uppercase tracking-[0.3em] leading-relaxed">
            Cocinamos cada plato como si fuera para nuestra propia mesa.
          </p>
        </div>
      </div>
    </Section>
  );
}
