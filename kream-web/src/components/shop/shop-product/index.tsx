import axios from "axios";
import { useEffect, useState } from "react";
import { fetchBrandName, fetchShopProductImages } from "../../../api/shop";
import { API_URL } from "../../../libs/urls";
import { shopProduct } from "../../../types/shop";
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
  const [productBrand, setProductBrand] = useState();

  // useEffect(() => {
  //   const getProductImages = async () => {
  //     const res = await fetchShopProductImages(product.id);
  //     setProductThumbnail(res?.data.images[0].url);
  //   };

  //   const getBrandName = async () => {
  //     const res = await fetchBrandName(product.brand);

  //     setProductBrand(res?.data.name);
  //   };

  //   getProductImages();
  //   getBrandName();
  // }, [product]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          process.env.NODE_ENV === "development"
            ? `/shop/brands/${product.brand}`
            : `${API_URL}/shop/brands/${product.brand}`,
          {
            withCredentials: true,
          }
        ),
        axios.get(
          process.env.NODE_ENV === "development"
            ? `/shop/productinfos/${product.id}/images`
            : `${API_URL}/shop/productinfos/${product.id}/images`,
          {
            withCredentials: true,
          }
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          setProductBrand(res1.data.name);
          setProductThumbnail(res2.data.images[0].url);
        })
      );
  });

  return (
    <Wrapper>
      <Thumbnail alt="product-thumbnail" src={productThumbnail} />
      <ProductInfoWrapper>
        <BrandName>{productBrand}</BrandName>
        <EnglishName>{product.eng_name}</EnglishName>
        <KoreanName>{product.kor_name}</KoreanName>
      </ProductInfoWrapper>
    </Wrapper>
  );
};

export default ShopProduct;
