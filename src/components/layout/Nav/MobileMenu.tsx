"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, ShoppingBag, ChevronRight, Menu } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "@/components/ui/CartDrawer";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -20, duration: 1.2 });
    }, 400);
  };

  return (
    <>
      {/* HEADER MÓVIL MINIMALISTA */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] flex items-center px-6 bg-background/80 backdrop-blur-xl border-b border-border lg:hidden">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <span className="text-lg font-bold tracking-tighter uppercase">
              TECH<span className="font-light text-foreground/50">STORE</span>
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <CartDrawer></CartDrawer>
            <Button
              variant="ghost"
              onClick={() => setOpen(true)}
              className="p-0 h-auto hover:bg-transparent"
            >
              <Menu className="size-7 text-foreground" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-background flex flex-col p-8"
          >
            {/* Header dentro del menú */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                Explorar Catálogo
              </span>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="size-12 rounded-full border border-border p-0 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <X className="size-6" strokeWidth={1.5} />
              </Button>
            </div>

            {/* Navegación Principal */}
            <ul className="flex flex-col gap-8 flex-1">
              {sections.map((sec, i) => {
                const isActive = activeSection === sec.id;
                return (
                  <motion.li
                    key={sec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleScroll(sec.id)}
                      className={cn(
                        "text-5xl font-light tracking-tighter transition-all text-left flex items-center justify-between w-full group",
                        isActive
                          ? "text-primary font-medium"
                          : "text-foreground/40",
                      )}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest italic">
                          {i + 1}
                        </span>
                        {sec.label}
                      </span>
                      {isActive && (
                        <ChevronRight className="size-8 text-primary" />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer del Menú */}
            <div className="mt-auto pt-10 border-t border-border space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">
                  Atención al Cliente
                </span>
                <p className="text-sm font-medium">
                  Lunes a Viernes — 9:00 a 18:00
                </p>
              </div>

              <Button
                className="w-full h-16 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-none hover:bg-foreground transition-all"
                onClick={() => handleScroll("contact")}
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
