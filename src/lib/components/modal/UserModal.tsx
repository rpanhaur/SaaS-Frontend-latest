'use client'

import { Status } from "@/lib/types/global.types"

import { appDispatch, appSelector } from "@/store/hooks"

import { addUser, fetchUsers } from "@/store/technical/users/user-slice"
import { IUserInitalData } from "@/store/technical/users/users-types"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

interface IUserClose {
    closeModal: () => void
}
const UserModal: React.FC<IUserClose> = ({ closeModal }) => {

    const { status } = appSelector((store) => store.users)

    const dispatch = appDispatch()

    const [userData, setUserData] = useState<IUserInitalData>({
        userName: "",
        password: "",
        email: "",
        role: ""


    })

    function handleChangeUserData(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })

    }
    async function handleSubmitUserData(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await dispatch(addUser(userData))

        if (status == Status.SUCCESS) {
            closeModal()
        }


    }
    useEffect(() => {
        dispatch(fetchUsers())

    }, [])


    return (

        <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" />
            <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add User</h3>
                    <button onClick={closeModal} id="closeModalButton" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">userName</label>
                        <input onChange={handleChangeUserData} type="text" name="userName" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="userName" required />
                    </div>
                    <div>
                        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">password</label>
                        <input onChange={handleChangeUserData} type="text" name="password" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="password" required />
                    </div>
                    <div>
                        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input onChange={handleChangeUserData} type="text" name="email" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                        <textarea onChange={handleChangeUserData} name="role" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Role" required />
                    </div>
                    <form onSubmit={handleSubmitUserData} className="flex justify-end gap-3">
                        <button onClick={closeModal} id="cancelButton" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                            Cancel
                        </button>
                        <button id="submitUrlButton" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600">
                            Submit
                            <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>



    )
}
export default UserModal