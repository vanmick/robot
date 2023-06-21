import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <input className="input-reset bg-light-yellow ba b--dark-blue bw2 pa2 mv4 w-50"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
        />
    )
}


export default SearchBox;