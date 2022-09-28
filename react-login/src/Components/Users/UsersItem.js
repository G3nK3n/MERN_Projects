import React from "react";
import classes from './UsersItem.module.css';

import { Link } from 'react-router-dom';

// This component outputs the information provided of each user, using the props to access the dummy array
const UsersItem = props => {
    return(
        <div className={classes.UsersItem}>
            <Link to={`/${props.id}/places`}>
                <div>
                    <h1>Name: {props.name}</h1>
                    <p>His ID is: {props.id}</p>
                </div>
            </Link>
        </div>
    )
}

export default UsersItem;