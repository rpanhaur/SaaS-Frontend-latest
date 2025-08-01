import { Status } from "@/lib/types/global.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteData, IInstituteInitialData } from "./institute-types";
import { AppDispatch } from "../store";

import APIWITHTOKEN from "@/lib/http/apiwithtoken";

const instituteData: IInstituteData = {
  institute: {
    instituteName: "",
    instituteAddress: "",
    instituteEmail: "",
    institutePhone: "",
    instituteVatNo: "",
    institutePanNo: "",
  },
  status: Status.LOADING,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState: instituteData,
  reducers: {
    setInstitute(state: IInstituteData, action: PayloadAction<IInstituteInitialData>) {
      state.institute = action.payload
    },
    setStatus(state: IInstituteData, action: PayloadAction<Status>) {
      state.status = action.payload
    }
  },
});

export const { setInstitute, setStatus } = instituteSlice.actions

export default instituteSlice.reducer

export function createInstitute(finalData: IInstituteInitialData) {

  return async function createInstituteThunk(dispatch: AppDispatch) {

    try {

      const response = await APIWITHTOKEN.post('/institute', finalData)

      if (response.status == 200) {

        dispatch(setInstitute(response.data.finalData))
        dispatch(setStatus(Status.SUCCESS))
      } else {
        dispatch(setStatus(Status.ERROR))
      }



    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR))


    }



  }
}
