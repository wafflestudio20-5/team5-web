export interface shopProduct {
  brand: number;
  delivery_tag: string;
  eng_name: string;
  id: number;
  kor_name: string;
  price: number | null;
  productimage_set: number[];
  shares: number;
  wishes: number;
}

export interface Brands {
  id: number;
  name: string;
}
