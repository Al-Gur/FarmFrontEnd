import {useState} from 'react'
import './App.css'
import User from "./components/User.tsx";

interface Product {
    id: string,
    name: string,
    quantity: number,
    producer: string
}

function App() {
    const [count, setCount] = useState(0);
    const [login, setLogin] = useState(``);
    //const [listProducts, setListProducts] = useState<string>(``);
    const [listProducts, setListProducts] = useState<Product[]>([]);

    const submit = async () => {
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

    const showProducts = () => {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>n</th>
                        <th>Name</th>
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
                                <td>{value.quantity}</td>
                                <td>{value.producer}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <>
            {/*<div>*/}
            {/*  <a href="https://vite.dev" target="_blank">*/}
            {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
            {/*  </a>*/}
            {/*  <a href="https://react.dev" target="_blank">*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*  </a>*/}
            {/*</div>*/}
            <h1>Farm</h1>

            <div className="container-fluid ">
                <div className="row">
                    <label className="card col-5 me-3">{showProducts()}</label>
                    <User login={login} setLogin={setLogin}/>
                </div>
                <button className="col-5 mt-3" onClick={() => submit()}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default App
