import {useState} from 'react'
import './App.css'
import User from "./components/User.tsx";
import type {Product} from "./utils/Interfaces.ts";
import Products from "./components/Products.tsx";


function App() {
    const [login, setLogin] = useState(``);
    //const [listProducts, setListProducts] = useState<string>(``);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [takenProducts, setTakenProducts] = useState<Product[]>([]);


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
            <h1>Farm</h1>

            <div className="container-fluid ">
                <div className="row">
                    <Products listProducts={allProducts} setListProducts={setAllProducts}/>
                    <User login={login} setLogin={setLogin} listProducts={allProducts} setListProducts={setTakenProducts}/>
                </div>
            </div>
        </>
    )
}

export default App
