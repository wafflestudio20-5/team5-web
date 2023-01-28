import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestMyInfo } from "../../api/profile";

export const getMyInfo = createAsyncThunk(
  "profile/myInfo",
  async (access_token: string, { rejectWithValue }) => {
    try {
      const res = await requestMyInfo(access_token);
      console.log(res.data);
      return res.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

interface profileState {
  myInfo: any;
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
