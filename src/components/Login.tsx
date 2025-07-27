import {type ReactNode, useState} from "react";
import type {SetAuthProps, UserDto} from "../utils/Interfaces.ts"
import Register from "./Register.tsx";

function Login({setLogin, setPassword}: SetAuthProps): ReactNode {
    const [registration, setRegistration] = useState(false);
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const logIn = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://localhost:8080/user/login", requestOptions)
            .then((response) => response.json())
            .then((result: UserDto) => {
                console.log(result);
                setLogin(result.login)
            })
            .catch((error) => console.error(error));
    }

    return (
        registration ?
            <Register setLogin={setLogin} setPassword={setPassword} setRegistration={setRegistration}/>
            :
            <div className="container card bg-success-subtle">
                <div className="row mb-3">
                    <label htmlFor="loginInput" className="col-4">Login:</label>
                    <input type="text" id="loginInput" name="loginInput" value={newLogin}
                           className="float-start col-8"
                           onChange={(e) => setNewLogin(e.target.value)}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-4">Password:</label>
                    <input type="password" id="password" name="password" value={newPassword}
                           className="float-start col-8"
                           onChange={(e) => setNewPassword(e.target.value)}/>
                </div>
                <button className="mb-3" onClick={() => logIn()}>Log in</button>
                <button onClick={() => setRegistration(true)}>Register</button>
            </div>
    )
}

export default Login