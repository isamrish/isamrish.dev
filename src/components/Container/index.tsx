import * as React from "react";
import "./index.scss";
export const Container: React.FC = ({ children }) => {
    return(
        <div className="container">{children}</div>
    );
}

export const ContainerFluid: React.FC = ({ children }) => {
    return(
        <div className="container-fluid">{children}</div>
    );
}