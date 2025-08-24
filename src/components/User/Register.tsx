import {type ReactNode, useState} from "react";
import type {RegisterProps} from "../../utils/Interfaces.ts"

function Register({setLogin, setPassword, setRegistration}: RegisterProps): ReactNode {
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordCopy, setNewPasswordCopy] = useState("");
    const [newFullName, setNewFullName] = useState("");
    const [newEMail, setNewEMail] = useState("");
    const [newPhone, setNewPhone] = useState("");

    const tryRegister = async () => {
        /*        const myHeaders = new Headers();
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
                    .catch((error) => console.error(error));*/
    }

    return (
        <div className="container card bg-info-subtle p-4">
            <div className="row mb-3">
                <label htmlFor="loginInput" className="col-6 text-end">Login:</label>
                <input type="text" id="loginInput" name="loginInput" value={newLogin} className="col-6"
                       onChange={(e) => setNewLogin(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-6 text-end">Password:</label>
                <input type="password" id="password" name="password" value={newPassword} className="col-6"
                       onChange={(e) => setNewPassword(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="passwordCopy" className="col-6 text-end">Confirm password:</label>
                <input type="password" id="passwordCopy" name="passwordCopy" value={newPasswordCopy}
                       className="col-6"
                       onChange={(e) => setNewPasswordCopy(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="fullName" className="col-6 text-end">Full name:</label>
                <input type="text" id="fullName" name="fullName" value={newFullName} className="col-6"
                       onChange={(e) => setNewFullName(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="eMail" className="col-6 text-end">E-mail:</label>
                <input type="text" id="eMail" name="eMail" value={newEMail} className="col-6"
                       onChange={(e) => setNewEMail(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="phone" className="col-6 text-end">Phone:</label>
                <input type="text" id="phone" name="phone" value={newPhone} className="col-6"
                       onChange={(e) => setNewPhone(e.target.value)}/>
            </div>
            <div className="row m-4">
                <label htmlFor="buyer" className="col-3 text-end">Buyer</label>
                <input type="radio" id="buyer" name="role" value="Buyer" className="col-2"/>
                <label htmlFor="seller" className="col-4 text-end">Seller</label>
                <input type="radio" id="seller" name="role" value="Seller" className="col-2"/>
            </div>
            <div className="row">
                <button className="col-6 me-3" onClick={() => tryRegister()}>Register</button>
                <button className="col-5" onClick={() => setRegistration(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default Register