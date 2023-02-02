import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-right: 5%;
  margin-left: 5%;
`;

export const FilterWrapper = styled.div`
  min-width: 210px;
  width: 210px;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

export const FilterHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0 15px;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
`;

export const FilterStatus = styled.div``;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeliveryTagWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 10px;
`;

interface DeliveryTagChipProps {
  number: number;
  selected: boolean;
}

export const DeliveryTagChip = styled.div<DeliveryTagChipProps>`
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: max-content;
  border: 1px solid #ebebeb;
  border-radius: 17px;
  padding: 0 9px;
  background-color: ${(props) =>
    props.selected ? (props.number === 1 ? "#48b179" : "#7c72ee") : null};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

export const SelectedFilterWrapper = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const SelectedFilter = styled.div`
  display: flex;
  padding: 4px 2px 4px 10px;
  background-color: #f4f4f4;
  border-radius: 6px;
  width: max-content;
  align-items: center;
`;

export const SelectedFilterName = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const SelectedFilterCloseButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`;

export const DeleteFilterButton = styled.button`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
  background-color: white;
  border: 0;
  text-decoration: underline;
`;
