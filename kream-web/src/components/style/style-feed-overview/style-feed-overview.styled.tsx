import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";
export const Wrapper = styled.div`
  margin-right: 10%;
  margin-left: 10%;
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

export const MasonryWrapper = styled.div`
  column-count: 4;
  column-gap: 1em;
`;

export const FeedWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const FeedImg = styled.div`
  width: 100%;
  border-radius: 15px;
`;

export const FeedContent = styled.div`
  width: 100%;
`;
