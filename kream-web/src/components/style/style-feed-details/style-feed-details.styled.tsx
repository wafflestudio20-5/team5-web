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

export const FeedCommentOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const FeedComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FeedCommentProfile = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.1);
`;

export const FeedCommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const FeedCommentContentHeader = styled.div`
  display: flex;
  column-gap: 2px;
  align-items: center;
`;

export const FeedCommentNickname = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const FeedCommentContent = styled.p`
  font-size: 13px;
  margin: 0;
`;

export const FeedCommentDate = styled.p`
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;
