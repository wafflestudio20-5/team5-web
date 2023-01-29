import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
`;
export const EnglishName = styled.p`
  font-size: 13px;
  margin: 0;
`;

export const KoreanName = styled.p`
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;
