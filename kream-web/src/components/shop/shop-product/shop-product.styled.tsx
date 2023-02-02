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

export const DeliveryType = styled.div<{ deliveryType: string }>`
  display: flex;
  padding: 0 4px;
  width: max-content;
  align-items: center;
  height: 20px;
  column-gap: 3px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.deliveryType === "immediate" ? "#f2f9f6" : "#f1f0ff"};
`;

export const DeliveryThunderImage = styled.img`
  width: 11px;
  height: 13px;
`;

export const DeliveryName = styled.p<{ deliveryType: string }>`
  font-size: 10px;
  margin: 0;
  color: ${(props) =>
    props.deliveryType === "immediate" ? "#00e169" : "#7c72ee"};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const PriceInfo = styled.p`
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const ProductUserWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 12px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

export const IconInfo = styled.p`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;
