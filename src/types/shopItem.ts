export interface ShopItem {
  id: number;
  brand: string;
  nameEng: string;
  nameKor: string;
  buyPrice: number;
  img: Array<{ url: string }>;
}
