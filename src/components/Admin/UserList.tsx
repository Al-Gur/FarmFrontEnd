import {type ReactNode, useContext, useEffect, useState} from "react";
import {SERVER_URL} from "../../utils/Urls.ts";
import type {UserDto} from "../../utils/Interfaces.ts";
import {mainContext} from "../../utils/Context.ts";
import Encode from "../User/Encode.ts";

function UserList(): ReactNode {
    const emptyList: UserDto[] = [];
    const [userList, setUserList] = useState(emptyList);
    const {login} = useContext(mainContext);

    const refreshUserlist = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + Encode(login));

        fetch(SERVER_URL + "user/showall", {headers:myHeaders})
            .then(response => response.json())
            .then(result => {
                console.log(result);
                return result;
            })
            .then(result => setUserList(result))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        refreshUserlist();
    }, []);

    const showUser = (user: UserDto) => {
        return (
            <div>
                <span></span>
            </div>
        )
    }

    return (
        <table className="card">
            <thead>
            <tr>
                <th>Login</th>
                <th>Full name</th>
                <th>Roles</th>
            </tr>
            </thead>
            <tbody>
            {
                userList.map(user => {
                    return (
                        <tr key={user.login}>
                            <td>{user.login}</td>
                            <td>{user.fullName}</td>
                            <td>{user.roles.map(role => "[" + role + "] ")}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default UserList