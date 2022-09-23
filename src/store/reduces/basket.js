import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        counter: 0,
        sum: 0,
        basket: []
    
    },
    reducers: {
        workingCounter(state, action) {
            state.counter = state.counter + action.payload;
        },
        changeSum(state, action) {
            state.sum = state.sum + action.payload;
        },
        addProduct(state, action) {
            state.basket.push(action.payload)
        
        },
        removeProductBasket(state, action) {
            state.basket = state.basket.filter((item) => {
                return item.id !== action.payload;
            });


        }
    }
})
export const { addProduct, removeProductBasket, workingCounter, changeSum } = basketSlice.actions
export default basketSlice.reducer