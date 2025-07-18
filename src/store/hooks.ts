import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const appDispatch = useDispatch.withTypes<AppDispatch>()
export const appSelector = useSelector.withTypes<RootState>()