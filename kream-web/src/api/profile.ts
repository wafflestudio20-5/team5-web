import axios from "axios";
import { API_URL } from "../libs/urls";

export const fetchMyInfo = async (access_token: string | null) => {
  const res = await axios.get(`${API_URL}/accounts/user`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
  return res;
};
