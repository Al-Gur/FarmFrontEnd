import {type ReactNode, useContext, useState} from "react";
import type {AddProductProps} from "../../../utils/Interfaces.ts";
import '../FarmProducts/ProductCard.css'
import OwnProductBigCard from "./OwnProductBigCard.tsx";

function OwnProductCard({value, setProduct, removeProduct}: AddProductProps): ReactNode {

    const [isBigCard, setIsBigCard] = useState(false);

    return (
        <>
            <div className="product" onClick={() => setIsBigCard(true)}>
                <div className="product-image">
                    {value.image && <img src={value.image} alt={value.name} className="w-75"/>}
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
                <div className="product-category">
                    Category: {value.category}
                </div>
            </div>
            {
                isBigCard ?
                        <OwnProductBigCard value={value} setProduct={setProduct}
                                           closeBigCard={() => setIsBigCard(false)}>
                            <div className="product-own-big-take col-3" onClick={() => {
                                if (confirm("Are you sure to remove product " + value.name + " from database?")) {
                                    removeProduct!(value);
                                }
                                setIsBigCard(false);
                            }}>Remove</div>
                        </OwnProductBigCard>
                    : ""
            }
        </>
    );
}

export default OwnProductCard