import type {ReactNode} from "react";
import {createPortal} from "react-dom";
import "./FarmStyles.css"

function ModalWindow({children}): ReactNode {
    return createPortal(
        <div className="big-shadow">
            {children}
        </div>, document.body
    )
}

export default ModalWindow