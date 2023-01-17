import { useNavigate } from "react-router-dom";
import { ShopItem } from "../../types/shopItem";
import ShopListContents from "../shop-list-contents";
import ShopListThumbnail from "../shop-list-thumbnail";
import { GridWrapper, Wrapper } from "./shop-list-itembox.styled";

interface BoxProps {
  boxItem: ShopItem;
}

const ShopListItembox = ({ boxItem }: BoxProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate("/products/" + String(boxItem.id))}>
      <GridWrapper>
        <ShopListThumbnail src={boxItem.img[0].url} />
        <ShopListContents
          brand={boxItem.brand}
          nameEng={boxItem.nameEng}
          nameKor={boxItem.nameKor}
          buyPrice={boxItem.buyPrice}
        />
      </GridWrapper>
    </Wrapper>
  );
};

export default ShopListItembox;
