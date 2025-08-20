import {type ReactNode, useState} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'
import ProductBigCard from "./ProductBigCard.tsx";

function ProductCard({value, addToCart}: ProductCardProps): ReactNode {

    const [isBigCard, setIsBigCard] = useState(false);

    return (
        <>
            <div className="product" onClick={() => setIsBigCard(true)}>
                <div className="product-image">
                    {
                        value.image ?
                            <img src={value.image} alt={value.name} className="w-75"/>
                            : ""
                    }
                </div>
                <div className="product-name">
                    {value.name}
                </div>
                <div className="product-price">
                    Price: {value.price}
                </div>
                <div className="product-quantity">
                    Quantity: {value.quantity}
                </div>
                {
                    value.category ?
                        <div className="product-category">{"Category: " + value.category}</div>
                        : ""
                }
                <div className="product-producer">
                    Producer: {value.producer}
                </div>
            </div>

            {
                isBigCard ?
                    <ProductBigCard value={value} addToCart={addToCart} closeBigCard={() => setIsBigCard(false)}/>
                    : ""
            }
        </>
    );
}

export default ProductCard