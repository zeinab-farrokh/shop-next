"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};
const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const decraseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItems[decraseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkOut = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
