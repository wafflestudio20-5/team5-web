import { useEffect, useState } from "react";
import { fetchBrandName, fetchShopProductImages } from "../../api/shop";
import { shopProduct } from "../../types/shopProduct";
import {
  BrandName,
  EnglishName,
  KoreanName,
  ProductInfoWrapper,
  Thumbnail,
  Wrapper,
} from "./shop-product.styled";

interface Product {
  product: shopProduct;
}

const ShopProduct = ({ product }: Product) => {
  const [productThumbnail, setProductThumbnail] = useState();

  //   console.log(productThumbnail);
  //   useEffect(() => {
  //     const getProductImages = async () => {
  //       const res = await fetchShopProductImages(product.id);
  //       setProductThumbnail(res?.data.images[0].url);
  //     };

  //     // const getBrandName = async () => {
  //     //     const res = await fetchBrandName(product.brand);
  //     //     set
  //     // }

  //     getProductImages();
  //   }, [product]);

  return (
    <Wrapper>
      <Thumbnail alt="product-thumbnail" src={productThumbnail} />
      <ProductInfoWrapper>
        <BrandName>{product.brand}</BrandName>
        <EnglishName>{product.eng_name}</EnglishName>
        <KoreanName>{product.kor_name}</KoreanName>
      </ProductInfoWrapper>
    </Wrapper>
  );
};

export default ShopProduct;
