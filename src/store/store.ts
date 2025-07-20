import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import teacherSlice from "./teacher/teacherSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        teacher:teacherSlice
    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>