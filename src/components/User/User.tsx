import {type ReactNode, useState} from "react";
import type {UserProps} from "../../utils/Interfaces.ts";
import Logged from "./Logged.tsx";
import Login from "./Login.tsx";
import './User.css'


function User({login, setLogin, listProducts, setListProducts, listProducts2, setListProducts2}: UserProps): ReactNode {
    const [password, setPassword] = useState(``);

    return (
        <div className="col-4">
            {
                login ?
                    <Logged login={login} setLogin={setLogin} password={password} setPassword={setPassword}
                            listProducts={listProducts} setListProducts={setListProducts}
                            listProducts2={listProducts2} setListProducts2={setListProducts2}/>
                    : <Login setLogin={setLogin} setPassword={setPassword}/>
            }
        </div>
    )
}

export default User