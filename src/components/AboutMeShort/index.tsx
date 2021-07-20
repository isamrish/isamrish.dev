import * as React from "react"
import "./style.scss";
export const AboutMeShort: React.FC = () => {
    return(
        <div className="about-me">
            <div className="about-me__info">
                <h1 className="about-me__description">Hello, I am Amrish Kushwaha.</h1>
                <h2 className="about-me__description">I am software engineer mostly focused on frontend development. I love to build saas products. I writes on web devlopment, technology mostly frontend.</h2>
            </div>
            <div className="about-me__pic">
                <img src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg" alt="Amrish" />
            </div>
        </div>
    )
}