import {type ReactNode, useState} from "react";
import type {Product, ProductsProps} from "../../utils/Interfaces.ts";
// import AllProductList from "./AllProductList.tsx";
import ProductList from "./ProductList.tsx";
import "./Products.css"

function Products({listProducts, setListProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryList, setCategoryList] = useState([""]);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sortBy, setSortBy] = useState("");

    const refreshProducts = async () => {
        const requestOptions = {
            method: "GET"//,
            // redirect: "follow"
        };

        fetch("http://localhost:8080/products/showall", requestOptions)
            .then((response) => {
                //console.log(response.text());
                return response.json();
            })
            .then(result => {
                console.log(result);
                return result;
            })
            .then((result: Product[]) => setListProducts(result))
            .catch((error) => console.error(error));
    }

    // const refreshCategoryList = () => {
    //     setCategoryList(listProducts.map(value => value.category).sort((a,b) => a>b))
    // }

    return (
        <div className="card col-7 me-5 p-2">
            <section className="Filters">
                <h3>Products</h3>
                <label className="me-2">Category:</label>
                <select value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value={""}></option>
                    <option value={"Fishes"}>Fishes</option>
                    <option value={"Fruits"}>Friuts</option>
                    <option value={"Vegetables"}>Vegetables</option>
                </select>

                <label htmlFor="MaxPrice" className="m-2">Max price:</label>
                <input type="text" id="MaxPrice" name="MaxPrice" className="max-price"
                       value={maxPrice || ''}
                       onChange={(e) =>
                           setMaxPrice(e.target.value ? +e.target.value : 0)}
                />

                <label className="mx-2">Sort by:</label>
                <select value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}>
                    <option value=""></option>
                    <option value="Name">Name</option>
                    <option value="Price">Price</option>
                    <option value="Category">Category</option>
                </select>
            </section>

            <ProductList listProducts={listProducts} listProducts2={listProducts2} setListProducts2={setListProducts2}
                         selectedCategory={selectedCategory} maxPrice={maxPrice ? maxPrice : 0} sortBy={sortBy}/>
            <div className="mt-3 mb-1 products-refresh" onClick={() => refreshProducts()}>
                Refresh
            </div>
        </div>

    );
}

export default Products