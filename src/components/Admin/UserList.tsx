import {type ReactNode, useContext, useEffect, useState} from "react";
import {SERVER_URL} from "../../utils/Urls.ts";
import type {UserDto} from "../../utils/Interfaces.ts";
import {mainContext} from "../../utils/Context.ts";
import Encode from "../User/Encode.ts";
import OneUser from "./OneUser.tsx";

function UserList(): ReactNode {
    const {login, debugParams} = useContext(mainContext);

    const emptyList: UserDto[] = [];
    const [userList, setUserList] = useState(emptyList);

    const refreshUserlist = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + Encode(login));

        fetch(SERVER_URL + "user/showall", {headers: myHeaders})
            .then(response => response.json())
            .then(result => {
                if (debugParams("net")) console.log(result);
                return result;
            })
            .then(result => setUserList(result))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        login &&
         refreshUserlist();
    }, [login]);


    return (
        <table style={{width: "100%"}} className="card">
            <tbody>
            <tr>
                <th><b>Users</b></th>
                <th>Login</th>
                <th>Full name</th>
                <th>Roles</th>
            </tr>
            {
                userList.map(user => (
                    <OneUser user={user} refreshUserlist={refreshUserlist} key={user.login}/>
                ))
            }
            </tbody>
        </table>
    )
}

export default UserList