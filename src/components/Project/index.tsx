import * as React from "react";
import "./style.scss";
export const Project = () => {
    return(
        <div className="project">
            <div className="project-info">
             <h3>Project Name 1</h3>
             <p className="project-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere elit, egestas semper aenean urna. Urna eros, diam massa feugiat netus blandit tortor tellus. Mi augue ipsum quam cursus eget fermentum a. At commodo semper et ut molestie duis aliquet id.</p>

             <p className="project__life-status">Status</p>
            </div>
            <div className="project-img">
                <img src="https://images.unsplash.com/photo-1626750513479-879820721d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="project" className="project-img__img" />
            </div>
        </div>
    )
}