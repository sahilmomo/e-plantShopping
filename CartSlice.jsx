import { createSlice } from "@reduxjs/toolkit";

/*
  CartSlice
  - Manages shopping cart state
  - Implements required reducer functions:
    addItem, removeItem, updateQuantity
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Adds a new item to the cart
    addItem: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Removes an item completely from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Updates quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
