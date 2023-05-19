import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./companySlice";
import driverSlice from "./driverSlice";

const store = configureStore({
  reducer: {
    company: companySlice,
    driver: driverSlice,
  },
});

export default store;
