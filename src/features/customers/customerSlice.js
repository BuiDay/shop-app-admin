import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

export const getUsers = createAsyncThunk("customer/get-customers",async(thunkAPI)=>{
    try{
        return await customerService.getUsers()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    customers:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const customerSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getUsers.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false
            state.customers = action.payload.data;
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.customer = [];
        })
    },
})


export default customerSlice.reducer;