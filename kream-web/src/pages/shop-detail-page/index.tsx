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

const ShopDetailPage = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, isLoading } = useQuery<shopProduct, AxiosError>({
    queryKey: ["shopProduct", id],
    queryFn: () => fetchShopProduct(id),
  });

  const shopCommentData = useQuery<StyleFeedComment[], AxiosError>({
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
                  <SizeTitle>?????????</SizeTitle>
                  <SizeButtonWrapper>
                    <SizeTitle>?????? ?????????</SizeTitle>
                  </SizeButtonWrapper>
                </SizeWrapper>
                <PriceWrapper>
                  <PriceTitle>?????? ?????????</PriceTitle>
                  <Price>
                    {data?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    ???
                  </Price>
                </PriceWrapper>
                <ButtonWrapper>
                  <BidButtonWrapper>
                    <BidButton name="buy">
                      <BidButtonTitle>??????</BidButtonTitle>
                      <BidButtonPriceWrapper>
                        <BidButtonPrice>
                          {data?.price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ???
                        </BidButtonPrice>
                        <BidButtonPriceInfo>?????? ?????????</BidButtonPriceInfo>
                      </BidButtonPriceWrapper>
                    </BidButton>
                    <BidButton name="sell">
                      <BidButtonTitle>??????</BidButtonTitle>
                      <BidButtonPriceWrapper>
                        <BidButtonPrice>
                          {data?.price
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ???
                        </BidButtonPrice>
                        <BidButtonPriceInfo>?????? ?????????</BidButtonPriceInfo>
                      </BidButtonPriceWrapper>
                    </BidButton>
                  </BidButtonWrapper>
                  <WishButton onClick={handleWish}>
                    <Icon alt="wish-icon" src={WishIcon} />
                    <WishButtonTitle>????????????</WishButtonTitle>
                    <WishButtonInfo>{data?.wishes}</WishButtonInfo>
                  </WishButton>
                </ButtonWrapper>
              </DetailWrapper>
            </InfoHeader>
            <InfoDeliveryDetailWrapper>
              <InfoDeliveryDetailTitle>?????? ??????</InfoDeliveryDetailTitle>
              <InfoDeliveryDetail>
                <DeliveryImage alt="delivery-image" src={DeliveryImage1} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>????????????</strong> 5,000???
                  </DeliveryName>
                  <DeliveryDate>?????? ????????? ?????? ?????? ??????</DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <DeliveryImage alt="delivery-image" src={DeliveryImage2} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>????????????</strong> 3,000???
                  </DeliveryName>
                  <DeliveryDate>
                    ?????? ??? ?????? ??? 5-7??? ??? ?????? ??????
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
            </InfoDeliveryDetailWrapper>
            <InfoDeliveryDetailWrapper>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage1} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>100% ?????? ??????</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    KREAM-WAFFLE?????? ????????? ????????? ????????? ?????? ??????, ????????????
                    3?????? ???????????????.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage2} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>????????? ?????? ??????</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    ?????? ????????? ??????????????? ????????? ???, ????????? ????????? ?????????
                    ???????????? ???????????? ?????? ????????? ???????????????.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
              <InfoDeliveryDetail>
                <EnsureImage alt="delivery-image" src={EnsureImage3} />
                <DeliveryNameWrapper>
                  <DeliveryName>
                    <strong>?????? ?????? ?????????</strong>
                  </DeliveryName>
                  <DeliveryDate>
                    ????????? ????????? ????????? ????????? KREAM-WAFFLE??? ?????? ??????
                    ???????????? ????????? ????????? ???????????????.
                  </DeliveryDate>
                </DeliveryNameWrapper>
              </InfoDeliveryDetail>
            </InfoDeliveryDetailWrapper>
            <CommentButtonWrapper>
              <CommentButtonTitle>
                ?????? <strong>{shopCommentData.data?.length}</strong>???
              </CommentButtonTitle>
              <CommentButton onClick={handleCommentButtonClick}>
                ?????? ????????????
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
