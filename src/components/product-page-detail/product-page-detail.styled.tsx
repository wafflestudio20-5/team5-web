import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 50px;
  border-left: 1px #e5e5e5 solid;
  overflow: scroll;
  height: 550px;
`;

export const BrandText = styled.div`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 3px solid black;
  width: fit-content;
`;

export const NameEngText = styled.div`
  font-size: 18px;
`;

export const NameKorText = styled.div`
  color: #adacac;
  font-size: 15px;
`;
