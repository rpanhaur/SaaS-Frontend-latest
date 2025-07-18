import { Status } from "@/lib/types/global.types"

export interface ITeacherInitailData {
    teacherName: string,
    teacherAddress: string,
    teacherPhone: string
}

export interface ITeacherData {
    teacher: ITeacherInitailData,
    status: Status
}