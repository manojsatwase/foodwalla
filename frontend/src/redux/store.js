import { configureStore } from "@reduxjs/toolkit";
import userVisitInfoSlice from "./slices/userVisitInfoSlice";

const store = configureStore({
  reducer: {
    userVisitInfo: userVisitInfoSlice,
  },
});

export default store;