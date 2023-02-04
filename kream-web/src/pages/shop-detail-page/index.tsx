import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { fetchShopComment, fetchShopProduct, wish } from "../../api/shop";
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
  InfoDeliveryDetailWrapper,
  InfoDeliveryDetailTitle,
  InfoDeliveryDetail,
  DeliveryNameWrapper,
  DeliveryImage,
  DeliveryName,
  DeliveryDate,
  EnsureImage,
  CommentButtonWrapper,
  CommentButtonTitle,
  CommentButton,
} from "./shop-detail-page.styled";
import CircularProgress from "@mui/material/CircularProgress";
import WishIcon from "../../assets/wish-icon.svg";
import DeliveryImage1 from "../../assets/shop-info-1.png";
import DeliveryImage2 from "../../assets/shop-info-2.png";
import EnsureImage1 from "../../assets/shop-ensure-1.png";
import EnsureImage2 from "../../assets/shop-ensure-2.png";
import EnsureImage3 from "../../assets/shop-ensure-3.png";

import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAppSelector } from "../../store/hooks";
import { StyleFeedComment } from "../../types/style";
import ShopProductCommentModal from "../../components/shop/shop-product-comment";

interface FetchedData {
  previous: string | null;
  next: string | null;
  results: StyleFeedComment[];
}

const ShopDetailPage = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, isLoading } = useQuery<shopProduct, AxiosError>({
    queryKey: ["shopProduct", id],
    queryFn: () => fetchShopProduct(id),
  });

  const shopCommentData = useQuery<FetchedData, AxiosError>({
    queryKey: ["shopProductComment", id, accessToken],
    queryFn: () => fetchShopComment({ id, accessToken }),
  });

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: "0%" });
  const [comment, setComment] = useState(false);

  const requestWish = useMutation({
    mutationFn: (id: string | undefined) => wish({ id, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["shopProduct", id]);
    },
  });

  const moveSlide = (direction: number) => {
    console.log(current, direction);
    if (
      data &&
      current + direction >= 0 &&
      current + direction < data.productimage_urls.length
    )
      setCurrent((current) => current + direction);
  };

  const handleWish = () => {
    if (!accessToken) {
      navigate("/login");
    } else {
      console.log("1");
      requestWish.mutate(id);
    }
  };

  const handleCommentButtonClick = () => {
    if (!accessToken) {
      navigate("/login");
    } else {
      setComment(true);
    }
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  useEffect(() => {
    if (comment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [comment]);

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
                  <WishButton onClick={handleWish}>
                    <Icon alt="wish-icon" src={WishIcon} />
                    <WishButtonTitle>관심상품</WishButtonTitle>
                    <WishButtonInfo>{data?.wishes}</WishButtonInfo>
                  </WishButton>
                </ButtonWrapper>
              </DetailWrapper>
            </InfoHeader>
            <InfoDeliveryDetailWrapper>
              <InfoDeliveryDetailTitle>배송 정보</InfoDeliveryDetailTitle>
              <InfoDeliveryDetail>
                <DeliveryImage alt="delivery-image" src={DeliveryImage1} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>빠른배송</strong> 5,000원
                  </DeliveryName>
                  <DeliveryDate>지금 결제시 모레 도착 예정</DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <DeliveryImage alt="delivery-image" src={DeliveryImage2} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>일반배송</strong> 3,000원
                  </DeliveryName>
                  <DeliveryDate>
                    검수 후 배송 ・ 5-7일 내 도착 예정
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
            </InfoDeliveryDetailWrapper>
            <InfoDeliveryDetailWrapper>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage1} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>100% 정품 보증</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    KREAM-WAFFLE에서 검수한 상품이 정품이 아닐 경우, 구매가의
                    3배를 보상합니다.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage2} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>엄격한 다중 검수</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의
                    체계적인 시스템을 거쳐 검수를 진행합니다.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage3} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>정품 인증 패키지</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    검수에 합격한 경우에 한하여 KREAM-WAFFLE의 정품 인증
                    패키지가 포함된 상품이 배송됩니다.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
            </InfoDeliveryDetailWrapper>
            <CommentButtonWrapper>
              <CommentButtonTitle>
                후기 <strong>{shopCommentData.data?.results.length}</strong>개
              </CommentButtonTitle>
              <CommentButton onClick={handleCommentButtonClick}>
                후기 확인하기
              </CommentButton>
            </CommentButtonWrapper>
          </InfoWrapper>
          {comment ? (
            <ShopProductCommentModal
              id={data?.id.toString()}
              product={data}
              handleCommentModal={setComment}
            />
          ) : null}
        </Wrapper>
      )}
    </>
  );
};

export default ShopDetailPage;
