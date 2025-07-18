import type {ReactNode} from "react";
import type {LoginProps} from "../interface/types.d.ts"


function Logged({login, setLogin}: LoginProps):ReactNode {
    const logOut = () => setLogin("");

    return(
        <>
            <h2>{login}</h2>
            <button onClick={logOut}>Log out</button>
        </>
    )
}

export default Logged