import React from "react";
import type {MainContextValue} from "./Interfaces.ts";

export const mainContext = React.createContext<MainContextValue>({
    login: "",
    isSeller: false
});