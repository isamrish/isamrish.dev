import * as React from "react"
import "./style.scss";
export const Footer = () => {
    const getCurrentYear = new Date().getFullYear;
    console.log(getCurrentYear, " getCurrentYear");
    return(
        <div className="footer">
            <div className="footer__copyright">Copyright &copy; 2020 isamrish.dev</div>
            <div>
                <ul>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Medium</a>
                    </li>
                    <li>
                        <a href="#">RSS</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}