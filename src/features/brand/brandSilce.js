import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getBrands = createAsyncThunk("products/get-products",async(thunkAPI)=>{
    try{
        return await brandService.getBrands();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const createBrand = createAsyncThunk("products/create-products",async(Data,thunkAPI)=>{
    try{
        return await brandService.createBrand(Data);
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


const initialState = {
    brands:[],
    createBrands:"",
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const brandSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getBrands.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getBrands.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.brands = action.payload.data;
        })
        .addCase(getBrands.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.brands = [];
        })
        .addCase(createBrand.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createBrand.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.createBrands = action.payload;
        })
        .addCase(createBrand.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})


export default brandSlice.reducer;