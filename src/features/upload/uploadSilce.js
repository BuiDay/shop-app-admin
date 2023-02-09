import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

export const uploadImg = createAsyncThunk("upload/images",async(data,thunkAPI)=>{
    try{
        return await uploadService.uploadImg(data);
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    images:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const uploadImgSlice = createSlice({
    name:"images",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(uploadImg.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(uploadImg.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.images = action.payload.data;
        })
        .addCase(uploadImg.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.images = [];
        })
    },
})


export default uploadImgSlice.reducer;