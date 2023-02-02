import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { fetchBrands } from "../../../api/shop";
import { Brands } from "../../../types/shop";

import {
  FilterContent,
  FilterMenuListWrapper,
  FilterMenuWrapper,
  FilterTextWrapper,
  FilterTitle,
  FilterTitleWrapper,
  OpenCloseButton,
  Wrapper,
} from "./shop-brand-filter.styled";

interface ShopFilterProps {
  filterName: string;
  filterType: Brands[];
  setFilterType: Dispatch<SetStateAction<Brands[]>>;
}

interface FetchedData {
  count: number;
  previous: string | null;
  next: string | null;
  results: Brands[];
}

const ShopBrandFilter = ({
  filterName,
  filterType,
  setFilterType,
}: ShopFilterProps) => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery<FetchedData, AxiosError>({
    queryKey: ["shopbrands"],
    queryFn: fetchBrands,
  });

  const handleClickCheckBox = (item: Brands) => {
    if (filterType.includes(item)) {
      setFilterType((prev) => prev.filter((el) => el !== item));
    } else {
      setFilterType((prev) => [...prev, item]);
    }
  };

  return (
    <Wrapper>
      <FilterTitleWrapper>
        <FilterTextWrapper>
          <FilterTitle>{filterName}</FilterTitle>
          {!open ? <FilterContent>모든 {filterName}</FilterContent> : null}
        </FilterTextWrapper>
        <OpenCloseButton onClick={() => setOpen((prev) => !prev)}>
          {!open ? "+" : "-"}
        </OpenCloseButton>
      </FilterTitleWrapper>
      {open ? (
        <FilterMenuWrapper>
          {data?.results.map((item) => (
            <FilterMenuListWrapper key={item.id}>
              <input
                onChange={() => handleClickCheckBox(item)}
                type="checkbox"
                checked={filterType.includes(item) ? true : false}
              />
              <div style={{ fontSize: "14px" }}>{item.name}</div>
            </FilterMenuListWrapper>
          ))}
        </FilterMenuWrapper>
      ) : null}
    </Wrapper>
  );
};

export default ShopBrandFilter;
