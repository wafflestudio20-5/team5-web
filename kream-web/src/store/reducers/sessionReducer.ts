import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
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

export const refresh = createAsyncThunk(
  "session/refresh",
  async (refresh_token: string, { rejectWithValue }) => {
    try {
      const res = await requestRefresh(refresh_token);

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export interface sessionState {
  access_token: string | null;
}

const sessionInitialState: sessionState = {
  access_token: null,
};

const sessionReducer = createSlice({
  name: "sessionReducer",
  initialState: sessionInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    });
    builder.addCase(naverLogin.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    });
  },
});

export const sessionActions = sessionReducer.actions;
export default sessionReducer.reducer;
