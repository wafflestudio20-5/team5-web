import { useEffect, useMemo, useState } from "react";
import { fetchAllShopProducts } from "../../api/shop";
import Header from "../../components/header";
import ShopProduct from "../../components/shop/shop-product";
import { Brands, Categories, shopProduct } from "../../types/shop";
import {
  DeleteFilterButton,
  DeliveryTagChip,
  DeliveryTagWrapper,
  FilterHeader,
  FilterHeaderWrapper,
  FilterStatus,
  FilterWrapper,
  ProductWrapper,
  RightSideWrapper,
  SelectedFilter,
  SelectedFilterCloseButton,
  SelectedFilterName,
  SelectedFilterWrapper,
  Wrapper,
} from "./shop-page.styled";
import CircularProgress from "@mui/material/CircularProgress";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ShopBrandFilter from "../../components/shop/shop-brand-filter";
import ShopCategoryFilter from "../../components/shop/shop-category-filter";
import { useIntersect } from "../../hooks/useIntersect";
import { DeliveryTagList } from "../../data/delivertyTagList";
import CloseIcon from "@mui/icons-material/Close";

interface FetchedData {
  count: number;
  previous: string;
  next: string;
  results: shopProduct[];
}

const ShopPage = () => {
  const [filters, setFliters] = useState<string[]>([]);
  const [brand, setBrand] = useState<Brands[]>([]);
  const [category, setCategory] = useState<Categories | null>(null);
  const [delivery, setDelivery] = useState<Categories | null>(null);

  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    FetchedData,
    AxiosError
  >(
    ["allShopProducts", brand, category, delivery],
    ({ pageParam = 1 }) =>
      fetchAllShopProducts({ pageParam, brand, category, delivery }),
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
        <RightSideWrapper>
          <DeliveryTagWrapper>
            {DeliveryTagList.map((tag) => (
              <DeliveryTagChip
                key={tag.id}
                number={tag.id}
                selected={tag === delivery}
                onClick={() => setDelivery(tag)}
              >
                {tag.korName}
              </DeliveryTagChip>
            ))}
          </DeliveryTagWrapper>
          <SelectedFilterWrapper>
            {brand.map((item) => (
              <SelectedFilter key={item.id}>
                <SelectedFilterName>{item.name}</SelectedFilterName>
                <SelectedFilterCloseButton
                  onClick={() =>
                    setBrand((prev) => prev.filter((el) => el !== item))
                  }
                >
                  <CloseIcon sx={{ width: "12px", height: "12px" }} />
                </SelectedFilterCloseButton>
              </SelectedFilter>
            ))}
            {category ? (
              <SelectedFilter>
                <SelectedFilterName>{category.korName}</SelectedFilterName>
                <SelectedFilterCloseButton onClick={() => setCategory(null)}>
                  <CloseIcon sx={{ width: "12px", height: "12px" }} />
                </SelectedFilterCloseButton>
              </SelectedFilter>
            ) : null}
          </SelectedFilterWrapper>
          <ProductWrapper>
            {products.map((product) => (
              <div key={product.id}>
                <ShopProduct product={product} />
              </div>
            ))}
            {isFetching && hasNextPage && <CircularProgress />}
            <div style={{ height: "1px" }} ref={ref}></div>
          </ProductWrapper>
        </RightSideWrapper>
      </Wrapper>
    </>
  );
};

export default ShopPage;
