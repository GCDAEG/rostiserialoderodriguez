"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { Flame, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { siteConfig } from "@/lib/site/siteConfig";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DesktopMenu = ({
  sections,
  activeSection,
}: {
  sections: NavSection[];
  activeSection: string | null;
}) => {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const { brand } = siteConfig;

  const handleNavigation = (id: string) => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      lenis?.scrollTo(`#${id}`, {
        offset: -100,
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave personalizado
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 h-24 hidden lg:flex items-center bg-white/60 backdrop-blur-2xl border-b border-slate-100/50">
      <div className="container mx-auto px-8 flex justify-between items-center h-full">
        {/* LOGO - Identidad Visual Fuerte */}
        <Link
          href="/"
          className="group flex items-center gap-4 active:scale-95 transition-all"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-(--primary) p-3 rounded-[1.2rem] transition-all duration-500 group-hover:rotate-15 group-hover:scale-110 shadow-xl shadow-orange-200">
              <Flame className="text-white size-7 fill-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none uppercase italic">
              {brand.name}
              <span className="text-(--primary)">{brand.suffix}</span>
            </h1>
            <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mt-1">
              Food Experience
            </span>
          </div>
        </Link>

        {/* NAVIGATION - Floating Pill Design */}
        <div className="hidden xl:flex items-center bg-slate-100/50 p-1.5 rounded-3xl border border-slate-200/40 backdrop-blur-sm">
          <ul className="flex items-center gap-1">
            {sections.map((s) => {
              const isActive = activeSection === s.id && pathname === "/";
              return (
                <li key={s.id} className="relative">
                  <button
                    onClick={() => handleNavigation(s.id)}
                    className={cn(
                      "px-7 py-3 rounded-[1.1rem] text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 relative z-10",
                      isActive
                        ? "text-orange-600"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50",
                    )}
                  >
                    {s.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-desktop"
                      className="absolute inset-0 bg-white rounded-[1.1rem] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ACTIONS - Conversión Alta */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => router.push("/menu")}
          >
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                Pedí Online
              </span>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Ver la carta
              </span>
            </div>
            <button className="relative size-14 flex items-center justify-center bg-slate-900 text-white rounded-2xl overflow-hidden transition-all group-hover:bg-(--primary) group-hover:shadow-lg group-hover:shadow-orange-200 active:scale-90">
              <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="h-10 w-px bg-slate-200/60" />

          {/* Cart con Badge Personalizado dentro del Drawer */}
          <div className="relative hover:scale-105 transition-transform">
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
// COMENTARIOS TÉCNICOS DE REDISEÑO:
// 1. Framer Motion (layoutId): El indicador "nav-pill-desktop" usa layoutId para
//    moverse fluidamente entre botones sin perderse, dando un toque "Apple-like".
// 2. Lenis Easing: Se implementó una función de easing exponencial para que el
//    scroll en Desktop se sienta natural y lujoso, no lineal.
// 3. Estética: Se reemplazó el gris neutro por Slate (pizarrón) para un look más
//    moderno que combina perfecto con el naranja intenso.
