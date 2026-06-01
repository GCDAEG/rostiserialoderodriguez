import type { Metadata } from "next";

import "./globals.css";
import { FooterSection } from "../components/layout/Footer";
import ExampleMessage from "@/components/layout/Sections/Example";
import { Navbar } from "@/components/layout/Nav";
// Mantenemos lora e inter para la nueva identidad, quitamos roboto si ya no se usa
import { lora, inter } from "@/lib/fonts"; 
import ReactLenis from "lenis/react";
import PageLoader from "./PageLoader";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: {
    default: "TWH Demo",
    template: "%s | Tu Web Hoy",
  },
  description:
    "Creamos páginas web simples y modernas para emprendedores. Ideales para mostrar tu negocio y empezar a vender.",
  openGraph: {
    title: "Tu web lista en días 🚀",
    description:
      "Páginas web modernas, claras y accesibles. Ideal para emprendedores y negocios chicos.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Web Hoy - Páginas web listas en días",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu web lista en días",
    description:
      "Webs modernas y accesibles para emprendedores. Lista para compartir y vender.",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // Inyectamos las variables de Lora (serif) e Inter (sans)
      className={cn(
        inter.variable,
        lora.variable,
        "font-sans" // Forzamos que Inter sea la tipografía base de toda la web
      )}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen antialiased text-criollo-text bg-criollo-bg
          overflow-x-hidden
          min-w-screen
          flex flex-col items-center
        "
      >
        <ReactLenis root>
          <CartProvider>
            <PageLoader />
            <Navbar />
            {children}
            <FooterSection />
            <ExampleMessage />
          </CartProvider>
        </ReactLenis>
      </body>
    </html>
  );
}