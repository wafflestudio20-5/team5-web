import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.1);
  margin-bottom: 5px;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  margin: 5px 0;
`;
export const ProfileIntro = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
  margin: 5px 0;
`;

export const FollowButton = styled.button<{
  followed: boolean | string | null | undefined;
}>`
  height: 40px;
  width: 140px;
  background-color: ${(props) => (props.followed === true ? "white" : "black")};
  color: ${(props) =>
    props.followed === true ? "rgba(34,34,34,.8)" : "white"};
  border: ${(props) =>
    props.followed === true ? "1px solid #d3d3d3" : "1px solid black"};
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  margin: 10px 0;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  margin: 20px 0;
`;
export const ProfileInfo = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const PostWrapper = styled.div`
  margin: 0 10%;
`;
