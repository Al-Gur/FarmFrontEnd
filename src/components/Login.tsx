import {type ReactNode, useState} from "react";
import type {LoginProps, UserDto} from "../utils/Interfaces.ts"

function Login({setLogin, setPassword}: LoginProps): ReactNode {
    const [registration, setRegistration] = useState(false);
    let newLogin: string;
    let newPassword: string;


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
        <>
            <label htmlFor="loginInput">Login:</label>
            <input type="text" id="loginInput" name="loginInput" value={newLogin}
                   onChange={(e) => newLogin = e.target.value}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={newPassword}
                   onChange={(e) => newPassword = e.target.value}/>
            <button onClick={() => logIn()}>Log in</button>
            {registration ? "Reg" : "Login"}
        </>
    )
}

export default Login