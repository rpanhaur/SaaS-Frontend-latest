import { Status } from "@/lib/types/global.types";
import { createSlice } from "@reduxjs/toolkit";
import { IInstituteTeacherData, teacherExperties } from "./institute-teacher-types";

const instituteTeacherData: IInstituteTeacherData = {
    instituteTeacher: {

        teacherName: "",
        teacherAddress: "",
        teacherEmail: "",
        teacherPhone: "",
        teacherExperties: teacherExperties.Beginer,
        teacherSallary: "",
        teacherJoinDate: "",
        course: {
            courseName: "",
            coursePrice: "",
            courseThumbnail: ""

        }

    },
    status: Status.LOADING
}

const instituteTeacherSlice = createSlice({
    name: "institute-teacher",
    initialState: instituteTeacherData,
    reducers: {

    }
})