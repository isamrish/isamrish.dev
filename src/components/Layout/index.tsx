import * as React from "react"
import { Container, ContainerFluid } from "../Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./style.scss";

export const Layout = ({ children }) => {
    return(
       <>
            <div className="header-wrapper">
                <Container>
                    <Header />
                </Container>
            </div>
            <Container>
                {children}
            </Container>
            <div className="footer-wrapper">
                <Container>
                    <Footer />
                </Container>
            </div>
        </>
    )
}