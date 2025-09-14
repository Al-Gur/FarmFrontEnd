import {type ReactNode, useState} from "react";
import type {AddProductProps} from "../../../utils/Interfaces.ts";
import './ProductCard.css'
import OwnProductBigCard from "./OwnProductBigCard.tsx";

function OwnProductCard({value, setProduct}: AddProductProps): ReactNode {

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
            </div>
            {
                isBigCard ?
                    <OwnProductBigCard value={value} setProduct={setProduct}
                                    closeBigCard={() => setIsBigCard(false)}/>
                    : ""
            }
        </>
    );
}

export default OwnProductCard