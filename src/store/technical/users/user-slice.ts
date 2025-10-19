import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserData, IUserFinalData, IUserInitalData } from "./users-types";
import { Status } from "@/lib/types/global.types";
import { AppDispatch } from "@/store/store";
import API from "@/lib/http/api";
import APIWITHTOKEN from "@/lib/http/apiwithtoken";


const userData: IUserData = {
    users: [],
    status: Status.LOADING

}

const userSlice = createSlice({
    name: "user",
    initialState: userData,
    reducers: {


        setAddUserData(state: IUserData, action: PayloadAction<IUserFinalData>) {
            state.users.push(action.payload)
        },

        setFetchUsers(state: IUserData, action: PayloadAction<IUserFinalData[]>) {

            state.users = action.payload

        },

        setStatus(state: IUserData, action: PayloadAction<Status>) {
            state.status = action.payload
        },

        setUserDelete(state: IUserData, action: PayloadAction<string>) {
            const userId = action.payload
            const index = state.users.findIndex((user) => user.id == userId)
            if (index !== -1) {
                state.users.splice(index, 1)
            }

        }

    }


})

export const { setAddUserData, setFetchUsers, setStatus, setUserDelete } = userSlice.actions
export default userSlice.reducer


export function addUser(data: IUserInitalData) {
    return async function addUserThunk(dispatch: AppDispatch) {

        try {
            const response = await APIWITHTOKEN.post('/auth/register', data)

            console.log(response.data, 'check check data');

            if (response.status == 200) {

                dispatch(setStatus(Status.SUCCESS))
                response.data.data && dispatch(setAddUserData(response.data.data))
            }





        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }
    }
}


export function fetchUsers() {
    return async function fetchUsersThunk(dispatch: AppDispatch) {
        try {

            const response = await APIWITHTOKEN.get('/auth/users')

            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))



                response.data.data.length > 0 && dispatch(setFetchUsers(response.data.data))

            } else {
                dispatch(setStatus(Status.ERROR))
            }


        } catch (error) {

            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }


    }


}

export function deleteUsers(id: string) {
    return async function deleteUsersThunk(dispatch: AppDispatch) {




        try {

            const response = await APIWITHTOKEN.delete('/auth/users/' + id)
            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setUserDelete(id))

            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }

    }
}


