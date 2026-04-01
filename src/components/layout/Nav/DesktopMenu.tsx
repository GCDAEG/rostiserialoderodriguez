"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { CartDrawer } from "@/components/ui/CartDrawer";

const DesktopMenu = ({
  sections,
  activeSection,
}: {
  sections: NavSection[];
  activeSection: string | null;
}) => {
  const lenis = useLenis();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-16 hidden lg:flex items-center bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO DIRECTO */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-gray-900"
        >
          MARMOLES <span className="text-primary">ARG</span>
        </Link>

        {/* LINKS DE NAVEGACIÓN */}
        <ul className="flex items-center gap-8">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => lenis?.scrollTo(`#${s.id}`)}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === s.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* BOTÓN DE ACCIÓN */}
        <div className="flex items-center gap-4">
          <CartDrawer />
          <button
            onClick={() => lenis?.scrollTo("#contact")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition-all"
          >
            <Phone className="size-4" />
            Presupuesto Gratis
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
