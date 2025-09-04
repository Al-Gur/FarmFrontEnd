import {type ReactNode, useState} from "react";
import type {RegisterProps} from "../../utils/Interfaces.ts"
import '../Common/FarmStyles.css'
import './Register.css'

function Register({setLogin, setPassword, setRegistration}: RegisterProps): ReactNode {
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordCopy, setNewPasswordCopy] = useState("");
    const [newFullName, setNewFullName] = useState("");
    const [newEMail, setNewEMail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAddress, setNewAddress] = useState("");

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
        <section className="big-shadow">
        <div className="container card bg-info-subtle pe-4 ps-1 pt-2 register-window">
            <h3 className="align-self-center text-black mt-2 mb-4">New user</h3>
            <div className="row mb-3">
                <label htmlFor="loginInput" className="col-6 text-end">Login:</label>
                <input type="text" id="loginInput" name="loginInput" value={newLogin} className="col-6" required
                       onChange={(e) => setNewLogin(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-6 text-end">Password:</label>
                <input type="password" id="password" name="password" value={newPassword} className="col-6" required
                       onChange={(e) => setNewPassword(e.target.value)}/>
            </div>
            <div className="row mb-5">
                <label htmlFor="passwordCopy" className="col-6 text-end mb-0 pb-0">Confirm password:</label>
                <input type="password" id="passwordCopy" name="passwordCopy" value={newPasswordCopy} required
                       className="col-6"
                       onChange={(e) => setNewPasswordCopy(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="fullName" className="col-4 text-end">Full name:</label>
                <input type="text" id="fullName" name="fullName" value={newFullName} className="col-8" required
                       onChange={(e) => setNewFullName(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="eMail" className="col-4 text-end">E-mail:</label>
                <input type="email" id="eMail" name="eMail" value={newEMail} className="col-8" required
                       onChange={(e) => setNewEMail(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="phone" className="col-4 text-end">Phone:</label>
                <input type="tel" id="phone" name="phone" value={newPhone} className="col-8" required
                       onChange={(e) => setNewPhone(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <label htmlFor="aDreS" className="col-4 text-end">Address:</label>
                <textarea id="aDreS" name="aDreS" value={newAddress} className="col-8" rows={2} cols={20} required
                          onChange={(e) => setNewAddress(e.target.value)}>
                </textarea>
            </div>
            <div className="row m-4">
                <label htmlFor="buyer" className="col-4 text-end">Buyer</label>
                <input type="radio" id="buyer" name="role" value="Buyer" className="col-2"/>
                <label htmlFor="seller" className="col-4 text-end">Seller</label>
                <input type="radio" id="seller" name="role" value="Seller" className="col-2"/>
            </div>
            <div className="row">
                <button className="col-5 me-2 ms-4" onClick={() => tryRegister()}>Register</button>
                <button className="col-5 me-1 ms-3" onClick={() => setRegistration(false)}>Cancel</button>
            </div>
        </div>
        </section>
    )
}

export default Register