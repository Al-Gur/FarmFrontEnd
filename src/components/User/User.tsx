import {type ReactNode, useEffect, useState} from "react";
import type {UserProps} from "../../utils/Interfaces.ts";
import Logged from "./Logged.tsx";
import Login from "./Login.tsx";
import './User.css'


function User({login, setLogin, setFullName,
                  listProducts, setListProducts, listProducts2, setListProducts2}: UserProps): ReactNode {
    const [password, setPassword] = useState(``);

    useEffect(() => {
        if (!login) {
            setPassword("");
        }
    }, [login]);

    return (
        <div className="col-4 col-xl-3">
            {
                login ?
                    <Logged login={login} setLogin={setLogin} password={password} setPassword={setPassword}
                            listProducts={listProducts} setListProducts={setListProducts}
                            listProducts2={listProducts2} setListProducts2={setListProducts2}/>
                    : <Login setLogin={setLogin} setPassword={setPassword} setFullName={setFullName}/>
            }
        </div>
    )
}

export default User