import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../../api/profile";
import Header from "../../components/header";
import { useAppSelector } from "../../store/hooks";
import { Profile } from "../../types/profile";
import {
  FollowButton,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileInfoWrapper,
  ProfileIntro,
  ProfileName,
  Wrapper,
} from "./profile-page.styled";
import PersonIcon from "../../assets/person-icon.svg";

const ProfilePage = () => {
  const { id } = useParams();
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, isLoading } = useQuery<Profile, AxiosError>({
    queryKey: ["userProfile", id],
    queryFn: () => fetchUserProfile({ id, accessToken }),
  });

  return (
    <>
      <Header />
      <Wrapper>
        <ProfileHeader>
          <ProfileImage
            alt="profile-image"
            src={
              data?.image && data.image.length > 0 ? data?.image : PersonIcon
            }
          />
          <ProfileName>{data?.profile_name}</ProfileName>
          <ProfileIntro>{data?.introduction}</ProfileIntro>
          <FollowButton followed={data?.following}>
            {data?.following ? "팔로잉" : "팔로우"}
          </FollowButton>
          <ProfileInfoWrapper>
            <ProfileInfo>
              게시물 <strong>{data?.num_posts}</strong>
            </ProfileInfo>
            <ProfileInfo>
              팔로워 <strong>{data?.num_followers}</strong>
            </ProfileInfo>
          </ProfileInfoWrapper>
        </ProfileHeader>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
