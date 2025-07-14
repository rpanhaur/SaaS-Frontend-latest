import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialUserData, IUserData } from "./authSlice.types";
import { Status } from "@/lib/types/global.types";

const initialStateData: IInitialUserData = {

    user: {
        username: "",
        email: "",
        password: ""
    },
    status: Status.LOADING

}

const userSlice = createSlice({
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

const { setUser, setStatus } = userSlice.actions
export default userSlice.reducer
export { setUser, setStatus }