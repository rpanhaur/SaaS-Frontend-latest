import { Status } from "@/lib/types/global.types";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IInstituteFinalData, IInstituteTeacherData, IInstituteTeacherInitialData } from "./institute-teacher-types";
import { AppDispatch } from "@/store/store";
import APIWITHTOKEN from "@/lib/http/apiwithtoken";

const instituteTeacherData: IInstituteFinalData = {
    instituteTeacher: [],
    status: Status.LOADING
}

const instituteTeacherSlice = createSlice({
    name: "institute-teacher",
    initialState: instituteTeacherData,
    reducers: {
        setStatus(state:IInstituteFinalData,action:PayloadAction<Status>){
            state.status=action.payload
        },
        setTeacher(state:IInstituteFinalData,action:PayloadAction<IInstituteTeacherData>){
            state.instituteTeacher.push(action.payload)

        },
        setFetchTeacher(state:IInstituteFinalData,action:PayloadAction<IInstituteTeacherData[]>){
            state.instituteTeacher=action.payload
        },
        setDeleteInstituteTeacher(state:IInstituteFinalData,action:PayloadAction<string>){
            const TeacherId=action.payload
      const index=state.instituteTeacher.findIndex((teacher)=>teacher.id==TeacherId)
      if(index !==-1){
        state.instituteTeacher.splice(index,1)
      }

        }


    }
})

export const {setStatus,setTeacher,setFetchTeacher,setDeleteInstituteTeacher}=instituteTeacherSlice.actions
export default instituteTeacherSlice.reducer

export function createInstituteTeacher(data:IInstituteTeacherInitialData){
    return async function createInstituteTeacherThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.post('/institute/teacher',data)
            if(response.status==200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data && dispatch(setTeacher(response.data.data))

            }else{
                dispatch(setStatus(Status.ERROR))
            }
            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
            
            
        }

    }
}

export function fetchInstituteTeacher(){
    return async function fetchInstituteTeacherThunk(dispatch:AppDispatch){
        try {

            const response=await APIWITHTOKEN.get('/institute/teacher')
            if(response.status==200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data >0 && dispatch(setFetchTeacher(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }


            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
            
            
        }
    }
}

export function deleteInstituteTeacher(id:string){
    return async function deleteInstituteTeacherThunk(dispatch:AppDispatch){

        try {
            const response=await APIWITHTOKEN.delete('/institute/teacher/'+id)
            if(response.status==200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setDeleteInstituteTeacher(id))
                
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))
            
            
        }

    }
}