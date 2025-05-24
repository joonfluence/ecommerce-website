export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  gender: 'men' | 'women' | 'unisex';
  image: string;
  images: string[];
} 