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
        console.log(e.response?.data);
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
        console.log(e.response?.data);
      }
      return null;
    }
  }
};

interface FollowProps {
  uid: number | undefined;
  accessToken: string | null;
}

export const follow = async ({ uid, accessToken }: FollowProps) => {
  try {
    const res = await axios.patch(
      `/styles/profiles/${uid}/follow/`,
      {},
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
      console.log(e.response?.data);
    }
    return null;
  }
};

interface LikeProps {
  pid: number;
  accessToken: string | null;
}

export const like = async ({ pid, accessToken }: LikeProps) => {
  try {
    const res = await axios.patch(
      `/styles/posts/${pid}/like/`,
      {},
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
    const res = await axios.get(`/styles/posts/${id}/comments/`, {
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

interface postCommentProps {
  id: number;
  accessToken: string | null;
  content: string;
}

export const postComment = async ({
  id,
  accessToken,
  content,
}: postCommentProps) => {
  try {
    const res = await axios.post(
      `/styles/posts/${id}/comments/`,
      { content: content },
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
      console.log(e.response?.data);
    }
    return null;
  }
};

interface LikeCommentProps {
  cid: number;
  accessToken: string | null;
}

export const likeComment = async ({ cid, accessToken }: LikeCommentProps) => {
  try {
    const res = await axios.patch(
      `/styles/comments/${cid}/like/`,
      {},
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
      console.log(e.response?.data);
    }
    return null;
  }
};

export const likeReply = async ({ cid, accessToken }: LikeCommentProps) => {
  try {
    const res = await axios.patch(
      `/styles/replies/${cid}/like/`,
      {},
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
      console.log(e.response?.data);
    }
    return null;
  }
};
