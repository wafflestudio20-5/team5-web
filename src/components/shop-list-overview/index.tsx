import { type } from "os";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shopItemExample } from "../../data/shopListExample";
import { ShopItem } from "../../types/shopItem";
import ShopListItembox from "../shop-list-itembox";
import { Wrapper } from "./shop-list-overview.styled";
const ShopListOverview = () => {
  const defaultItemList: ShopItem[] = shopItemExample;
  const [itemList, setItemList] = useState(defaultItemList);
  const navigate = useNavigate();
  return (
    <Wrapper>
      {itemList.map((item, index) => (
        <ShopListItembox key={index} boxItem={item} />
      ))}
    </Wrapper>
  );
};

export default ShopListOverview;
