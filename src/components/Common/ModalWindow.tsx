import type {ReactNode} from "react";
import {createPortal} from "react-dom";
import "./FarmStyles.css"

function ModalWindow({onClose, children}): ReactNode {
    const modalID = "MODAL";

    return createPortal(
        <div className="big-shadow" id={modalID} onClick={e => {
            if (e.target == document.getElementById(modalID)) {
                onClose();
            }
        }}>
            <div className="card w-25 mx-auto mt-5 border-3">
                <span className="product-big-close-button" onClick={onClose}>˟</span>
                {children}
            </div>
        </div>, document.body
    )
}

export default ModalWindow