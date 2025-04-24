import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./CartSlice"

export const store = configureStore({
  reducer:{
      cart: cartslice
  }
})

export type RootState = ReturnType <typeof store.getState>

export type AppDispatch = typeof store.dispatch