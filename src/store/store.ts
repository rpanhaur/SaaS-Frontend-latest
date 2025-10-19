import { configureStore } from "@reduxjs/toolkit";

import userSlice from './technical/users/user-slice'


const store = configureStore({
    reducer: {
        users: userSlice

    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>