import {createContext} from "react";
import type {MainContextValue} from "./Interfaces.ts";

export const mainContext = createContext<MainContextValue>({
    login: "",
    fullName: "",
    isSeller: false,
    isAdmin: false,
    refresh: false,
    setRefresh: () => {},
    categoryList: [],
    setCategoryList: () => {},
    debugParams: () => false
});