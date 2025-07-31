import {type ReactNode} from "react";
import type {ProductsProps} from "../utils/Interfaces.ts";
import './ProductList.css'

function ProductList({listProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    return (
        <div className="flex-container">
            <div className="product">1111111111111111111111111111111111</div>
            <div className="product">22222222222222222</div>
            <div className="product">333333333333333333</div>
        </div>
    );
}

export default ProductList