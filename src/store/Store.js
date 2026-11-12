import { configureStore } from "@reduxjs/toolkit";
import dashboardFilterReducer from "../features/filterslice";
import authReducer from "../features/authslice";
import uiReducer from "../features/uislice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    dashboardFilters: dashboardFilterReducer,
  },
});
