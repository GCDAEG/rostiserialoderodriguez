export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  { id: "hero", label: "Inicio" },
  {
    id: "products",
    label: "Productos",
  },
  {
    id: "gallery",
    label: "Galería",
  },
];
