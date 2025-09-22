import {useEffect, useState} from 'react'
import './App.css'
import User from "./components/User/User.tsx";
import {menuNames, type Product} from "./utils/Interfaces.ts";
import {mainContext} from "./utils/Context.ts"
import Products from "./components/Products/FarmProducts/Products.tsx";
import Navigation from "./components/Menus/Navigation.tsx"
import OwnProduce from "./components/Products/OwnProduce/OwnProduce.tsx";

function App() {
    const [login, setLogin] = useState("");
    const [fullName, setFullName] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [takenProducts, setTakenProducts] = useState<Product[]>([]);
    const [menuItem, setMenuItem] = useState(0);

    const logOut = () => {
        setLogin("");
        //
    }

    useEffect(() => {
        if (menuNames[menuItem] == "LOGOUT") {
            logOut();
            setMenuItem(0);
        }
    }, [menuItem]);

    useEffect(() => {
        setIsSeller(login == "John");
    }, [login]);

    return (
        <mainContext.Provider value={{login, fullName, isSeller}}>
            <h1>Generous farm</h1>
            <Navigation menuItem={menuItem} setMenuItem={setMenuItem}/>
            {
                menuNames[menuItem] == "ABOUT" ?
                    "" :
                    <div className="container-fluid ">
                        {
                            isSeller ?
                                <div className="row">
                                    <OwnProduce/>
                                    <Products listProducts={allProducts} setListProducts={setAllProducts}
                                              listProducts2={takenProducts} setListProducts2={setTakenProducts}/>
                                </div>
                                :
                                <div className="row">
                                    <Products listProducts={allProducts} setListProducts={setAllProducts}
                                              listProducts2={takenProducts} setListProducts2={setTakenProducts}/>
                                    <User login={login} setLogin={setLogin} setFullName={setFullName}
                                          listProducts={takenProducts} setListProducts={setTakenProducts}
                                          listProducts2={takenProducts} setListProducts2={setTakenProducts}
                                    />
                                </div>
                        }
                    </div>
            }
        </mainContext.Provider>
    )
}

export default App
