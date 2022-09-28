import React from "react";
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {
    
    if(props.items.length===0) {
        return(
            <div>
                <h1>No places found!</h1>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {props.items.map(eachPlace => {
                    return <PlaceItem key={eachPlace.id} id={eachPlace.id} place={eachPlace.place} address={eachPlace.address} creator={eachPlace.creator}/> 
                })}
            </ul>
        </div>
    )
    
}

export default PlaceList;