"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import {
  X,
  Menu,
  UtensilsCrossed,
  ChevronRight,
  ChefHat,
  Clock,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1 });
  };

  return (
    <div className="flex w-full justify-center relative z-[100] max-w-2xl lg:max-w-3xl">
      {/* --- NAVBAR MÓVIL (BODEGÓN STYLE) --- */}
      <nav className="relative w-full h-20 z-[100] flex items-center px-4 bg-[var(--background)]/90 backdrop-blur-md border-b-2 border-[var(--border)]">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-3 active:scale-95 transition-transform"
            onClick={() => setOpen(false)}
          >
            <div className="bg-[var(--primary)] p-2.5 rounded-xl shadow-[0_4px_0_0_#1E3D1A]">
              <UtensilsCrossed className="text-white size-6" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-black tracking-tight leading-none text-[var(--primary)]">
                Lo de Rodriguez
                <span className="text-[var(--accent)] block text-[10px] font-sans font-bold tracking-[0.2em] mt-1 uppercase italic">
                  Sabor Casero
                </span>
              </span>
            </div>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="size-12 rounded-xl bg-white text-[var(--primary)] border-2 border-[var(--border)] shadow-sm active:translate-y-0.5 transition-all"
          >
            <Menu className="size-7" strokeWidth={2.5} />
          </Button>
        </div>
      </nav>

      {/* --- MENÚ LATERAL (SIDE DRAWER) --- */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm min-h-screen"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-dvh w-[85%] max-w-xs z-[120] bg-[var(--background)] flex flex-col rounded-l-[2rem] shadow-2xl border-l-4 border-[var(--primary)]/10"
            >
              {/* Header Menú */}
              <div className="flex justify-between items-center px-8 pt-12 pb-8 border-b border-[var(--border)]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-[0.3em] mb-1">
                    Nuestro Menú
                  </span>
                  <h3 className="text-2xl font-serif font-black text-[var(--primary)] tracking-tight">
                    ¿Qué sale hoy?
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="size-11 flex items-center justify-center bg-white text-[var(--muted)] rounded-xl border-2 border-[var(--border)] shadow-sm active:scale-90 transition-transform"
                >
                  <X className="size-6" strokeWidth={3} />
                </button>
              </div>

              {/* Categorías */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar">
                <ul className="space-y-3">
                  {sections.map((sec) => {
                    const isActive =
                      activeSection === sec.id && pathname === "/";
                    return (
                      <li key={sec.id}>
                        <button
                          onClick={() => handleAction(sec.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 border-2",
                            isActive
                              ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-green-900/20 translate-x-2"
                              : "bg-white text-[var(--card-foreground)] border-transparent font-bold hover:border-[var(--border)]",
                          )}
                        >
                          <span className="text-lg font-serif tracking-tight">
                            {sec.label}
                          </span>
                          {isActive ? (
                            <ChefHat className="size-5 text-white/80" />
                          ) : (
                            <ChevronRight
                              className="size-5 text-[var(--border)]"
                              strokeWidth={3}
                            />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Info de la Rotisería */}
              <div className="p-8 bg-white border-t-2 border-[var(--border)] space-y-5">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-[var(--background)] flex items-center justify-center shrink-0 border-2 border-[var(--border)]">
                    <Clock className="size-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--muted)] font-black uppercase tracking-widest leading-none mb-1">
                      Cocina Activa
                    </p>
                    <p className="text-sm font-bold text-[var(--card-foreground)]">
                      11:30-14:30 | 19:30-23:30
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <MapPinIcon className="size-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--muted)] font-black uppercase tracking-widest leading-none mb-1">
                      Punto de Encuentro
                    </p>
                    <p className="text-sm font-bold text-[var(--card-foreground)]">
                      Tu Ubicación en la Ciudad
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Pequeño helper para el icono de pin (puedes usar el de lucide-react)
const MapPinIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default MobileMenu;
