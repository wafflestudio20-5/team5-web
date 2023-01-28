import axios from "axios";
import { API_URL } from "../libs/urls";

export const requestStyleFeed = async () => {
  try {
    const res = await axios.get(`${API_URL}/styles/posts/`);
    console.log(res);
    return res;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};
