import React from "react";
import PlaceItem from './PlaceItem';
import Button from 'react-bootstrap/Button';
import classes from './PlaceList.module.css';
import { Link } from 'react-router-dom';

const PlaceList = (props) => {
    
    if(props.items.length===0) {
        return(
            <div className={classes.EmptyPlaceOutside}>
                <div className={classes.EmptyPlace}>
                    <h1>No places found</h1>
                    <Link to={`/addplaces`}>Add Place</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {props.items.map(eachPlace => {
                    return <PlaceItem key={eachPlace.id} id={eachPlace.id} place={eachPlace.place} description={eachPlace.description} address={eachPlace.address} creator={eachPlace.creator}/> 
                })}
            </ul>
        </div>
    )
    
}

export default PlaceList;