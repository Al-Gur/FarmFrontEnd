import {type ReactNode, useState} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value}: ProductCardProps): ReactNode {
    const cardSmallID = "cardSmall" + value.id;
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
            </div>

            {
                isBigCard ?
                    <div className="product-shadow" id={cardBigID} onClick={(e) => {
                        if (e.target == document.getElementById(cardBigID)) {
                            setIsBigCard(false);
                        }
                    }}>
                        <div className="product-big">
                            <div className="product-big-image">
                                {
                                    value.image ?
                                        <img src={value.image} alt={value.name} className="w-75"/>
                                        : ""
                                }
                            </div>
                            Taken:{cardBigID}
                            <div className="clos" onClick={() => {
                                setIsBigCard(false);
                            }}>
                                Close
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </>
    );
}

export default ProductCard