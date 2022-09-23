import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reduces/basket'


export default configureStore({
    reducer: {
        basket: basketReducer
    },
    devTools:true
})