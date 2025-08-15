import {type ReactNode} from "react";
import type {ProductCardProps} from "../../utils/Interfaces.ts";
import './ProductCard.css'

function ProductCard({value, onCardClick}: ProductCardProps): ReactNode {
    const cardName = "bigcard"+value.id;
    return (
        <section className="product" onClick={()=> {
            //document.getElementById(cardName)!.style.display="block";
            console.log(cardName)
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
            <div id={cardName} className="taken-quantity">
                <label htmlFor={"taken"+cardName}>{value.id}:</label>
                <input type="number" id={"taken"+cardName} name="taken"
                       value={value.takenQuantity} min="0" max={value.quantity}
                       onChange={(e) => value.takenQuantity = +e.target.value}/>
                <button onClick={() => {
                    document.getElementById(cardName)!.style.display="none";
                }}>Close</button>
            </div>
            {
                value.category ?
                    <div className="product-category">{"Category: " + value.category}</div>
                    : ""
            }
            <div className="product-producer">
                Producer: {value.producer}
            </div>
        </section>
    );
}

export default ProductCard