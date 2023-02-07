import {
  FeedImage,
  ImagesOrder,
  ImagesOrderWrapper,
  ImagesWrapper,
  NextFeedButton,
  PreviousFeedButton,
  Wrapper,
} from "./style-feed-images.styled";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";

interface StyleFeedImagesProps {
  images: string[];
}

const StyleFeedImages = ({ images }: StyleFeedImagesProps) => {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: "0%" });
  const [hover, setHover] = useState(false);

  const moveSlide = (direction: number) => {
    setCurrent((current) => current + direction);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <Wrapper>
      <ImagesWrapper
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style}
      >
        {current !== 0 && hover ? (
          <PreviousFeedButton onClick={() => moveSlide(-1)}>
            <KeyboardArrowLeftIcon />
          </PreviousFeedButton>
        ) : null}

        {images.map((image, i) => (
          <FeedImage key={i} alt="feed-image" src={image} />
        ))}
        {current !== images.length - 1 && hover ? (
          <NextFeedButton onClick={() => moveSlide(1)}>
            <KeyboardArrowRightIcon />
          </NextFeedButton>
        ) : null}
      </ImagesWrapper>
      {images.length > 1 ? (
        <ImagesOrderWrapper>
          {images.map((image, i) => (
            <ImagesOrder
              key={i}
              current={current === i}
              onClick={() => setCurrent(i)}
            />
          ))}
        </ImagesOrderWrapper>
      ) : null}
    </Wrapper>
  );
};

export default StyleFeedImages;
