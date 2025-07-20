import { Status } from "@/lib/types/global.types";

export interface IInstituteInitialData {
  instituteName: string,
  instituteAddress: string,
  instituteEmail: string,
  institutePhone: string,
  instituteVatNo: string,
  institutePanNo: string,

}

export interface IInstituteData {
  institute:IInstituteInitialData,
  status: Status

}