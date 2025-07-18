import { Status } from "@/lib/types/global.types";
import { createSlice } from "@reduxjs/toolkit";
import { IInstitueData } from "./instituteTypes";

const instituteInitialData: IInstitueData = {
    institue: {
        instituteName: "",
        instituteAddress: "",
        institutePhone: ""
    },
    status: Status.LOADING
}

const instituteSlice = createSlice({
    name: "institute",
    initialState: instituteInitialData,
    reducers: {

    }
})