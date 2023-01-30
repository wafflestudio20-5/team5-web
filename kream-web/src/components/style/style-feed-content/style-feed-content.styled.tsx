import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7em;
`;

export const FeedInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.1);
`;

export const Username = styled.div`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.8);
`;

export const Content = styled.div`
  font-size: 15px;
`;

export const LikeIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const LikeIcon = styled.img`
  width: 20px;
  height: 20px;
  color: rgba(34, 34, 34, 0.5);
`;

export const LikeNum = styled.p`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
  vertical-align: middle;
  margin: 0;
`;

export const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
