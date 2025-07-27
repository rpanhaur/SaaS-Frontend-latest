import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "@/lib/types/global.types";
import { ICategoryData, ICategoryInitialData } from "./institue-categories-types";
import { AppDispatch } from "@/store/store";
import APIWITHTOKEN from "@/lib/http/apiwithtoken";


const categoriesData: ICategoryInitialData = {
    category: [],
    status: Status.LOADING
}

const instituteCategoriesSlice = createSlice({
    name: "cagegoreis",
    initialState: categoriesData,
    reducers: {

        setCategory(state: ICategoryInitialData, action: PayloadAction<ICategoryData[]>) {
            state.category = action.payload
        },
        setStatus(state: ICategoryInitialData, action: PayloadAction<Status>) {
            state.status = action.payload
        },
        setCategoryDelete(state: ICategoryInitialData, action: PayloadAction<string>) {
            const categoryId = action.payload
            const index = state.category.findIndex((category) => category.id == categoryId)
            if (index !== -1) {
                state.category.splice(index, 1)
            }
        }

    }
})

export const { setCategory, setStatus, setCategoryDelete } = instituteCategoriesSlice.actions
export default instituteCategoriesSlice.reducer


export function createCategory(data: ICategoryData) {
    return async function createCategoryThunk(dispatch: AppDispatch) {

        try {

            const response = await APIWITHTOKEN.post('/institue/category', data)

            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))
                response.data.data > 0 && dispatch(setCategory(response.data.data))

            } else {
                dispatch(setStatus(Status.ERROR))
            }


        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }

    }
}

export function deleteCategory(id: string) {
    return async function deleteCategoryThunk(dispatch: AppDispatch) {
        try {
            const response = await APIWITHTOKEN.delete('/institue/category/' + id)
            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setCategoryDelete(id))

            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }
    }
}

export function fetchCategory() {
    return async function fetchCategoryThunk(dispatch: AppDispatch) {
        try {

            const response = await APIWITHTOKEN.get('/institute/category')
            if (response.status == 200) {
                dispatch(setStatus(Status.SUCCESS))
                response.data.data > 0 && dispatch(setCategory(response.data.data))

            }
            else {
                dispatch(setStatus(Status.ERROR))
            }

        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.ERROR))


        }
    }
}