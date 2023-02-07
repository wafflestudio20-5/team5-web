import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: row;
  margin-top: 40px;
  margin-right: 10%;
  margin-left: 10%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const MyProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  padding: 23px 0 23px 23px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  align-items: center;
  column-gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(244 244 244);
  border: 1px solid rgba(34, 34, 34, 0.05);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const Nickname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Email = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  margin-top: 15px;
`;
