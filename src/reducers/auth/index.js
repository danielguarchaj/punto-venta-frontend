import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";

const initialState = {
  token: "",
  loginStatus: "loading" | "failed" | "succeeded",
  username: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    logout: (state) => ({
      ...state,
      ...initialState,
    }),
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

export const { updateUsername, updatePassword, logout } = authSlice.actions;
export default authSlice.reducer;

export const getToken = createAsyncThunk("auth/getToken", async (payload) => {
  const { auth, baseUrl } = SERVICES;
  const response = await fetch(`${baseUrl}${auth.getToken}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const { access: token } = await response.json();
  return { token, status: response.status };
});
