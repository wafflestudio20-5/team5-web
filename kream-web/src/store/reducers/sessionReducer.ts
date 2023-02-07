import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestGooglelogin,
  requestLogin,
  requestNaverlogin,
  requestRefresh,
} from "../../api/session";
import { LoginRequest } from "../../types/loginRequest";

export const login = createAsyncThunk(
  "session/login",
  async ({ email, password }: LoginRequest, { rejectWithValue }) => {
    try {
      const res = await requestLogin({ email, password });
      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const naverLogin = createAsyncThunk(
  "session/naverLogin",
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await requestNaverlogin(token);

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const googleLogin = createAsyncThunk(
  "session/googleLogin",
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await requestGooglelogin(token);

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const refresh = createAsyncThunk(
  "session/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const res = await requestRefresh();

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export interface sessionState {
  accessToken: string | null;
  refreshToken: string | null;
}

const sessionInitialState: sessionState = {
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
};

const sessionReducer = createSlice({
  name: "sessionReducer",
  initialState: sessionInitialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("access_token", action.payload.access_token);
    });
    builder.addCase(naverLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("access_token", action.payload.access_token);
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("access_token", action.payload.access_token);
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.accessToken = action.payload.access;
      localStorage.setItem("access_token", action.payload.access);
    });
  },
});

export const sessionActions = sessionReducer.actions;
export default sessionReducer.reducer;
