import { createSlice } from "@reduxjs/toolkit";
import { clearAllCookies, getCookie, setCookie } from "../utility/cookie";

// 🔹 Read cookies ONCE when app loads
const cookies = getCookie();

let parsedUser = null;
try {
  parsedUser = cookies?.user ? JSON.parse(cookies.user) : null;
} catch {
  parsedUser = null;
}

const initialState = {
  user: parsedUser,
  isLoggedIn: cookies?.isLoggedIn === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;

      setCookie("isLoggedIn", "true", 1);
      setCookie("token", action.payload.token);
      setCookie("user", JSON.stringify(action.payload.user));
    },

    logOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      clearAllCookies();
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
