import { FeedThumbnail, Wrapper } from "./style-feed-thumbnail.styled";

interface StyleFeedThumbnailProps {
  thumbnail: string;
  number?: number | null;
}

const StyleFeedThumbnail = ({ thumbnail, number }: StyleFeedThumbnailProps) => {
  return (
    <Wrapper>
      <FeedThumbnail alt="style-feed" src={thumbnail} />
    </Wrapper>
  );
};

export default StyleFeedThumbnail;
