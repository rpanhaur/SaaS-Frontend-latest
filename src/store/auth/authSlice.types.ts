import { Status } from "@/lib/types/global.types"

export interface IUserData {
    username: string,
    email: string,
    password: string
}

export interface IInitialUserData {
    user: IUserData,
    status: Status
}                       