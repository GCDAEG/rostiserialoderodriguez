"use client";
import React from "react";
import {
  Instagram,
  Facebook,
  Store,
  MapPin,
  Heart,
  ArrowUpCircle,
  MessageCircle,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";
import { siteConfig } from "@/lib/site/siteConfig";

export function FooterSection() {
  const lenis = useLenis();
  const { brand } = siteConfig;

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
      {/* SUTIL GRADIENTE DE FONDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="z-10 flex flex-col items-center max-w-xl w-full">
        {/* BRANDING MINI (ESTILO APP) */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="size-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/10">
            <Store className="text-white size-7" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-black tracking-tight uppercase italic">
              {brand.name}
              <span className="text-orange-500">{brand.suffix}</span>
            </h2>
            <p className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mt-1">
              Food Experience
            </p>
          </div>
        </div>

        {/* CONTACT CARDS (MOBILE FIRST) */}
        <div className="grid grid-cols-1 gap-4 w-full mb-12">
          <a
            href="https://wa.me/5493446123456"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/10 transition-all active:scale-[0.98]"
          >
            <div className="size-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
              <MessageCircle
                size={20}
                className="text-green-500 fill-green-500/20"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-bold text-white leading-none mb-1">
                Pedí por WhatsApp
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Atención inmediata y personalizada
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="size-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-orange-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-bold text-white leading-none mb-1">
                Local Gualeguaychú
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Entre Ríos, Argentina
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION PILLS */}
        <nav className="mb-12 w-full">
          <ul className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() =>
                    lenis?.scrollTo(`#${section.id}`, { offset: -80 })
                  }
                  className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-full"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* SOCIALS COMPACTOS */}
        <div className="flex gap-4 mb-16">
          {[Instagram, Facebook].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="size-12 rounded-xl bg-white/5 text-slate-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/5"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* SUB-FOOTER REFINADO */}
      <div className="w-full max-w-2xl border-t border-white/5 pt-10 flex flex-col items-center gap-6">
        <button
          onClick={() => lenis?.scrollTo(0)}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors group"
        >
          <ArrowUpCircle
            size={24}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">
            Volver arriba
          </span>
        </button>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
            Hecho con{" "}
            <Heart size={10} className="text-orange-500 fill-orange-500" /> para
            <span className="text-slate-400">{brand.name}</span>
          </p>
          <p className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">
            © {new Date().getFullYear()} — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// COMENTARIOS TÉCNICOS:
// 1. Estética: Se cambió Gray-900 por Slate-950 para un tono más profundo y moderno.
// 2. Mobile UX: Las cards de contacto son de ancho completo y fáciles de tocar.
// 3. Tipografía: Se bajaron los tamaños (max 24px) para mantener la escala de App.
