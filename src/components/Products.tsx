import {type ReactNode} from "react";
import type {ProductProps} from "../utils/Interfaces.ts";


function Products({listProducts}: ProductProps): ReactNode {
    return (
        <label className="card col-6 pe-3">
            <table>
                <thead>
                <tr>
                    <th>n</th>
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
                            <td>{index}</td>
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
        </label>
    );
}


export default Products