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
  brand_name: string;
  productimage_urls: string[];
}

export interface Brands {
  id: number;
  name: string;
}

export interface Categories {
  id: number;
  engName: string;
  korName: string;
}
