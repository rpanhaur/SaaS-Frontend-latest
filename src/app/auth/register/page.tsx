"use client";
import { ChangeEvent, FormEvent, useState } from "react"
import { IRegisterData } from "./register.types"
import { appDispatch } from "@/store/hooks"
import { registerUser } from "@/store/auth/authSlice"

const Register = () => {

    const dispatch = appDispatch()

    //USER le inputfiled ma type gare  ko kura track garera store garne 

    const [data, setData] = useState<IRegisterData>({
        userName: "",
        email: "",
        password: ""

    })

    //File handel from form data any changes in the form input

    const handelRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })


    }

    //from submissition function creation 

    const handelFormSubmission = (e: FormEvent<HTMLFormElement>) => {
        //TO prevent page load
        e.preventDefault()

        //api call           
      
        

        dispatch(registerUser(data))



    }
   


    return (
        <>


            <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="bg-white shadow-md rounded-md p-6">
                        <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" />
                        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign up for an account
                        </h2>
                        <form onSubmit={handelFormSubmission} className="space-y-6" method="POST">
                            <div>
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Username</label>
                                <div className="mt-1">
                                    <input onChange={handelRegisterDataChange} name="userName" type="userName" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1">
                                    <input onChange={handelRegisterDataChange} name="email" type="email-address" autoComplete="email-address" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1">
                                    <input onChange={handelRegisterDataChange} name="password" type="password" autoComplete="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                                    Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Register 