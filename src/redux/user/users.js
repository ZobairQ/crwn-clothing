import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (user, action) => {
      user.currentUser = action.payload;
    },
  },
});

export const getCurrentUser = createSelector(
  (state) => state.user,
  (user) => user.currentUser
);
export const { setCurrentUser } = slice.actions;
export default slice.reducer;
