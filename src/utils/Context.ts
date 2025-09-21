import {createContext} from "react";
import type {MainContextValue} from "./Interfaces.ts";

export const mainContext = createContext<MainContextValue>({
    login: "",
    isSeller: false
});