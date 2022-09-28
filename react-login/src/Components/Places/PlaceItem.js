import React from "react";

const PlaceItem = (props) => {
    return(
        <div>
            <h1>{props.place}</h1>
            <p>{props.address}</p>
            <p>{props.creator}</p>
        </div>
    )
}

export default PlaceItem;