import * as React from "react";
import { ChevronRight } from "react-feather"
import { Tag } from "../Tag";
import { Link } from "gatsby";
import "./style.scss";
interface CardProps {
    title: string;
    excerpt?: string;
    featured_image: string;
    tags: [string];
    date: Date;
    url?: string;
    slug?: string;
}

export const Card: React.FC<CardProps> = ({ title, featured_image, tags, date, url, slug }) => {
    return(
        <div className="card">
            {slug && (
                <Link to={slug}>
                    <img src={featured_image} className="card__image" />
                </Link>
            )}
            {url && (
                <a href={url} target="_blank" rel="noreferrer">
                     <img src={featured_image} className="card__image" />
                </a>
            )}
            <p className="card__title">{title}</p>
            <div className="card__tags">
                {tags?.map((res) => {
                    return(
                        <Tag key={res} tag={res} />
                    )
                })}
            </div>
            {slug && (
                <Link to={slug} className="card__cta">Read Full Article <ChevronRight /></Link>
            )}
            {url && (
                <a href={url} target="_blank" className="card__cta">Read Full Article <ChevronRight /></a>
            )}
        </div>
    )
}