import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import customterReducer from '../features/customers/customerSlice'
import productReducer from "../features/product/productSilce";
import brandReducer from '../features/brand/brandSilce'
import colorReducer from '../features/color/colorSilce'

export const store = configureStore({
    reducer:{
        auth:authReducer,
        customer:customterReducer,
        product:productReducer,
        brand:brandReducer,
        color:colorReducer
    }
});