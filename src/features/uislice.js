import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: { severity: "", summary: "", detail: "", visible: false },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toast = {
        ...action.payload,
        visible: true,
      };
    },
    hideToast: (state) => {
      state.toast.visible = false;
    },
  },
});
export const { showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;
