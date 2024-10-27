import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const getAllTeachersAsync = createAsyncThunk( 
    'teachers/all',
    async () => {
        return axios.get("http://127.0.0.1:8000/api/teachers").then((res)=>{
            console.log(res.data.data)
            return (res.data.data);
           
    });}
);

export const Teacherslice = createSlice({
    name:'teachers',
initialState:{
teachers:[],
},
reducers:{},
extraReducers :(builder) => {

    builder.addCase(getAllTeachersAsync.fulfilled,(state,action)=>{
        state.teachers=action.payload;
    })
   

}

});


//export const {getAllTeachers}=Teacherslice.actions;

export default Teacherslice.reducer;
