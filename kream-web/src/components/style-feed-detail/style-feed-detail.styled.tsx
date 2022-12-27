import styled from "@emotion/styled";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7em;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const Username = styled.div`
  font-size: 15px;
  color: grey;
`;

export const Content = styled.div`
  font-size: 15px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
`;

export const EachIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 3px;
`;
