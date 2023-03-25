import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loginStatus: "loading" | "failed" | "succeeded",
    username: "",
    password: "",
  },
  reducers: {
    setToken: (state) => {
      state.token = "tokenissetfromreducer";
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    logout: (state) => {
      state.loginStatus = "failed";
      state.token = "";
      state.username = "";
      state.password = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getToken.pending, (state) => {
        state.loginStatus = "loading";
        state.token = "";
      })
      .addCase(getToken.fulfilled, (state, { payload: { status, token } }) => {
        if (status === 200) {
          state.loginStatus = "succeeded";
          state.token = token;
          return;
        }
        state.loginStatus = "failed";
        state.token = "";
      })
      .addCase(getToken.rejected, (state) => {
        state.loginStatus = "failed";
      });
  },
});

export const { setToken, updateUsername, updatePassword, logout } =
  authSlice.actions;
export default authSlice.reducer;

export const getToken = createAsyncThunk("auth/getToken", async (payload) => {
  const { auth } = SERVICES;
  const response = await fetch(`${auth.baseUrl}${auth.getToken}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const { refresh: token } = await response.json();
  return { token, status: response.status };
});
