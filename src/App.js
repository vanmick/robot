import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
    return (
        <div className="tc">
            <h1>Robot Friends</h1>
            <SearchBox/>
            <br/>
            <CardList robots={robots}/>
        </div>
    )
}

export default App;