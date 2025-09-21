import type {ReactNode} from "react";
import {menuItems, menuNames, type MenuProps} from "../../utils/Interfaces.ts";
import About from "./About.tsx"

function Navigation({menuItem, setMenuItem, login}: MenuProps): ReactNode {
    return (
        <>
            <nav className="navbar navbar-expand-sm nav-pills">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav">
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