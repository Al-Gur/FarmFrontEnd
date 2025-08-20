import {type ReactNode, useState} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value, addToCart}: ProductCardProps): ReactNode {
    const cardBigID = "cardBig" + value.id;
    const cardBigInpID = cardBigID + "Inp";
    const [isBigCard, setIsBigCard] = useState(false);
    const [takenQuantity, setTakenQuantity] = useState(1);

    return (
        <>
            <div className="product" onClick={() => {
                setIsBigCard(true);
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
                    <div className="product-big-shadow" id={cardBigID} onClick={(e) => {
                        if (e.target == document.getElementById(cardBigID)) {
                            alert(";");
                            setIsBigCard(false);
                        }
                    }}>
                        <div className="product-big">
                            <span className="product-big-close-button" onClick={() => {
                                setIsBigCard(false);
                            }}>˟</span>
                            <div className="product-big-image">
                                {
                                    value.image ?
                                        <img src={value.image} alt={value.name} className="w-100"/>
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
                            Taken:{cardBigID}
                            <div>
                                <label htmlFor={cardBigInpID}>Enter quantity:</label>
                                <input type="number" id={cardBigInpID} name={cardBigInpID}
                                       value={takenQuantity} min={1} max={value.quantity}
                                       onChange={(e) => setTakenQuantity(e.target.value)}/>
                            </div>
                            <div className="product-big-take" onClick={() => {
                                addToCart(takenQuantity);
                                setIsBigCard(false);
                            }}>
                                Add to cart
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </>
    );
}

export default ProductCard