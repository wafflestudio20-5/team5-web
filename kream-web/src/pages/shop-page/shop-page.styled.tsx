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
