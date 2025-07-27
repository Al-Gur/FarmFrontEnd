import type {ReactNode} from "react";
import type {AuthProps} from "../utils/Interfaces.ts"


function Logged({login, setLogin, password, setPassword}: AuthProps): ReactNode {
    const logOut = () => {
        setLogin("");
        setPassword("");
    }

    return (
        <>
            <h2>{login}</h2>
            <button onClick={logOut}>Log out</button>
        </>
    )
}

export default Logged