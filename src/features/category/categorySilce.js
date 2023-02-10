import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productCategoriesService from "./categoryService";

export const getProductCategories = createAsyncThunk("productCategories/get-category",async(thunkAPI)=>{
    try{
        return await productCategoriesService.getProductCategories();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
}) 

export const createCategory = createAsyncThunk("productCategories/create-category",async(Data,thunkAPI)=>{
    try{
        return await productCategoriesService.createCategory(Data);
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


const initialState = {
    productCategories:[],
    createCategories:"",
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
        .addCase(createCategory.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.createCategories = action.payload;
        })
        .addCase(createCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})


export default productCategoriesSlice.reducer;