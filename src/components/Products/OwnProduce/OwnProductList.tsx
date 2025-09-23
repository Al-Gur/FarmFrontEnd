import {type ReactNode, useState} from "react";
import type {Product, ProductListDto, ProductListProps} from "../../../utils/Interfaces.ts";
import '../FarmProducts/ProductList.css'
import OwnProductCard from "./OwnProductCard.tsx";
import OwnProductBigCard from "./OwnProductBigCard.tsx";
import {SERVER_URL} from "../../../utils/Urls.ts";

function OwnProductList({listProducts2, setListProducts2}: ProductListProps): ReactNode {

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
        setListProducts2!([...listProducts2!, value]);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");
        myHeaders.append("Content-Type", "application/json")

        const addingValue = {
            name: value.name,
            image: "q",
            category: "a",
            price: 1,
            quantity: 1,
        }
        const body = JSON.stringify(addingValue);
        console.log(body);

        fetch(SERVER_URL + "products/product", {
            method: "POST",
            body: body,
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                return result;
            })
            .catch((error) => console.error(error));
    }
    const updateProduct = (value: Product) => {}

    return (
        <>
            <div>
                <button onClick={() => setIsNewProductBigCard(true)}>Add product</button>
            </div>
            <section className="flex-container">
                {
                    isNewProductBigCard ?
                        <OwnProductBigCard value={{...emptyValue}} setProduct={addProduct}
                                           closeBigCard={() => setIsNewProductBigCard(false)}/>
                        : ""
                }
                {
                    listProducts2!
                        .map((value, index) =>
                            <OwnProductCard key={index} value={{...value}}
                                            setProduct={newValue => {
                                                const newListProduct = [...listProducts2!];
                                                newListProduct[index] = newValue;
                                                setListProducts2!(newListProduct);
                                            }}/>
                        )
                }
            </section>
        </>
    );
}

export default OwnProductList