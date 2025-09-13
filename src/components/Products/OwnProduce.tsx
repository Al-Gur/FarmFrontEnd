import {type ReactNode, useState} from "react";
import type {Product} from "../../utils/Interfaces.ts";

function OwnProduce(): ReactNode {
    const [ownProducts, setOwnProducts] = useState<Product[]>([]);

    return (
        <div>
            Ups...
        </div>
    );
}

export default OwnProduce