import type {ReactNode} from "react";
import {menuItems, menuNames, type MenuProps} from "../../utils/Interfaces.ts";

function Navigation({menuItem, setMenuItem}: MenuProps):ReactNode {
    return (
        <nav className="navbar navbar-expand-sm nav-pills">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav">
                    {
                        menuItems.map((item, index) =>
                            <li className="nav-item" key={index} onClick={() => setMenuItem(index)}>
                                <a className={"nav-link" + (index == menuItem ? " active" : "")}  href="#">
                                    {item}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navigation