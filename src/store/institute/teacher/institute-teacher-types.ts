import { Status } from "@/lib/types/global.types";

export enum teacherExperties {
    Beginer = 'beginer',
    Intermediate = 'intermediate',
    Pro = 'pro'
}

interface IInstituteTeacherCourse {
    courseName: string,
    coursePrice: string,
    courseThumbnail: string
}

export interface IInstituteTeacherInitailData {
    teacherName: string,
    teacherAddress: string,
    teacherEmail: string,
    teacherPhone: string,
    teacherExperties: teacherExperties,
    teacherSallary: string,
    teacherJoinDate: string,
    course: IInstituteTeacherCourse
}

export interface IInstituteTeacherData {
    instituteTeacher: IInstituteTeacherInitailData,
    status: Status
}