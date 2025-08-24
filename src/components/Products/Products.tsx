import {useState, type ReactNode} from "react";
import type {Product, ProductsProps} from "../../utils/Interfaces.ts";
// import AllProductList from "./AllProductList.tsx";
import ProductList from "./ProductList.tsx";
import "./Products.css"

function Products({listProducts, setListProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    const ALL = "All";
    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [categoryList, setCategoryList] = useState([ALL]);

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

    const refreshCategoryList = () => {
        setCategoryList(listProducts.map(value => value.category).sort((a,b) => a>b))
    }

    return (
        <div className="card col-7 me-5 p-2">
            <div>
                <span>Products</span>
                <label>Category:</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value={"All"}>All</option>
                    <option value={"F"}>F</option>
                </select>
            </div>
            <ProductList listProducts={listProducts} setListProducts={setListProducts}
                         listProducts2={listProducts2} setListProducts2={setListProducts2}/>
            <div className="mt-3 mb-1 products-refresh" onClick={() => refreshProducts()}>
                Refresh
            </div>
        </div>

    );
}

export default Products