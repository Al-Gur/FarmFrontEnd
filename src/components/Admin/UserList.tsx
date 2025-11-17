import {type ReactNode, useEffect, useState} from "react";
import {SERVER_URL} from "../../utils/Urls.ts";
import type {UserDto, UserListProps} from "../../utils/Interfaces.ts";
import OneUser from "./OneUser.tsx";
import check from "../../utils/Check.ts";

function UserList({login, password}: UserListProps): ReactNode {

    const emptyList: UserDto[] = [];
    const [userList, setUserList] = useState(emptyList);

    const refreshUserlist = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa(login + ":" + password));

        fetch(SERVER_URL + "user/showall", {headers: myHeaders})
            .then(response => response.json())
            .then(result => {
                check("net", result);
                return result;
            })
            .then(result => setUserList(result))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        login &&
        refreshUserlist();
    }, [login, password]);


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
                    <OneUser user={user} refreshUserlist={refreshUserlist} key={user.login}
                    authString={"Basic " + btoa(login + ":" + password)}/>
                ))
            }
            </tbody>
        </table>
    )
}

export default UserList