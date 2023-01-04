import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-itmes: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const Profile = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const SubInfo = styled.div`
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Nickname = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const UploadDate = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
  margin: 0;
`;

export const FollowButton = styled.button`
  height: 30px;
  width: 82px;
  background-color: black;
  color: white;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
`;
