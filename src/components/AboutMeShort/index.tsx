import * as React from "react"
import "./style.scss";
export const AboutMeShort: React.FC = () => {
    return(
        <>
        <div className="about-me">
            <div className="about-me__info">
                <h1 className="about-me__description">Hello, I am Amrish Kushwaha.</h1>
                <h2 className="about-me__description">I am currently focused on frontend development with curiosity of building end to end software system. I love to write as well as build side projects when I am free.</h2>
            </div>
            <div className="about-me__pic">
                <img src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg" alt="Amrish" />
            </div>
        </div>
        <p className="welcome-info">Welcome and thanks for stopping by. I have written many articles primarily related to frontend development. You can check my blog on blog page as well. I hope that you will be benefited by those.</p>
        </>
    )
}