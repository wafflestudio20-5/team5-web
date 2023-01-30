import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { fetchBrands } from "../../../api/shop";
import { Brands } from "../../../types/shop";

import {
  FilterContent,
  FilterMenuWrapper,
  FilterTextWrapper,
  FilterTitle,
  FilterTitleWrapper,
  OpenCloseButton,
  Wrapper,
} from "./shop-filter.styled";

interface ShopFilterProps {
  filterName: string;
}

interface FetchedData {
  count: number;
  previous: string | null;
  next: string | null;
  results: Brands[];
}

const ShopFilter = ({ filterName }: ShopFilterProps) => {
  const [open, setOpen] = useState(false);

  const { data } = useQuery<FetchedData, AxiosError>({
    queryKey: ["shopbrands"],
    queryFn: fetchBrands,
  });

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
          {data?.results.map((brand) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "10px",
              }}
              key={brand.id}
            >
              <input type="checkbox" value={brand.name} />
              <div>{brand.name}</div>
            </div>
          ))}
        </FilterMenuWrapper>
      ) : null}
    </Wrapper>
  );
};

export default ShopFilter;
