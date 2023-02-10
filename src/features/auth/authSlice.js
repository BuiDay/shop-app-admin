import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFormLocalStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")) : null

const userDefaultState={
    _id:null,
    firstName:null,
    LastName:null,
    email:null,
    mobile:null,
    token:null,
}

const initialState = {
    user:getUserFormLocalStorage,
    orders:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const login = createAsyncThunk("auth/admin-login",async(user,thunkAPI)=>{
    try{
        return await authService.login(user)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getOrders = createAsyncThunk("order/get-order",async(user,thunkAPI)=>{
    try{
        return await authService.getOrders()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})
export const updateOrders = createAsyncThunk("order/update-order",async(data,thunkAPI)=>{
    try{
        return await authService.updateOrders(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload.data;
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
            state.user = null
        })
        .addCase(getOrders.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getOrders.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.orders = action.payload.data;
        })
        .addCase(getOrders.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            state.orders = null
        })
        .addCase(updateOrders.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(updateOrders.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
        })
        .addCase(updateOrders.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})

export default authSlice.reducer;