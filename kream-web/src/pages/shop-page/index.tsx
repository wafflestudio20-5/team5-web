import { useMemo, useState } from "react";
import { fetchAllShopProducts } from "../../api/shop";
import Header from "../../components/header";
import ShopProduct from "../../components/shop/shop-product";
import { Brands, Categories, shopProduct } from "../../types/shop";
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
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ShopBrandFilter from "../../components/shop/shop-brand-filter";
import ShopCategoryFilter from "../../components/shop/shop-category-filter";
import { useIntersect } from "../../hooks/useIntersect";

interface FetchedData {
  count: number;
  previous: string;
  next: string;
  results: shopProduct[];
}

const ShopPage = () => {
  const [brand, setBrand] = useState<Brands[]>([]);
  const [category, setCategory] = useState<Categories | null>(null);

  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    FetchedData,
    AxiosError
  >(
    ["allShopProducts", brand, category],
    ({ pageParam = 1 }) => fetchAllShopProducts({ pageParam, brand, category }),
    {
      getNextPageParam: ({ next }) =>
        next?.length > 0
          ? Number(next.split("page")[1].split("&")[0].slice(1))
          : undefined,
    }
  );

  const products = useMemo(
    () => (data ? data.pages.flatMap((data) => data.results) : []),
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
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
          <ShopCategoryFilter
            filterName="카테고리"
            filterType={category}
            setFilterType={setCategory}
          />
          <ShopBrandFilter
            filterName="브랜드"
            filterType={brand}
            setFilterType={setBrand}
          />
        </FilterWrapper>
        <ProductWrapper>
          {products.map((product) => (
            <div key={product.id}>
              <ShopProduct product={product} />
            </div>
          ))}
          {isFetching && hasNextPage && <CircularProgress />}
          <div style={{ height: "1px" }} ref={ref}></div>
        </ProductWrapper>
      </Wrapper>
    </>
  );
};

export default ShopPage;
