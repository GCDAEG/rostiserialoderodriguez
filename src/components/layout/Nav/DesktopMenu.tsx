"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { CartDrawer } from "@/components/ui/CartDrawer";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
}) => {
  const lenis = useLenis();

  return (
    <nav className="fixed top-0 left-0 w-full z-100 h-20 hidden lg:flex items-center justify-center px-10 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* LOGO: Minimal Branding */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-foreground transition-all duration-300"
        >
          <span className="text-xl font-bold tracking-tighter uppercase">
            TECH<span className="font-light text-foreground/50">STORE</span>
          </span>
          <div className="size-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* NAVIGATION: Editorial Links */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10">
            {sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <li key={s.id} className="relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      lenis?.scrollTo(`#${s.id}`, {
                        offset: -80,
                        duration: 1.2,
                      });
                    }}
                    className={cn(
                      "relative text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 py-2",
                      isActive
                        ? "text-primary"
                        : "text-foreground/30 hover:text-foreground",
                    )}
                  >
                    {s.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ACTIONS: Cart & Contact */}
        <div className="flex items-center gap-8">
          {/* Status Indicators (Discretos) */}
          <div className="hidden xl:flex items-center gap-4 border-r border-border pr-8">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-bold text-foreground/20 uppercase tracking-widest">
                Stock_Status
              </span>
              <span className="text-[9px] font-bold text-primary uppercase">
                Global_Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <CartDrawer></CartDrawer>

            <button
              onClick={() => lenis?.scrollTo("#contact")}
              className="group flex items-center gap-3 bg-primary text-background px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-foreground transition-all duration-300"
            >
              Contactar
              <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
