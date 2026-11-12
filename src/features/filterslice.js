import { createSlice } from "@reduxjs/toolkit";
export const initialFilters = {
  district: null,
  block: null,
  blockCode: null,
  ward: null,
  wardCode: null,
  name: "",
  fatherName: "",
  motherName: "",
  spouseName: "",
  address: "",
  accountNumber: "",
  casteCategory: null,
  casteCategoryVerify: null,
  gender: null,
  maritalStatus: null,
  qualification: null,
  divyang: null,
  engagement: null,
  income: null,
  age: null,
  dobVerify: null,
  selectedAccordionFilter: {
    key: null,
    value: null,
  },
  applied: 1,
};

const dashboardFilterSlice = createSlice({
  name: "dashboardFilters",
  initialState: initialFilters,
  reducers: {
    setFilter(state, action) {
      // console.log("setFilter called:", action.payload);
      const { key, value } = action.payload;
      state[key] = value;

      if (key === "district" && value === null) {
        state.block = null;
        state.blockCode = null;
        state.ward = null;
        state.wardCode = null;
      }

      if (key === "block" && value === null) {
        state.blockCode = null;
        state.ward = null;
        state.wardCode = null;
      }

      if (key === "ward" && value === null) {
        state.wardCode = null;
      }
    },

    applyFilters(state) {
      state.applied += 1;
    },
    setSelectedAccordionFilter: (state, action) => {
      state.selectedAccordionFilter = action.payload;
    },

    clearFilters() {
      return initialFilters;
    },
  },
});

export const { setFilter, clearFilters, applyFilters, setSelectedAccordionFilter } = dashboardFilterSlice.actions;

export default dashboardFilterSlice.reducer;
