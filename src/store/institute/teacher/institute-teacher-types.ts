import { Status } from "@/lib/types/global.types";

export enum teacherExpertise {
    Beginner = 'beginner',
    Intermediate = 'intermediate',
    Pro = 'pro'
}

interface IInstituteTeacherCourse {
    courseName: string,
    coursePrice: string,
    courseThumbnail: string
}

export interface IInstituteTeacherInitialData {
    teacherName: string,
    teacherAddress: string,
    teacherEmail: string,
    teacherPhoneNumber: string,
    teacherExperience: string,
    teacherSalary: string,
    teacherJoinedDate: string,
    courseId: IInstituteTeacherCourse ,
    teacherPhoto:string
}
export interface IInstituteTeacherData extends IInstituteTeacherInitialData{
    id:string
}

export interface IInstituteFinalData {
    instituteTeacher: IInstituteTeacherData[],
    status: Status
}