import {type ReactNode, useContext, useState} from "react";
import type {Category, ProductListDto, ProductsProps} from "../../../utils/Interfaces.ts";
// import AllProductList from "./AllProductList.tsx";
import ProductList from "./ProductList.tsx";
import "./Products.css"
import {SERVER_URL} from "../../../utils/Urls.ts";
import {mainContext} from "../../../utils/Context.ts";

function Products({listProducts, setListProducts, listProducts2, setListProducts2}: ProductsProps): ReactNode {

    const {isSeller} = useContext(mainContext);

    const [selectedCategory, setSelectedCategory] = useState("");
    const noCategories: Category[] = [];
    const [categoryList, setCategoryList] = useState(noCategories);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sortBy, setSortBy] = useState("");

    const [refresh, setRefresh] = useState(true);

    const refreshProducts = async () => {
        console.log(`category=${selectedCategory}&maxprice=${maxPrice}&sort=${sortBy}`);
        // console.log(`isSeller=${isSeller}`);

        if (selectedCategory || maxPrice || sortBy) {
            // const requestOptions: RequestInit = {
            //     method: "GET",
            //     body: JSON.stringify({selectedCategory, maxPrice, sortBy})
            // };

            const query = `category=${selectedCategory}&maxprice=${maxPrice}&sort=${sortBy}`;
            fetch(SERVER_URL + "products/show/" + query)
                .then((response) => response.json())
                .then(result => {
                    console.log(result);
                    return result;
                })
                .then((result: ProductListDto) => {
                    setListProducts(result.products);
                    setCategoryList(result.categories);
                })
                .catch((error) => console.error(error));
        }
        else {
            fetch(SERVER_URL + "products/showall")
                .then((response) => response.json())
                .then((result: ProductListDto) => {
                    setListProducts(result.products);
                    setCategoryList(result.categories);
                })
                .catch((error) => console.error(error));
        }
        setRefresh(false);
    }

    if (refresh) {
        refreshProducts()
            .catch((error) => console.error(error));
    }

    // const refreshCategoryList = () => {
    //     setCategoryList(listProducts.map(value => value.category).sort((a,b) => a>b))
    // }

    return (
        <div className={"card p-2 " + (isSeller ? "col-4 mb-5" : "col-7 col-xl-8 me-5")}>
            <section className={"Filters " + isSeller ? "col-11" : ""}>
                <h3>Products</h3>
                <label className="me-2">Category:</label>
                <select value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setRefresh(true);
                        }}>
                    {
                        categoryList.map(c =>
                            <option value={c.category} key={c.category}>{c.category + " (" + c.count + ")"}</option>
                        )
                    }
                </select>

                <label htmlFor="MaxPrice" className="m-2">Max price:</label>
                <input type="text" id="MaxPrice" name="MaxPrice" className="max-price"
                       value={maxPrice || ''}
                       onChange={(e) => {
                           setMaxPrice(e.target.value ? +e.target.value : 0);
                           setRefresh(true);
                       }}
                />

                <label htmlFor="SortBy" className="mx-2">Sort by:</label>
                <select id="SortBy" name="SortBy" value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            setRefresh(true);
                        }}>
                    <option value=""></option>
                    <option value="Name">Name</option>
                    <option value="Category">Category</option>
                    <option value="Price">Price</option>
                    <option value="Producer">Producer</option>
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