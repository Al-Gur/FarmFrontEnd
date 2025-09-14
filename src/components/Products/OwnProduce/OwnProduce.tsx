import {type ReactNode, useState} from "react";
import type {Product} from "../../../utils/Interfaces.ts";
import OwnProductList from "./OwnProductList.tsx";

function OwnProduce(): ReactNode {
    const [ownProducts, setOwnProducts] = useState<Product[]>([]);

    return (
        <div>
            <OwnProductList listProducts2={ownProducts} setListProducts2={setOwnProducts}/>
        </div>
    );
}



 {

    // const [refresh, setRefresh] = useState(true);
    //
    // const refreshProducts = async () => {
    //     console.log(`category=${selectedCategory}&maxprice=${maxPrice}&sort=${sortBy}`);
    //
    //     if (selectedCategory || maxPrice || sortBy) {
    //         // const requestOptions: RequestInit = {
    //         //     method: "GET",
    //         //     body: JSON.stringify({selectedCategory, maxPrice, sortBy})
    //         // };
    //
    //         const query = `category=${selectedCategory}&maxprice=${maxPrice}&sort=${sortBy}`;
    //         fetch(SERVER_URL + "products/show/" + query)
    //             .then((response) => response.json())
    //             .then(result => {
    //                 console.log(result);
    //                 return result;
    //             })
    //             .then((result: ProductListDto) => {
    //                 setListProducts(result.products);
    //                 setCategoryList(result.categories);
    //             })
    //             .catch((error) => console.error(error));
    //     }
    //     else {
    //         fetch(SERVER_URL + "products/showall")
    //             .then((response) => response.json())
    //             .then((result: ProductListDto) => {
    //                 setListProducts(result.products);
    //                 setCategoryList(result.categories);
    //             })
    //             .catch((error) => console.error(error));
    //     }
    //     setRefresh(false);
    // }
    //
    // if (refresh) {
    //     refreshProducts()
    //         .catch((error) => console.error(error));
    // }

    // const refreshCategoryList = () => {
    //     setCategoryList(listProducts.map(value => value.category).sort((a,b) => a>b))
    // }

    return (
        <div className="card col-7 col-xl-8 me-5 p-2">
            <OwnProductList listProducts={listProducts} setListProducts={setListProducts2}/>
            <div className="mt-3 mb-1 products-refresh" onClick={() => refreshProducts()}>
                Refresh
            </div>
        </div>
    );
}

export default OwnProduce