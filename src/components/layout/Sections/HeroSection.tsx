"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeaderStatus = ({
  onCategoryChange,
  activeCategory,
}: {
  onCategoryChange: (cat: string) => void;
  activeCategory: string;
}) => {
  return (
    <section id="hero" className="bg-background pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* LÍNEA SUPERIOR: Contexto y Status */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="size-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">
              Inventario Actualizado: 2026
            </span>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/40">
            Envíos a todo el país
          </span>
        </div>

        {/* TÍTULO EDITORIAL */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none">
              Hardware <br />
              <span className="font-semibold italic">Curated</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-[280px] text-sm text-foreground/50 leading-relaxed font-medium"
          >
            Seleccionamos componentes de alto rendimiento con una estética
            minimalista para setups profesionales.
          </motion.p>
        </div>

        {/* BARRA DE FILTROS Y NAVEGACIÓN DE TIENDA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-y border-border">
          {/* Categorías Rápidas */}
          <div className="flex items-center justify-center gap-8 overflow-x-auto w-full md:w-auto no-scrollbar py-2">
            {["Todos", "Procesadores", "Gráficas"].map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={cn(
                  "text-[11px] uppercase tracking-widest font-bold transition-all",
                  activeCategory === cat
                    ? "text-primary border-b border-primary"
                    : "text-foreground/30",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Botón de Filtros / Ordenar */}
          <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-none pt-4 md:pt-0">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border border-border px-5 py-3 hover:bg-foreground hover:text-background transition-all ml-auto md:ml-0">
              <SlidersHorizontal className="size-3" />
              Filtrar
            </button>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border border-border px-5 py-3 hover:bg-foreground hover:text-background transition-all">
              Ordenar por
              <ChevronDown className="size-3 opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderStatus;
