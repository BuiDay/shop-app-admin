import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enqService from "./enquiryService";

export const getEnq = createAsyncThunk("enquiry/get-enquiry",async(thunkAPI)=>{
    try{
        return await enqService.getEnq()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
}) 

const initialState = {
    enquiry:"",
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const enquirySlice = createSlice({
    name:"enquiry",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getEnq.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getEnq.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;  
            state.enquiry = action.payload;
        })
        .addCase(getEnq.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
     
    },
})


export default enquirySlice.reducer;