import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BASEURL,
  CART,
  COLORS_SIZES,
  FEATURED,
  PRODUCTS,
  TOGGLE,
  WISHLIST,
} from "../../../utils/Api";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token") || null;

// Async thunk for products

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (cartData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASEURL}/${CART}`, cartData, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Added To Cart failed"
      );
    }
  }
);

export const getFeaturedProducts = createAsyncThunk(
  "products/getFeaturedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASEURL}/${PRODUCTS}/${FEATURED}`, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Get Featured Products failed"
      );
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASEURL}/${PRODUCTS}/${slug}`, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      });
      return response.data.product;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Get Product failed"
      );
    }
  }
);

export const getProductColorsAndSizes = createAsyncThunk(
  "products/getProductColorsAndSizes",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASEURL}/${PRODUCTS}/${id}/${COLORS_SIZES}`,
        {
          headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Get Product failed"
      );
    }
  }
);

export const addToWishList = createAsyncThunk(
  "products/addToWishList",
  async (idProduct, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASEURL}/${WISHLIST}/${TOGGLE}`,
        { product_id: idProduct },
        {
          headers: {
            Authorization: "Bearer " + token,
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Added To Wishlist failed"
      );
    }
  }
);
