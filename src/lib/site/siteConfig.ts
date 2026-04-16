// /src/lib/config/siteConfig.ts

export const siteConfig = {
  // 1. Visual Identity & Branding (Casual & Vibrante)
  brand: {
    name: "BURGER",
    suffix: "TOWN", 
    logo: "/logos/town-logo.png", // Mantén el path pero el estilo es el que diseñamos
    theme: "vibrant-fast-food", 
    colors: {
      primary: "#E63946",   // Rojo Ketchup: Energético y apetitoso
      secondary: "#FF6B00", // Naranja Fuego: Para precios y botones
      accent: "#FFB703",    // Amarillo Mostaza: Para badges y novedades
      background: "#FFFBF2" // Crema Cálido: Mucho más apetecible que el gris frío
    }
  },

  // 2. Main Content (Hero Section con Actitud)
  hero: {
    badge: "🔥 ¡Las más potentes del barrio!",
    title: "BURGER TOWN",
    subtitle: "No somos gourmet, somos reales. 48hs de maduración, pan de papa artesanal y mucho queso chorreando. ¿Te animas?",
    buttonText: "¡Tengo Hambre!",
    bgImage: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000", 
  },

  // Categorías con Emojis para scannability rápida
  categories: [
    "Todas 😋", 
    "Burgers 🍔", 
    "Pizzas 🍕", 
    "Para Picar 🍟", 
    "Postres 🍰",
    "Bebidas 🥤"
  ],

  // 3. E-commerce Features & Business Data
  features: {
    hasFilters: true,
    hasCart: true,
    whatsappNumber: "+5493446123456",
    deliveryInfo: "🚀 Delivery flash en Gualeguaychú. ¡Si retiras por el local tienes 10% OFF!",
    openingHours: "Mar a Dom: 20:00 - 00:00 hs"
  },

  // 4. DATABASE CONNECTION (Google Sheets)
  databaseUrl: "https://script.google.com/macros/s/AKfycbwUm-Wb2BDf8ltibLk4mqkMc2rBwAeSutjZyWbkGfm85hjZcICG_u6yYAw3bG37bDZJ/exec",
};