import { configureStore, createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authReducer",
  initialState: [],
  reducers: {
    signup: (state, action) => {},
    login: (state, action) => {},
    logout: (state, action) => {},
  },
});

const store = configureStore({ reducer: authReducer.reducer });

export default store;
