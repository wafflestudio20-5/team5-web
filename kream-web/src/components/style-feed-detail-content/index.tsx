import { useEffect, useState } from "react";
import {
  ContentText,
  MoreButton,
  Wrapper,
} from "./style-feed-detail-content.styled";

interface StyleFeedDetailContent {
  content: string;
}

const StyleFeedDetailContent: React.FC<StyleFeedDetailContent> = ({
  content,
}) => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    if (content.length < 10 && !content.includes("\n")) {
      setOpened(true);
    }
  }, []);
  return (
    <Wrapper>
      <ContentText>
        {!opened ? content.slice(0, 5) + "..." : content}
      </ContentText>
      {!opened ? (
        <MoreButton onClick={() => setOpened(true)}>더보기</MoreButton>
      ) : null}
    </Wrapper>
  );
};

export default StyleFeedDetailContent;
