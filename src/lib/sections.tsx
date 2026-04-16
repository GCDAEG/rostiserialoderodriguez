// /src/lib/sections.ts

export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  {
    id: "hero",
    label: "Inicio",
  },
  {
    id: "catalog", // Coincide con el id del componente HowItWorks
    label: "Menú",
  },
];
