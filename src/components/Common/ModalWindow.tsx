import type {ReactNode} from "react";
import {createPortal} from "react-dom";
import "./FarmStyles.css"

function ModalWindow({onClose, children}): ReactNode {
    return createPortal(
        <div className="big-shadow">
            <div className="card w-25 m-auto">
                <span className="product-big-close-button" onClick={onClose}>˟</span>
                {children}
            </div>
        </div>, document.body
    )
}

export default ModalWindow