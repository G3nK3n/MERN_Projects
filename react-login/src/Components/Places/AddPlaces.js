import React from "react";

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
    
    return(
        <PlaceList items={DUMMY_PLACES} />
    )
}

export default AddPlaces;