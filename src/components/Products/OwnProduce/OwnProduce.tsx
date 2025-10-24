import {type ReactNode, useContext, useEffect, useState} from "react";
import type {Product, ProductListDto} from "../../../utils/Interfaces.ts";
import OwnProductList from "./OwnProductList.tsx";
import {SERVER_URL} from "../../../utils/Urls.ts";
import {mainContext} from "../../../utils/Context.ts";
import debugg from "../../../utils/Debugg.ts";

function OwnProduce(): ReactNode {

    const {fullName} = useContext(mainContext);
    const [ownProducts, setOwnProducts] = useState<Product[]>([]);
    const [ownRefresh, setOwnRefresh] = useState(true);

    useEffect(() => {
        if (ownRefresh) {
            fetch(SERVER_URL + "products/showall")
                .then((response) => response.json())
                .then((result: ProductListDto) => {
                    debugg("net", result);
                    setOwnProducts(result.products.filter(product => product.producer == fullName));
                })
                .catch((error) => console.error(error));
            setOwnRefresh(false);
        }
    }, [ownRefresh]);

    return (
        <div className="card col-7 me-5 p-2">
            <OwnProductList listProducts={ownProducts} setListProducts={setOwnProducts}/>
        </div>
    );
}

export default OwnProduce