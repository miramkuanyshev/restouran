import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reduces/basket'
import userReducer from './reduces/user'


export default configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer
    },
    devTools:true
})