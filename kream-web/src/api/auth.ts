import axios from "axios";
import { API_URL } from "../constant/constant";
import { LoginRequest } from "../types/loginRequest";
import { SignUpRequest } from "../types/signUpRequest";

export const login = async ({ email, password }: LoginRequest) => {
  try {
    const res = await axios.post(
      `${API_URL}/accounts/login/`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    console.log(res);
    return res;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const naverlogin = async ({ email, password }: LoginRequest) => {
  try {
    const res = await axios.post(
      `${API_URL}/accounts/social/naver/`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    console.log(res);
    return res;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e.response?.data.message);
    }
    return null;
  }
};

export const signup = async ({
  email,
  password,
  repassword,
  shoes,
}: SignUpRequest) => {
  try {
    const res = await axios.post(
      `${API_URL}/accounts/registration/`,
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
