export interface Product {
  id: number;
  name: string;
  seller: string;
  price: number;
  image: string;
  rating: number;
  sales: number;
  freeShipping: boolean;
  stock: string;
  um?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aguacate Hass Premium",
    seller: "Finca El Paraíso",
    price: 15000,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    sales: 150,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 2,
    name: "Mango Tommy Orgánico",
    seller: "Frutas del Valle",
    price: 12000,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    sales: 230,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 3,
    name: "Plátano Maduro",
    seller: "Cosechas del Caribe",
    price: 8000,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
    rating: 4.3,
    sales: 180,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 4,
    name: "Tomates Orgánicos",
    seller: "Huerta Familiar",
    price: 6000,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    sales: 320,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 5,
    name: "Papaya Dulce",
    seller: "Frutales del Atlántico",
    price: 9000,
    image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    sales: 90,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 6,
    name: "Limones Tahití",
    seller: "Cítricos del Norte",
    price: 5000,
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80",
    rating: 4.4,
    sales: 250,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 7,
    name: "Piña Gold",
    seller: "Frutas Tropicales",
    price: 7000,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    sales: 200,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 8,
    name: "Naranjas Valencia",
    seller: "Huerto Don José",
    price: 10000,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    sales: 280,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 9,
    name: "Fresas Frescas",
    seller: "Berries Premium",
    price: 13000,
    image: "https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    sales: 170,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 10,
    name: "Guayaba Rosada",
    seller: "Finca La Victoria",
    price: 4000,
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=500&q=80",
    rating: 4.2,
    sales: 120,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 11,
    name: "Pechuga de Pollo",
    seller: "Granja Avícola El Corral",
    price: 18000,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    sales: 280,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 12,
    name: "Lomo de Cerdo",
    seller: "Carnes Premium",
    price: 22000,
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    sales: 150,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 13,
    name: "Queso Costeño",
    seller: "Lácteos del Caribe",
    price: 15000,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    sales: 320,
    freeShipping: true,
    stock: "Disponible",
    um: "kg"
  },
  {
    id: 14,
    name: "Huevos Orgánicos",
    seller: "Granja Feliz",
    price: 16000,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    sales: 450,
    freeShipping: true,
    stock: "Disponible",
    um: "docena"
  },
  {
    id: 15,
    name: "Pan Artesanal",
    seller: "Panadería La Tradición",
    price: 8000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    sales: 180,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "unidad"
  },
  {
    id: 16,
    name: "Aceite de Oliva Extra Virgen",
    seller: "Abarrotes Don Pedro",
    price: 25000,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    sales: 90,
    freeShipping: true,
    stock: "Disponible",
    um: "litro"
  },
  {
    id: 17,
    name: "Miel Pura",
    seller: "Apiario Natural",
    price: 20000,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    sales: 150,
    freeShipping: true,
    stock: "Disponible",
    um: "litro"
  },
  {
    id: 18,
    name: "Café Orgánico",
    seller: "Cafetales del Sur",
    price: 30000,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    sales: 280,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "kg"
  },
  {
    id: 19,
    name: "Artesanía en Barro",
    seller: "Artesanos Unidos",
    price: 45000,
    image: "https://images.unsplash.com/photo-1513096010445-c8e05a28b0d0?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    sales: 60,
    freeShipping: true,
    stock: "Disponible",
    um: "unidad"
  },
  {
    id: 20,
    name: "Tejido Wayúu",
    seller: "Artesanías Ancestrales",
    price: 80000,
    image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    sales: 45,
    freeShipping: true,
    stock: "¡POCAS UNIDADES!",
    um: "unidad"
  }
];