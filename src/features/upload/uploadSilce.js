import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

export const uploadImg = createAsyncThunk("upload/images",async(data,thunkAPI)=>{
    try{
        const formData = new FormData();
        for(let i = 0; i < data.length; i++){
            formData.append("images",data[i])
        }
        return await uploadService.uploadImg(formData);
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const deleteImg = createAsyncThunk("delete/images",async(data,thunkAPI)=>{
    try{
        return await uploadService.deleteImg(data);
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
            state.images = action.payload;
        })
        .addCase(uploadImg.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.images = [];
        })
        .addCase(deleteImg.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(deleteImg.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.images = [];
        })
        .addCase(deleteImg.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})


export default uploadImgSlice.reducer;