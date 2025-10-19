import { Status } from "@/lib/types/global.types"

export interface IUserInitalData {
    userName: string,
    password: string,
    email: string,
    role: string
}

export interface IUserFinalData extends IUserInitalData {
    id: string,
    createdAt: string
}

export interface IUserData {
    users: IUserFinalData[],
    status: Status
}