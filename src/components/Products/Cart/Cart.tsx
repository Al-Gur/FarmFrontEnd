import {type ReactNode} from "react";
import type {Product, ProductsProps} from "../../../utils/Interfaces.ts";
import ProductList from "../FarmProducts/ProductList.tsx";
import check from "../../../utils/Check.ts";


function Cart({listProducts, setListProducts}: ProductsProps): ReactNode {

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
                check("net", result);
                return result;
            })
            .then((result: Product[]) => setListProducts(result))
            .catch((error) => console.error(error));
    }

    const totalCost = () => {
        return listProducts.map(product => product.quantity * product.price)
            .reduce((s, n) => s + n, 0);
    }

    return (
        <label className="card p-2 mt-3">
            <h2>Cart</h2>
            <ProductList listProducts={listProducts} setListProducts={setListProducts}/>
            <h3>
                Total cost: {totalCost()}
            </h3>
            <div>
                {
                    listProducts.length ?
                        <button className="mt-3">
                            Order products!
                        </button>
                        : ""
                }
            </div>
        </label>

    );
}

export default Cart