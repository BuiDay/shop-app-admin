import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getBlog = createAsyncThunk("blog/get-blog",async(thunkAPI)=>{
    try{
        return await blogService.getBlog();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    blogs:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getBlog.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getBlog.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.blogs = action.payload.data;
        })
        .addCase(getBlog.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.blogs = [];
        })
    },
})


export default blogSlice.reducer;