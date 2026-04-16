"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, Menu, Flame, ChevronRight, UtensilsCrossed } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site/siteConfig";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const { brand } = siteConfig;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    // Ejecutamos el scroll de inmediato sin esperar a que termine la animación
    lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1 });
  };

  return (
    <>
      {/* --- NAVBAR MÓVIL (TOP) --- */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] flex items-center px-4 bg-white/90 backdrop-blur-md border-b border-slate-100 lg:hidden">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-3 active:opacity-70 transition-opacity"
            onClick={() => setOpen(false)}
          >
            <div className="bg-orange-500 p-2.5 rounded-2xl">
              <Flame className="text-white size-6 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-slate-900 uppercase italic">
                {brand.name}
                <span className="text-orange-500">{brand.suffix}</span>
              </span>
            </div>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="size-12 rounded-2xl bg-slate-50 text-slate-900 border border-slate-100 active:bg-slate-200"
          >
            <Menu className="size-7" strokeWidth={2.5} />
          </Button>
        </div>
      </nav>

      {/* --- MENÚ LATERAL --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP: Aparece al instante (100ms) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm min-h-screen"
            />

            {/* SIDE DRAWER: Sin movimiento de X, solo aparece con un fade rápido */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed top-0 right-0 h-dvh w-[85%] max-w-xs z-[120] bg-white flex flex-col rounded-l-3xl shadow-2xl"
            >
              <div className="flex justify-between items-center px-6 pt-10 pb-6 border-b border-slate-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                    Navegación
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    ¿Qué sale hoy?
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="size-10 flex items-center justify-center bg-slate-100 text-slate-600 rounded-xl active:bg-slate-200"
                >
                  <X className="size-5" strokeWidth={3} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-4 overflow-y-auto no-scrollbar">
                <ul className="space-y-1">
                  {sections.map((sec) => {
                    const isActive =
                      activeSection === sec.id && pathname === "/";
                    return (
                      <li key={sec.id}>
                        <button
                          onClick={() => handleAction(sec.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-2xl transition-colors",
                            isActive
                              ? "bg-orange-50 text-orange-600 font-black"
                              : "text-slate-600 font-bold active:bg-slate-50",
                          )}
                        >
                          <span className="text-[15px]">{sec.label}</span>
                          {isActive ? (
                            <div className="size-2 bg-orange-500 rounded-full" />
                          ) : (
                            <ChevronRight
                              className="size-4 text-slate-300"
                              strokeWidth={3}
                            />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none mb-1">
                    Tu pedido rápido
                  </p>
                  <p className="text-sm font-black text-slate-900 leading-none">
                    ¡Pedí y retiralo ya!
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
