import {type ReactNode} from "react";
import type {ProductsProps} from "../../utils/Interfaces.ts";
import './ProductList.css'
import ProductCard from "./ProductCard.tsx";

function ProductList({listProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    return (
        <section className="flex-container">
            {
                listProducts.map((value, index) =>
                    <ProductCard key= {index} value={value} index={index} onCardClick={() => {
                        const takenQuantity = prompt("Enter quantity", "1");
                        if (takenQuantity) {
                            setListProducts2([...listProducts2, {...value, quantity: +takenQuantity}]);
                            value.quantity -= +takenQuantity;
                        }
                    }}/>
                )
            }
        </section>
    );
}

export default ProductList