import {type ReactNode, useEffect, useState} from "react";
import type {UserProps} from "../../utils/Interfaces.ts";
import Logged from "./Logged.tsx";
import Login from "./Login.tsx";
import './CurrentUser.css'


function CurrentUser({
                         login, setLogin, setFullName,
                         listProducts, setListProducts, listProducts2, setListProducts2,
                         setIsSeller, setIsAdmin
                     }: UserProps): ReactNode {
    const [password, setPassword] = useState(``);

    useEffect(() => {
        if (!login && password) {
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
                    : <Login setLogin={setLogin} setPassword={setPassword} setFullName={setFullName}
                             setIsSeller={setIsSeller} setIsAdmin={setIsAdmin}/>
            }
        </div>
    )
}

export default CurrentUser