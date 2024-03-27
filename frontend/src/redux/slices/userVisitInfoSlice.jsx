import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    visitInfo:null,
    loading: false,
    error: null,
    message:null
  };

  const userVisitInfoSlice = createSlice({
    name: "userVisitInfo",
    initialState: initialUserState,
    reducers: {
      fetchUserVisitRequest: (state) => {
        state.loading = true;
      },
      fetchUserVisitSuccess: (state, action) => {
        state.loading = false;
        state.visitInfo = action.payload.visitInfo;
        state.message = action.payload.message;
      },
      fetchUserVisitFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      clearErrors : (state) => {
        state.error = null;
      },
      clearMessage : (state) => {
            state.message = null;
      },
    },
  });
  
  export const {fetchUserVisitRequest,fetchUserVisitSuccess,fetchUserVisitFailure,clearErrors,clearMessage} = userVisitInfoSlice.actions;

  export default userVisitInfoSlice.reducer;