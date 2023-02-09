import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getBrands = createAsyncThunk("products/get-products",async(thunkAPI)=>{
    try{
        return await brandService.getBrands();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    brands:[],
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
    },
})


export default brandSlice.reducer;