import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ebebeb;
  padding: 16px 0;
`;

export const FilterTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const FilterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const FilterTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin: 0;
`;

export const FilterContent = styled.p`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const OpenCloseButton = styled.div`
  cursor: pointer;
  font-size: 25px;
  color: #bbbbbb;
`;

export const FilterMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 315px;
  row-gap: 5px;
  overflow-y: auto;
`;

export const FilterMenuListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;
