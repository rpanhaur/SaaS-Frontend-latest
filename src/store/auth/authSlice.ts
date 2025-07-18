import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialUserData, IUserData } from "./authSlice.types";
import { Status } from "@/lib/types/global.types";
import API from "@/lib/http";

import { AppDispatch } from "../store";


const initialStateData: IInitialUserData = {

    user: {
        username: "",
        email: "",
        password: ""
    },
    status: Status.LOADING

}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateData,
    reducers: {

        setUser(state: IInitialUserData, action: PayloadAction<IUserData>) {
            state.user = action.payload

        },

        setStatus(state: IInitialUserData, action: PayloadAction<Status>) {
            state.status = action.payload

        }

    }
})

export const { setUser, setStatus } = authSlice.actions
export default authSlice.reducer

export function userRegister(data: IUserData) {
    return async function userRegisterThunk(dispatch: AppDispatch) {

        try {

            const response = await API.post("/auth/register", data)
            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))

            }
            dispatch(setStatus(Status.ERROR))

        } catch (error) {

            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }

    }
}

export function loginUser(data: any) {

    return async function loginUserThunk(dispatch: AppDispatch) {

        try {

            const response = await API.post('/auth/login', data)

            if (response.status == 200) {

                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }

        } catch (error) {

            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }
    }
}