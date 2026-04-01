"use client";
import HeroSection from "../components/layout/Sections/HeroSection";
import PrdocutCatalog from "../components/layout/Sections/ProductCatalog";
import WhatsAppChatInput from "@/components/ui/WhatsAppChatInput";
import { useState } from "react";
// export const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const lora = Lora({
//   subsets: ["latin"],
//   display: "optional",
//   variable: "--font-lora",
// });

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat",
// });

// export const title = lora.className;
// export const titleH2 = montserrat.className;
// export const base = roboto.className;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const onCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };
  return (
    <main className={`min-h-screen w-full font-base bg-background`}>
      <HeroSection
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      {/* <RoomsSection /> */}
      {/* <ServiceSection /> */}
      <PrdocutCatalog activeCategory={activeCategory} />
      {/* <LocationSection />*/}
      {/* <Testimonials /> */}
      <WhatsAppChatInput />
    </main>
  );
}
