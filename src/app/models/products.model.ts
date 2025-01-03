export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
};

export type CartProduct = Omit<Product, 'stock'> & {
  quantity: number;
};

export type Cart = {
  products: CartProduct[];
  count: number;
};
