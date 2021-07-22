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
                        <a href="https://github.com/isamrish" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/isamrish/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/isamrishk" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                    <li>
                        <a href="https://isamrish.medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
                    </li>
                    <li>
                        <a href="#">RSS</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}