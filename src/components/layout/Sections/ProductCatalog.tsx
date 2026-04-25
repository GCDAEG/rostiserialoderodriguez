"use client";

import React from "react";
import Image from "next/image";
import { Plus, ChevronRight, ShoppingCart, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Section from "../Section";
import { SanityDocument } from "next-sanity";
import { MockProduct, mockProducts } from "@/lib/mockData";

interface ProductCatalogProps {
  posts: SanityDocument[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ posts }) => {
  const { addToCart } = useCart();
  const mockData: MockProduct[] = mockProducts;

  const categories = Array.from(
    new Set(mockData.map((p) => p.category).filter(Boolean)),
  );

  const getProductsByCategory = (cat: string) => {
    return mockData.filter((p) => p.category === cat);
  };

  return (
    <Section
      height="content"
      id="catalog"
      className="bg-[var(--background)] pt-12 pb-24"
    >
      <div className="container mx-auto max-w-2xl lg:max-w-3xl px-0">
        {categories.map((category) => (
          <div key={category as string} className="mb-14 last:mb-0">
            {/* TÍTULO DE CATEGORÍA ESTILO BODEGÓN */}
            <div className="flex items-center justify-between mb-8 ">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-[0.3em] mb-1">
                  Especialidades
                </span>
                <h2 className="text-3xl font-serif font-black text-[var(--primary)] leading-none tracking-tight">
                  {category as string}
                </h2>
                <div className="h-1.5 w-12 bg-[var(--accent)] mt-2 rounded-full" />
              </div>
              <button className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-widest flex items-center gap-1.5 active:text-[var(--primary)] transition-colors border-b border-[var(--border)] pb-1">
                Ver todo{" "}
                <ChevronRight
                  className="size-3 text-[var(--accent)]"
                  strokeWidth={4}
                />
              </button>
            </div>

            {/* SCROLL HORIZONTAL (Native App Feel) */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pb-6">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id;
                const pName = product.name;
                const pPrice = product.price;

                return (
                  <motion.div
                    key={pId}
                    whileTap={{ scale: 0.96 }}
                    className="snap-start shrink-0 w-[180px] sm:w-[210px] flex flex-col group"
                  >
                    {/* CARD DE IMAGEN RÚSTICA */}
                    <div className="relative aspect-square w-full mb-5">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="250px"
                          className="object-cover rounded-[2.5rem] shadow-xl shadow-green-900/10 transition-all duration-500 group-hover:scale-105 border-[6px] border-white"
                        />
                      )}

                      {/* BADGE DE PRECIO (Estilo Etiqueta) */}
                      <div className="absolute -top-2 -left-2 bg-[var(--accent)] text-white px-4 py-2 rounded-2xl shadow-lg rotate-[-5deg]">
                        <p className="text-sm font-black tracking-tighter">
                          ${pPrice.toLocaleString("es-AR")}
                        </p>
                      </div>

                      {/* BOTÓN SUMAR (Estilo Sello) */}
                      <button
                        onClick={() =>
                          addToCart({
                            id: pId,
                            title: pName,
                            price: pPrice.toString(),
                            category: category as string,
                            image: product.image,
                          })
                        }
                        className="btn-primary absolute -bottom-3 right-0 size-14 rounded-2xl shadow-none bg-[var(--primary)] active:translate-y-0"
                      >
                        <Plus className="size-7 text-white" strokeWidth={3} />
                      </button>
                    </div>

                    {/* DETALLES DEL PRODUCTO */}
                    <div className="px-1 text-center sm:text-left">
                      <h3 className="text-lg font-serif font-black text-[var(--card-foreground)] leading-tight tracking-tight mb-1">
                        {pName}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[var(--muted)]">
                        <Utensils className="size-3 text-[var(--accent)]" />
                        <p className="text-[12px] font-bold uppercase tracking-tighter">
                          Porción Abundante
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DEL CATÁLOGO */}
      <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
        <div className="h-px w-16 bg-[var(--border)]" />
        <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.4em]">
          Cocina Tradicional
        </p>
      </div>
    </Section>
  );
};

export default ProductCatalog;
