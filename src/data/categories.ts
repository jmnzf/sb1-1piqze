export interface Category {
  id: number;
  title: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Frutas y Verduras",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Carnes y Pescados",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Lácteos y Huevos",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Panadería",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Abarrotes",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80"
  }
];