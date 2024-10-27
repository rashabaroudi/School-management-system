import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  { Teacherslice }  from '../slices'
import { thunk } from "redux-thunk";

const rootReducer=combineReducers({
     teachers:Teacherslice.reducer
})



export const store =configureStore({
    reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch