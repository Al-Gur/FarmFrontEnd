import {type ReactNode, useContext} from "react";
import {menuItems, menuNames, type MenuProps} from "../../utils/Interfaces.ts";
import About from "./About.tsx"
import {mainContext} from "../../utils/Context.ts";

function Navigation({menuItem, setMenuItem}: MenuProps): ReactNode {

    const {login} = useContext(mainContext);

    return (
        <>
            <nav className="navbar navbar-expand-sm nav-pills">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav bg-info-subtle rounded-2">
                        {
                            menuItems
                                .filter((_item, index) =>
                                    login || (menuNames[index] != "ACCOUNT" && menuNames[index] != "LOGOUT"))
                                .map((item, index) =>
                                    <li className="nav-item" key={index} onClick={() => setMenuItem(index)}>
                                        <a className={"nav-link" + (index == menuItem ? " active" : "")} href="#">
                                            {item}
                                        </a>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </nav>
            {
                menuNames[menuItem] === "ABOUT" ? <About setMenuItem={setMenuItem}/> : ""
            }
        </>
    );
}

export default Navigation