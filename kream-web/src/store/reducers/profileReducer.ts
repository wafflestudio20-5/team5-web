import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMyInfo } from "../../api/profile";
import { User } from "../../types/profile";

export const getMyInfo = createAsyncThunk(
  "profile/myInfo",
  async (accessToken: string | null, { rejectWithValue }) => {
    try {
      const res = await fetchMyInfo(accessToken);
      return res.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

interface profileState {
  myInfo: User | null;
  myProfile: null | string;
  userProfile: null | string;
}

const profileInitialState: profileState = {
  myInfo: null,
  myProfile: null,
  userProfile: null,
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      state.myInfo = action.payload;
    });
  },
});

export const profileActions = profileReducer.actions;
export default profileReducer.reducer;
