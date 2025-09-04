import {type ReactNode, useState} from "react";
import './ProductBigCard.css'
import '../Common/FarmStyles.css'
import type {ProductCardProps} from "../../utils/Interfaces.ts";

function ProductBigCard({value, addToCart, closeBigCard}: ProductCardProps): ReactNode {
    const cardBigID = "cardBig" + value.id;
    const cardBigInpID = cardBigID + "Inp";
    const [takenQuantity, setTakenQuantity] = useState(1);

    return (

        <div className="big-shadow" id={cardBigID} onClick={(e) => {
            if (e.target == document.getElementById(cardBigID)) {
                closeBigCard();
            }
        }}>
            <div className="product-big">
                <span className="product-big-close-button" onClick={closeBigCard}>˟</span>
                <div className="product-big-image-box">
                    {
                        value.image ?
                            <img src={value.image} alt={value.name} className="product-big-image"/>
                            : ""
                    }
                </div>
                <div className="product-big-name">
                    {value.name}
                </div>
                <div className="product-big-price">
                    Price: {value.price}
                </div>
                <div className="product-big-quantity">
                    Quantity: {value.quantity}
                </div>
                {
                    value.category ?
                        <div className="product-big-category">{"Category: " + value.category}</div>
                        : ""
                }
                <div className="product-big-producer">
                    Producer: {value.producer}
                </div>
                {
                    //"Taken: "+cardBigID
                }
                <div className="m-2">
                    <label htmlFor={cardBigInpID} className="m-2">Enter quantity:</label>
                    <input type="number" id={cardBigInpID} name={cardBigInpID}
                           value={takenQuantity} min={1} max={value.quantity}
                           onChange={(e) => setTakenQuantity(+e.target.value)}/>
                </div>
                <div className="product-big-take" onClick={() => {
                    addToCart(takenQuantity);
                    closeBigCard();
                }}>
                    Add to cart
                </div>
            </div>
        </div>
    );
}

export default ProductBigCard
