export {};

declare global {
  interface ProductItem {
    id: number;
    createdAt: number;
    type: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    sale: number;
  }

  interface TypeFilterProductItems {
    type: string;
    value: ProductItem[];
  }
}
