import {type ReactNode, useContext, useState} from "react";
import type {OwnProductListProps, Product} from "../../../utils/Interfaces.ts";
import '../FarmProducts/ProductList.css'
import OwnProductCard from "./OwnProductCard.tsx";
import OwnProductBigCard from "./OwnProductBigCard.tsx";
import {SERVER_URL} from "../../../utils/Urls.ts";
import {mainContext} from "../../../utils/Context.ts";

function OwnProductList({listProducts, setListProducts}: OwnProductListProps): ReactNode {

    const {fullName, setRefresh} = useContext(mainContext);

    const [isNewProductBigCard, setIsNewProductBigCard] = useState(false);
    const emptyValue: Product = {
        id: "",
        name: "",
        image: "",
        category: "",
        price: 0,
        quantity: 0,
        producer: "ANONYMOUS"
    }

    const addProduct = (value: Product) => {
        setListProducts([...listProducts, value]);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");
        myHeaders.append("Content-Type", "application/json")

        fetch(SERVER_URL + "products/product", {
            method: "POST",
            body: JSON.stringify(value),
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                setRefresh(true);
                return result;
            })
            .catch((error) => console.error(error));
    }

    const updateProduct = (index: number) => (value: Product) => {
        const newListProduct = [...listProducts];
        newListProduct[index] = value;
        setListProducts(newListProduct);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");
        myHeaders.append("Content-Type", "application/json");

        console.log(value.id);

        fetch(SERVER_URL + "products/productput", {
            method: "POST",
            body: JSON.stringify(value),
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                setRefresh(true);
                return result;
            })
            .catch((error) => console.error(error));
    }

    const removeProduct = (value: Product) => {
        setListProducts(listProducts.filter(product => product.id != value.id));

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");

        console.log(value)

        fetch(SERVER_URL + "products/productdelete/" + value.id, {
            method: "DELETE",
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                setRefresh(true);
                return result;
            })
            .catch((error) => console.error(error));
    }


    return (
        <>
            <div className="flex-container bg-success-subtle p-2 mb-3">
                <h4 className="text-decoration-underline">{fullName}</h4>
                <button onClick={() => setIsNewProductBigCard(true)}>Add new product</button>
            </div>
            <section className="flex-container">
                {
                    isNewProductBigCard &&
                        <OwnProductBigCard value={{...emptyValue}} setProduct={addProduct}
                                           closeBigCard={() => setIsNewProductBigCard(false)}/>
                }
                {
                    listProducts.map((value, index) =>
                        <OwnProductCard key={index} value={{...value}}
                                        setProduct={updateProduct(index)}
                                        removeProduct={removeProduct}
                        />
                    )
                }
            </section>
        </>
    );
}

export default OwnProductList