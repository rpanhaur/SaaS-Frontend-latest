import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialUserData, ILoginUser, IUserData } from "./authSlice.types";
import { Status } from "@/lib/types/global.types";
import { AppDispatch } from "../store";
import API from '../../lib/http/api'


const initialStateData: IInitialUserData = {

    user: {
        userName: "",
        email: "",
        password: "",
        role: ""


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

const { setUser, setStatus } = authSlice.actions
export default authSlice.reducer
export { setUser, setStatus }

export function registerUser(data: IUserData) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post('/auth/register', data)
            console.log(response);

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

export function loginUser(data: ILoginUser) {
    return async function loginUserThunk(dispatch: AppDispatch) {
        try {

            const response = await API.post('/auth/login', data)
            localStorage.setItem('token', response.data.data.token)

            if (response.status == 200)
                dispatch(setUser(response.data.data))
            //to add token in local storage

            localStorage.setItem("token", response.data.data.token)
            dispatch(setStatus(Status.SUCCESS))

        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }

    }
}