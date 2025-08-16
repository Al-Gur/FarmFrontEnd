import {type ReactNode} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value, onCardClick}: ProductCardProps): ReactNode {
    const cardID = "card"+value.id;
    return (
        <div className="product" onClick={()=>{
            alert(cardID);
            document.getElementById(cardID)!.style.display="block";
        }}>
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
            <div className="taken" id={cardID}>
                Taken:{cardID}
            </div>
        </div>
    );
}

export default ProductCard