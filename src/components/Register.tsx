import {type ReactNode} from "react";
import type {RegisterProps, UserDto} from "../utils/Interfaces.ts"

function Register({setLogin, setPassword, setRegistration}: RegisterProps): ReactNode {
    let newLogin: string = "";
    let newPassword: string = "";
    let newPasswordCopy: string = "";
    let newFullName: string = "";

    const tryRegister = async () => {
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
        <div className="card bg-info-subtle">
            <div className="row mb-3">
                <label htmlFor="loginInput" className="col-6 text-end">Login:</label>
                <input type="text" id="loginInput" name="loginInput" value={newLogin} className="col-6"
                       onChange={(e) => newLogin = e.target.value}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-6 text-end">Password:</label>
                <input type="password" id="password" name="password" value={newPassword} className="col-6"
                       onChange={(e) => newPassword = e.target.value}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="passwordCopy" className="col-6 text-end">Confirm password:</label>
                <input type="password" id="passwordCopy" name="passwordCopy" value={newPasswordCopy}
                       className="col-6"
                       onChange={(e) => newPasswordCopy = e.target.value}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="fullName" className="col-6 text-end">Full name:</label>
                <input type="text" id="fullName" name="fullName" value={newFullName} className="col-6"
                       onChange={(e) => newFullName = e.target.value}/>
            </div>
            <div className="row mb-3">
                <button className="col-6 me-3" onClick={() => tryRegister()}>Register</button>
                <button className="col-5" onClick={() => setRegistration(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default Register