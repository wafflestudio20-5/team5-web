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

export const PageInfoHeader = styled.h3`
  font-size: 24px;
  margin: 0 0 16px 0;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  border-top: 3px solid black;
  border-bottom: 1px solid #ebebeb;
  align-items: center;
  column-gap: 10px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 38px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(244 244 244);
  border: 1px solid rgba(34, 34, 34, 0.05);
`;

export const ImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nickname = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  margin-top: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  margin-bottom: 58px;
`;

export const InfoName = styled.h4`
  font-size: 18px;
  margin: 0;
`;

export const InfoDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid #ebebeb;
  align-items: center;
`;

export const InfoDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDetailName = styled.h5`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const InfoDetailContent = styled.p`
  font-size: 16px;
  padding-top: 6px;
  margin: 0;
`;
