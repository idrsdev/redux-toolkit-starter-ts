import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStateT, AppDispatchT } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatchT>();
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
