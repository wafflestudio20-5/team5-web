import axios from "axios";
import { API_URL } from "../libs/urls";

interface FetchStyleFeedProps {
  pageParam: string | null;
  accessToken: string | null;
}

export const fetchAllStyleFeed = async ({
  pageParam,
  accessToken,
}: FetchStyleFeedProps) => {
  if (accessToken) {
    try {
      let page = "";
      if (pageParam !== null) {
        page = `&cursor=${pageParam}`;
      }
      const res = await axios.get(
        `${API_URL}/styles/posts/?type=latest${page}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data.message);
      }
      return null;
    }
  } else {
    try {
      const res = await axios.get(
        `${API_URL}/styles/posts/?type=latest&cursor=${pageParam}`
      );

      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data.message);
      }
      return null;
    }
  }
};

interface FollowProps {
  uid: number;
  accessToken: string | null;
}

export const follow = async ({ uid, accessToken }: FollowProps) => {
  try {
    const res = await axios.patch(`/styles/profiles/${uid}/follow/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};

interface fetchAllCommentsProps {
  id: number;
  accessToken: string | null;
}

export const fetchAllComments = async ({
  id,
  accessToken,
}: fetchAllCommentsProps) => {
  try {
    const res = await axios.patch(`/styles/posts/${id}/comments/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data);
    }
    return null;
  }
};
