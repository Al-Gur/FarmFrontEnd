import {type ReactNode, useEffect, useState} from "react";
import {SERVER_URL} from "../../utils/Urls.ts";
import type {UserDto} from "../../utils/Interfaces.ts";

function UserList(): ReactNode {
    const emptyList: UserDto[] = [];
    const [userList, setUserList] = useState(emptyList);

    const refreshUserlist = () => {
        fetch(SERVER_URL + "user/showall")
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
        <table>
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
                        <tr>
                            <td>{user.login}</td>
                            <td>{user.fullName}</td>
                            <td>{user.roles}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}