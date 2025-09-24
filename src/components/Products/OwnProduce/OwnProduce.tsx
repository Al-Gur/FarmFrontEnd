import {type ReactNode, useContext, useEffect, useState} from "react";
import type {Product, ProductListDto} from "../../../utils/Interfaces.ts";
import OwnProductList from "./OwnProductList.tsx";
import {SERVER_URL} from "../../../utils/Urls.ts";
import {mainContext} from "../../../utils/Context.ts";

function OwnProduce(): ReactNode {

    const {login, refresh} = useContext(mainContext);
    const [ownProducts, setOwnProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (refresh) {
            fetch(SERVER_URL + "products/showall")
                .then((response) => response.json())
                .then((result: ProductListDto) => {
                    console.log(result);
                    setOwnProducts(result.products.filter(product => product.producer == login));
                })
                .catch((error) => console.error(error));
        }
    }, [refresh]);

    return (
        <div className="card col-7 me-5 p-2">
            <OwnProductList listProducts={ownProducts} setListProducts={setOwnProducts}/>
        </div>
    );
}

export default OwnProduce