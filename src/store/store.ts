import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import instituteCategorySlice from '../store/institute/categories/institute-categories-slice'


const store = configureStore({
    reducer: {
        auth: authSlice,
        category: instituteCategorySlice

    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>