import { shopProduct } from "../../../types/shop";
import {
  BrandName,
  DeliveryName,
  DeliveryThunderImage,
  DeliveryType,
  EnglishName,
  Icon,
  IconInfo,
  IconWrapper,
  KoreanName,
  Price,
  PriceInfo,
  PriceWrapper,
  ProductInfoWrapper,
  ProductUserWrapper,
  Thumbnail,
  Wrapper,
} from "./shop-product.styled";

import WishIcon from "../../../assets/wish-icon.svg";
import ShareIcon from "../../../assets/share-icon.svg";
import ThunderIcon from "../../../assets/thunder-icon.svg";
import { StyledLink } from "../../../utils/StyledComponents";
interface Product {
  product: shopProduct;
}

const ShopProduct = ({ product }: Product) => {
  return (
    <Wrapper>
      <StyledLink to={`/shop/details/${product.id}`}>
        <Thumbnail alt="product-thumbnail" src={product.productimage_urls[0]} />
        <ProductInfoWrapper>
          <BrandName>{product.brand_name}</BrandName>
          <EnglishName>{product.eng_name}</EnglishName>
          <KoreanName>{product.kor_name}</KoreanName>
          <DeliveryType deliveryType={product.delivery_tag}>
            {product.delivery_tag === "immediate" ? (
              <DeliveryThunderImage alt="thunder-imgae" src={ThunderIcon} />
            ) : null}
            <DeliveryName deliveryType={product.delivery_tag}>
              {product.delivery_tag === "immediate" ? "빠른배송" : "브랜드배송"}
            </DeliveryName>
          </DeliveryType>
          <PriceWrapper>
            <Price>
              {product.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </Price>
            <PriceInfo>
              {product.delivery_tag === "immediate" ? "즉시 구매가" : "구매가"}
            </PriceInfo>
          </PriceWrapper>
        </ProductInfoWrapper>
      </StyledLink>
      <ProductUserWrapper>
        <IconWrapper>
          <Icon alt="wish-icon" src={WishIcon} />
          <IconInfo>{product.wishes}</IconInfo>
        </IconWrapper>
        <IconWrapper>
          <Icon alt="share-icon" src={ShareIcon} />
          <IconInfo>{product.shares}</IconInfo>
        </IconWrapper>
      </ProductUserWrapper>
    </Wrapper>
  );
};

export default ShopProduct;
