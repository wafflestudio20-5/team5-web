import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 40px;
  overflow: auto;
`;

export const ImageWrapper = styled.div`
  width: 45%;
  display: flex;
  top: 100px;
  position: fixed;
  padding: 0 4%;
  overflow: hidden;
`;

// fadein, fadeout 해야됨
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}
`;

export const ImageSlideWrapper = styled.div`
  width: 100%;
  display: flex;
  //   transition: all 0.2s ease-out;
  //   animation: ${fadeIn} 0.15s ease-out;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const PreviousProductButton = styled.button`
  position: absolute;
  top: 50%;
  left: 40px;
  width: 44px;
  height: 44px;
  padding: 0;

  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextProductButton = styled.button`
  position: absolute;
  top: 50%;
  right: 40px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageOrderWrapper = styled.div`
  display: flex;
  width: 80%;
  position: absolute;
  top: 90%;
  left: 10%;
  border: 0;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const ImageOrder = styled.div<{ selected: boolean }>`
  height: ${(props) => (props.selected ? "2px" : "1px")};
  flex: 1;
  border: 0;
  background-color: ${(props) => (props.selected ? "black" : "#c0c0c0")};
`;

export const InfoWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 1px solid #ebebeb;
  padding: 0 4%;
  margin-left: 50%;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 9px;
  //   padding: 0;
  //   border-bottom: 2px solid #222;
  //   width: max-content;
  text-decoration: underline;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const EngName = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const KorName = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 0 9px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const SizeTitle = styled.p`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
  margin: 0;
`;

export const SizeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const SizeButtonTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 11px;
`;

export const PriceTitle = styled.p`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
  margin: 0;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
`;

export const BidButtonWrapper = styled.div`
  display: flex;

  align-items: center;
  column-gap: 10px;
  width: 100%;
`;
export const BidButton = styled.button<{ name: string }>`
  display: flex;
  height: 60px;
  color: #fff;
  border-radius: 10px;
  align-items: center;
  border: 0;
  flex: 1;
  background-color: ${(props) =>
    props.name === "buy" ? "#ef6253" : "#41b979"};
`;

export const BidButtonTitle = styled.div`
  display: flex;
  width: 55px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BidButtonPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const BidButtonPrice = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  color: #fff;
`;

export const BidButtonPriceInfo = styled.p`
  font-size: 11px;
  margin: 0;
  color: #fff;
`;

export const WishButton = styled.button`
  display: flex;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
  height: 60px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background-color: white;
  margin-top: 12px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const WishButtonTitle = styled.p`
  font-size: 15px;
  margin: 0;
`;

export const WishButtonInfo = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
`;
