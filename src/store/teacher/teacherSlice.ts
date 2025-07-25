<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacherData, ITeacherInitailData } from "./teacher.types";
import { Status } from "@/lib/types/global.types";
import { AppDispatch } from "../store";
import API from "@/lib/http";

const teacherInitialData: ITeacherData = {
    teacher: {
        teacherName: "",
        teacherAddress: "",
        teacherPhone: ""
    },
    status: Status.LOADING

}

const teacherSlice = createSlice({
    name: "teacher",
    initialState: teacherInitialData,
    reducers: {

        setTeacher(state: ITeacherData, action: PayloadAction<ITeacherInitailData>) {
            state.teacher = action.payload
        },
        setStatus(state: ITeacherData, action: PayloadAction<Status>) {
            state.status = action.payload
        }

    }
})

export const { setTeacher, setStatus } = teacherSlice.actions
export default teacherSlice.reducer

export function createTeacher(data: ITeacherInitailData) {
    return async function createTeacherThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post('/teacher', data)

            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }

        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }

    }
}
=======
import { Status } from "@/lib/types/global.types";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ITeacherData, ITeacherInitialData, TeacherExpert } from "./teacher.types";

const teacherData: ITeacherData = {
    teacher: {
    teacherName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
    teacherExperience: TeacherExpert.Pro,
    teacherSubject: "",
    course: {
      courseName: "",
      coursePrice: "",
      courseDuration: "",
    },
  },

  status: Status.LOADING,
};

const teacherSlice = createSlice({
  name: "teacher-slice",
  initialState: teacherData,
  reducers: {

    setTeacher(state:ITeacherData,action:PayloadAction<ITeacherInitialData>){

        state.teacher=action.payload

    },
    setStatus(state:ITeacherData,action:PayloadAction<Status>){
        state.status=action.payload
    }
  },
});

export const {setTeacher,setStatus}=teacherSlice.actions
export default teacherSlice.reducer
>>>>>>> a84430f (login usccess)
