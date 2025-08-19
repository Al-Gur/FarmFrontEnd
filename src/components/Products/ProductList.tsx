import {type ReactNode, useState} from "react";
import type {Product, ProductsProps} from "../../utils/Interfaces.ts";
import './ProductList.css'
import ProductCard from "./ProductCard.tsx";

function ProductList({listProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    const [bigCardID, setBigCardID] = useState("");

    const remaining = (product: Product) => {
        if (listProducts2) {
            return {
                ...product,
                quantity: product.quantity - listProducts2
                    .filter((product2) => product2.id == product.id)
                    .reduce((sum, product2) => sum + product2.quantity, 0)
            };
        } else {
            return product;
        }
    }

    return (
        <section className="flex-container">
            {
                listProducts.map((value, index) =>
                    <ProductCard key={index} value={remaining(value)}
                                     // () => {
                                     //
                                     //     //              if (!(listProducts2 && setListProducts2)) return;
                                     //     //              const takenQuantity = prompt("Enter quantity", "1");
                                     //     //              if (takenQuantity) {
                                     //     //                  setListProducts2([...listProducts2, {...value, quantity: +takenQuantity}]);
                                     //     //              }
                                     //
                                     //     setBigCardID(value.id);
                                     // }
                                 />
                )
            }
        </section>
    );
}

export default ProductList