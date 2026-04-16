"use client";

import React from "react";
import Image from "next/image";
import { Plus, Star, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Section from "../Section";
import { SanityDocument } from "next-sanity";
import { urlFor } from "@/lib/sanity.image";
import { MockProduct, mockProducts } from "@/lib/mockData";

interface ProductCatalogProps {
  posts: SanityDocument[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ posts }) => {
  const { addToCart } = useCart();
  const mockData: MockProduct[] = mockProducts;
  // Agrupamos los productos por su categoría
  const categories = Array.from(
    new Set(mockData.map((p) => p.category).filter(Boolean)),
  );

  const getProductsByCategory = (cat: string) => {
    return mockData.filter((p) => p.category === cat);
  };

  return (
    <Section height="content" id="catalog" className="bg-white pt-4">
      <div className="container mx-auto max-w-2xl px-0">
        {" "}
        {/* Padding 0 para que el scroll llegue al borde */}
        {categories.map((category) => (
          <div key={category as string} className="mb-10 last:mb-0">
            {/* TÍTULO DE CATEGORÍA ESTILO APP */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <h2 className="text-[17px] font-bold text-slate-900 leading-tight tracking-tight">
                  {category as string}
                </h2>
                <div className="h-1 w-8 bg-orange-500 rounded-full mt-1" />
              </div>
              <button className="text-[12px] font-bold text-orange-500 flex items-center gap-1 active:opacity-60 transition-opacity">
                Ver todo <ChevronRight className="size-3" />
              </button>
            </div>

            {/* SCROLL HORIZONTAL (Native App Feel) */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-2">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id || product.id;
                const pName = product.name;
                const pPrice = product.price;
                // const isFeatured =
                //   product.destacado === "Yes" || product.featured === true;

                return (
                  <motion.div
                    key={pId}
                    whileTap={{ scale: 0.98 }}
                    className="snap-start shrink-0 w-[160px] sm:w-[180px] flex flex-col group"
                  >
                    {/* IMAGEN COMPACTA */}
                    <div className="relative aspect-square w-full mb-3">
                      {product.image && (
                        <Image
                          // src={urlFor(product.image)
                          //   .width(400)
                          //   .height(400)
                          //   .url()}
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="180px"
                          className="object-cover rounded-2xl bg-slate-50 shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                      )}

                      {/* BOTÓN AGREGAR MINI */}
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
                        className="absolute bottom-2 right-2 py-1 px-2 gap-2 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-lg flex items-center justify-center border border-slate-100 active:bg-orange-500 active:text-white transition-all"
                      >
                        <p className="text-[10px] font-semibold">sumar</p>
                        <Plus
                          className="size-3 text-orange-500"
                          strokeWidth={2.5}
                        />
                      </button>

                      {/* {isFeatured && (
                        <div className="absolute top-2 left-2 bg-orange-500 p-1.5 rounded-lg shadow-md">
                          <Star className="size-3 text-white fill-white" />
                        </div>
                      )} */}
                    </div>

                    {/* TEXTO COMPACTO (Estilo App) */}
                    <div className="px-1">
                      <h3 className="text-[14px] font-semibold text-slate-800 leading-snug line-clamp-1 mb-0.5">
                        {pName}
                      </h3>
                      <p className="text-[14px] font-bold text-slate-950">
                        ${pPrice.toLocaleString("es-AR")}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
        {/* MOCK DE BARRA INFERIOR (Para simular la App en el video) */}
        {/* <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
          <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between shadow-2xl shadow-slate-900/40 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <MessageCircle className="size-6 text-orange-400" />
                <span className="absolute -top-1 -right-1 size-4 bg-orange-500 text-[10px] font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              <span className="text-sm font-bold">Ver mi pedido</span>
            </div>
            <span className="text-sm font-black">$4.500</span>
          </div>
        </div> */}
      </div>
    </Section>
  );
};

export default ProductCatalog;
