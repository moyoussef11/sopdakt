import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actAuth";
import Cookies from "universal-cookie";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
};
const cookies = new Cookies();
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = "idle";
      state.error = null;
      localStorage.removeItem("user");
      cookies.remove("user");
      cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("token", action.payload.token);
        cookies.set("user", action.payload.user);
        cookies.set("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        cookies.set("user", action.payload.user);
        cookies.set("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
