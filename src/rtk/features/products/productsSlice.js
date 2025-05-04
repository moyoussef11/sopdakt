import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  getFeaturedProducts,
  getProduct,
  getProductColorsAndSizes,
} from "./actProducts";
import { a } from "framer-motion/client";

const initialState = {
  products: [],
  product: {},
  colorsAndSizes: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  cart: [],
  featuredProducts: [],
  wishlist: [],
  addedToWishlist: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(getFeaturedProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.featuredProducts = action.payload.products;
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(getProductColorsAndSizes.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProductColorsAndSizes.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.colorsAndSizes = action.payload.variants;
      })
      .addCase(getProductColorsAndSizes.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    builder.addCase("products/addToWishlist", (state, action) => {
      state.loading = "succeeded";
      state.addedToWishlist = action.payload;
    });
  },
});

export default productsSlice.reducer;
