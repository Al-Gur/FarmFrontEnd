import {type ReactNode} from "react";
import type {ProductsProps} from "../utils/Interfaces.ts";

function AllProductList({listProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Nu</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Producer</th>
                </tr>
                </thead>
                <tbody>
                {
                    listProducts.map((value, index) =>
                        <tr key={index} onClick={() => {
                            const takenQuantity = prompt("Enter quantity", "1");
                            if (takenQuantity) {
                                setListProducts2([...listProducts2, {...value, quantity: +takenQuantity}]);
                                value.quantity-=+takenQuantity;
                            }
                        }}>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{
                                value.image ?
                                    <img src={value.image} alt={value.name} className="w-25"/>
                                    : ""
                            }</td>
                            <td>{value.category}</td>
                            <td>{value.quantity}</td>
                            <td>{value.producer}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}


export default AllProductList