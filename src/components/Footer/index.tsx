import * as React from "react"
import "./style.scss";
export const Footer = () => {
    const getCurrentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="footer__copyright">
                <span>Copyright &copy; {getCurrentYear} isamrish.dev</span>
            </div>
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