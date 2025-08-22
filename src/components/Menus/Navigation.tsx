import type {ReactNode} from "react";

function Navigation():ReactNode {
    return (
        <nav className="navbar navbar-expand-sm nav-pills">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active"  href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation