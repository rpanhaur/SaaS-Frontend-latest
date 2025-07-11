import { createSlice } from "@reduxjs/toolkit";
import { IInitialUserData } from "./authSlice.types";
import { Status } from "@/lib/types/global.types";

const initialStateData: IInitialUserData = {

    user: {
        username: "",
        email: "",
        password: ""
    },
    status: Status.LOADING

}

createSlice({
    name: 'auth',
    initialState: initialStateData,
    reducers: {

    }
})