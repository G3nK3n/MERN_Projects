import React from "react";

import { useParams } from "react-router-dom";

const EditPlace = () => {
    
    const placeId = useParams().placeid;
    
    //Dummy users for now
    const DUMMY_PLACES=[
        {
            id: 'p1',
            place: 'New York', 
            address: 'Somewhere in US', 
            creator: 'u1'
        }, 
        {
            id: 'p2',
            place: 'Montreal', 
            address: 'Somewhere in Canada', 
            creator: 'u2'
        }
    ];

    const filterEditPlace = DUMMY_PLACES.filter(eachPlace => eachPlace.creator === placeId);


    if(!filterEditPlace) {
        return(
            <div>
                <h1>Cannot find place!</h1>
            </div>
        )
    }
   
    //ADD A DESCRIPTION IN HOME BEFORE OUTPUTTING IT HERE
    return(
        <div>         
            <h1>{filterEditPlace.map((t) => t.place)}</h1>
            <h2>{filterEditPlace.map((t) => t.address)}</h2>
        </div>
    )
}

export default EditPlace;