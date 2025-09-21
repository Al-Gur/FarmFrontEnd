import {type ReactNode, useContext, useEffect, useState} from "react";
import type {Product, ProductListDto} from "../../../utils/Interfaces.ts";
import OwnProductList from "./OwnProductList.tsx";
import {SERVER_URL} from "../../../utils/Urls.ts";
import {mainContext} from "../../../utils/Context.ts";

function OwnProduce(): ReactNode {
    const {fullName} = useContext(mainContext);
    const [ownProducts, setOwnProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState(true);

    const refreshProducts = async () => {
        fetch(SERVER_URL + "products/showall")
            .then((response) => response.json())
            .then((result: ProductListDto) => {
                console.log(result);
                console.log(fullName);
                setOwnProducts(result.products.filter(product => product.producer == "John Smith"));
            })
            .catch((error) => console.error(error));
        setRefresh(false);
    }

    useEffect(() => {
        if (refresh) {
            refreshProducts()
                .catch((error) => console.error(error));
        }
    }, []);

    return (
        <div className="card col-7 me-5 p-2">
            <OwnProductList listProducts2={ownProducts} setListProducts2={setOwnProducts}/>
            {/*<div className="mt-3 mb-1 products-refresh" onClick={() => refreshProducts()}>*/}
            {/*    Refresh*/}
            {/*</div>*/}
        </div>
    );
}

export default OwnProduce