import { useState } from "react";
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { shopItemExample } from "../../data/shopListExample";
import { ShopItem } from "../../types/shopItem";
import {
  BrandText,
  ContentContainer,
  GridWrapper,
  ImageContainer,
  NameEngText,
  NameKorText,
  Wrapper,
} from "./product-page-detail.styled";

const ProductPageDetail = () => {
  const id = useParams().productID;
  const defaultItemList: ShopItem[] = shopItemExample;
  const [itemList, setItemList] = useState(defaultItemList);
  const item = itemList.filter((item) => item.id === Number(id))[0];
  const image = itemList.filter((item) => item.id === Number(id))[0].img;
  return (
    <Wrapper>
      <GridWrapper>
        <ImageContainer>
          <SimpleImageSlider
            width={550}
            height={550}
            images={image}
            showBullets={false}
            showNavs={true}
            navSize={25}
            bgColor={"#efefef"}
            style={{ display: "inline-block", margin: "auto" }}
          />
        </ImageContainer>
        <ContentContainer>
          <BrandText>{item.brand}</BrandText>
          <NameEngText>{item.nameEng}</NameEngText>
          <NameKorText>{item.nameKor}</NameKorText>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
          <div>ScrollTest</div>
        </ContentContainer>
      </GridWrapper>
    </Wrapper>
  );
};

export default ProductPageDetail;
