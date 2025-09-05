import { Status } from "@/lib/types/global.types";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IInstituteCourseData, IInstituteCourseFinalData, IInstituteInitialCourseData } from "./institute-course-types";
import { AppDispatch } from "@/store/store";
import APIWITHTOKEN from "@/lib/http/apiwithtoken";


const courseInitialData:IInstituteCourseFinalData={
  course:[],
  status:Status.LOADING
}

const instituteCourseSlice=createSlice({
  name:"course-slice",
  initialState:courseInitialData,
  reducers:{
    setStatus(state:IInstituteCourseFinalData,action:PayloadAction<Status>){
      state.status=action.payload
    },
    setAddCourse(state:IInstituteCourseFinalData,action:PayloadAction<IInstituteCourseData>){
      state.course.push(action.payload)
    },
    setFetchCourseData(state:IInstituteCourseFinalData,action:PayloadAction<IInstituteCourseData[]>){
      state.course=action.payload
    },
    setDeleteCourseData(state:IInstituteCourseFinalData,action:PayloadAction<string>){
      const courseId=action.payload
      const index= state.course.findIndex((course)=>course.id==courseId)
      if(index !==-1){
        state.course.splice(index,1)
      }

    }


  }
})

export const {setStatus,setAddCourse,setDeleteCourseData,setFetchCourseData}=instituteCourseSlice.actions
export default instituteCourseSlice.reducer

export function addCourse(data:IInstituteInitialCourseData){
  return async function addCourseThunk(dispatch:AppDispatch){

    try {
      const response=await APIWITHTOKEN.post('/institute/course',data)
      if(response.status==200){
        dispatch(setStatus(Status.SUCCESS))
        response.data.data && dispatch(setAddCourse(response.data.data))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
      
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR))
      
      
    }
   
  }
}

export function fetchCourse(){
  return async function fetchCourseThunk(dispatch:AppDispatch){
    try {

      const response=await APIWITHTOKEN.get('/institute/course')
      if(response.status==200){
        dispatch(setStatus(Status.SUCCESS))
        
        
        response.data.data.length > 0 && dispatch(setFetchCourseData(response.data.data))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
      
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR))
      
      
    }
  }
}

export function deleteCourse(id:string){
  return async function deleteCourseThunk(dispatch:AppDispatch){
    try {

      const response=await APIWITHTOKEN.delete('/institute/course/'+id)

      if(response.status==200){
        dispatch(setStatus(Status.SUCCESS))
        dispatch(setDeleteCourseData(id))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
      
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR))
      
      
    }
  }
}