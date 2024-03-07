import { indigo } from "@mui/material/colors";
import {createSlice} from "@reduxjs/toolkit";

export const incdecSlice=createSlice({
    name:"incdec",
    initialState:10,
    reducers:{
        Inc:(state,action)=>{return state+=action.payload;},
        Dec:(state,action)=>{return state-=action.payload;},   
        Mul:(state,action)=>{return state*=2;},   
        Div:(state,action)=>{return state/=2;},   
     }
})
export const{Inc,Dec,Mul,Div}=incdecSlice.actions;
export default incdecSlice.reducer;