import {useEffect, useRef, useState} from 'react'
import './App.css'
import CurrentUser from "./components/User/CurrentUser.tsx";
import {type Category, menuNames, type Product} from "./utils/Interfaces.ts";
import {mainContext} from "./utils/Context.ts"
import Products from "./components/Products/FarmProducts/Products.tsx";
import Navigation from "./components/Menus/Navigation.tsx"
import OwnProduce from "./components/Products/OwnProduce/OwnProduce.tsx";
import UserList from "./components/Admin/UserList.tsx";


function App() {
    const [login, setLogin] = useState("");
    const [fullName, setFullName] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [takenProducts, setTakenProducts] = useState<Product[]>([]);
    const noCategories: Category[] = [];
    const [categoryList, setCategoryList] = useState(noCategories);
    const [refreshState, setRefreshState] = useState(false); // useEffect[login] will make it true
    const refreshRef = useRef(false);
    const [menuItem, setMenuItem] = useState(0);

    const setRefresh = (r:boolean) => {
    //     console.log(`Old refresh=${refresh} New value=${r}`);
        refreshRef.current = r;
        setRefreshState(r);
    //   //  console.log(`Now refresh=${refresh}`);
    }

    const getRefresh = () => refreshState && refreshRef.current


    const logOut = () => {
        setLogin("");
    }

    useEffect(() => {
        if (menuNames[menuItem] == "LOGOUT") {
            logOut();
            setMenuItem(0);
        }
    }, [menuItem]);

    useEffect(() => {
        if (!login) {
            setFullName("");
            setIsSeller(false);
            setIsAdmin(false);
            setTakenProducts([]);
        }
        setRefreshState(true);
        refreshRef.current = true;
    }, [login]);

    return (
        <mainContext.Provider value={{
            login, fullName, isSeller, isAdmin, getRefresh, setRefresh, categoryList, setCategoryList
        }}>
            <h1>Generous farm</h1>
            <Navigation menuItem={menuItem} setMenuItem={setMenuItem}/>
            {
                menuNames[menuItem] != "ABOUT" &&
                <div className="container-fluid ">
                    {
                        isAdmin ?
                            <div className="row">
                                <UserList/>
                            </div>
                            :
                            isSeller ?
                                <div className="row">
                                    <OwnProduce/>
                                    <Products listProducts={allProducts} setListProducts={setAllProducts}
                                              listProducts2={takenProducts} setListProducts2={setTakenProducts}/>
                                </div>
                                :
                                <div className="row">
                                    <Products listProducts={allProducts} setListProducts={setAllProducts}
                                              listProducts2={takenProducts} setListProducts2={setTakenProducts}/>
                                    <CurrentUser login={login} setLogin={setLogin} setFullName={setFullName}
                                                 listProducts={takenProducts} setListProducts={setTakenProducts}
                                                 listProducts2={takenProducts} setListProducts2={setTakenProducts}
                                                 setIsSeller={setIsSeller} setIsAdmin={setIsAdmin}
                                    />
                                </div>
                    }
                </div>
            }
        </mainContext.Provider>
    )
}

export default App

