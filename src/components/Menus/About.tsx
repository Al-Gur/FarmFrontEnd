import type {ReactNode} from "react";
import "./About.css"
import type {MenuProps} from "../../utils/Interfaces.ts";

function About({setMenuItem}: MenuProps): ReactNode {
    return (
        <div className="about-shadow" id="aboutID" onClick={(e) => {
            if (e.target == document.getElementById("aboutID")) {
                setMenuItem(0);
            }
        }}>
            <div className="about">
                <span className="about-close-button" onClick={() => setMenuItem(0)}>˟</span>
                Farm<br/>
                Farm<br/>
                Farm<br/>
                Farm<br/>
            </div>
        </div>
    )
}

export default About