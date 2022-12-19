export interface Product {
  product_id: number;
  product_name: string;
  price: number;
  discount_pricce: null;
  image: string;
  icon: string;
  description: string;
  status: null;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
}
export interface Datum {
  category_id: number;
  name: string;
  description: string;
  image: string;
  status: number;
  slug: string;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  products: Product[];
}

export interface MenuType {
  status: boolean;
  data: Datum[];
}
