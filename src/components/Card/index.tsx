import * as React from "react";
import { ChevronRight } from "react-feather"
import { Tag } from "../Tag";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt?: string;
  featured_image: string;
  tags: string[];
  date?: string;
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
  const hasImage = featured_image && featured_image.trim() !== "";

  return (
    <div
      className={`border rounded-lg p-4 hover:shadow-md transition-shadow bg-card ${
        hasImage ? "flex gap-4" : "flex flex-col"
      }`}
    >
      {hasImage && (
        <div className="flex-shrink-0">
          {slug ? (
            <Link href={slug}>
              <img
                src={featured_image}
                alt={title}
                className="w-48 h-32 object-cover rounded-md"
              />
            </Link>
          ) : url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <img
                src={featured_image}
                alt={title}
                className="w-48 h-32 object-cover rounded-md"
              />
            </a>
          ) : null}
        </div>
      )}

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-card-foreground">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((res) => {
              return <Tag key={res} tag={res} />;
            })}
          </div>
        </div>

        <div>
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
      </div>
    </div>
  );
};