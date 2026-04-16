"use client";
import React from "react";
import Section from "@/components/layout/Section";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Info,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LocationSection() {
  // Datos del local
  const ADDRESS = "Calle Falsa 123";
  const CITY = "Gualeguaychú, Entre Ríos";
  const MAPS_URL = "https://maps.google.com/?q=-33.0094,-58.5144"; // Coordenadas de ejemplo

  return (
    <Section id="ubicacion" className="bg-slate-50 py-8" height="content">
      <div className="container mx-auto max-w-xl flex flex-col gap-4">
        {/* HEADER DE SECCIÓN ESTILO APP */}
        <div className="flex items-center justify-between px-1">
          <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">
            Información del local
          </h2>
          <span className="text-[11px] font-bold text-green-600 bg-green-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
            Abierto
          </span>
        </div>

        {/* MAPA Y DIRECCIÓN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[1.5rem] border border-slate-200/60 overflow-hidden shadow-sm"
        >
          {/* MOCK DE MAPA INTERACTIVO */}
          <div
            onClick={() => window.open(MAPS_URL, "_blank")}
            className="relative aspect-[21/9] sm:aspect-[16/6] bg-slate-200 cursor-pointer group overflow-hidden"
          >
            {/* Usamos una imagen de un mapa genérico de fondo */}
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
              alt="Mapa de ubicación"
              fill
              className="object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pin del mapa centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-white p-3 rounded-full shadow-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Navigation className="size-6" strokeWidth={2.5} />
              </div>
            </div>

            {/* Fade sutil en la parte inferior del mapa */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/20 to-transparent" />
          </div>

          {/* DATOS DE LA DIRECCIÓN */}
          <div className="p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <MapPin className="size-5 text-slate-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <p className="text-[15px] font-bold text-slate-900 leading-tight mb-0.5">
                  {ADDRESS}
                </p>
                <p className="text-[13px] font-medium text-slate-500">{CITY}</p>
              </div>
            </div>

            <button
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-700 py-3.5 rounded-xl font-bold text-[13px] transition-all active:scale-[0.98]"
            >
              Cómo llegar <ExternalLink className="size-3.5 opacity-50" />
            </button>
          </div>
        </motion.div>

        {/* LISTA DE INFORMACIÓN ADICIONAL (Estilo ListView App) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[1.5rem] border border-slate-200/60 p-1 shadow-sm"
        >
          {/* Horarios */}
          <div className="flex items-center gap-4 p-4">
            <div className="size-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="size-5 text-slate-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Horarios
              </span>
              <span className="text-[14px] font-semibold text-slate-900">
                Mar a Dom: 19:00 — 00:00
              </span>
            </div>
          </div>

          <div className="h-px bg-slate-100 mx-4" />

          {/* Info Extra / Retiro */}
          <div className="flex items-center gap-4 p-4">
            <div className="size-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
              <Info className="size-5 text-slate-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Retiro en local
              </span>
              <span className="text-[14px] font-semibold text-slate-900">
                Cocina a la vista. Pagá al retirar.
              </span>
            </div>
          </div>
        </motion.div>

        {/* SELLO DE CONFIANZA */}
        <div className="mt-4 flex items-center justify-center gap-2 text-slate-400">
          <CheckCircle2 className="size-4" />
          <span className="text-xs font-medium">Local verificado y activo</span>
        </div>
      </div>
    </Section>
  );
}
