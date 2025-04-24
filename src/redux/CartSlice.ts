import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartItem {
  id: number;
  qty: number;
}

interface CartState {
  item: CartItem[];
}

const initialState: CartState = {
  item: [],
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incraeseQty: (state, action: PayloadAction<{ id: number }>) => {
      const selected = state.item.find((item) => item.id === action.payload.id);
      if (selected) {
        selected.qty += 1;
      } else {
        state.item.push({ id: action.payload.id, qty: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item)); 
    },
    decreaseQty: (state, action: PayloadAction<{ id: number }>) => {
      const selected = state.item.find((item) => item.id === action.payload.id);
      if (selected && selected.qty > 1) {
        selected.qty -= 1;
      } else {
        state.item = state.item.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item)); 
    },
    removeqty: (state, action: PayloadAction<{ id: number }>) => {
      state.item = state.item.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.item)); 
    },
    loadCartFromStorage:(state,action:PayloadAction<CartItem[]>) => {
      state.item = action.payload
    }
  },
});

export const allqtys = (state: RootState) =>
  state.cart.item.reduce((total, item) => total + item.qty, 0);

export const { incraeseQty, decreaseQty, removeqty, loadCartFromStorage } = cartslice.actions;
export default cartslice.reducer;