import axios from "axios";
import { API_URL } from "../libs/urls";
import { LoginRequest } from "../types/loginRequest";
import { SignUpRequest } from "../types/signUpRequest";

export const requestLogin = async ({ email, password }: LoginRequest) => {
  const res = await axios.post(
    `${API_URL}/accounts/login/`,
    {
      email: email,
      password: password,
    },
    { withCredentials: true }
  );

  return res;
};

export const requestNaverlogin = async (token: string) => {
  const res = await axios.get(`${API_URL}/accounts/social/naver/`, {
    params: { token: token },
    withCredentials: true,
  });

  return res;
};

export const requestGooglelogin = async (token: string) => {
  const res = await axios.get(`${API_URL}/accounts/social/google/`, {
    params: { token: token },
    withCredentials: true,
  });

  return res;
};

export const requestRefresh = async () => {
  const res = await axios.post(
    `${API_URL}/accounts/token/refresh`,

    { withCredentials: true }
  );
  return res;
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
