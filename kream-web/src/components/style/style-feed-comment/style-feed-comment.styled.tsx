import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const CommentModalWrapper = styled.div`
  top: 0;
  left: auto;
  right: 0;
  width: 420px;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 24px;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedCommentHeader = styled.div`
  display: flex;
  height: 82px;
  align-items: center;
`;

export const FeedCommentHeaderTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const FeedCommentWithLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedCommentLikeWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: top;
  padding-top: 12px;
`;

export const FeedCommentLike = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const FeedComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  max-height: 260px;
  overflow-y: auto;
`;

export const FeedCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f4f4f4;
  padding-top: 10px;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: top;
`;
export const Profile = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.1);
  margin-right: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const ContentHeader = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const Nickname = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 13px;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const FeedCommentInputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 20px;
  border-top: 8px solid #f4f4f4;
  padding: 10px 0;
  align-items: center;
`;

export const FeedCommentInput = styled.input`
  height: 41px;
  flex: 1;
  border: 1px solid #ebebeb;
  background-color: #fafafa;
  border-radius: 41px;
  padding: 0 15px;
`;

export const FeedCommentInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  width: max-content;
  position: absolute;
  right: 15px;
  top: 23px;
  cursor: pointer;
`;

export const CommentLike = styled.p`
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0 2px;
`;

export const WriteReply = styled.p`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: bold;
  cursor: pointer;
  margin: 0 6px;
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
`;
