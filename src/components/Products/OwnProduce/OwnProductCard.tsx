import {type ReactNode, useState} from "react";
import type {AddProductProps} from "../../../utils/Interfaces.ts";
import '../FarmProducts/ProductCard.css'
import OwnProductBigCard from "./OwnProductBigCard.tsx";
import ModalWindow from "../../Common/ModalWindow.tsx";

function OwnProductCard({value, setProduct, removeProduct}: AddProductProps): ReactNode {

    const [isBigCard, setIsBigCard] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

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
                isBigCard &&
                <OwnProductBigCard value={value} setProduct={setProduct}
                                   closeBigCard={() => setIsBigCard(false)}>
                    <div className="product-own-big-take col-3" onClick={() => setShowModal(true)}>
                        Remove
                    </div>
                </OwnProductBigCard>
            }
            {
                showModal &&
                <ModalWindow onClose={closeModal}>
                    <div>
                        Are you sure to remove product {value.name} from database?
                        <div className="flex-container">
                            <div onClick={() => {
                                removeProduct!(value);
                                closeModal();
                            }}>Yes
                            </div>
                            <div onClick={closeModal}>No</div>
                        </div>
                    </div>
                    //setIsBigCard(false);
                </ModalWindow>
            }
        </>
    );
}

export default OwnProductCard