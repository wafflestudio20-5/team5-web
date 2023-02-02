import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { fetchShopProduct } from "../../api/shop";
import Header from "../../components/header";
import { shopProduct } from "../../types/shop";
import {
  BrandName,
  ImageWrapper,
  BidButton,
  BidButtonPrice,
  BidButtonPriceInfo,
  BidButtonPriceWrapper,
  BidButtonTitle,
  BidButtonWrapper,
  ButtonWrapper,
  DetailWrapper,
  EngName,
  InfoHeader,
  InfoWrapper,
  KorName,
  NameWrapper,
  Price,
  PriceTitle,
  PriceWrapper,
  SizeButtonWrapper,
  SizeTitle,
  SizeWrapper,
  Title,
  Wrapper,
  WishButton,
  Icon,
  WishButtonTitle,
  WishButtonInfo,
  ImageSlideWrapper,
  ProductImage,
  PreviousProductButton,
  NextProductButton,
  ImageOrderWrapper,
  ImageOrder,
} from "./shop-detail-page.styled";
import CircularProgress from "@mui/material/CircularProgress";
import WishIcon from "../../assets/wish-icon.svg";
import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ShopDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery<shopProduct, AxiosError>({
    queryKey: ["shopProduct", id],
    queryFn: () => fetchShopProduct(id),
  });

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: "0%" });

  const moveSlide = (direction: number) => {
    setCurrent((current) => current + direction);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <>
      <Header />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Wrapper>
          <ImageWrapper>
            <ImageSlideWrapper style={style}>
              <PreviousProductButton onClick={() => moveSlide(-1)}>
                <KeyboardArrowLeftIcon
                  sx={{ width: "44px", height: "44px", color: "#d3d3d3" }}
                />
              </PreviousProductButton>

              {data?.productimage_urls.map((url, i) => (
                <ProductImage key={i} alt="product-image" src={url} />
              ))}

              <NextProductButton onClick={() => moveSlide(1)}>
                <KeyboardArrowRightIcon
                  sx={{ width: "44px", height: "44px", color: "#d3d3d3" }}
                />
              </NextProductButton>
            </ImageSlideWrapper>
            <ImageOrderWrapper>
              {data?.productimage_urls.map((url, i) => (
                <ImageOrder selected={i === current} key={url} />
              ))}
            </ImageOrderWrapper>
          </ImageWrapper>
          <InfoWrapper>
            <InfoHeader>
              <Title>
                <BrandName>{data?.brand_name}</BrandName>
                <NameWrapper>
                  <EngName>{data?.eng_name}</EngName>
                  <KorName>{data?.kor_name}</KorName>
                </NameWrapper>
              </Title>
              <DetailWrapper>
                <SizeWrapper>
                  <SizeTitle>사이즈</SizeTitle>
                  <SizeButtonWrapper>
                    <SizeTitle>모든 사이즈</SizeTitle>
                  </SizeButtonWrapper>
                </SizeWrapper>
                <PriceWrapper>
                  <PriceTitle>최근 거래가</PriceTitle>
                  <Price>
                    {data?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </Price>
                </PriceWrapper>
                <ButtonWrapper>
                  <BidButtonWrapper>
                    <BidButton name="buy">
                      <BidButtonTitle>구매</BidButtonTitle>
                      <BidButtonPriceWrapper>
                        <BidButtonPrice>
                          {data?.price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </BidButtonPrice>
                        <BidButtonPriceInfo>즉시 구매가</BidButtonPriceInfo>
                      </BidButtonPriceWrapper>
                    </BidButton>
                    <BidButton name="sell">
                      <BidButtonTitle>판매</BidButtonTitle>
                      <BidButtonPriceWrapper>
                        <BidButtonPrice>
                          {data?.price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </BidButtonPrice>
                        <BidButtonPriceInfo>즉시 판매가</BidButtonPriceInfo>
                      </BidButtonPriceWrapper>
                    </BidButton>
                  </BidButtonWrapper>
                  <WishButton>
                    <Icon alt="wish-icon" src={WishIcon} />
                    <WishButtonTitle>관심상품</WishButtonTitle>
                    <WishButtonInfo>{data?.wishes}</WishButtonInfo>
                  </WishButton>
                </ButtonWrapper>
              </DetailWrapper>
            </InfoHeader>
          </InfoWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default ShopDetailPage;
