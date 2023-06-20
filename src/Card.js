import React from "react";

const Card = (props) => {
    return (
        <div className="tc bg-dark-blue moon-gray dib br3 pa3 ma2 grow bw2 shadow" id={props.id}>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="" />
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>       
        </div>
    );
}
 export default Card;