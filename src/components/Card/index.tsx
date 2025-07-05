import * as React from "react";
import { ChevronRight } from "react-feather"
import { Tag } from "../Tag";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt?: string;
  featured_image: string;
  tags: [string];
  date?: Date;
  url?: string;
  slug?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  featured_image,
  tags,
  url,
  slug,
}) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-card">
      {slug && (
        <Link href={slug} className="block mb-4">
          <img
            src={featured_image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        </Link>
      )}
      {url && (
        <a href={url} target="_blank" rel="noreferrer" className="block mb-4">
          <img
            src={featured_image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        </a>
      )}
      <h3 className="text-lg font-semibold mb-3 text-card-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags?.map((res) => {
          return <Tag key={res} tag={res} />;
        })}
      </div>
      {slug && (
        <Link
          href={slug}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Read Full Article <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Read Full Article <ChevronRight className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  );
};