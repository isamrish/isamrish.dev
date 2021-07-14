import * as React from "react"
import AboutMeData from "../../data/about.json";
import "./index.scss";
export const AboutMe: React.FC = () => {
    return(
        <div className="about-me-wrapper">
            <div className="about-text">
                <h1>{AboutMeData.aboutme.title}</h1>
                <p>{AboutMeData.aboutme.description}</p>
            </div>
            <div className="profile-pic">
                <img src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg" alt="Amrish" />
            </div>
        </div>
    )
}