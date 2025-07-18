import {type ReactNode, useState} from "react";
import type {LoginProps} from "../interface/types.d.ts"

function Login({login, setLogin}: LoginProps):ReactNode {
    const [registration, setRegistration] = useState(false);
    return(
        <>
            {registration? "Reg" : "Login"}
        </>
    )
}

export default Login