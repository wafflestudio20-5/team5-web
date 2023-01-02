import { styleFeedExample } from "../../data/styleFeedExample";
import { FeedThumbnail, Wrapper } from "./style-feed-thumbnail.styled";

interface StyleFeedThumbnail {
  thumbnail: string;
  number?: number | null;
}

const StyleFeedThumbnail: React.FC<StyleFeedThumbnail> = ({
  thumbnail,
  number,
}: StyleFeedThumbnail) => {
  return (
    <Wrapper>
      <FeedThumbnail alt="style-feed" src={thumbnail} />
    </Wrapper>
  );
};

export default StyleFeedThumbnail;
