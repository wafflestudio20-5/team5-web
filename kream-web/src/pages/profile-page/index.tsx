import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserFeeds, fetchUserProfile } from "../../api/profile";
import Header from "../../components/header";
import { useAppSelector } from "../../store/hooks";
import { Profile } from "../../types/profile";
import {
  FollowButton,
  PostWrapper,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileInfoWrapper,
  ProfileIntro,
  ProfileName,
  Wrapper,
} from "./profile-page.styled";
import PersonIcon from "../../assets/person-icon.svg";
import Masonry from "@mui/lab/Masonry";
import {
  FeedContent,
  FeedImg,
  FeedWrapper,
  StyledHashLink,
} from "../../components/style/style-feed-overview/style-feed-overview.styled";
import { scrollWithOffset } from "../../utils/HashLink";
import StyleFeedThumbnail from "../../components/style/style-feed-thumbnail";
import StyleFeedContent from "../../components/style/style-feed-content";
import { StyleFeed } from "../../types/style";
import { follow } from "../../api/style";

interface FetchedData {
  previous: string | null;
  next: string | null;
  results: StyleFeed[];
}

const ProfilePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { accessToken } = useAppSelector((state) => state.session);
  const { data, isLoading } = useQuery<Profile, AxiosError>({
    queryKey: ["userProfile", id, accessToken],
    queryFn: () => fetchUserProfile({ id, accessToken }),
  });

  const feeds = useQuery<FetchedData, AxiosError>({
    queryKey: ["userFeeds", id, accessToken],
    queryFn: () => fetchUserFeeds({ id, accessToken }),
  });

  const { mutate } = useMutation({
    mutationFn: (uid: number | undefined) => follow({ uid, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries(["userProfile", id, accessToken]);
    },
  });

  const handleFollow = (uid: number | undefined) => {
    if (!accessToken) {
      navigate("/login");
    } else {
      mutate(uid);
    }
  };

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

          <FollowButton
            onClick={() => handleFollow(data?.user_id)}
            followed={data?.following}
          >
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
        <PostWrapper>
          {feeds.data ? (
            <Masonry columns={4} spacing={2}>
              {feeds.data.results.map((feed) => (
                <FeedWrapper key={feed.id}>
                  <StyledHashLink
                    to={`/style/details#${feed.id}`}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <FeedImg>
                      <StyleFeedThumbnail thumbnail={feed.images[0]} />
                    </FeedImg>
                  </StyledHashLink>

                  <FeedContent>
                    <StyleFeedContent
                      id={feed.id}
                      uid={feed.created_by.user_id}
                      uimage={feed.created_by.image}
                      nickname={feed.created_by.user_name}
                      content={feed.content}
                      likes={feed.num_likes}
                      liked={feed.liked}
                    />
                  </FeedContent>
                </FeedWrapper>
              ))}
            </Masonry>
          ) : null}
        </PostWrapper>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
