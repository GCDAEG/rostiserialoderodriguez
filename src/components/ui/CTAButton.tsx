"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { Zap } from "lucide-react";

interface CTAButtonBaseProps {
  ctaRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  buttonClassName?: string;
  href?: string;
}

// Variante 1: Hero (Con el diseño principal de "Lanzamiento")
export function HeroCTAButton({
  ctaRef,
  className = "",
  buttonClassName = "",
  href = "https://wa.me/5493451234567",
}: CTAButtonBaseProps) {
  return (
    <div ref={ctaRef} className={`relative group ${className}`}>
      {/* Efecto de brillo exterior (Glow) */}
      <div className="absolute -inset-1 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <CtaButtonContent
        href={href}
        label="Adquirir ahora"
        className={`bg-primary text-black font-black uppercase tracking-widest text-[11px] sm:text-xs rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.3)] ${buttonClassName}`}
      />
    </div>
  );
}

// Variante 2: Simple (Para las cards del catálogo)
export function SimpleCTAButton({
  className = "",
  href = "https://wa.me/5493451234567",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <CtaButtonContent
      href={href}
      label="Consultar Stock"
      className={`bg-card border border-white/10 text-white hover:border-primary/50 text-[10px] uppercase tracking-wider rounded-lg py-3 px-4 ${className}`}
    />
  );
}

// Componente Core: El motor del botón
function CtaButtonContent({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-3
        px-8 py-5 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-primary/50
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Reflejo de luz pasando (Shine effect) */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

      <BsWhatsapp className="text-lg" />
      <span className="relative z-10">{label}</span>
      <Zap className="size-3 fill-current opacity-50 group-hover:opacity-100 group-hover:animate-pulse" />

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.a>
  );
}
