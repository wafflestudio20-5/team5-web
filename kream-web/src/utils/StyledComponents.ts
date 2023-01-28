import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 36px;
  line-height: 34px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background-color: white;
  color: rgba(34, 34, 34, 0.8);
  font-size: 12px;
  padding: 0 14px;
`;
