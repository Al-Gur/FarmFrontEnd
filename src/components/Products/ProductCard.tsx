import {type ReactNode} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value, index, onCardClick}: ProductCardProps): ReactNode {
    return (
        <div className="product" onClick={onCardClick}>
            <div className="product-number">
                {index + 1}
            </div>
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
    );
}

export default ProductCard