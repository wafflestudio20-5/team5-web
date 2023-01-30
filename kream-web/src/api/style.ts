import axios from "axios";
import { API_URL } from "../libs/urls";

export const fetchStyleFeed = async () => {
  try {
    const res = await axios.get(`${API_URL}/styles/posts/`, {
      params: { type: "latest" },
    });

    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};
