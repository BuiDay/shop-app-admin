import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk("products/get-products",async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const createProduct = createAsyncThunk("products/create-products",async(productData,thunkAPI)=>{
    try{
        return await productService.createProduct(productData);
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    products:[],
    createProducts:"",
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
        .addCase(createProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.createProducts = action.payload.data;
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})


export default productSlice.reducer;