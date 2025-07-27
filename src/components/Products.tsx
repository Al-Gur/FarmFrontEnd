import {type ReactNode} from "react";
import type {Product, ProductsProps} from "../utils/Interfaces.ts";
import AllProductList from "./AllProductList.tsx";


function Products({listProducts, setListProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    const refreshProducts = async () => {
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
        <label className="card col-6 me-3">
            <h2>All products</h2>
            <AllProductList listProducts={listProducts} setListProducts={setListProducts}
            listProducts2={listProducts2} setListProducts2={setListProducts2}/>
            <button className="mt-3" onClick={() => refreshProducts()}>
                Refresh
            </button>
        </label>

    );
}


export default Products