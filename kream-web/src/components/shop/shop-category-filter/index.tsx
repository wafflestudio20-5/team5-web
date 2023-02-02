import { Dispatch, SetStateAction, useState } from "react";
import { Categories } from "../../../types/shop";
import {
  FilterContent,
  FilterMenuListWrapper,
  FilterMenuWrapper,
  FilterTextWrapper,
  FilterTitle,
  FilterTitleWrapper,
  OpenCloseButton,
  Wrapper,
} from "./shop-category-filter";
import { CategoryList } from "../../../data/categoryList";

interface ShopFilterProps {
  filterName: string;
  filterType: Categories | null;
  setFilterType: Dispatch<SetStateAction<Categories | null>>;
}

const ShopCategoryFilter = ({
  filterName,
  filterType,
  setFilterType,
}: ShopFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleClickCheckBox = (item: Categories) => {
    if (filterType === item) {
      setFilterType(null);
    } else {
      setFilterType(item);
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
          {CategoryList.map((category) => (
            <FilterMenuListWrapper key={category.id}>
              <input
                onChange={() => handleClickCheckBox(category)}
                type="checkbox"
                checked={filterType === category ? true : false}
              />
              <div style={{ fontSize: "14px" }}>{category.korName}</div>
            </FilterMenuListWrapper>
          ))}
        </FilterMenuWrapper>
      ) : null}
    </Wrapper>
  );
};

export default ShopCategoryFilter;
