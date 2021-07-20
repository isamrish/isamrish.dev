import * as React from "react";
import { Project } from "../Project";
import "./style.scss";
export const Projects = () => {
    return(
        <>
         <div className="projects">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__description">There are some projects that I have built, some are in building phase, some are in maintenance and some are in archived.</p>
        </div>
        <div className="project-list">
            <h2 className="project-list__label">Some of projects:</h2>
            {Array.from([1,2,3]).map((res) => {
                return(
                    <Project key={res} />
                )
            })}
        </div>
        </>
    )
}