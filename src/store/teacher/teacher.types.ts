<<<<<<< HEAD
import { Status } from "@/lib/types/global.types"

export interface ITeacherInitailData {
    teacherName: string,
    teacherAddress: string,
    teacherPhone: string
}

export interface ITeacherData {
    teacher: ITeacherInitailData,
    status: Status
=======
import { Status } from "@/lib/types/global.types";

export enum TeacherExpert{
  Beginner='beginner',
  Intermediate='intermediate',
  Pro='pro'

}

interface ICourse{
  courseName:string,
  coursePrice:string,
  courseDuration:string
}

export interface ITeacherInitialData{
teacherName:string,
teacherEmail:string,
teacherPhoneNumber:string,
teacherExperience:TeacherExpert,
teacherSubject:string,
course:ICourse


}

export interface ITeacherData{
  teacher:ITeacherInitialData,
  status:Status
>>>>>>> a84430f (login usccess)
}