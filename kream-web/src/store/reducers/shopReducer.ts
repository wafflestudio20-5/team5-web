import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchShopProducts } from "../../api/shop";
import { shopProduct } from "../../types/shopProduct";

export const getShopProducts = createAsyncThunk(
  "shop/getShopProduct",
  async (pageNum: number, { rejectWithValue }) => {
    try {
      const res = await fetchShopProducts(pageNum);
      return res?.data.results;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

interface shopState {
  products: shopProduct[] | null;
}

const shopInitialState: shopState = {
  products: null,
};

const shopReducer = createSlice({
  name: "shopReducer",
  initialState: shopInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopProducts.fulfilled, (state, action) => {
      state.products
        ? state.products.push(action.payload)
        : (state.products = action.payload);
    });
  },
});

export const shopActions = shopReducer.actions;
export default shopReducer.reducer;
