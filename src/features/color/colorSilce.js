import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";

export const getColors = createAsyncThunk("color/get-colors",async(thunkAPI)=>{
    try{
        return await colorService.getColors();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    colors:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const colorSlice = createSlice({
    name:"color",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getColors.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getColors.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.colors = action.payload.data;
        })
        .addCase(getColors.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.colors = [];
        })
    },
})


export default colorSlice.reducer;