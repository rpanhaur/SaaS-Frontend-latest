import { Status } from "@/lib/types/global.types"

export interface IInstituteInitialCourseData{
  courseName:string,
  coursePrice:string,
  courseDetails:string,
  courseDuration:string,
  courseLevel:string,
  courseCategory:string

}

export interface IInstituteCourseData extends IInstituteInitialCourseData{
  id:string,
  createdAt:string
}
export interface IInstituteCourseFinalData {
  course:IInstituteCourseData[],
  status:Status
}