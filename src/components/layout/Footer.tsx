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
  UtensilsCrossed,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";

export function FooterSection() {
  const lenis = useLenis();

  // Datos específicos de Lo de Rodriguez
  const WHATSAPP_NUMBER = "5493454000000";

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 px-6 flex flex-col items-center relative overflow-hidden max-w-2xl lg:max-w-3xl w-full mx-auto">
      {/* DETALLE DE DISEÑO RÚSTICO (LÍNEA DIVISORIA) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[3px] bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />

      <div className="z-10 flex flex-col items-center max-w-xl w-full">
        {/* BRANDING FINAL ESTILO BODEGÓN */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <div className="size-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-[0_10px_0_0_#1E3D1A] border border-white/10">
            <UtensilsCrossed className="text-white size-8" strokeWidth={2} />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-serif font-black tracking-tight italic">
              Lo de Rodriguez
            </h2>
            <p className="text-[10px] font-bold text-[var(--muted)] tracking-[0.4em] uppercase mt-1">
              Sabor Casero y Tradicional
            </p>
          </div>
        </div>

        {/* CONTACT CARDS (BODEGÓN STYLE) */}
        <div className="grid grid-cols-1 gap-4 w-full mb-14">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 bg-white/[0.03] hover:bg-white/[0.07] p-6 rounded-[var(--radius)] border border-white/5 transition-all active:scale-[0.98]"
          >
            <div className="size-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
              <MessageCircle
                size={24}
                className="text-[#25D366] fill-[#25D366]/10"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-serif font-bold text-white tracking-tight">
                Hacer pedido por WhatsApp
              </span>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                Te respondemos al toque
              </span>
            </div>
          </a>

          <div className="flex items-center gap-5 bg-white/[0.03] p-6 rounded-[var(--radius)] border border-white/5">
            <div className="size-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 border border-[var(--accent)]/20">
              <MapPin size={24} className="text-[var(--accent)]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-serif font-bold text-white tracking-tight">
                Nuestra Cocina
              </span>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                Ubicación del Local • Ciudad
              </span>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN RÁPIDA (BORDERS RÚSTICOS) */}
        <nav className="mb-14 w-full">
          <ul className="flex flex-wrap justify-center gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() =>
                    lenis?.scrollTo(`#${section.id}`, { offset: -100 })
                  }
                  className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[var(--primary)] transition-all border border-white/5 hover:border-[var(--primary)]/30 rounded-xl bg-white/[0.02]"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* REDES SOCIALES */}
        <div className="flex gap-5 mb-20">
          {[
            {
              icon: Instagram,
              href: "https://www.instagram.com/rotiseria_loderodriguez/",
            },
            { icon: Facebook, href: "#" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target={social.href !== "#" ? "_blank" : undefined}
              className="size-14 rounded-2xl bg-white/[0.03] text-slate-500 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-500 border border-white/5 hover:border-transparent group"
            >
              <social.icon className="size-6 group-hover:scale-110 transition-transform" />
            </Link>
          ))}
        </div>
      </div>

      {/* SUB-FOOTER TRADICIONAL */}
      <div className="w-full max-w-2xl border-t border-white/5 pt-12 flex flex-col items-center gap-8">
        <button
          onClick={() => lenis?.scrollTo(0)}
          className="flex flex-col items-center gap-3 text-slate-700 hover:text-[var(--primary)] transition-all group"
        >
          <ArrowUpCircle
            size={32}
            strokeWidth={1}
            className="group-hover:-translate-y-2 transition-transform duration-500"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
            Volver al Inicio
          </span>
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
            Hecho con{" "}
            <Heart
              size={12}
              className="text-[var(--accent)] fill-[var(--accent)] animate-pulse"
            />{" "}
            para
            <span className="text-slate-400 font-serif italic">
              Lo de Rodriguez
            </span>
          </p>
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} — ROTISERÍA Y BODEGÓN
            </p>
            <p className="text-[9px] font-bold text-slate-900 uppercase tracking-[0.2em] opacity-30">
              Desarrollado con gusto por TUWEBHOY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
