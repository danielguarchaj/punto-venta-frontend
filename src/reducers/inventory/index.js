import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";

const initialState = {
  products: [],
  productsRequestStatus: "loading" | "failed" | "succeeded",
};

export const inventory = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsRequestStatus = "loading";
        state.token = "";
      })
      .addCase(
        getProducts.fulfilled,
        (state, { payload: { status, products } }) => {
          if (status === 200) {
            state.productsRequestStatus = "succeeded";
            state.products = products;
            return;
          }
          state.productsRequestStatus = "failed";
        }
      )
      .addCase(getProducts.rejected, (state) => {
        state.productsRequestStatus = "failed";
      });
  },
});

// export const { updateUsername, updatePassword, logout } = inventory.actions;
export default inventory.reducer;

export const getProducts = createAsyncThunk(
  "inventory/getProducts",
  async ({ token }) => {
    const { inventory, baseUrl } = SERVICES;
    const response = await fetch(`${baseUrl}${inventory.getProducts}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return { products: data, status: response.status };
  }
);
