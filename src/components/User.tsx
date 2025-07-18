import type {ReactNode} from "react";
import type {LoginProps} from "../interface/types.d.ts";
import Logged from "./Logged.tsx";
import Login from "./Login.tsx";

function User({login, setLogin}: LoginProps): ReactNode {
    return (
        <div>
            {
                login ?
                    <Logged login={login} setLogin={setLogin}/>
                    : <Login login={login} setLogin={setLogin}/>
            }
        </div>
    )
}

export default User