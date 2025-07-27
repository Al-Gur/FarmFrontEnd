import {useState} from 'react'
import './App.css'
import User from "./components/User.tsx";
import type {Product} from "./utils/Interfaces.ts";
import Products from "./components/Products.tsx";


function App() {
    const [login, setLogin] = useState(``);
    //const [listProducts, setListProducts] = useState<string>(``);
    const [listProducts, setListProducts] = useState<Product[]>([]);

    const submit = async () => {
        const requestOptions = {
            method: "GET"//,
            // redirect: "follow"
        };

        fetch("http://localhost:8080/products/showall", requestOptions)
            .then((response) => {
                //console.log(response.text());
                return response.json();
            })
            .then(result => {
                console.log(result);
                return result;
            })
            .then((result: Product[]) => setListProducts(result))
            .catch((error) => console.error(error));
    }

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
                    <Products listProducts={listProducts}/>
                    <User login={login} setLogin={setLogin}/>
                </div>
                <button className="col-5 mt-3" onClick={() => submit()}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default App
