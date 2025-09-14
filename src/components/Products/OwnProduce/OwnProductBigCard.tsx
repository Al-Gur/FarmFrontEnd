import {type ReactNode} from "react";
import './OwnProductBigCard.css'
import '../../Common/FarmStyles.css'
import type {AddProductProps} from "../../../utils/Interfaces.ts";

function OwnProductBigCard({value, setProduct, closeBigCard}: AddProductProps): ReactNode {
    const cardBigID = "cardBig" + value.id;

    return (
        <div className="big-shadow" id={cardBigID} onClick={(e) => {
            if (e.target == document.getElementById(cardBigID)) {
                closeBigCard!();
            }
        }}>
            <div className="product-big">
                <span className="product-big-close-button" onClick={closeBigCard}>˟</span>
                <div className="product-big-image-box">
                    {
                        value.image ?
                            <img src={value.image} alt={value.name} className="product-big-image"/>
                            //        onClick={(e) => value.image = prompt("Enter link to the new image")}
                            : ""
                    }
                    <label htmlFor="productImageUrl" className="m-2">Link to an image of the product:</label>
                    <input type="url" id="productImageUrl" name="productImageUrl" value={value.image}
                           onChange={(e) => value.image = e.target.value}/>
                </div>
                <div className="product-big-name">
                    <label htmlFor="productName" className="m-2">Name of the product:</label>
                    <input type="text" id="productName" name="productName" value={value.name}
                           onChange={(e) => value.name = e.target.value}/>
                </div>
                <div className="product-big-price">
                    <label htmlFor="productPrice" className="m-2">Price:</label>
                    <input type="number" id="productPrice" name="productPrice" value={value.price}
                           onChange={(e) => value.price = +e.target.value}/>
                </div>
                <div className="product-big-quantity">
                    <label htmlFor="productQuantity" className="m-2">Quantity:</label>
                    <input type="number" id="productQuantity" name="productQuantity" value={value.quantity} min={1}
                           onChange={(e) => value.quantity = +e.target.value}/>
                </div>
                <div className="product-big-category">
                    <label htmlFor="productCategory" className="m-2">Category:</label>
                    <input type="text" id="productCategory" name="productCategory" value={value.category}
                           onChange={(e) => value.category = e.target.value}/>
                </div>
                <div className="row">
                    <div className="product-big-take col-5 me-2 ms-4" onClick={() => {
                        setProduct(value);
                        closeBigCard!();
                    }}>
                        Accept
                    </div>
                    <div className="product-big-take col-5 me-2 ms-4" onClick={() => closeBigCard!()}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnProductBigCard
