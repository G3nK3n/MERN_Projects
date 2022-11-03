import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import classes from './PlaceItem.module.css';

import DeleteModal from './DeleteModal';

import { Link } from 'react-router-dom';

const PlaceItem = (props) => {
    
    const [theWarning, setWarning] = useState(false);

    const confirmDelete = () => {
        setWarning(true);
    }

    const cancelDelete = () => {
        setWarning(false);
    }

    const clickConfirmDelete = () => {
        console.log("IT IS DELETED!")
    }


    return(
        <div className={classes.PlaceItem}>
            <h1>{props.place}</h1>
            <p>{props.description}</p>
            <p>{props.address}</p>
            <p>{props.creator}</p>
            <Link to={`/addplaces/${props.creator}`}>Edit</Link>
            {theWarning ? <DeleteModal clickConfirmDelete={clickConfirmDelete} clickCancel={cancelDelete}/> :  null}
            <Button onClick={confirmDelete}>Delete</Button>
        </div>
    )
}

export default PlaceItem;