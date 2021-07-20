import * as React from "react";
import { ChevronRight } from "react-feather"
import { Tag } from "../Tag";
import { Link } from "gatsby";
import "./style.scss";

export const Card = () => {
    return(
        <div className="card">
            <img src="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" className="card__image" />
            <p className="card__title">This is heading of the part and I want to achieve things and I will work my assoff</p>
            <div className="card__tags">
                {Array.from([1,2,3]).map((res) => {
                    return(
                        <Tag key={res} />
                    )
                })}
            </div>
            <Link to="#" className="card__cta">Read Full Article <ChevronRight /></Link>
        </div>
    )
}