"use client";
import {
  Cpu,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";
import { motion } from "framer-motion";

export function FooterSection() {
  const lenis = useLenis();

  return (
    <footer className="bg-background text-foreground border-t border-border pt-24 pb-12 px-6 md:px-12 lg:px-24 flex flex-col gap-20 overflow-hidden">
      {/* SECCIÓN SUPERIOR: Brand & Direct CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="flex flex-col gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-4xl font-bold tracking-tighter uppercase leading-none">
              TECH<span className="font-light text-foreground/40">STORE</span>
            </span>
          </Link>

          <h3 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tighter max-w-lg">
            Elevando el estándar del <br />
            <span className="font-medium italic">alto rendimiento</span> <br />
            digital.
          </h3>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => lenis?.scrollTo("#contact")}
              className="bg-primary text-background hover:bg-foreground hover:text-background rounded-none px-10 py-7 h-auto font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500"
            >
              Consultoría Técnica <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Info Grid: Estilo Directorio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          {/* Navegación */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">
              Índice
            </h4>
            <ul className="flex flex-col gap-5 text-[11px] font-bold uppercase tracking-widest">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() =>
                      lenis?.scrollTo(`#${section.id}`, { offset: -96 })
                    }
                    className="text-foreground/50 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all" />
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">
              Soporte
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1 text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                  Email
                </span>
                <span className="text-[11px] font-medium font-mono">
                  ops@techstore.pro
                </span>
              </li>
              <li className="flex flex-col gap-1 text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                  WhatsApp
                </span>
                <span className="text-[11px] font-medium font-mono">
                  +54 9 3446 000000
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-8 col-cols-2 sm:col-auto">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">
              Social
            </h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="size-10 border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MARQUESINA DE PARTNERS (Hardware Aura) */}
      <div className="w-full border-y border-border py-12 select-none">
        <div className="flex overflow-hidden gap-16 font-bold text-2xl md:text-3xl tracking-tighter uppercase whitespace-nowrap opacity-[0.15]">
          <div className="flex gap-16 animate-marquee items-center">
            <span>Intel Core</span> <Zap className="size-5" />
            <span>NVIDIA GeForce</span> <Zap className="size-5" />
            <span>Corsair</span> <Zap className="size-5" />
            <span>Samsung Memory</span> <Zap className="size-5" />
            <span>ASUS ROG</span> <Zap className="size-5" />
            <span>AMD Ryzen</span> <Zap className="size-5" />
          </div>
          <div
            className="flex gap-16 animate-marquee items-center"
            aria-hidden="true"
          >
            <span>Intel Core</span> <Zap className="size-5" />
            <span>NVIDIA GeForce</span> <Zap className="size-5" />
            <span>Corsair</span> <Zap className="size-5" />
            <span>Samsung Memory</span> <Zap className="size-5" />
            <span>ASUS ROG</span> <Zap className="size-5" />
            <span>AMD Ryzen</span> <Zap className="size-5" />
          </div>
        </div>
      </div>

      {/* BARRA DE ESTADO FINAL */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-3 text-primary" />
              <span>Auth_Component_Dealer</span>
            </div>
            <div className="flex items-center gap-2 border-l border-border pl-6">
              <Cpu className="size-3" />
              <span>Inventory_Synced: 2026.04</span>
            </div>
          </div>
          <p className="text-[10px] text-foreground/20 uppercase tracking-widest">
            Copyright ©2026 TechStore | Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em]">
            Developed by <span className="text-primary">TUWEBHOY</span>
          </p>
          <div className="h-0.5 w-12 bg-primary/20" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </footer>
  );
}
