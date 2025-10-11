import {type ChangeEvent, type ReactNode, useContext, useState} from "react";
import './OwnProductBigCard.css'
import '../../Common/FarmStyles.css'
import type {AddProductProps} from "../../../utils/Interfaces.ts";
import {mainContext} from "../../../utils/Context.ts";

function OwnProductBigCard(props: AddProductProps): ReactNode {

    const {value, setProduct, closeBigCard} = props;
    const {login} = useContext(mainContext);

    const cardBigID = "cardBig" + value.id;
    const [newValue, setNewValue] = useState(value);

    const changeValues = (e: ChangeEvent<HTMLInputElement>) => {
        const res = {...newValue};
        // @ts-ignore
        res[e.target.name] = e.target.value;
        res["producer"] = login;
        setNewValue(res);
    }

    const changeNumbers = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue({...newValue, ["producer"]: login, [e.target.name]: +e.target.value});
    }


    return (
        <div className="big-shadow" id={cardBigID} onClick={(e) => {
            if (e.target == document.getElementById(cardBigID)) {
                closeBigCard!();
            }
        }}>
            <div className="own-product-big">
                <span className="product-big-close-button" onClick={closeBigCard}>˟</span>
                <div className="own-product-big-image-box">
                    {
                        value.image &&
                            <img src={newValue.image} alt={newValue.name} className="product-big-image"/>
                            //        onClick={(e) => value.image = prompt("Enter link to the new image")}
                    }
                    <label htmlFor="productImageUrl" className="m-2">Link to the product image:</label>
                    <input type="url" id="productImageUrl" name="image" value={newValue.image}
                           onChange={changeValues}/>
                </div>
                <div className="own-product-big-name">
                    <label htmlFor="productName" className="m-2">Product name:</label>
                    <input type="text" id="productName" name="name" value={newValue.name}
                           onChange={changeValues}/>
                </div>
                <div className="product-big-price">
                    <label htmlFor="productPrice" className="m-2">Price:</label>
                    <input type="number" id="productPrice" name="price" value={newValue.price}
                           onChange={changeNumbers}/>
                </div>
                <div className="product-big-quantity">
                    <label htmlFor="productQuantity" className="m-2">Quantity:</label>
                    <input type="number" id="productQuantity" name="quantity" value={newValue.quantity} min={1}
                           onChange={changeNumbers}/>
                </div>
                <div className="product-big-category">
                    <label htmlFor="productCategory" className="m-2">Category:</label>
                    <input type="text" id="productCategory" name="category" value={newValue.category}
                           onChange={changeValues}/>
                </div>
                <div className="row p-3">
                    <div className="product-own-big-take col-3" onClick={() => {
                        setProduct(newValue);
                        closeBigCard!();
                    }}>
                        Accept
                    </div>
                    {
                        props.children
                    }
                    <div className="product-own-big-take col-3" onClick={() => closeBigCard!()}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnProductBigCard
