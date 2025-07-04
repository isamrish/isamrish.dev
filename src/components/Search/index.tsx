import * as React from "react";
import _ from "lodash";
import "./style.scss";

export const Search = ({...props}) => {
    const { setSearch } = props;
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setSearch((e.target as HTMLInputElement).value);
    };

    const handleDebouncedSearch = _.debounce(handleSearch, 500);

    return(
        <div className="search">
            <input type="text" placeholder="Search by posts or tags" className="search__input" onKeyUp={(e) => handleDebouncedSearch(e)} />
        </div>
    )
}