"use client";
import { Section } from "@/components/layout/Section";
import {
  ShoppingCart,
  Cpu,
  Zap,
  ArrowRight,
  Layers,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

// Definición de tipos para el hardware
interface Product {
  id: string;
  title: string;
  category: string;
  specs: string;
  price: string;
  status: "In Stock" | "Low Stock" | "Pre-order";
  performance: string;
}

const techProducts: Product[] = [
  {
    id: "CPU-01",
    title: "Core Ultra i9",
    category: "Procesadores",
    specs: "24 Cores / 5.8GHz",
    price: "$589.00",
    status: "In Stock",
    performance: "99.9th Percentile",
  },
  {
    id: "GPU-02",
    title: "RTX 4090 OC",
    category: "Gráficas",
    specs: "24GB GDDR6X",
    price: "$1,699.00",
    status: "Low Stock",
    performance: "Top-Tier Rendering",
  },
  {
    id: "RAM-03",
    title: "Dominator 64GB",
    category: "Memoria",
    specs: "DDR5 7200MT/s",
    price: "$245.00",
    status: "In Stock",
    performance: "Ultra-Low Latency",
  },
  {
    id: "SSD-04",
    title: "Gen5 NVMe 4TB",
    category: "Almacenamiento",
    specs: "12,400 MB/s Read",
    price: "$420.00",
    status: "Pre-order",
    performance: "Enterprise Grade",
  },
];

interface ProductCatalogProps {
  activeCategory: string;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ activeCategory }) => {
  const WHATSAPP_NUMBER = "5493446123456";
  const { addToCart } = useCart();
  const handleWhatsAppOrder = (productTitle: string, productId: string) => {
    const message = `Hola! 👋 Me interesa el componente: ${productTitle} (ID: ${productId}). ¿Sigue disponible?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // LÓGICA DE FILTRADO (PASO 3)
  const filteredProducts = techProducts.filter(
    (product) =>
      activeCategory === "Todos" || product.category === activeCategory,
  );

  return (
    <Section id="catalog" height="content" className="bg-background py-24">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto px-6">
        {/* GRID DE PRODUCTOS CON ANIMACIÓN DE LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group flex flex-col bg-card border border-border p-8 hover:border-primary transition-colors relative overflow-hidden"
              >
                {/* Decoración geométrica sutil (Sustituye imagen) */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Layers className="size-32 rotate-12" />
                </div>

                {/* Header de Tarjeta */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span
                    className={cn(
                      "text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 border",
                      product.status === "In Stock"
                        ? "border-primary text-primary"
                        : "border-foreground/20 text-foreground/40",
                    )}
                  >
                    {product.status}
                  </span>
                  <span className="text-[10px] font-mono text-foreground/20">
                    {product.id}
                  </span>
                </div>

                {/* Info Principal */}
                <div className="flex-1 mb-12 relative z-10">
                  <h3 className="text-2xl font-light tracking-tighter mb-2 group-hover:italic transition-all">
                    {product.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-6">
                    {product.category}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="size-3 text-primary" />
                      <span className="text-[11px] font-medium text-foreground/60">
                        {product.specs}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="size-3 text-primary" />
                      <span className="text-[11px] font-medium text-foreground/60">
                        {product.performance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Precio y CTA */}
                <div className="pt-6 border-t border-border flex flex-col gap-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold tracking-tighter">
                      {product.price}
                    </span>
                    <button
                      onClick={() =>
                        handleWhatsAppOrder(product.title, product.id)
                      }
                      className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <ArrowRight className="size-4" />
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        category: product.category,
                      })
                    }
                    className="w-full py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-foreground transition-all"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER TÉCNICO */}
        <motion.div
          layout
          className="mt-12 p-10 border border-border flex flex-col md:flex-row items-center justify-between gap-8 bg-card/30"
        >
          <div className="flex items-center gap-6">
            <div className="size-14 border border-primary/20 flex items-center justify-center">
              <ShieldCheck className="size-6 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium tracking-tight">
                Garantía de Hardware Oficial
              </p>
              <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">
                Validación y serialización en cada entrega.
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")
            }
            className="px-10 py-5 bg-foreground text-background font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
          >
            Soporte Técnico Directo
          </button>
        </motion.div>
      </div>
    </Section>
  );
};

export default ProductCatalog;
