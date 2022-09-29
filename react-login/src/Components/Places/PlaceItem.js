import React from "react";
import Button from 'react-bootstrap/Button';
import classes from './PlaceItem.module.css';

const PlaceItem = (props) => {
    return(
        <div className={classes.PlaceItem}>
            <h1>{props.place}</h1>
            <p>{props.address}</p>
            <p>{props.creator}</p>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    )
}

export default PlaceItem;