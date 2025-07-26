import {type ReactNode, useState} from "react";
import type {LoginProps, UserDto} from "../utils/Interfaces.ts"

function Login({setLogin, setPassword}: LoginProps): ReactNode {
    const [registration, setRegistration] = useState(false);
    let newLogin: string = "";
    let newPassword: string = "";


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
        <div className="card">
            <div className="row">
                <label htmlFor="loginInput" className="col-4">Login:</label>
                <input type="text" id="loginInput" name="loginInput" value={newLogin}  className="float-start col-8"
                       onChange={(e) => newLogin = e.target.value}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={newPassword}
                       onChange={(e) => newPassword = e.target.value}/>
            </div>
            <button onClick={() => logIn()}>Log in</button>
            {registration ? "Reg" : ""}
        </div>
    )
}

export default Login