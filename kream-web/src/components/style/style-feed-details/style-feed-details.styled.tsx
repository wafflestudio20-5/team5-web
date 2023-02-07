import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 720px;
  flex-direction: column;
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
`;

export const FeedImageWrapper = styled.div`
  width: 100%;
`;

export const FeedItemTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const FeedItemTagInfo = styled.p`
  font-size: 15px;
`;

export const FeedItemTagList = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const FeedContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const FeedContentIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const FeedContentIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FeedLikesInfo = styled.p`
  font-size: 14px;
`;

export const FeedContentTextWrapper = styled.div`
  width: 100%;
`;

export const FeedCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const FeedCommentInfo = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const MoreCommentButton = styled.button`
  height: 30px;
  display: flex;
  padding: 0;
  align-items: center;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
  cursor: pointer;
`;
