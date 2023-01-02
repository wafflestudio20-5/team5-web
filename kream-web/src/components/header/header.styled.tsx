import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserPage = styled.div`
  width: 90%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2%;
  justify-content: end;
`;

export const UserFont = styled.p`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
  text-decoration-line: none;
`;

export const OtherPage = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PagePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  column-gap: 50%;
`;

export const OtherFont = styled.p`
  font-size: 15px;
  color: black;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 115px;
  height: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
