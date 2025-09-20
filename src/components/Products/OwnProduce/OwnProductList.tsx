import {type ReactNode, useState} from "react";
import type {Product, ProductListProps} from "../../../utils/Interfaces.ts";
import '../FarmProducts/ProductList.css'
import OwnProductCard from "./OwnProductCard.tsx";
import OwnProductBigCard from "./OwnProductBigCard.tsx";

function OwnProductList({listProducts2, setListProducts2}: ProductListProps): ReactNode {

    const [isNewProductBigCard, setIsNewProductBigCard] = useState(false);
    const emptyValue: Product = {
        id: "",
        name: "",
        image: "",
        category: "",
        price: 0,
        quantity: 0,
        producer: "USER"
    }
    //
    // const remaining = (product: Product) => {
    //     if (listProducts2) {
    //         return {
    //             ...product,
    //             quantity: product.quantity - listProducts2
    //                 .filter((product2) => product2.id == product.id)
    //                 .reduce((sum, product2) => sum + product2.quantity, 0)
    //         };
    //     } else {
    //         return product;
    //     }
    // }

    return (
        <section className="flex-container">
            <div>
                <button onClick={() => setIsNewProductBigCard(true)}>Add product</button>
            </div>
            {
                isNewProductBigCard ?
                    <OwnProductBigCard value={{...emptyValue}} setProduct={newValue => {
                        setListProducts2!([...listProducts2!, newValue]);
                    }}
                                       closeBigCard={() => setIsNewProductBigCard(false)}/>
                    : ""
            }
            {
                listProducts2!
                    .map((value, index) =>
                        <OwnProductCard key={index} value={{...value}}
                                        setProduct={newValue => {
                                            const newListProduct = [...listProducts2!];
                                            newListProduct[index] = newValue;
                                            setListProducts2!(newListProduct);
                                        }}/>
                    )
            }
        </section>
    );
}

export default OwnProductList