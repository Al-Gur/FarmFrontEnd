import {type ReactNode, type Ref, useContext, useRef, useState} from "react";
import type {OneUserProps} from "../../utils/Interfaces.ts";
import ModalWindow from "../Common/ModalWindow.tsx";
import {SERVER_URL} from "../../utils/Urls.ts";
import Encode from "../User/Encode.ts";
import {mainContext} from "../../utils/Context.ts";
import debugg from "../../utils/Debugg.ts";

function OneUser({user, refreshUserlist}: OneUserProps): ReactNode {
    const newRoleRef: Ref<HTMLSelectElement> = useRef(null);
    const oldRoleRef: Ref<HTMLSelectElement> = useRef(null);

    const {login} = useContext(mainContext);

    const [newRole, setNewRole] = useState("");
    const [newRole2, setNewRole2] = useState("");
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const closeModal = () => { setEditing(false); setDeleting(false); }

    const deleteUser = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + Encode(login));

        fetch(SERVER_URL + `user/delete/${user.login}`, {
            method: "DELETE",
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                debugg("net", result);
                refreshUserlist();
                return result;
            })
            .catch((error) => console.error(error));

        closeModal();
    }


    const changeRole = (role:string, add: boolean) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + Encode(login));

        const url = SERVER_URL + `user/${(add ? "addrole" : "removerole")}/${user.login}/${role}`;
        debugg("net", url);
        fetch(url, {
            method: (add ? "PUT" : "DELETE"),
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                debugg("net", result);
                refreshUserlist();
                return result;
            })
            .catch((error) => console.error(error));

        closeModal();
    }


    return (
        <tr>
            <td>
                <button className="btn-outline-info border-2 border-light-subtle"
                        onClick={() => setEditing(true)}>
                    Change
                </button>
            </td>
            <td>{user.login}</td>
            <td>{user.fullName}</td>
            <td>{user.roles.map(role => "[" + role + "] ")}</td>
            {
                editing &&
                <ModalWindow onClose={closeModal}>
                    <button className="btn-danger border-3"
                            onClick={() => {closeModal(); setDeleting(true);}}>
                        Delete user
                    </button>

                    <label className="m-2">New role:
                    <select name="NewRole" value={newRole} ref={newRoleRef}
                            onChange={e => setNewRole(e.target.value)}>
                        <option value="SELLER">SELLER</option>
                        <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                        <option value=".">Another role...</option>
                    </select>
                    </label>
                    {
                        newRole == '.' &&
                        <label className="m-2">Enter new role:
                            <input type="text" value={newRole2} onChange={e => setNewRole2(e.target.value)}/>
                        </label>
                    }
                    <button onClick={() => {
                        let addingRole = newRole || newRoleRef.current!.value;
                        if (addingRole == '.') {
                            addingRole = newRole2;
                        }
                        if (addingRole) {
                            changeRole(addingRole, true);
                        }
                    }}>
                        Add role
                    </button>

                    <label htmlFor="OldRole" className="m-2">Existing role:</label>
                    <select name="OldRole" ref={oldRoleRef}>
                        {
                            user.roles.map(role => <option value={role} key={role}>{role}</option>)
                        }
                    </select>
                    <button onClick={
                        () => changeRole(oldRoleRef.current!.value, false)}>
                        Remove role
                    </button>

                    <button onClick={closeModal}>Cancel</button>
                </ModalWindow>
            }
            {
                deleting &&
                <ModalWindow onClose={closeModal}>
                    <div>
                        Are you sure to remove user {user.login} ({user.fullName}) from database?
                        <div className="flex-container">
                            <button onClick={deleteUser}> Yes </button>
                            <button onClick={closeModal}> No </button>
                        </div>
                    </div>
                </ModalWindow>
            }
        </tr>
    );
}

export default OneUser