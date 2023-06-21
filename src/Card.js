import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-dark-blue yellow dib br3 pa3 ma2 grow bw2 shadow" id={id}>
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>       
        </div>
    );
}
 export default Card;