import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    pricesProsudts: 0
  },
  reducers: {
    addProduct(state, action) {
      // console.log('addProduct');
      state.basket.push(action.payload)
      state.pricesProsudts = state.basket.reduce
    },
    removeProductBasket (state, payload) {
      state.pricesProsudts = state.basket.reduce
    }
  }
})

export const { addProduct, removeProductBasket } = basketSlice.actions

export default basketSlice.reducer