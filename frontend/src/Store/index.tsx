import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import loginSlice from "../loginSlice";

export const store = configureStore({
  reducer: {
    loginState: loginSlice,
  }
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the type of the AppDispatch
export type AppDispatch = typeof store.dispatch;
