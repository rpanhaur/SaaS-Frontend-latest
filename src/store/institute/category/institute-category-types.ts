import { Status } from "@/lib/types/global.types";

export interface ICategoryAddData{
  categoryName:string,
  categoryDescription:string
}

export interface ICategoryData extends ICategoryAddData{
  id:string,

  createdAt:string
}

export interface ICategoryInitialData{
  category:ICategoryData[],
  status:Status
  
}