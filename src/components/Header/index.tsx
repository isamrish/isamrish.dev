import * as React from "react"
import "./index.scss";
export const Header = () => {
    return(
        <div className="header">
            <h2>Amrish Kushwaha</h2>
            <div>
                <ul className="nav-list">
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">About</li>
                </ul>
            </div>
        </div>
    )
}