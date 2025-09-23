import {type ReactNode, useState} from "react";
import type {Product, ProductListProps} from "../../../utils/Interfaces.ts";
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

        fetch(SERVER_URL + "products/product", {
            method: "POST",
            body: JSON.stringify(value),
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                return result;
            })
            .catch((error) => console.error(error));
    }
    const updateProduct = (value: Product) => {
    }

    const removeProduct = (value: Product) => {
        setListProducts2!(listProducts2!.filter(product => product.id != value.id));

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Sm9objoxMjM=");

        console.log(value.id);

        fetch(SERVER_URL + "products/productdelete/"+ value.id, {
            method: "POST",
            headers: myHeaders
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                return result;
            })
            .catch((error) => console.error(error));
    }


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
                                            }}
                                            removeProduct={removeProduct}
                            />
                        )
                }
            </section>
        </>
    );
}

export default OwnProductList