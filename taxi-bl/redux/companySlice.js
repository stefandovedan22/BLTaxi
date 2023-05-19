import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  company: [],
  // error: "",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
      state.loading = false;
    },
  },
});

export const { setCompany } = companySlice.actions;

export const selectCompany = (state) => state.company.company;

export default companySlice.reducer;
