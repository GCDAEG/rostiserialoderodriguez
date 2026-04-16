// src/lib/mockProducts.ts

export interface MockProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const mockProducts: MockProduct[] = [
  // ====================== DESTACADOS ======================
  {
    id: "dest-1",
    name: "Pollo al Spiedo Entero",
    price: 18900,
    image: "https://images.unsplash.com/photo-1504670813815-f43e2383e08d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Destacados",
  },
  {
    id: "dest-2",
    name: "Asado de Tira con Chimichurri",
    price: 12400,
    image: "https://images.unsplash.com/photo-1632952836920-275bac1d5f29?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Destacados",
  },
  {
    id: "dest-3",
    name: "Empanadas de Carne (Docena)",
    price: 6800,
    image: "https://images.unsplash.com/photo-1549889450-0e0fb9c1d668?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Destacados",
  },
  {
    id: "dest-4",
    name: "Papas Fritas con Cheddar",
    price: 4800,
    image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Destacados",
  },
  {
    id: "dest-5",
    name: "Ensalada Rusa Clásica",
    price: 3500,
    image: "https://images.unsplash.com/photo-1728636945305-67a629484ff7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Destacados",
  },
  {
    id: "dest-6",
    name: "Choripán Completo",
    price: 4500,
    image: "https://www.hola.com/horizon/original_aspect_ratio/e3f55cc80d31-adobestock62306337.jpg",
    category: "Destacados",
  },

  // ====================== PIZZAS ======================
  {
    id: "piz-1",
    name: "Pizza Muzzarella",
    price: 7900,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    category: "Pizzas",
  },
  {
    id: "piz-2",
    name: "Pizza Napolitana",
    price: 8500,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    category: "Pizzas",
  },
  {
    id: "piz-3",
    name: "Pizza Calabresa",
    price: 8900,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    category: "Pizzas",
  },
  {
    id: "piz-4",
    name: "Pizza Jamón y Morrones",
    price: 8700,
    image: "https://cdn.pedix.app/Acj0eQITEQSB6cVtflUj/products/kInSZPbQRt5lXjGMQCoQb.png?size=800x800",
    category: "Pizzas",
  },
  {
    id: "piz-5",
    name: "Pizza Fugazzeta",
    price: 8200,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80",
    category: "Pizzas",
  },
  {
    id: "piz-6",
    name: "Pizza Cuatro Quesos",
    price: 9500,
    image: "https://www.hola.com/horizon/landscape/e8bb41b65869-pizzacuatroquesos-adob-t.jpg",
    category: "Pizzas",
  },

  // ====================== HAMBURGUESAS ======================
  {
    id: "ham-1",
    name: "Hamburguesa Clásica",
    price: 6800,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hamburguesas",
  },
  {
    id: "ham-2",
    name: "Hamburguesa Doble Carne",
    price: 9200,
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=800&q=80",
    category: "Hamburguesas",
  },
  {
    id: "ham-3",
    name: "Hamburguesa Crispy Chicken",
    price: 7500,
    image: "https://images.unsplash.com/photo-1692737347911-8f75f8779db2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hamburguesas",
  },
  {
    id: "ham-4",
    name: "Hamburguesa con Bacon",
    price: 8100,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hamburguesas",
  },
  {
    id: "ham-5",
    name: "Hamburguesa BBQ",
    price: 8500,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    category: "Hamburguesas",
  },
  {
    id: "ham-6",
    name: "Hamburguesa Vegana",
    price: 7200,
    image: "https://images.unsplash.com/photo-1603679283701-d00d2859b57c?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hamburguesas",
  },

  // ====================== BEBIDAS ======================
  {
    id: "beb-1",
    name: "Coca Cola 500ml",
    price: 1900,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    category: "Bebidas",
  },
  {
    id: "beb-2",
    name: "Sprite 500ml",
    price: 1800,
    image: "https://images.unsplash.com/photo-1690988109041-458628590a9e?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bebidas",
  },
  {
    id: "beb-3",
    name: "Agua Mineral Sin Gas",
    price: 1300,
    image: "https://images.unsplash.com/photo-1638688569176-5b6db19f9d2a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bebidas",
  },
  {
    id: "beb-4",
    name: "Cerveza Quilmes 473ml",
    price: 2300,
    image: "https://cepadevinos.com/wp-content/uploads/2021/01/7792798012923_02_nuevopack.jpg",
    category: "Bebidas",
  },
  {
    id: "beb-5",
    name: "Jugo de Naranja Natural",
    price: 2600,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bebidas",
  },
  {
    id: "beb-6",
    name: "Agua Saborizada Limón",
    price: 1700,
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=80",
    category: "Bebidas",
  },

  // ====================== POSTRES ======================
  {
    id: "pos-1",
    name: "Flan con Dulce de Leche",
    price: 3400,
    image: "https://images.unsplash.com/photo-1702728109878-c61a98d80491?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Postres",
  },
  {
    id: "pos-2",
    name: "Helado de Chocolate",
    price: 2900,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    category: "Postres",
  },
  {
    id: "pos-3",
    name: "Chocotorta",
    price: 3800,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    category: "Postres",
  },
  {
    id: "pos-4",
    name: "Tiramisú Casero",
    price: 4100,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Postres",
  },
  {
    id: "pos-5",
    name: "Budín de Pan con Dulce",
    price: 3100,
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/DDU6RA4XHNE2VEABCFML4X2APM.png",
    category: "Postres",
  },
  {
    id: "pos-6",
    name: "Alfajores de Maicena (x3)",
    price: 2100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS458PIgiCJX6CvkR7nR-2WtoYWveT635I2hA&s",
    category: "Postres",
  },
];