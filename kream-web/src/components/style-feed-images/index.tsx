import { FeedImage, ImagesWrapper, Wrapper } from "./style-feed-images.styled";

interface StyleFeedImages {
  images: string[];
}

const StyleFeedImages: React.FC<StyleFeedImages> = ({ images }) => {
  return (
    <Wrapper>
      <ImagesWrapper>
        {images.map((image, i) => (
          <FeedImage key={i} alt="feed-image" src={image} />
        ))}
      </ImagesWrapper>
    </Wrapper>
  );
};

export default StyleFeedImages;
