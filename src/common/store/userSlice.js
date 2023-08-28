import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: {
      reducer: (state, action) => {
        state = action.payload;
      },
      prepare: (userId, userName) => {
        return {
          payload: {
            userId,
            userName,
          },
        };
      },
    },
    resetUser: (state, action) => {
      state = null;
    },
  },
});

export const getUser = (state) => state;

export const getIsUserLoggedIn = (state) => state != null;

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
