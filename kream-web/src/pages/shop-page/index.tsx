import { useCallback, useEffect, useRef, useState } from "react";
import { fetchShopProducts } from "../../api/shop";
import Header from "../../components/header";
import ShopProduct from "../../components/shop/shop-product";
import { shopProduct } from "../../types/shop";
import {
  DeleteFilterButton,
  FilterHeader,
  FilterHeaderWrapper,
  FilterStatus,
  FilterWrapper,
  ProductWrapper,
  Wrapper,
} from "./shop-page.styled";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ShopFilter from "../../components/shop/shop-filter";

interface FetchedData {
  count: number;
  previous?: string;
  next?: string;
  results: shopProduct[];
}

const ShopPage = () => {
  const [products, setProducts] = useState<shopProduct[]>([]);
  const [page, setPage] = useState(1);
  // const [hasNextPage, setNextPage] = useState(true);
  // const [isFetching, setFetching] = useState(false);

  const { data, isLoading } = useQuery<FetchedData, AxiosError>({
    queryKey: ["shopproducts", page],
    queryFn: () => fetchShopProducts(page),
  });

  // const getProducts = useCallback(async () => {
  //   const res = await fetchShopProducts(page);
  //   setPage((prev) => prev + 1);
  //   setProducts((prev) => [...prev, ...res?.data.results]);
  //   setNextPage(res?.data.next ? true : false);
  //   setFetching(false);
  // }, [page]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, offsetHeight } = document.documentElement;
  //     if (window.innerHeight + scrollTop >= offsetHeight) {
  //       setFetching(true);
  //     }
  //   };
  //   setFetching(true);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (isFetching && hasNextPage) {
  //     getProducts();
  //   } else if (!hasNextPage) {
  //     setFetching(false);
  //   }
  // }, [isFetching]);

  return (
    <>
      <Header />
      <Wrapper>
        <FilterWrapper>
          <FilterHeaderWrapper>
            <FilterHeader>
              <p style={{ fontSize: "14px", fontWeight: "bold", margin: "0" }}>
                필터
              </p>
              <FilterStatus></FilterStatus>
            </FilterHeader>
            <DeleteFilterButton>모두 삭제</DeleteFilterButton>
          </FilterHeaderWrapper>
          <ShopFilter filterName="카테고리" />
          <ShopFilter filterName="브랜드" />
          <ShopFilter filterName="가격" />
        </FilterWrapper>
        <ProductWrapper>
          {data?.results.map((product) => (
            <div key={product.id}>
              <ShopProduct product={product} />
            </div>
          ))}
          {isLoading && <CircularProgress />}
        </ProductWrapper>
      </Wrapper>
    </>
  );
};

export default ShopPage;
