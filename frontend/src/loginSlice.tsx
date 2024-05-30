import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LgoinState {
  userInfo: any;
}

const initialState: LgoinState = {
  userInfo: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction) => {
      console.log(action.payload, "4123709a809d8asd08")
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions;

export default loginSlice.reducer;
