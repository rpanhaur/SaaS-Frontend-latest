import { Status } from "@/lib/types/global.types"

export interface IUserData {
    userName: string,
    email:string,
    password:string
   
    
}

export interface IInitialUserData {
    user: IUserData,
    status: Status
}  

export interface ILoginUser{
    email:string,
    password:string
}
