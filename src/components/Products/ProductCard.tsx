import {type ReactNode, useState} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value}: ProductCardProps): ReactNode {
    const cardBigID = "cardBig" + value.id;
    const [isBigCard, setIsBigCard] = useState(false);

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
                            <div className="product-big-take" onClick={() => {
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