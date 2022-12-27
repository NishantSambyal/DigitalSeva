export interface Data {
  product_id: number;
  product_name: string;
  price: number;
  discount_pricce?: any;
  image: string;
  icon: string;
  description: string;
  status?: any;
  deleted_at?: any;
  created_at: Date;
  updated_at: Date;
}

export interface ProductDetailType {
  status: boolean;
  data: Data;
  message: string;
}
