import {
  BrandText,
  ListPriceText,
  NameEngText,
  NameKorText,
  Wrapper,
} from "./shop-list-contents.styled";

interface Cprops {
  brand: string;
  nameEng: string;
  nameKor: string;
  buyPrice: number;
}

const ShopListContents = ({ brand, nameEng, nameKor, buyPrice }: Cprops) => {
  return (
    <Wrapper>
      <BrandText>{brand}</BrandText>
      <NameEngText>{nameEng}</NameEngText>
      <NameKorText>{nameKor}</NameKorText>
      <ListPriceText>{buyPrice.toLocaleString()}원</ListPriceText>
    </Wrapper>
  );
};

export default ShopListContents;
