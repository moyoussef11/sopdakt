import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL, LOGIN, REGISTER } from "../../../utils/Api";

// Async thunk for registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASEURL}/${REGISTER}`, userData, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASEURL}/${LOGIN}`, credentials, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      });      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
