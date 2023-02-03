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
  align-items: center;
`;

export const Profile = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.1);
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

export const FollowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowButton = styled.button<{
  followed: boolean | string | null;
}>`
  height: 30px;
  width: 82px;
  background-color: ${(props) => (props.followed === true ? "white" : "black")};
  color: ${(props) =>
    props.followed === true ? "rgba(34,34,34,.8)" : "white"};
  border: ${(props) =>
    props.followed === true ? "1px solid #d3d3d3" : "1px solid black"};
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
`;
