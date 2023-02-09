import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productCategoriesService from "./categoryService";

export const getProductCategories = createAsyncThunk("getProductCategories/get-category",async(thunkAPI)=>{
    try{
        return await productCategoriesService.getProductCategories();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    productCategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const productCategoriesSlice = createSlice({
    name:"product Categories",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getProductCategories.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProductCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.productCategories = action.payload.data;
        })
        .addCase(getProductCategories.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.productCategories = [];
        })
    },
})


export default productCategoriesSlice.reducer;