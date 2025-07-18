import { Status } from "@/lib/types/global.types";

export interface IInstituteInitialData {
    instituteName: string | null,
    instituteAddress: string,
    institutePhone: string
}

export interface IInstitueData {
    institue: IInstituteInitialData,
    status: Status
}