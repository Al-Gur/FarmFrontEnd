import {type ReactNode} from "react";
import type {ProductsProps} from "../utils/Interfaces.ts";
import './ProductList.css'

function ProductList({listProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    return (
        <section className="flex-container">
            {
                listProducts.map((value, index) =>
                    <div className="product" key={index} onClick={() => {
                        const takenQuantity = prompt("Enter quantity", "1");
                        if (takenQuantity) {
                            setListProducts2([...listProducts2, {...value, quantity: +takenQuantity}]);
                            value.quantity -= +takenQuantity;
                        }
                    }}>
                        <div className="product-number">
                            {index + 1}
                        </div>
                        <div className="product-image">
                            {
                                value.image ?
                                    <img src={value.image} alt={value.name} className="w-25"/>
                                    : ""
                            }
                        </div>
                        <div className="product-name">
                            {value.name}
                        </div>
                        {
                            value.category ?
                                <div className="product-category">{"Category: " + value.category}</div>
                                : ""
                        }
                        <div className="product-quantity">
                            Quantity: {value.quantity}
                        </div>
                        <div className="product-producer">
                            Producer: {value.producer}
                        </div>

                    </div>
                )
            }
        </section>
    );
}

export default ProductList