import type {ReactNode} from "react";
import type {LoggedProps} from "../../utils/Interfaces.ts"
import ProductList from "../Products/FarmProducts/ProductList.tsx";
import Cart from "../Products/Cart/Cart.tsx";
import './Logged.css'

function Logged({login, setLogin, password, setPassword, listProducts, setListProducts,
                    listProducts2, setListProducts2}: LoggedProps): ReactNode {
    const logOut = () => {
        setLogin("");
        setPassword("");
    }

    return (
        <div className="container pb-3 card userpanel">
            <h2>{login}</h2>
            <button onClick={logOut}>Log out</button>
            <Cart listProducts={listProducts} setListProducts={setListProducts}
                  listProducts2={listProducts2} setListProducts2={setListProducts2}/>
        </div>
    )
}

export default Logged