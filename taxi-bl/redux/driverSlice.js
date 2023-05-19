import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  driver: {},
  // error: "",
};

const driverSlice = createSlice(
  {
    name: "driver",
    initialState,
    reducers: {
      setDriver: (state, action) => {
        state.driver = action.payload;
        state.loading = false;
      },
    },
  },
  []
);

export const { setDriver } = driverSlice.actions;

export const selectDriver = (state) => state.driver.driver;

export default driverSlice.reducer;
