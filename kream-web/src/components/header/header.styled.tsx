import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 1001;
`;

export const UserPage = styled.div`
  box-sizing: border-box;
  width: 100%;
  // height: 20px;
  padding: 5px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2%;
  justify-content: end;
  border-bottom: 1px solid #e5e5e5;
`;

export const UserFont = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
  text-decoration-line: none;
`;

export const OtherPage = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 40px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

export const PagePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  column-gap: 50%;
`;

export const OtherFont = styled.p`
  font-size: 18px;
  color: black;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 115px;
  height: 20px;
`;
