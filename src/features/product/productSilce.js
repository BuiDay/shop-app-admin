import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk("products/get-products",async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    products:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const productSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.products = action.payload.data;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.products = [];
        })
    },
})


export default productSlice.reducer;