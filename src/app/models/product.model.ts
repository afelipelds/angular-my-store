export interface Category {
  id: string;
  name: string;
}

export interface Product {
  category: Category;
  description?: string;
  id: string;
  images: string[];
  price: number;
  title: string;
}
