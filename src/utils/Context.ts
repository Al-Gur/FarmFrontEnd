import {createContext} from "react";
import type {Category, MainContextValue} from "./Interfaces.ts";

export const mainContext = createContext<MainContextValue>({
    login: "",
    fullName: "",
    isSeller: false,
    isAdmin: false,
    refresh: false,
    setRefresh: (refresh) => {},
    categoryList: [],
    setCategoryList: () => {}
});