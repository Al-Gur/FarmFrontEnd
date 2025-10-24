import {type ReactNode} from "react";
import type {Product, ProductListProps} from "../../../utils/Interfaces.ts";
import './ProductList.css'
import ProductCard from "./ProductCard.tsx";

function ProductList({listProducts, listProducts2, setListProducts2}: ProductListProps): ReactNode {

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
                listProducts
                    // .filter((product) => !selectedCategory || product.category == selectedCategory)
                    // .filter((product) => !maxPrice || product.price <= maxPrice)
                    // .sort((p1, p2) => {
                    //     switch (sortBy) {
                    //         case "Name":
                    //             return p1.name.localeCompare(p2.name);
                    //         case "Price":
                    //             return p1.price - p2.price;
                    //         case "Category":
                    //             return p1.category.localeCompare(p2.category);
                    //         default:
                    //             return 1;
                    //     }
                    // })
                    .map((value, index) =>
                    <ProductCard key={index} value={remaining(value)} addToCart={(takenQuantity) => {
                        if (!(listProducts2 && setListProducts2)) return;
                        setListProducts2([...listProducts2, {...value, quantity: +takenQuantity}]);
                    }}/>
                )
            }
        </section>
    );
}

export default ProductList