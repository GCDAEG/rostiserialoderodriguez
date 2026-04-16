"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ExperienceSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Capturamos el progreso del scroll en esta sección específica
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformaciones horizontales:
  // Mientras el usuario scrollea hacia abajo, el contenido se mueve de derecha a izquierda.
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  // Parallax para las imágenes (se mueven a distinta velocidad que el texto)
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Rotación suave sincronizada con el scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-foreground" // h-300vh para que el scroll dure más
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* TEXTO DE FONDO GIGANTE */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center opacity-10 pointer-events-none">
          <h2 className="text-[40vw] font-black text-white italic leading-none uppercase select-none">
            FRESH
          </h2>
        </div>

        {/* CONTENEDOR HORIZONTAL DINÁMICO */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 lg:gap-24 px-12"
        >
          {/* BLOQUE 1: INTRO */}
          <div className="flex-shrink-0 w-[300px] lg:w-[500px]">
            <h3 className="text-5xl lg:text-8xl font-black text-secondary uppercase italic leading-[0.8] mb-6">
              HECHO <br /> <span className="text-white">A MANO</span>
            </h3>
            <p className="text-white/60 text-lg font-bold italic border-l-4 border-primary pl-4">
              Desliza para ver el proceso detrás de la Burger perfecta. Siente
              la suavidad del scroll.
            </p>
          </div>

          {/* BLOQUE 2: IMAGEN 1 (Parallax) */}
          <motion.div
            style={{ rotate, x: imgX }}
            className="flex-shrink-0 w-[400px] lg:w-[600px] aspect-square relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1550317144-b38c57202391?q=80&w=1000"
              alt="Masa artesanal"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <span className="text-white font-black text-3xl italic uppercase">
                01. El Pan
              </span>
            </div>
          </motion.div>

          {/* BLOQUE 3: TEXTO DE INTERMEDIO */}
          <div className="flex-shrink-0">
            <span className="text-[15vw] font-black text-primary italic uppercase tracking-tighter">
              & FRESH &
            </span>
          </div>

          {/* BLOQUE 4: IMAGEN 2 */}
          <motion.div
            style={{ rotate: -5, x: imgX }}
            className="flex-shrink-0 w-[400px] lg:w-[600px] aspect-square relative rounded-[3rem] overflow-hidden border-8 border-accent shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000"
              alt="Carne a la parrilla"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <span className="text-white font-black text-3xl italic uppercase">
                02. El Fuego
              </span>
            </div>
          </motion.div>

          {/* BLOQUE 5: CIERRE */}
          <div className="flex-shrink-0 w-[400px]">
            <h4 className="text-4xl font-black text-white italic uppercase mb-4">
              ¿Listo para el primer mordisco?
            </h4>
            <div className="size-20 bg-accent rounded-full flex items-center justify-center animate-bounce">
              <span className="text-3xl">🍔</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* INDICADOR DE SCROLL LATERAL (SOLO DESKTOP) */}
      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4 text-white/20">
        <div className="w-20 h-[2px] bg-current" />
        <span className="text-[10px] font-black uppercase tracking-widest italic">
          Experience Scroll
        </span>
      </div>
    </section>
  );
};

export default ExperienceSection;
