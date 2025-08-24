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
                <h2>Selling surplus farm produce</h2>
                <p>Many successful farmers often produce more agricultural products than they planned at the
                    beginning of the season. Wholesale buyers sometimes do not agree to accept such surpluses,
                    and they accumulate at the producers. Meanwhile, these products are needed by people!</p>
                <p>The purpose of this site is to help producers and buyers of agricultural products find each
                    other.</p>
            </div>
        </div>
    )
}

export default About