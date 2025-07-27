import {type ReactNode} from "react";
import {type ProductListProps} from "../utils/Interfaces.ts";

function ProductList({listProducts}: ProductListProps): ReactNode {

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>N</th>
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
                        <tr key={index}>
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


export default ProductList