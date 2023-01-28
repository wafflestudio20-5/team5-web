import axios from "axios";
import { API_URL } from "../libs/urls";

export const requestMyInfo = async (access_token: string) => {
  const res = await axios.get(
    process.env.NODE_ENV === "development"
      ? "/accounts/user"
      : `${API_URL}/accounts/user`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
  return res;
};
