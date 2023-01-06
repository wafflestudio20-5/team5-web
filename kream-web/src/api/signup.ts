import axios from "axios";
import { API_URL } from "../constant/constant";
import { SignUpRequest } from "../types/signUpRequest";

export const signup = async ({
  email,
  password,
  repassword,
  shoes,
}: SignUpRequest) => {
  try {
    const res = await axios.post(
      `${API_URL}/registration/`,
      {
        email: email,
        password1: password,
        password2: repassword,
        shoe_size: shoes,
      },
      { withCredentials: true }
    );
    console.log(res);
    return { success: "success sign up" };
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};
