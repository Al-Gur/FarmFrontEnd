import {useEffect} from "react";
import {SERVER_URL} from "../../../utils/Urls.ts";

function UserList(): ReactNode {
    const emptyList: UserDto[] = [];
    const [userList, setUserList] = useState(emptyList);

    const refreshUserlist = () => {
        fetch(SERVER_URL + )
    }

    useEffect(() => {
        refreshUserlist();
    }, []);

    return (
        <>
        </>
    )
}