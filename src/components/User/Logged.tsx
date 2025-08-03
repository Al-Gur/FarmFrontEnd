import type {ReactNode} from "react";
import type {LoggedProps} from "../../utils/Interfaces.ts"
import ProductList from "../Products/ProductList.tsx";
import Basket from "./Basket.tsx";


function Logged({login, setLogin, password, setPassword, listProducts, setListProducts,
                    listProducts2, setListProducts2}: LoggedProps): ReactNode {
    const logOut = () => {
        setLogin("");
        setPassword("");
    }

    return (
        <div className="container">
            <h2>{login}</h2>
            <button onClick={logOut}>Log out</button>
            <Basket listProducts={listProducts} setListProducts={setListProducts}
                         listProducts2={listProducts2} setListProducts2={setListProducts2}/>
        </div>
    )
}

export default Logged