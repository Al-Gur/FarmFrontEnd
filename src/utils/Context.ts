import {createContext} from "react";
import type {MainContextValue} from "./Interfaces.ts";

export const mainContext = createContext<MainContextValue>({
    login: "",
    fullName: "",
    isSeller: false,
    isAdmin: false,
    getRefresh: () => false,
    setRefresh: () => {},
    categoryList: [],
    setCategoryList: () => {}
});