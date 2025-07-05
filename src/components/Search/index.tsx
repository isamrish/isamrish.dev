import * as React from "react";
import _ from "lodash";

export const Search = ({ ...props }) => {
  const { setSearch } = props;
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleDebouncedSearch = _.debounce(handleSearch, 500);

  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search by posts or tags"
        onKeyUp={(e) => handleDebouncedSearch(e)}
        className="w-full max-w-md mx-auto block px-4 py-3 text-sm border-2 border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      />
    </div>
  );
};