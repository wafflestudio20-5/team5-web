import { createSlice } from "@reduxjs/toolkit";
import { Brands } from "../../types/shop";

interface shopfilterState {
  checked: number;
  brands: Brands[];
}

const shopfilterInitialState: shopfilterState = {
  checked: 0,
  brands: [],
};

const shopfilterReducer = createSlice({
  name: "shopfilterReducer",
  initialState: shopfilterInitialState,
  reducers: {
    addBrands: (state, action) => {
      if (state.brands.length === 0) {
        state.checked += 1;
        state.brands.push(action.payload);
      } else {
        state.brands.push(action.payload);
      }
    },
    deleteBrands: (state, action) => {
      state.brands.filter((brand) => brand.name !== action.payload);
    },
  },
});

export const shopfilterActions = shopfilterReducer.actions;
export default shopfilterReducer.reducer;
