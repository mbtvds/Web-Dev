export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  categoryId: number;
  likes: number;
}

export interface Category {
  id: number;
  name: string;
}