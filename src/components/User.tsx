import {type ReactNode, useState} from "react";
import type {LoginProps} from "../utils/Interfaces.ts";
import Logged from "./Logged.tsx";
import Login from "./Login.tsx";

function User({login, setLogin}: LoginProps): ReactNode {
    const [password, setPassword] = useState(``);

    return (
        <div className="container-fluid">
            {
                login ?
                    <Logged login={login} setLogin={setLogin} password={password} setPassword={setPassword}/>
                    : <Login setLogin={setLogin} setPassword={setPassword}/>
            }
        </div>
    )
}

export default User