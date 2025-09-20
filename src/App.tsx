import {useState} from 'react'
import './App.css'
import User from "./components/User/User.tsx";
import {menuNames, type Product} from "./utils/Interfaces.ts";
import Products from "./components/Products/FarmProducts/Products.tsx";
import Navigation from "./components/Menus/Navigation.tsx"
import OwnProduce from "./components/Products/OwnProduce/OwnProduce.tsx";


function App() {
    const [login, setLogin] = useState(``);
    const [isSeller, setIsSeller] = useState(true);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [takenProducts, setTakenProducts] = useState<Product[]>([]);
    const [menuItem, setMenuItem] = useState(0);

    return (
        <>
            {/*<div>*/}
            {/*  <a href="https://vite.dev" target="_blank">*/}
            {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
            {/*  </a>*/}
            {/*  <a href="https://react.dev" target="_blank">*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*  </a>*/}
            {/*</div>*/}
            <h1>Generous farm</h1>
            <Navigation menuItem={menuItem} setMenuItem={setMenuItem} login={login}/>
            {
                menuNames[menuItem] == "ABOUT" ?
                    "" :
                    <div className="container-fluid ">
                        {
                            isSeller ?
                                <OwnProduce/>
                                :
                                <div className="row">
                                    <Products listProducts={allProducts} setListProducts={setAllProducts}
                                              listProducts2={takenProducts} setListProducts2={setTakenProducts}/>
                                    <User login={login} setLogin={setLogin}
                                          listProducts={takenProducts} setListProducts={setTakenProducts}
                                          listProducts2={takenProducts} setListProducts2={setTakenProducts}
                                    />
                                </div>
                        }
                    </div>
            }
        </>
    )
}

export default App
