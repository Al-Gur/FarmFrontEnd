import type {ReactNode} from "react";
import type {LoggedProps} from "../utils/Interfaces.ts"
import TakenProductList from "./AllProductList.tsx";


function Logged({login, setLogin, password, setPassword, listProducts, setListProducts}: LoggedProps): ReactNode {
    const logOut = () => {
        setLogin("");
        setPassword("");
    }

    return (
        <div className="container">
            <h2>{login}</h2>
            <button onClick={logOut}>Log out</button>
            <TakenProductList listProducts={listProducts} setListProducts={setListProducts}/>
        </div>
    )
}

export default Logged