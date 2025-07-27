import { Status } from "@/lib/types/global.types"

export interface ICategoryData {
    categoryId: string,
    categoryName: string,
    categoryDescription: string,
    categoryCreatedAt: string
}

export interface ICategoryInitialData {
    category: ICategoryData[],
    status: Status
}