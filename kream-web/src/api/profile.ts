import axios from "axios";
import { API_URL } from "../libs/urls";

export const fetchMyInfo = async (accessToken: string | null) => {
  const res = await axios.get(`${API_URL}/accounts/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  return res;
};

interface fetchUserProfileProps {
  accessToken: string | null;
  id: string | undefined;
}

export const fetchUserProfile = async ({
  accessToken,
  id,
}: fetchUserProfileProps) => {
  try {
    const res = await axios.get(`${API_URL}/styles/profiles/${id}`, {
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

export const fetchUserFeeds = async ({
  accessToken,
  id,
}: fetchUserProfileProps) => {
  if (accessToken) {
    try {
      const res = await axios.get(
        `${API_URL}/styles/posts/?type=default&user_id=${id}`,
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
        `${API_URL}/styles/posts/?type=default&user_id=${id}`,
        {
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
  }
};
