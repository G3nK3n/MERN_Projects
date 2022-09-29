import React from "react";
import { useParams } from "react-router-dom";


import PlaceList from './PlaceList';

const AddPlaces = () => {
    
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
    
    const theUserId = useParams().userid;
    //This means that it will filter out the dummy array if the params id matches the creator in the dummy place
    const filteringID = DUMMY_PLACES.filter(eachPlace => eachPlace.creator === theUserId)

    return(
        <PlaceList items={filteringID} />
    )
}

export default AddPlaces;