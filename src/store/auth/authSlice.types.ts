import { Status } from "@/lib/types/global.types"

export interface IUserData {
    userName: string,
   
    token: string
}

export interface IInitialUserData {
    user: IUserData,
<<<<<<< HEAD
    status: Status
}                           
=======
    status: Status  
}    

export interface ILoginUser{
    email:string,
    password:string
}
>>>>>>> a84430f (login usccess)
